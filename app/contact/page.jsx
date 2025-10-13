"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-primary-500" />,
      title: "Phone",
      details: ["(555) 123-4567", "Monday - Friday, 8am - 6pm"],
    },
    {
      icon: <Mail className="w-8 h-8 text-primary-500" />,
      title: "Email",
      details: ["info@brigadeclinic.com", "We respond within 24 hours"],
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary-500" />,
      title: "Location",
      details: ["123 Wellness Avenue", "Suite 200", "City, State 12345"],
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-500" />,
      title: "Hours",
      details: [
        "Monday - Friday: 8am - 6pm",
        "Saturday: 9am - 2pm",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're here to answer your questions and help you get started with
            compassionate psychiatric care.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary-500 transition-all duration-300 shadow text-center"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you as
                soon as possible. For urgent matters, please call us directly.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-medium">
                    Thank you for your message! We'll be in touch soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Request an Appointment</option>
                    <option value="services">Questions About Services</option>
                    <option value="tms">TMS Therapy Inquiry</option>
                    <option value="insurance">Insurance Questions</option>
                    <option value="referral">Provider Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Visit Our Office
                </h2>
                <div className="bg-gray-300 rounded-xl h-64 mb-6 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-gray-500" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      123 Wellness Avenue
                      <br />
                      Suite 200
                      <br />
                      City, State 12345
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Parking
                    </h3>
                    <p className="text-gray-600">
                      Free parking is available in the building garage. Guest
                      parking spaces are located on Level 2.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Accessibility
                    </h3>
                    <p className="text-gray-600">
                      Our office is wheelchair accessible with elevator access
                      from the parking garage.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Public Transportation
                    </h3>
                    <p className="text-gray-600">
                      Located near bus routes 12, 45, and 67. Metro station is 2
                      blocks away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Do you accept insurance?",
                answer:
                  "Yes, we accept most major insurance plans. Please contact our office to verify your specific coverage.",
              },
              {
                question: "What should I bring to my first appointment?",
                answer:
                  "Please bring a valid ID, insurance card, list of current medications, and any relevant medical records.",
              },
              {
                question: "Do you offer telepsychiatry appointments?",
                answer:
                  "Yes, we offer secure virtual appointments for your convenience. Ask about this option when scheduling.",
              },
              {
                question: "How quickly can I get an appointment?",
                answer:
                  "We typically can schedule new patient appointments within 1-2 weeks. We also maintain some slots for urgent cases.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow border border-gray-200"
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

      <Footer />
    </div>
  );
}
