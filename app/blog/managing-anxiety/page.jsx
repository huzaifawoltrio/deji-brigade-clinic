import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Brain, Heart, Moon, Users, PenSquare, Wind } from "lucide-react";

export default function ManagingAnxiety() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Managing Anxiety: Practical Strategies from Our Providers
            </h1>
            <p className="text-lg text-gray-600">
              While anxiety is a normal human emotion, it can become
              overwhelming. Our providers at Brigade Clinic recommend combining
              professional treatment with practical, everyday strategies to help
              you manage your symptoms and regain a sense of control.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/3958413/pexels-photo-3958413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A person finding calm in nature"
            className="rounded-2xl shadow-lg w-full h-96 object-cover mb-12"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <Wind className="w-8 h-8 mr-4 text-primary-500" />
                Practice Mindful Breathing
              </h2>
              <p>
                When you feel anxious, your breathing often becomes rapid and
                shallow. Slowing it down can have an immediate calming effect on
                your nervous system. Try the <strong>4-7-8 technique</strong>:
                inhale quietly through your nose for 4 seconds, hold your breath
                for a count of 7, and then exhale completely through your mouth
                for 8 seconds. Repeat this simple exercise a few times until you
                feel more centered.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <Brain className="w-8 h-8 mr-4 text-primary-500" />
                Challenge Your Anxious Thoughts
              </h2>
              <p>
                Anxiety often involves catastrophic thinking, where you imagine
                the worst-case scenario. When these thoughts arise, gently
                challenge them. Ask yourself: Is this thought actually true?
                What's a more realistic outcome? This practice, a core component
                of <strong>Cognitive Behavioral Therapy (CBT)</strong>, can help
                you reframe your thinking and reduce the power of anxious
                thoughts.
              </p>
            </section>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary-500">
              <h3 className="text-2xl font-bold text-gray-900">
                Grounding Technique: The 5-4-3-2-1 Method
              </h3>
              <p>
                When you feel a surge of anxiety, use this technique to ground
                yourself in the present moment:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong>5:</strong> Acknowledge FIVE things you see around
                  you.
                </li>
                <li>
                  <strong>4:</strong> Acknowledge FOUR things you can touch.
                </li>
                <li>
                  <strong>3:</strong> Acknowledge THREE things you can hear.
                </li>
                <li>
                  <strong>2:</strong> Acknowledge TWO things you can smell.
                </li>
                <li>
                  <strong>1:</strong> Acknowledge ONE thing you can taste.
                </li>
              </ul>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <Heart className="w-8 h-8 mr-4 text-primary-500" />
                Stay Active
              </h2>
              <p>
                Physical activity is a powerful anxiety reducer. Regular
                exercise, even a brisk 20-minute walk, can boost your mood,
                improve sleep, and serve as a healthy distraction from your
                worries. Find an activity you enjoy and make it a consistent
                part of your routine.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <Moon className="w-8 h-8 mr-4 text-primary-500" />
                Prioritize Sleep
              </h2>
              <p>
                A lack of quality sleep can significantly worsen anxiety.
                Establish a relaxing bedtime routine, avoid screens an hour
                before bed, and create a calm, dark, and cool sleeping
                environment. If you consistently struggle with sleep, it's an
                important issue to discuss with your provider.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <PenSquare className="w-8 h-8 mr-4 text-primary-500" />
                Keep a Journal
              </h2>
              <p>
                Writing down your thoughts and feelings can be a powerful tool
                for managing anxiety. It can help you identify your triggers and
                recognize patterns in your thinking. Dedicate a few minutes each
                day to jotting down what's on your mind without judgment.
              </p>
            </section>

            <section className="bg-primary-50 p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
                <Users className="w-8 h-8 mr-4 text-primary-500" />
                Don't Hesitate to Seek Professional Help
              </h2>
              <p className="mt-4">
                While these strategies can be very effective, they are most
                powerful when combined with professional support. If anxiety is
                impacting your life, our team at Brigade Clinic is here to help
                with evidence-based treatments like medication management,
                therapy, and TMS. You don't have to go through this alone.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
