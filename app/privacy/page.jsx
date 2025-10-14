import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, FileText, ShieldCheck } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Lock className="w-20 h-20 text-primary-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last Updated: October 7, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                Information We Collect
              </h2>
              <p>
                We may collect personal information from you in a variety of
                ways, including when you visit our website, schedule an
                appointment, or fill out a form. The types of personal
                information we may collect include:
              </p>
              <ul>
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number, and mailing address.
                </li>
                <li>
                  <strong>Health Information:</strong> Information related to
                  your medical history and current health condition, as
                  necessary for providing our services.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser
                  type, and operating system when you visit our website.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                How We Use Your Information
              </h2>
              <p>
                We use the information we collect for various purposes,
                including:
              </p>
              <ul>
                <li>To provide and manage our services.</li>
                <li>
                  To communicate with you about your appointments and our
                  services.
                </li>
                <li>To improve our website and services.</li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                Data Security
              </h2>
              <p>
                We are committed to protecting the security of your personal
                information. We use a variety of security technologies and
                procedures to help protect your personal information from
                unauthorized access, use, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">Your Rights</h2>
              <p>
                You have certain rights regarding your personal information,
                including the right to access, correct, or delete your
                information. To exercise these rights, please contact us using
                the information provided below.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg border">
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p>
                <strong>Brigade Clinic</strong>
                <br />
                1285 Marks Church Road, STE D, Augusta GA 30909
                <br />
                Phone: 706-471-8845
                <br />
                Email: intake@brigadephysicians.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
