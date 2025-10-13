import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, UserCheck, Clock, Mail } from 'lucide-react';

export default function Referrals() {
  const steps = [
    {
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      title: 'Complete Referral Form',
      description: 'Fill out our online referral form or download and fax the PDF version.',
    },
    {
      icon: <UserCheck className="w-12 h-12 text-blue-500" />,
      title: 'We Review the Referral',
      description: 'Our team will review the patient information and medical history.',
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: 'Schedule Appointment',
      description: 'We\'ll contact the patient directly to schedule their initial consultation.',
    },
    {
      icon: <Mail className="w-12 h-12 text-blue-500" />,
      title: 'Stay Informed',
      description: 'Receive updates on your patient\'s treatment progress with their consent.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Provider Referrals
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We welcome referrals from primary care providers, therapists, and other healthcare professionals.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Collaborative Care Partnership
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Brigade Clinic, we believe the best patient outcomes come from strong collaboration between healthcare providers. We're committed to working closely with referring physicians, therapists, and care teams to ensure comprehensive, coordinated treatment.
                </p>
                <p>
                  When you refer a patient to us, you can trust that they'll receive expert psychiatric evaluation and evidence-based treatment. We maintain open communication throughout the treatment process and provide detailed updates on patient progress.
                </p>
                <p>
                  Our collaborative approach ensures that psychiatric care is integrated seamlessly with the patient's overall healthcare plan, supporting better outcomes and continuity of care.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Collaborative healthcare"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How to Refer a Patient
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our referral process is simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 hover-scale shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Required Information
          </h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To help us provide the best care for your patient, please include the following information with your referral:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Patient Information:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Full name and date of birth</li>
                  <li>• Contact information</li>
                  <li>• Insurance details</li>
                  <li>• Emergency contact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Clinical Information:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reason for referral</li>
                  <li>• Current medications</li>
                  <li>• Relevant medical history</li>
                  <li>• Previous psychiatric treatment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional communication"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                What Happens After Referral
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Once we receive your referral, our intake coordinator will contact the patient within 24-48 hours to schedule an initial psychiatric evaluation.
                </p>
                <p>
                  After the evaluation, we'll develop a comprehensive treatment plan and communicate our findings and recommendations back to you, with the patient's consent.
                </p>
                <p>
                  Throughout the treatment process, we'll keep you informed of significant developments, medication changes, and overall progress. We welcome ongoing communication and consultation regarding patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Contact Our Referral Coordinator
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Have questions about the referral process? Our dedicated referral coordinator is here to help.
            </p>
            <div className="space-y-3 text-gray-700">
              <p className="text-lg">
                <strong>Phone:</strong> (555) 123-4567 ext. 2
              </p>
              <p className="text-lg">
                <strong>Email:</strong> referrals@brigadeclinic.com
              </p>
              <p className="text-lg">
                <strong>Fax:</strong> (555) 123-4568
              </p>
            </div>
            <div className="mt-8">
              <a
                href="mailto:referrals@brigadeclinic.com"
                className="inline-block gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-lg"
              >
                Send a Referral
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
