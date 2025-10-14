import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Globe,
  ShieldCheck,
  Clock,
  Users,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

export default function TelepsychiatryGeorgia() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              How Telepsychiatry Expands Mental Health Access in Georgia
            </h1>
            <p className="text-lg text-gray-600">
              Bridging the distance to bring quality psychiatric care to every
              corner of the Peach State.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/2990775/pexels-photo-2990775.jpeg"
            alt="A person using a laptop for a telepsychiatry session"
            className="rounded-2xl shadow-lg w-full h-96 object-cover mb-12"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
            <p>
              In a state as diverse as Georgia, with bustling cities and vast
              rural areas, accessing quality mental health care can be a
              challenge. Fortunately, technology is closing the gap.
              Telepsychiatry is revolutionizing how we deliver mental health
              services, breaking down long-standing barriers and connecting more
              Georgians than ever with the expert care they need and deserve.
            </p>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <Globe className="w-8 h-8 mr-4 text-primary-500" />
                Overcoming Geographical Barriers
              </h2>
              <p>
                For those living in rural parts of Georgia, a shortage of local
                mental health professionals can mean long drives and even longer
                wait times for an appointment. Telepsychiatry eliminates the
                distance, allowing patients to connect with licensed providers
                from anywhere through secure video conferencing. This
                dramatically improves access for underserved communities,
                ensuring that your location doesn't determine your quality of
                care.
              </p>
            </section>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary-500">
              <p className="text-xl font-semibold text-gray-800">
                Telepsychiatry makes quality mental health care accessible,
                whether you're in downtown Atlanta or a small town in South
                Georgia.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <ShieldCheck className="w-8 h-8 mr-4 text-primary-500" />
                Reducing Stigma and Increasing Privacy
              </h2>
              <p>
                The stigma associated with seeking mental health care is still a
                significant barrier for many. Receiving treatment from the
                comfort and privacy of one's own home can make it easier for
                individuals to take that first, crucial step. This increased
                confidentiality and comfort encourages more people to seek help
                who might otherwise have avoided it.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <Clock className="w-8 h-8 mr-4 text-primary-500" />
                Improving Continuity and Flexibility of Care
              </h2>
              <p>
                Life is busy, and factors like work schedules, childcare, and
                transportation issues can make it difficult to attend regular
                in-person appointments. Telepsychiatry offers greater
                flexibility, reducing no-show rates and making it easier for
                patients to maintain consistent, ongoing care—which is a
                cornerstone of effective treatment.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <Users className="w-8 h-8 mr-4 text-primary-500" />
                Enhancing Integrated Care
              </h2>
              <p>
                Telepsychiatry also facilitates better collaboration between
                mental health specialists and primary care physicians. A primary
                care provider can easily arrange a virtual consultation with a
                psychiatrist to develop a more comprehensive and integrated
                treatment plan for their patient, leading to more holistic and
                effective care.
              </p>
            </section>

            <section className="bg-primary-50 p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Experience the Future of Mental Health Care
              </h2>
              <p className="mt-4">
                At Brigade Clinic, we are proud to offer secure and convenient
                telepsychiatry services to patients across Georgia and South
                Carolina. If you're ready to access expert psychiatric care that
                fits your life, we're here to help.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition"
              >
                Learn More and Book an Appointment
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
