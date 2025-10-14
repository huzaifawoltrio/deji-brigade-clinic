"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Download, FileText, Send } from "lucide-react";

export default function Referrals() {
  const [formData, setFormData] = useState({
    referrerName: "",
    practiceName: "",
    referrerEmail: "",
    patientName: "",
    patientPhone: "",
    reason: "",
    attachment: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setFormData({ ...formData, attachment: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        referrerName: "",
        practiceName: "",
        referrerEmail: "",
        patientName: "",
        patientPhone: "",
        reason: "",
        attachment: null,
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Refer a Patient
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Easily refer patients for outpatient psychiatry or TMS at Brigade
            Clinic. We coordinate directly with hospitals, case managers, and
            social workers.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              For Hospitals, Case Managers, and Providers
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We make psychiatric transitions seamless for recently discharged
              patients or those needing outpatient follow-up. Our goal is to
              ensure continuity of care by providing prompt, reliable, and
              expert psychiatric services.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  How to Refer
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 mt-1" />
                    <span>Complete our secure online referral form.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 mt-1" />
                    <span>
                      Attach discharge summary or relevant clinical notes.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 mt-1" />
                    <span>
                      Alternatively, fax or email us at:
                      <br />
                      <span className="font-semibold text-gray-800">
                        📧 referrals@brigadephysicians.com
                      </span>
                      <br />
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Our Team Will:
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 mt-1" />
                    <span>Contact the patient within one business day.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 mt-1" />
                    <span>Verify insurance coverage and benefits.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 mt-1" />
                    <span>
                      Schedule promptly and confirm the appointment with the
                      referring provider.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Secure Referral Form
            </h2>
            {submitted ? (
              <div className="text-center p-8 bg-green-50 rounded-lg">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800">
                  Referral Submitted
                </h3>
                <p className="text-green-700">
                  Thank you! We will contact the patient shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="referrerName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="referrerName"
                      name="referrerName"
                      required
                      value={formData.referrerName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="practiceName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Hospital/Practice Name *
                    </label>
                    <input
                      type="text"
                      id="practiceName"
                      name="practiceName"
                      required
                      value={formData.practiceName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="referrerEmail"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="referrerEmail"
                    name="referrerEmail"
                    required
                    value={formData.referrerEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="patientName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Patient Name *
                    </label>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      required
                      value={formData.patientName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="patientPhone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Patient Phone *
                    </label>
                    <input
                      type="tel"
                      id="patientPhone"
                      name="patientPhone"
                      required
                      value={formData.patientPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="reason"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Reason for Referral *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    rows="4"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="attachment"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Attach Clinical Notes (Optional)
                  </label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Submit Referral</span>
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Download Referral Form
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Prefer a paper form? Download our PDF referral form to complete and
            fax or email to our office.
          </p>
          <a
            href="/path-to-your-referral-form.pdf" // <-- IMPORTANT: Replace with the actual path to your PDF file
            download
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-lg border border-primary-200"
          >
            <Download className="mr-2" size={20} />
            Download PDF
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
