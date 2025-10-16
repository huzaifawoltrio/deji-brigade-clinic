import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Monitor, Zap, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-primary-500 mb-6" />,
      title: "Diagnostic Evaluation",
      description:
        "Thorough psychiatric assessments to accurately diagnose mental health conditions and develop personalized treatment plans tailored to your unique needs.",
      imageUrl:
        "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      icon: <Brain className="w-12 h-12 text-primary-500 mb-6" />,
      title: "Medication Management",
      description:
        "Comprehensive psychiatric evaluations and ongoing medication management for mood, anxiety, and attention disorders.",
      imageUrl:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary-500 mb-6" />,
      title: "TMS Therapy",
      description:
        "Transcranial Magnetic Stimulation (TMS) is a non-invasive, FDA-approved treatment for depression, OCD, PTSD, and other mood disorders.",
      imageUrl:
        "/2.jpg",
    },
    {
      icon: <Monitor className="w-12 h-12 text-primary-500 mb-6" />,
      title: "Telepsychiatry",
      description:
        "Receive expert psychiatric care from the comfort of your home — available to Georgia and South Carolina residents.",
      imageUrl:
        "https://images.pexels.com/photos/5217852/pexels-photo-5217852.jpeg",
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
          <div className="grid md:grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <div className="mb-6">{service.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div>
                      <Link
                        href={
                          service.title === "TMS Therapy"
                            ? "/tms-therapy"
                            : "/contact"
                        }
                        className="inline-flex items-center gradient-blue text-white px-6 py-3 rounded-full font-semibold hover-lift shadow-lg"
                      >
                        Learn More <ArrowRight className="ml-2" size={20} />
                      </Link>
                    </div>
                  </div>
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
