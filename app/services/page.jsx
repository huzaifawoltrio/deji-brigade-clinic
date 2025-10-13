import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  BrainIcon,
  MonitorIcon,
  ZapIcon,
  LeafIcon,
} from "@/components/ServiceIcons";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <BrainIcon className="w-20 h-20 text-primary-500" />,
      title: "Medication Management",
      description:
        "Comprehensive psychiatric medication evaluation and ongoing management for optimal mental health outcomes.",
      features: [
        "Initial psychiatric evaluation",
        "Medication selection and optimization",
        "Regular monitoring and adjustments",
        "Managing side effects",
        "Coordination with other providers",
      ],
    },
    {
      icon: <MonitorIcon className="w-20 h-20 text-primary-500" />,
      title: "Telepsychiatry",
      description:
        "High-quality psychiatric care from the comfort and convenience of your own space.",
      features: [
        "Secure, HIPAA-compliant video sessions",
        "Flexible scheduling options",
        "Access from anywhere",
        "Same quality of care as in-person visits",
        "Electronic prescriptions",
      ],
    },
    {
      icon: <ZapIcon className="w-20 h-20 text-primary-500" />,
      title: "TMS Therapy",
      description:
        "FDA-approved transcranial magnetic stimulation for treatment-resistant depression.",
      features: [
        "Non-invasive and medication-free",
        "FDA-approved for depression",
        "Minimal side effects",
        "Outpatient treatment sessions",
        "High success rates",
      ],
      link: "/tms-therapy",
      linkText: "Learn more about TMS",
    },
    {
      icon: <LeafIcon className="w-20 h-20 text-primary-500" />,
      title: "Collaborative Care",
      description:
        "Integrated treatment approach working alongside your existing healthcare team.",
      features: [
        "Coordination with primary care providers",
        "Integration with therapy and counseling",
        "Communication with specialists",
        "Holistic treatment planning",
        "Comprehensive care documentation",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive psychiatric care tailored to your unique needs and
            delivered with expertise and compassion.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2
                        className="text-primary-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {service.linkText}
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Conditions We Treat
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Depression",
              "Anxiety Disorders",
              "Bipolar Disorder",
              "PTSD and Trauma",
              "OCD",
              "ADHD",
              "Panic Disorder",
              "Sleep Disorders",
              "Mood Disorders",
              "Stress Management",
            ].map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-500 transition-all duration-300 shadow"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle2
                    className="text-primary-500 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-gray-800 font-medium text-lg">
                    {condition}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 gradient-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step toward better mental health with our expert
            team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-2xl"
          >
            Request an Appointment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
