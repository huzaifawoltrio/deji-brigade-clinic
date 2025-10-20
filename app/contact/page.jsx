"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, Printer, Loader2 } from "lucide-react";
import { initEmailJS, sendContactEmail } from "@/lib/emailjs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setError("Failed to send message. Please try again or contact us directly.");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-primary-500" />,
      title: "Phone",
      details: ["706-471-8845"],
    },
    {
      icon: <Mail className="w-8 h-8 text-primary-500" />,
      title: "Email",
      details: ["intake@brigadephysicians.com"],
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary-500" />,
      title: "Location",
      details: ["1285 Marks Church Road, STE D", "Augusta GA 30909"],
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-500" />,
      title: "Hours",
      details: ["Monday - Friday: 8am - 5pm"],
    },
    {
      icon: <Printer className="w-8 h-8 text-primary-500" />,
      title: "Fax",
      details: ["706-471-8897"],
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
            Schedule appointments or send referrals to Brigade Clinic in
            Augusta, GA. Serving patients across Georgia and South Carolina.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
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
                    <p key={idx} className="text-gray-600 break-all">
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

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800 font-medium">{error}</p>
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
                  disabled={loading}
                  className="w-full gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Visit Our Office
                </h2>
                <div className="bg-gray-300 rounded-xl h-96 mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, borderRadius: "1rem" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.718694017291!2d-82.0833923847998!3d33.46881798077241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9cc0031855555%3A0x5e52a4e4a4b2a4a4!2s1285%20Marks%20Church%20Rd%20STE%20D%2C%20Augusta%2C%20GA%2030909%2C%20USA!5e0!3m2!1sen!2s!4v1633542845947!5m2!1sen!2s"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
