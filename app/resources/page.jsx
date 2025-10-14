import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, LifeBuoy, BookUser, ExternalLink } from "lucide-react";

export default function Resources() {
  const insuranceProviders = [
    "BlueCross BlueShield",
    "Aetna",
    "UnitedHealthcare",
    "Cigna",
    "Medicare",
    "and others",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Patient Resources
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Access insurance details, intake forms, and mental health crisis
            contacts for Brigade Clinic patients.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 flex items-center">
                <Shield className="w-10 h-10 mr-4 text-primary-500" />
                Insurance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We currently accept most major Georgia and South Carolina
                insurance plans, including:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {insuranceProviders.map((provider, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">{provider}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600">
                Please contact our intake team for plan verification.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 flex items-center">
                <BookUser className="w-10 h-10 mr-4 text-primary-500" />
                Patient Portal
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Access forms and telehealth appointments through our secure
                PracticeQ portal.
              </p>
              <a
                href="https://brigadephysicians.practiceq.com/portal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gradient-blue text-white px-6 py-3 rounded-full font-semibold"
              >
                Go to Portal <ExternalLink className="ml-2" size={20} />
              </a>
              <p className="mt-6 text-gray-600">
                For questions:{" "}
                <a
                  href="mailto:intake@brigadephysicians.com"
                  className="text-primary-600 hover:underline"
                >
                  intake@brigadephysicians.com
                </a>
              </p>
            </div>
          </div>
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-red-800 flex items-center">
              <LifeBuoy className="w-10 h-10 mr-4" />
              In Case of Emergency
            </h2>
            <p className="text-lg text-red-700 leading-relaxed mb-6">
              If you or someone you know is experiencing a mental-health crisis,
              please contact one of the following resources immediately:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-xl font-bold text-red-800">
                  988 (Suicide & Crisis Lifeline)
                </h3>
                <p className="text-red-700">
                  Available 24/7 for free, confidential support.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-xl font-bold text-red-800">
                  Georgia Crisis Line: 1-800-715-4225
                </h3>
                <p className="text-red-700">
                  For residents of Georgia seeking immediate assistance.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-xl font-bold text-red-800">
                  South Carolina Mobile Crisis: 1-833-364-2274
                </h3>
                <p className="text-red-700">
                  Mobile crisis response for residents of South Carolina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
