import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import FloatingChatButtons from '@/components/ui/FloatingChatButtons';

export const metadata: Metadata = {
  title: 'Bank & Post Office | JKKN College of Arts and Science',
  description: 'On-campus banking and postal services at JKKN College with comprehensive financial services, account management, and mail delivery facilities for students and staff.',
};

const bankingFeatures = [
  "Our campus has a fully-functional branch of a popular bank, so you can handle all your banking needs right here on campus.",
  "The bank offers a range of services, including account opening, cash deposits and withdrawals, fund transfers, and more.",
  "You can also avail of special offers and discounts exclusively for JKKN students and staff.",
  "With our banking facility, you can save time and effort, and focus on your studies and work without worrying about your financial transactions."
];

const postalServices = [
  "We have a dedicated post office on campus, so you can easily send and receive mail and packages without having to leave the campus.",
  "Our post office offers a range of services, including domestic and international mail, registered post, speed post, parcel delivery, and more.",
  "You can also avail of additional services such as post office savings schemes, money orders, and postal life insurance.",
  "With our postal services, you can stay connected with your loved ones and business associates, and manage your important documents and packages with ease."
];

export default function BankPostOfficePage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12 text-center">
          BANK & POST OFFICE
        </h1>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-lg shadow-lg overflow-hidden mb-12 bg-gray-200">
          <Image
            src="/images/bank-post-office/bank-exterior.jpg"
            alt="Bank and Post Office facility at JKKN College campus"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
            Our bank offers a comprehensive range of financial services to fulfill your banking needs. Our courteous and knowledgeable staff can assist you with opening new accounts, making deposits or withdrawals, and providing financial guidance. With various products and services, such as personal loans, mortgages, and credit cards, our bank caters to all your financial requirements.
          </p>
        </div>

        {/* Banking Facilities Card */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
            BANKING FACILITIES:
          </h2>
          <ul className="space-y-4">
            {bankingFeatures.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Postal Services Card */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-6">
            POSTAL SERVICES:
          </h2>
          <ul className="space-y-4">
            {postalServices.map((service, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FloatingChatButtons
        facebookUrl="https://m.me/jkkncas"
        whatsappNumber="919345855001"
      />
    </main>
  );
}
