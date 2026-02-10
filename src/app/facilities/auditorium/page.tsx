import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Auditorium | JKKN College of Arts and Science',
  description: 'State-of-the-art auditorium facility at JKKN Educational Institutions',
};

export default function AuditoriumPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green mb-12">
          AUDITORIUM
        </h1>

        {/* Three-column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            {/* <Image
              src="/images/auditorium/auditorium-1.jpg"
              alt="Main auditorium hall with seating arrangement"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            /> */}
            <div className="text-gray-500 text-center p-4">
              <p className="font-semibold">Auditorium Hall</p>
              <p className="text-sm">Image placeholder</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            {/* <Image
              src="/images/auditorium/auditorium-2.jpg"
              alt="Stage view with lighting and audio systems"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            /> */}
            <div className="text-gray-500 text-center p-4">
              <p className="font-semibold">Stage & Audio Systems</p>
              <p className="text-sm">Image placeholder</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            {/* <Image
              src="/images/auditorium/auditorium-3.jpg"
              alt="Auditorium interior during an event"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            /> */}
            <div className="text-gray-500 text-center p-4">
              <p className="font-semibold">Event Interior</p>
              <p className="text-sm">Image placeholder</p>
            </div>
          </div>
        </div>

        {/* Descriptive Content */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
          <p className="text-justify">
            The JKKN auditorium is a spacious facility that can accommodate a large number of guests comfortably. The seating arrangement is well-designed to provide an uninterrupted view of the stage, and the acoustics are impeccable, ensuring that every note and word is heard clearly. The stage is equipped with the latest audio-visual technology, making it possible to host a wide range of events, including concerts, plays, and theatrical performances.
          </p>

          <p className="text-justify">
            In addition to its impressive features, the auditorium is designed with utmost attention to detail, making it a truly elegant space. The interior decor features a combination of modern and traditional elements that blend perfectly to create a warm and welcoming atmosphere. The lighting is also carefully selected, ensuring that it adds to the ambiance of the event.
          </p>

          <p className="text-justify">
            The JKKN auditorium is not just an impressive facility, but it is also a versatile one. It can be used for various purposes, including graduation ceremonies, workshops, and seminars, making it an essential resource for the institution. The auditorium is also well-maintained, ensuring that it remains in top condition for every event.
          </p>

          {/* Features List */}
          <div className="mt-8">
            <ul className="list-disc list-inside space-y-2">
              <li>Spacious seating</li>
              <li>High-tech sound and lighting systems</li>
              <li>Stage equipment and props</li>
              <li>Excellent acoustics</li>
              <li>Professional staff</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
