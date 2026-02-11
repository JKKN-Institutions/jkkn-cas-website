import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green mb-2">
            CONTACT US
          </h1>
          <div className="w-16 h-1 bg-brand-yellow"></div>
        </div>

        {/* Contact Information Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-brand-green/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-green mb-2">Phone</h3>
                  <a
                    href="tel:+919345855001"
                    className="text-gray-700 hover:text-brand-green transition"
                  >
                    +91 93458 55001
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-brand-green/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-green mb-2">Email</h3>
                  <a
                    href="mailto:arts@jkkn.org"
                    className="text-gray-700 hover:text-brand-green transition"
                  >
                    arts@jkkn.org
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-brand-green/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-green mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    J.K.K NATARAJA COLLEGE OF ARTS & SCIENCE<br />
                    NH-544 (Salem To Coimbatore National Highway)<br />
                    Kumarapalayam (TK), Namakkal (DT)<br />
                    Tamil Nadu - 638183
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-brand-green/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-green mb-2">Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-brand-green mb-4 text-xl">Our Location</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.500184215895!2d77.7302436!3d11.443778499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969831c528ab9%3A0xe42ccce966098e5d!2sJKKN%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1769438942755!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JKKN College Location"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="Enter subject"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent resize-none"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              className="bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-6">
            Connect With Us
          </h2>
          <p className="text-gray-700 mb-6">
            Follow us on social media to stay updated with the latest news, events, and announcements.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
