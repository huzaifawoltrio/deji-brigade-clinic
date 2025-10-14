import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function ReferralThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 px-6">
        <div className="max-w-2xl w-full text-center bg-white p-12 rounded-2xl shadow-lg border border-gray-200">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Referral Received
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Thank you for your referral to Brigade Clinic. We will contact the
            patient within one business day and notify your office once the
            appointment is confirmed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-lg"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
