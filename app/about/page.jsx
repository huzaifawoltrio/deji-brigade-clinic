import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Award, Users, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-primary-500" />,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
    },
    {
      icon: <Award className="w-12 h-12 text-primary-500" />,
      title: "Clinical Excellence",
      description:
        "Our team maintains the highest standards of psychiatric practice and evidence-based treatment.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary-500" />,
      title: "Collaborative Approach",
      description:
        "We work together with patients and their care team to achieve the best possible outcomes.",
    },
    {
      icon: <Target className="w-12 h-12 text-primary-500" />,
      title: "Personalized Treatment",
      description:
        "Every treatment plan is tailored to the unique needs and goals of each individual patient.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            About Brigade Clinic
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A modern psychiatric practice dedicated to transforming mental
            health care through compassion, innovation, and clinical excellence.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our clinic"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Brigade Clinic was founded with a clear vision: to make
                  high-quality psychiatric care accessible, personalized, and
                  genuinely effective for everyone who needs it.
                </p>
                <p>
                  We recognized that traditional mental health care often feels
                  impersonal, rushed, or difficult to access. That's why we
                  built a practice centered on the individual, offering flexible
                  appointment options, comprehensive treatment modalities, and a
                  team that truly listens.
                </p>
                <p>
                  Today, we're proud to serve our community with a full range of
                  psychiatric services, from medication management to
                  cutting-edge TMS therapy, all delivered with the care and
                  attention every person deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do at Brigade Clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-500 hover-scale shadow-lg transition-all duration-300"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Team
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our psychiatric team consists of board-certified
                  psychiatrists, nurse practitioners, and support staff who are
                  passionate about mental health care. Each member brings years
                  of clinical experience, advanced training, and a genuine
                  commitment to patient wellbeing.
                </p>
                <p>
                  We believe in continuous learning and staying current with the
                  latest advances in psychiatric treatment. Our team regularly
                  participates in professional development, clinical research,
                  and collaborative learning to ensure we provide the most
                  effective care possible.
                </p>
                <p>
                  What sets us apart is not just our clinical expertise, but our
                  approach to care. We take the time to listen, understand, and
                  build lasting therapeutic relationships with every patient.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 gradient-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join Our Community of Care
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Experience the difference that personalized, compassionate
            psychiatric care can make.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-2xl"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
