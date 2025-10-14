import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Brain, Monitor, Zap, Wind } from "lucide-react";

export default function Blog() {
  const featuredTopics = [
    {
      icon: <Brain className="w-10 h-10 text-primary-500" />,
      title: "Understanding Depression & Anxiety",
    },
    {
      icon: <Zap className="w-10 h-10 text-primary-500" />,
      title: "Benefits of TMS Therapy",
    },
    {
      icon: <Monitor className="w-10 h-10 text-primary-500" />,
      title: "Telepsychiatry for Modern Care",
    },
    {
      icon: <Wind className="w-10 h-10 text-primary-500" />,
      title: "Community Mental Health & Wellness",
    },
  ];

  const recentArticles = [
    {
      title: "5 Signs You Might Benefit from TMS Therapy",
      description:
        "TMS is a breakthrough treatment for depression, but is it right for you? Discover the key indicators that suggest you could be a good candidate.",
      link: "/blog/tms-benefits",
    },
    {
      title: "How Telepsychiatry Expands Mental-Health Access in Georgia",
      description:
        "Explore how telehealth is breaking down barriers and making it easier for people across Georgia to get the mental health care they need.",
      link: "/blog/telepsychiatry-georgia",
    },
    {
      title: "Managing Anxiety: Practical Strategies from Our Providers",
      description:
        "Learn effective, actionable tips from our experienced team to help you manage anxiety in your daily life.",
      link: "/blog/managing-anxiety",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Insights
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Read psychiatry insights, clinic updates, and mental health
            education from the team at Brigade Clinic.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Featured Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200"
              >
                <div className="flex justify-center mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {topic.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Recent Articles
          </h2>
          <div className="space-y-8">
            {recentArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {article.description}
                </p>
                <Link
                  href={article.link}
                  className="inline-flex items-center text-primary-600 font-semibold"
                >
                  Read More <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
