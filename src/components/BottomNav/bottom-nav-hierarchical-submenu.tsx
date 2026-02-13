'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HierarchicalMenuItem } from './types';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

interface BottomNavHierarchicalSubmenuProps {
  items: HierarchicalMenuItem[];
  isOpen: boolean;
  onItemClick: (href: string) => void;
  groupLabel?: string;
}

interface BreadcrumbItem {
  label: string;
  items: HierarchicalMenuItem[];
}

export function BottomNavHierarchicalSubmenu({
  items,
  isOpen,
  onItemClick,
  groupLabel = 'Menu'
}: BottomNavHierarchicalSubmenuProps) {
  const pathname = usePathname();
  const [currentItems, setCurrentItems] = useState<HierarchicalMenuItem[]>(items);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: groupLabel, items }
  ]);
  const prevIsOpenRef = useRef(isOpen);

  // Monitor isOpen changes
  useEffect(() => {
    console.log('Hierarchical menu isOpen changed:', isOpen, 'Breadcrumbs:', breadcrumbs.map(b => b.label));
  }, [isOpen]);

  // Reset when menu is opened (isOpen changes from false to true)
  useEffect(() => {
    if (isOpen && !prevIsOpenRef.current) {
      // Reset to root level when menu is opened
      console.log('Resetting hierarchical menu to root level:', groupLabel, 'Items:', items.length);
      setCurrentItems(items);
      setBreadcrumbs([{ label: groupLabel, items }]);
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen, items, groupLabel]);

  const handleItemClick = (item: HierarchicalMenuItem) => {
    console.log('Hierarchical menu item clicked:', item.label, 'Has href:', !!item.href, 'Has children:', !!item.children);

    if (item.href) {
      // Leaf item (actual page) - navigate
      console.log('Navigating to:', item.href);
      onItemClick(item.href);
    } else if (item.children && item.children.length > 0) {
      // Has children - drill down
      console.log('Drilling down into:', item.label, 'Children count:', item.children.length);
      console.log('Current breadcrumbs length:', breadcrumbs.length, '→', breadcrumbs.length + 1);
      const newBreadcrumbs = [...breadcrumbs, { label: item.label, items: item.children }];
      console.log('New breadcrumbs:', newBreadcrumbs.map(b => b.label));
      setCurrentItems(item.children);
      setBreadcrumbs(newBreadcrumbs);
      console.log('State updated, should show', item.children.length, 'items');
    } else {
      console.warn('Item has no href and no children:', item);
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (breadcrumbs.length > 1) {
      const newBreadcrumbs = breadcrumbs.slice(0, -1);
      const previousLevel = newBreadcrumbs[newBreadcrumbs.length - 1];
      setCurrentItems(previousLevel.items);
      setBreadcrumbs(newBreadcrumbs);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { type: 'spring', stiffness: 500, damping: 35, mass: 0.8 },
            opacity: { duration: 0.12 }
          }}
          onClick={(e) => e.stopPropagation()}
          className="overflow-hidden border-t border-gray-200 bg-white"
        >
          {/* Breadcrumb / Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
            {breadcrumbs.length > 1 ? (
              <button
                onClick={(e) => handleBack(e)}
                className="flex items-center gap-1 text-sm font-medium text-brand-green hover:text-brand-green/80 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            ) : (
              <span className="text-sm font-medium text-gray-700">
                Select Category
              </span>
            )}

            {/* Breadcrumb trail - skip root level (Programmes) */}
            <div className="flex items-center gap-1 text-xs text-gray-500">
              {breadcrumbs.slice(1).map((crumb, index) => (
                <div key={index} className="flex items-center gap-1">
                  {index > 0 && <ChevronRight className="h-3 w-3" />}
                  <span className={cn(index === breadcrumbs.slice(1).length - 1 && 'font-semibold')}>
                    {crumb.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <motion.div
            key={breadcrumbs.map(b => b.label).join('-')} // Key by breadcrumb path
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="p-3 max-h-[50vh] overflow-y-auto"
          >
            <div className="grid grid-cols-3 gap-2">
              {currentItems.map((item, index) => {
                const isActive = item.href
                  ? pathname === item.href || pathname.startsWith(item.href + '/')
                  : false;
                const Icon = item.icon;
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 25,
                      delay: index * 0.02
                    }}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgb(243 244 246)' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      handleItemClick(item);
                    }}
                    className={cn(
                      'flex flex-col items-center justify-center p-3 rounded-xl relative',
                      'transition-colors duration-100',
                      isActive
                        ? 'bg-brand-green/10 text-brand-green'
                        : 'text-gray-600 hover:bg-gray-100'
                    )}
                  >
                    {/* Chevron indicator for items with children */}
                    {hasChildren && (
                      <div className="absolute top-1 right-1">
                        <ChevronRight className="h-3 w-3 text-gray-400" />
                      </div>
                    )}

                    <motion.div
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        rotate: isActive ? [0, -3, 3, 0] : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon
                        className="h-5 w-5 mb-1"
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                    </motion.div>
                    <span
                      className={cn(
                        'text-[10px] text-center leading-tight line-clamp-2',
                        isActive && 'font-semibold'
                      )}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
