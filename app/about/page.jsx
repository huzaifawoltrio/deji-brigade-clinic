import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Target } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Obiora Agbimson, MD",
      role: "Board-Certified Psychiatrist & Founder",
      imageUrl:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Dr. Agbimson is a board-certified psychiatrist who specializes in psychosis, mood disorders, and ADHD. He has served as medical director in both inpatient and outpatient settings. He founded Brigade Physicians to provide exceptional psychiatric care irrespective of the care setting.",
    },
    {
      name: "Ozioma Nwaigwe, MD",
      role: "Board-Certified Psychiatrist",
      imageUrl:
        "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Dr. Nwaigwe is a board certified psychiatrist dedicated to guiding patients toward mental wellbeing. Her expertise includes managing mood and anxiety disorders in peripartum and adolescent populations. She has experience providing care across the life span.",
    },
    {
      name: "Denita Waltower, PMHNP",
      role: "Psychiatric Mental Health Nurse Practitioner",
      imageUrl:
        "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Is a board certified Psychiatric Mental health Nurse Practitioner with over a decade of diverse nursing experience. She combines evidenced-based practice with compassion and empathy.",
    },
    {
      name: "D'andra Young, PMHNP",
      role: "Psychiatric Mental Health Nurse Practitioner",
      imageUrl:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Is a board certified Psychiatric Mental health Nurse Practitioner. She is passionate about mental health and believes in collaborative care to achieve the best possible outcomes for her patients.",
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
            Learn about Brigade Clinic — a compassionate psychiatry and TMS
            clinic serving Georgia and South Carolina.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Clinic interior"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 flex items-center">
                <Target className="w-10 h-10 mr-4 text-primary-500" />
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Brigade Physicians, our mission is to provide accessible,
                evidence-based mental health care that empowers every patient to
                live a fulfilling life. We believe in holistic treatment —
                combining medication, therapy, and modern innovations like TMS
                to support mind and body wellness.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 flex items-center">
                <Heart className="w-10 h-10 mr-4 text-primary-500" />
                Our Philosophy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We focus on personalized care, clinical excellence, and
                community connection. Our goal is to make mental-health services
                approachable and stigma-free for everyone we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our providers are dedicated to your mental wellness, bringing
              years of experience and a compassionate approach to every patient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
