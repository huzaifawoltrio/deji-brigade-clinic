import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Printer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Brigade Clinic Logo"
                width={150}
                height={150}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              A modern psychiatric practice dedicated to providing
              compassionate, evidence-based mental health care.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/tms-therapy"
                  className="hover:text-primary-400 transition-colors"
                >
                  TMS Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/referrals"
                  className="hover:text-primary-400 transition-colors"
                >
                  Referrals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Patient Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/resources"
                  className="hover:text-primary-400 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>706-471-8845</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>intake@brigadephysicians.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Printer size={18} className="mt-0.5 flex-shrink-0" />
                <span>Fax: 706-471-8897</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  1285 Marks Church Road, STE D
                  <br />
                  Augusta GA 30909
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Brigade Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/hipaa"
                className="hover:text-primary-400 transition-colors"
              >
                HIPAA Notice
              </Link>
              <Link
                href="/telehealth-consent"
                className="hover:text-primary-400 transition-colors"
              >
                Telehealth Consent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
