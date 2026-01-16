import {
  CalendarDays,
  Users,
  Sparkles,
  Zap,
  Target,
  Shield,
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      title: "Smart Event Planning",
      description:
        "Plan, organize, and manage events seamlessly with modern tools designed for speed and reliability.",
      icon: CalendarDays,
    },
    {
      title: "Audience Management",
      description:
        "Handle registrations, attendees, and communication in one centralized and secure platform.",
      icon: Users,
    },
    {
      title: "Premium Experience",
      description:
        "Deliver smooth and engaging event experiences with a focus on performance and usability.",
      icon: Sparkles,
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We leverage cutting-edge technologies to build solutions that are fast, reliable, and future-ready.",
      icon: Zap,
    },
    {
      title: "User-Centric Design",
      description:
        "Every feature is crafted with organizers and attendees in mind, ensuring intuitive and delightful experiences.",
      icon: Target,
    },
    {
      title: "Security & Privacy",
      description:
        "Your data is protected with industry-standard security measures, giving you peace of mind.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <CalendarDays className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
            About Next Event
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Next Event is a modern event management platform built to simplify
            how events are created, managed, and experienced. From small meetups
            to large-scale conferences, Next Event ensures efficiency, clarity,
            and reliability at every step.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            What Makes Us Different
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Powerful features designed to transform your event management
            experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 sm:p-8"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-emerald-50 leading-relaxed px-4">
            Our mission is to empower organizers with intuitive tools and a
            scalable architecture, enabling them to focus on what truly matters:
            creating memorable events. Next Event leverages modern web
            technologies to deliver performance, security, and an exceptional
            user experience.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Our Core Values
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            The principles that guide everything we build
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
            Ready to Transform Your Events?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-emerald-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join thousands of organizers who trust Next Event to power their
            most important gatherings.
          </p>
          <button className="bg-white text-emerald-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
