import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

export default function TmsBenefits() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              5 Signs You Might Benefit from TMS Therapy
            </h1>
            <p className="text-lg text-gray-600">
              Discover if this breakthrough, non-invasive treatment is the right
              step forward in your mental health journey.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/7205830/pexels-photo-7205830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="TMS Therapy session in progress"
            className="rounded-2xl shadow-lg w-full h-96 object-cover mb-12"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
            <p>
              Transcranial Magnetic Stimulation (TMS) is a powerful,
              FDA-approved treatment that offers new hope for individuals
              struggling with major depression and other mental health
              conditions. Unlike traditional medications that work systemically,
              TMS uses precise magnetic pulses to stimulate underactive areas of
              the brain involved in mood regulation. But how do you know if it’s
              the right choice for you? Here are five key signs to consider.
            </p>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                1. Antidepressants Haven't Worked for You
              </h2>
              <p>
                One of the most common reasons people turn to TMS is for{" "}
                <strong>treatment-resistant depression</strong>. If you've tried
                multiple antidepressant medications without finding significant
                or lasting relief, TMS could be a highly effective alternative.
                It offers a different mechanism of action, directly targeting
                the neural circuits involved in depression.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                2. You've Experienced Unwanted Side Effects from Medication
              </h2>
              <p>
                Antidepressants can come with a range of systemic side effects,
                from weight gain and fatigue to nausea and insomnia, which can
                be difficult to tolerate. Because TMS is a non-systemic
                treatment focused entirely on the brain, it avoids these issues.
                The most common side effects are mild, temporary headache or
                scalp discomfort at the treatment site.
              </p>
            </section>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary-500">
              <p className="text-xl font-semibold text-gray-800">
                TMS offers a targeted approach, delivering relief without the
                systemic side effects commonly associated with antidepressant
                medications.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                3. You Have a Diagnosis of Depression, OCD, or Anxiety
              </h2>
              <p>
                While TMS is most well-known for treating depression, it's also
                FDA-approved for{" "}
                <strong>Obsessive-Compulsive Disorder (OCD)</strong> and is
                being used to treat other conditions like anxiety and PTSD. If
                you're struggling with one of these conditions, especially if
                other treatments have failed, TMS may be a valuable option to
                discuss with your provider.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                4. You're Looking for a Non-Invasive, Drug-Free Option
              </h2>
              <p>
                Unlike procedures like electroconvulsive therapy (ECT), TMS is
                completely non-invasive. It doesn't require anesthesia or
                sedation, and there is no downtime. You can drive yourself to
                and from your appointments and continue with your daily
                activities—including work or school—immediately after each
                session.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                5. You Are Ready to Invest in a Proven Treatment Plan
              </h2>
              <p>
                A typical course of TMS involves daily sessions for several
                weeks. This consistency is key, as the cumulative effect of the
                sessions is what leads to significant and lasting improvement.
                If you're ready to commit to a structured and evidence-based
                treatment plan, you are an excellent candidate to experience the
                life-changing benefits TMS can offer.
              </p>
            </section>

            <section className="bg-primary-50 p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Is TMS Right for You?
              </h2>
              <p className="mt-4">
                If any of these points resonate with you, the next step is to
                schedule a consultation. Our team at Brigade Clinic can provide
                a comprehensive evaluation to determine if TMS is the right fit
                for your unique needs.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition"
              >
                Schedule a Consultation
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
