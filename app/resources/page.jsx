import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Phone,
  FileText,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export default function Resources() {
  const emergencyResources = [
    {
      name: "National Suicide Prevention Lifeline",
      contact: "988",
      description: "24/7 free and confidential support for people in distress.",
    },
    {
      name: "Crisis Text Line",
      contact: "Text HOME to 741741",
      description: "Free, 24/7 crisis support via text message.",
    },
    {
      name: "SAMHSA National Helpline",
      contact: "1-800-662-4357",
      description:
        "Treatment referral and information service for mental health and substance use.",
    },
    {
      name: "Emergency Services",
      contact: "911",
      description: "For immediate emergency medical assistance.",
    },
  ];

  const educationalResources = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary-500" />,
      title: "Understanding Depression",
      description:
        "Learn about symptoms, causes, and treatment options for depression.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-500" />,
      title: "Managing Anxiety",
      description:
        "Practical strategies and information about anxiety disorders.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-500" />,
      title: "Medication Guide",
      description:
        "Information about psychiatric medications and what to expect.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-500" />,
      title: "Mental Health & Wellness",
      description:
        "Tips for maintaining good mental health and overall wellbeing.",
    },
  ];

  const supportOrganizations = [
    {
      name: "National Alliance on Mental Illness (NAMI)",
      description:
        "Education, support, and advocacy for individuals and families affected by mental illness.",
      website: "nami.org",
    },
    {
      name: "Mental Health America",
      description:
        "Community-based mental health resources and screening tools.",
      website: "mhanational.org",
    },
    {
      name: "Anxiety and Depression Association of America (ADAA)",
      description:
        "Information and resources for anxiety and depression disorders.",
      website: "adaa.org",
    },
    {
      name: "Depression and Bipolar Support Alliance (DBSA)",
      description: "Peer support and wellness tools for mood disorders.",
      website: "dbsalliance.org",
    },
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
            Information, support, and tools to help you on your mental health
            journey.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 mb-16">
            <div className="flex items-start space-x-4">
              <Phone className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-red-900">
                  In Crisis? Get Help Now
                </h2>
                <p className="text-red-800 mb-6 leading-relaxed">
                  If you're experiencing a mental health emergency, please reach
                  out immediately. Help is available 24/7.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {emergencyResources.map((resource, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow">
                      <h3 className="font-bold text-gray-900 mb-2">
                        {resource.name}
                      </h3>
                      <p className="text-2xl font-bold text-red-600 mb-2">
                        {resource.contact}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {resource.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Educational Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn more about mental health conditions and treatment options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-500 hover-scale shadow-lg transition-all duration-300"
              >
                <div className="mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {resource.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {resource.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read More
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Support Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with national organizations dedicated to mental health
              support and advocacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportOrganizations.map((org, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary-500 transition-all duration-300 shadow"
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {org.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {org.description}
                </p>
                <a
                  href={`https://${org.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  {org.website}
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Patient Forms & Documents
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Download and complete these forms before your appointment to
                help us serve you better.
              </p>
              <div className="space-y-4">
                {[
                  "New Patient Registration Form",
                  "Medical History Questionnaire",
                  "Insurance Information Form",
                  "HIPAA Authorization",
                  "Financial Policy",
                ].map((form, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center space-x-4 bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-500 transition-all duration-300 shadow group"
                  >
                    <FileText className="w-6 h-6 text-primary-500" />
                    <span className="text-gray-800 font-medium flex-1">
                      {form}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Patient resources"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <HelpCircle className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team is here to help. Contact us with any questions about our
              services, insurance, or how to get started.
            </p>
            <a
              href="/contact"
              className="inline-block gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
