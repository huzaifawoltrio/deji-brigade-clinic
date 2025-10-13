'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BrainIcon, MonitorIcon, ZapIcon, LeafIcon } from '@/components/ServiceIcons';

export default function Home() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      icon: <BrainIcon className="w-16 h-16 text-blue-500" />,
      title: 'Medication Management',
      description: 'Expert psychiatric medication evaluation and ongoing management tailored to your unique needs.',
    },
    {
      icon: <MonitorIcon className="w-16 h-16 text-blue-500" />,
      title: 'Telepsychiatry',
      description: 'Convenient, secure virtual appointments that bring quality psychiatric care to you, wherever you are.',
    },
    {
      icon: <ZapIcon className="w-16 h-16 text-blue-500" />,
      title: 'TMS Therapy',
      description: 'FDA-approved, non-invasive treatment for depression using advanced transcranial magnetic stimulation.',
    },
    {
      icon: <LeafIcon className="w-16 h-16 text-blue-500" />,
      title: 'Collaborative Care',
      description: 'Integrated approach working alongside your existing healthcare providers for comprehensive treatment.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Reach out via phone, email, or our online form to begin your journey toward better mental health.',
    },
    {
      number: '02',
      title: 'Initial Consultation',
      description: 'Meet with our experienced psychiatric team for a comprehensive evaluation and personalized treatment plan.',
    },
    {
      number: '03',
      title: 'Begin Treatment',
      description: 'Start your customized care plan with ongoing support and regular follow-ups to ensure optimal outcomes.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)',
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight fade-in">
            Welcome to Brigade Clinic
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed fade-in opacity-90" style={{ animationDelay: '0.2s' }}>
            Compassionate, Evidence-Based Psychiatric Care
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gradient-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-2xl fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Request an Appointment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of psychiatric services designed to support your mental health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 hover-scale shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Compassionate care"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Choose Brigade Clinic
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Brigade Clinic, we believe mental health care should be accessible, personalized, and rooted in the latest clinical evidence. Our team combines years of experience with a genuine commitment to your wellbeing.
              </p>
              <ul className="space-y-4">
                {[
                  'Board-certified psychiatric expertise',
                  'Flexible telepsychiatry options',
                  'Evidence-based treatment approaches',
                  'Collaborative care philosophy',
                  'Cutting-edge TMS therapy',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beginning your mental health journey with us is simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-blue text-white text-2xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 gradient-blue">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our compassionate team is here to support you. Schedule your consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover-lift shadow-2xl"
          >
            Request an Appointment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
