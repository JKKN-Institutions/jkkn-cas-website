import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hostel | JKKN College of Arts and Science',
  description: 'Safe and comfortable hostel facilities at JKKN Educational Institutions with 24/7 security, nutritious food, high-speed Wi-Fi, and state-of-the-art amenities for both boys and girls students.',
};

export default function HostelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
