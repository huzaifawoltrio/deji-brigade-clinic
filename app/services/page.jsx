import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Monitor, Zap, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-primary-500 mb-6" />,
      title: "Medication Management",
      description:
        "Comprehensive psychiatric evaluations and ongoing medication management for mood, anxiety, and attention disorders.",
      imageUrl:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      icon: <Monitor className="w-12 h-12 text-primary-500 mb-6" />,
      title: "Telepsychiatry",
      description:
        "Receive expert psychiatric care from the comfort of your home — available to Georgia and South Carolina residents.",
      imageUrl:
        "https://images.pexels.com/photos/5217852/pexels-photo-5217852.jpeg",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary-500 mb-6" />,
      title: "TMS Therapy",
      description:
        "Transcranial Magnetic Stimulation (TMS) is a non-invasive, FDA-approved treatment for depression, OCD, PTSD, and other mood disorders.",
      imageUrl:
        "https://images.pexels.com/photos/8942125/pexels-photo-8942125.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Psychiatric Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Brigade Clinic offers psychiatry, medication management,
            telepsychiatry, and TMS therapy.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={` ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                  {service.icon}
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href={
                      service.title === "TMS Therapy"
                        ? "/tms-therapy"
                        : "/contact"
                    }
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800"
                  >
                    Learn More <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
                <div className={` ${index % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 gradient-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step towards better mental health. Our team is here
            to help you find the right path forward.
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
