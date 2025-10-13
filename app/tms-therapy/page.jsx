import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Clock, Activity, Shield, Award } from 'lucide-react';

export default function TMSTherapy() {
  const benefits = [
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: 'Non-Invasive',
      description: 'No surgery, anesthesia, or systemic side effects.',
    },
    {
      icon: <Activity className="w-10 h-10 text-blue-500" />,
      title: 'FDA-Approved',
      description: 'Clinically proven treatment for major depression.',
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-500" />,
      title: 'Quick Sessions',
      description: 'Treatments typically last 20-40 minutes.',
    },
    {
      icon: <Award className="w-10 h-10 text-blue-500" />,
      title: 'High Success Rate',
      description: 'Effective for treatment-resistant depression.',
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
            Advanced, non-invasive treatment for depression using transcranial magnetic stimulation.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">What is TMS Therapy?</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Transcranial Magnetic Stimulation (TMS) is an FDA-approved, non-invasive treatment that uses magnetic pulses to stimulate specific areas of the brain associated with mood regulation.
                </p>
                <p>
                  Unlike medications that affect your entire body, TMS therapy targets only the specific brain regions involved in depression. This precision approach means fewer side effects and often better outcomes for patients who haven't found relief from traditional treatments.
                </p>
                <p>
                  The treatment involves placing a magnetic coil against your scalp, which delivers brief magnetic pulses. These pulses are similar to those used in MRI machines and are designed to activate brain cells in the prefrontal cortex.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="TMS Therapy"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-500 hover-scale shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="TMS Treatment Process"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">How Does TMS Work?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Initial Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We'll evaluate your medical history and determine if TMS therapy is right for you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Treatment Mapping</h3>
                  <p className="text-gray-600 leading-relaxed">
                    During your first session, we'll precisely map the treatment area on your brain for optimal results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Regular Sessions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Most patients receive treatment five days a week for 4-6 weeks, with each session lasting 20-40 minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Ongoing Monitoring</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We'll track your progress throughout treatment and adjust the protocol as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Who Can Benefit from TMS?
          </h2>
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              TMS therapy is particularly effective for individuals who:
            </p>
            <ul className="space-y-4">
              {[
                'Have been diagnosed with major depressive disorder',
                'Haven\'t responded adequately to antidepressant medications',
                'Experience intolerable side effects from medications',
                'Prefer a non-medication treatment option',
                'Want to avoid the side effects of electroconvulsive therapy (ECT)',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-600 text-center leading-relaxed">
            Not everyone is a candidate for TMS therapy. During your consultation, we'll carefully evaluate your medical history and current condition to determine if TMS is appropriate for you.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            What to Expect
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">During Treatment</h3>
              <p>
                You'll be comfortably seated in a treatment chair. The TMS device will be positioned over the predetermined area of your head. You'll feel a tapping sensation and hear clicking sounds during the treatment. You can read, listen to music, or relax during the session.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Side Effects</h3>
              <p>
                TMS is generally well-tolerated. The most common side effect is mild scalp discomfort or headache during or after treatment, which typically diminishes over time. Unlike medications, TMS doesn't cause systemic side effects like weight gain, sexual dysfunction, or sedation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">After Treatment</h3>
              <p>
                You can immediately return to your normal activities, including driving. Many patients schedule TMS sessions during their lunch break and return to work afterward. Most patients begin to notice improvement after 2-3 weeks of treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 gradient-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Is TMS Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Schedule a consultation to learn more about how TMS therapy can help you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-2xl"
          >
            Request a Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
