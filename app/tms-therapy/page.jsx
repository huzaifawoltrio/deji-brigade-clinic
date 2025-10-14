import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  Heart,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function TmsTherapy() {
  const conditions = [
    "Major Depressive Disorder (MDD)",
    "Obsessive-Compulsive Disorder (OCD)",
    "Post-Traumatic Stress Disorder (PTSD)",
    "Anxiety Disorders",
  ];

  const benefits = [
    "FDA-approved equipment and evidence-based protocols",
    "Administered by trained psychiatric professionals",
    "No anesthesia or downtime",
    "Covered by many insurance plans",
  ];

  const processSteps = [
    {
      title: "Consultation",
      description:
        "You'll meet with one of our providers to determine if TMS is the right treatment for your specific needs and condition.",
    },
    {
      title: "Brain Mapping",
      description:
        "We identify the precise location on your brain for treatment. This ensures the magnetic pulses are targeted for maximum effectiveness.",
    },
    {
      title: "Treatment Sessions",
      description:
        "You'll relax in a comfortable chair while the TMS device delivers gentle magnetic pulses. Each session lasts about 20-30 minutes.",
    },
    {
      title: "Lasting Relief",
      description:
        "Most patients complete a series of treatments over several weeks, leading to significant and lasting improvement in their symptoms.",
    },
  ];

  const faqs = [
    {
      question: "Is TMS Therapy Painful?",
      answer:
        "Most patients do not find TMS to be painful. You may feel a light tapping sensation on your scalp during the treatment, but this typically subsides after the first few sessions.",
    },
    {
      question: "How long does a full course of treatment take?",
      answer:
        "A typical course of TMS therapy involves daily sessions (Monday-Friday) for 4-6 weeks. The exact duration will depend on your individual response and treatment plan.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "TMS is generally well-tolerated. The most common side effect is mild headache or scalp discomfort, which usually resolves on its own shortly after the session.",
    },
    {
      question: "Will my insurance cover TMS?",
      answer:
        "Many insurance plans, including Medicare, now cover TMS therapy for depression. Our team will assist you in verifying your benefits and understanding your coverage.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            TMS Therapy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            An innovative, non-invasive treatment for depression and other mood
            disorders.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What Is TMS?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transcranial Magnetic Stimulation (TMS) is an advanced treatment
              that uses gentle magnetic pulses to stimulate specific areas of
              the brain involved in mood regulation.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/8942125/pexels-photo-8942125.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="TMS Therapy"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How TMS Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our straightforward process ensures you receive safe, effective,
              and personalized care from start to finish.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <BrainCircuit className="w-12 h-12 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-last lg:order-first">
            <img
              src="https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Patient consultation"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Conditions TMS Can Treat
            </h2>
            <ul className="space-y-4">
              {conditions.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2
                    className="text-primary-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
            Why Choose Brigade Clinic for TMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 flex items-start space-x-4"
              >
                <ShieldCheck
                  className="text-primary-500 flex-shrink-0 mt-1"
                  size={28}
                />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 gradient-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Find Out if TMS is Right for You
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Schedule a consultation to discuss your treatment options with our
            expert team.
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
