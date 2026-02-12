"use client";

import { useState, useEffect } from "react";

export default function MelsFinestFoodsLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased bg-ivory text-charcoal">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Karla:wght@300;400;500;600;700&display=swap");

        :root {
          --ivory: #fdfbf7;
          --charcoal: #2b2b2b;
          --forest: #1b4d3e;
          --teal: #2a6b5c;
          --sage: #7a9b8e;
          --terracotta: #d84315;
          --gold: #d4a574;
          --cream: #f5f1e8;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Karla", sans-serif;
          background: var(--ivory);
          color: var(--charcoal);
          overflow-x: hidden;
        }

        .serif {
          font-family: "Cormorant Garamond", serif;
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-delay-1 {
          animation-delay: 0.2s;
        }

        .animate-delay-2 {
          animation-delay: 0.4s;
        }

        .animate-delay-3 {
          animation-delay: 0.6s;
        }

        .animate-delay-4 {
          animation-delay: 0.8s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .hover-lift {
          transition:
            transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.4s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .pattern-dots {
          background-image: radial-gradient(
            circle,
            var(--sage) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
          opacity: 0.15;
        }

        .gradient-overlay {
          background: linear-gradient(
            135deg,
            rgba(42, 107, 92, 0.9) 0%,
            rgba(27, 77, 62, 0.95) 100%
          );
        }

        .text-gradient {
          background: linear-gradient(
            135deg,
            var(--teal) 0%,
            var(--forest) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .diagonal-section {
          clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal to-forest rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold serif">M</span>
              </div>
              <div>
                <h1
                  className="text-xl font-bold tracking-tight"
                  style={{ color: "var(--forest)" }}
                >
                  Mel's Finest Foods
                </h1>
                <p className="text-xs tracking-widest text-sage uppercase">
                  Women-Owned Excellence
                </p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-sm font-medium hover:text-teal transition-colors tracking-wide"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm font-medium hover:text-teal transition-colors tracking-wide"
              >
                About
              </a>
              <a
                href="#impact"
                className="text-sm font-medium hover:text-teal transition-colors tracking-wide"
              >
                Impact
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-teal transition-colors tracking-wide"
              >
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--teal) 0%, var(--forest) 100%)",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-cream rounded-full animate-delay-1 animate-fade-in">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--teal)" }}
              >
                100% Women-Owned
              </p>
            </div>

            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-tight serif animate-delay-2 animate-fade-in">
              Serving the
              <span className="block mt-2 text-gradient font-semibold">
                Finest.
              </span>
              <span
                className="block mt-2 font-semibold"
                style={{ color: "var(--forest)" }}
              >
                Always.
              </span>
            </h1>

            <p className="text-xl lg:text-2xl leading-relaxed text-charcoal/80 max-w-xl animate-delay-3 animate-fade-in">
              Professional catering solutions that fuel performance and growth
              for <strong>corporations</strong> and <strong>schools</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-delay-4 animate-fade-in">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full text-white font-semibold shadow-2xl hover:scale-105 transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, var(--teal) 0%, var(--forest) 100%)",
                }}
              >
                Let's Cater for You
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full border-2 font-semibold hover:bg-forest hover:text-white transition-all"
                style={{ borderColor: "var(--forest)", color: "var(--forest)" }}
              >
                Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-delay-4 animate-fade-in">
              <div>
                <p
                  className="text-3xl font-bold serif"
                  style={{ color: "var(--teal)" }}
                >
                  300+
                </p>
                <p className="text-sm text-charcoal/70 mt-1">Kids Fed Daily</p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold serif"
                  style={{ color: "var(--teal)" }}
                >
                  200+
                </p>
                <p className="text-sm text-charcoal/70 mt-1">
                  Successful Orders
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold serif"
                  style={{ color: "var(--teal)" }}
                >
                  100%
                </p>
                <p className="text-sm text-charcoal/70 mt-1">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in animate-delay-2">
            <div
              className="absolute -top-10 -right-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--teal)" }}
            ></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Image_Parlour_Photography-26.jpg"
                alt="Chef Mel - Founder of Mel's Finest Foods"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold text-lg">Chef Mel</p>
                <p className="text-white/90 text-sm">Founder & Head Chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-32 relative"
        style={{ background: "var(--cream)" }}
      >
        <div className="absolute inset-0 pattern-dots opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--teal)" }}
            >
              What We Do
            </p>
            <h2
              className="text-5xl lg:text-6xl font-light serif"
              style={{ color: "var(--forest)" }}
            >
              Catering Excellence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Corporate Catering */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover-lift">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, var(--teal) 0%, var(--forest) 100%)",
                }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3
                className="text-3xl font-semibold mb-4 serif"
                style={{ color: "var(--forest)" }}
              >
                Corporate Catering
              </h3>
              <p className="text-charcoal/80 mb-6 leading-relaxed">
                Professional meal solutions that fuel productivity and workplace
                satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                    style={{ color: "var(--teal)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-charcoal/80">
                    Staff canteens & daily meals
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                    style={{ color: "var(--teal)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-charcoal/80">
                    Boardroom & executive catering
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                    style={{ color: "var(--teal)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-charcoal/80">
                    Meetings, training & events
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                    style={{ color: "var(--teal)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-charcoal/80">
                    Fresh, balanced, reliable service
                  </span>
                </li>
              </ul>
            </div>

            {/* School Catering */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover-lift">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, var(--sage) 0%, var(--teal) 100%)",
                }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3
                className="text-3xl font-semibold mb-4 serif"
                style={{ color: "var(--forest)" }}
              >
                School Cafeteria Catering
              </h3>
              <p className="text-charcoal/80 mb-6 leading-relaxed">
                Nutritious meals that support growing minds and healthy futures.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                    style={{ color: "var(--sage)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-charcoal/80">
                    Daily school meal programs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                    style={{ color: "var(--sage)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-charcoal/80">
                    Healthy, child-friendly menus
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                    style={{ color: "var(--sage)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-charcoal/80">
                    Safe, hygienic food prep
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                    style={{ color: "var(--sage)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-charcoal/80">
                    Trusted by schools & parents
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About / Difference Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/Image_Parlour_Photography-17.jpg"
                  alt="Chef Mel preparing fresh ingredients"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl mt-12">
                <img
                  src="/Image_Parlour_Photography-2.jpg"
                  alt="Chef Mel - Professional Portrait"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ background: "var(--gold)" }}
            ></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--teal)" }}
              >
                Our Difference
              </p>
              <h2
                className="text-5xl lg:text-6xl font-light serif mb-6"
                style={{ color: "var(--forest)" }}
              >
                Quality Without
                <span className="block font-semibold mt-2">Compromise</span>
              </h2>
            </div>

            <p className="text-xl leading-relaxed text-charcoal/80">
              We don't just serve food — we build partnerships through
              consistency, care, and unwavering quality.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--cream)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--teal)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-semibold text-lg mb-1"
                    style={{ color: "var(--forest)" }}
                  >
                    Women-Owned & Community-Focused
                  </h3>
                  <p className="text-charcoal/70">
                    Proudly serving with passion and dedication to excellence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--cream)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--teal)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-semibold text-lg mb-1"
                    style={{ color: "var(--forest)" }}
                  >
                    Nutrition-First Menu Planning
                  </h3>
                  <p className="text-charcoal/70">
                    Every meal designed for health, taste, and satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--cream)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--teal)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-semibold text-lg mb-1"
                    style={{ color: "var(--forest)" }}
                  >
                    Reliable Delivery & Service Teams
                  </h3>
                  <p className="text-charcoal/70">
                    On-time, every time, with professional excellence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--cream)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--teal)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-semibold text-lg mb-1"
                    style={{ color: "var(--forest)" }}
                  >
                    Flexible, Client-Specific Solutions
                  </h3>
                  <p className="text-charcoal/70">
                    Tailored menus and services to match your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section
        id="impact"
        className="py-32 relative diagonal-section"
        style={{
          background:
            "linear-gradient(135deg, var(--teal) 0%, var(--forest) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
          <h2 className="text-5xl lg:text-6xl font-light serif mb-6">
            Our Impact
          </h2>
          <p className="text-xl mb-16 text-white/90 max-w-2xl mx-auto">
            Making a difference, one meal at a time
          </p>

          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-3">
              <p className="text-6xl font-bold serif">300+</p>
              <p className="text-lg text-white/90">Kids Fed Daily</p>
            </div>
            <div className="space-y-3">
              <p className="text-6xl font-bold serif">200+</p>
              <p className="text-lg text-white/90">Successful Orders</p>
            </div>
            <div className="space-y-3">
              <p className="text-6xl font-bold serif">100%</p>
              <p className="text-lg text-white/90">Client Satisfaction</p>
            </div>
            <div className="space-y-3">
              <p className="text-6xl font-bold serif">∞</p>
              <p className="text-lg text-white/90">Trusted Partnership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-32" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-6"
            style={{ color: "var(--teal)" }}
          >
            Our Promise
          </p>
          <h2
            className="text-5xl lg:text-6xl font-light serif mb-8"
            style={{ color: "var(--forest)" }}
          >
            Fueling Work.
            <span className="block mt-2 font-semibold">Feeding Futures.</span>
          </h2>
          <p className="text-2xl leading-relaxed text-charcoal/80 mb-12">
            We don't just serve food — we build partnerships through
            consistency, care, and quality. Your success is our mission.
          </p>

          <div
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full"
            style={{
              background: "var(--ivory)",
              border: "2px solid var(--gold)",
            }}
          >
            <svg
              className="w-6 h-6"
              style={{ color: "var(--gold)" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold" style={{ color: "var(--forest)" }}>
              Trusted Catering Partner
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Left - Contact Info */}
              <div
                className="lg:col-span-2 p-12"
                style={{
                  background:
                    "linear-gradient(135deg, var(--teal) 0%, var(--forest) 100%)",
                }}
              >
                <h2 className="text-4xl font-semibold serif text-white mb-6">
                  Let's Cater for You
                </h2>
                <p className="text-white/90 mb-12 leading-relaxed">
                  Ready to experience catering excellence? Get in touch today.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-white/90 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-white/70 text-sm mb-1">Call Us</p>
                      <a
                        href="tel:0797147002"
                        className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
                      >
                        079 714 7002
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-white/90 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-white/70 text-sm mb-1">
                        Visit Website
                      </p>
                      <a
                        href="https://www.melfinestfood.co.za"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-white/80 transition-colors"
                      >
                        melfinestfood.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-white/90 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-white/70 text-sm mb-1">Location</p>
                      <p className="text-white font-semibold">
                        Platinum Village
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - CTA */}
              <div className="lg:col-span-3 p-12 flex flex-col justify-center">
                <h3
                  className="text-3xl font-semibold serif mb-4"
                  style={{ color: "var(--forest)" }}
                >
                  Ready to Get Started?
                </h3>
                <p className="text-charcoal/80 mb-8 text-lg leading-relaxed">
                  Whether you need daily corporate meals or comprehensive school
                  cafeteria services, we're here to serve excellence.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:0797147002"
                    className="block w-full px-8 py-4 text-center rounded-full text-white font-semibold shadow-xl hover:scale-105 transition-all"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--teal) 0%, var(--forest) 100%)",
                    }}
                  >
                    Call Now: 079 714 7002
                  </a>

                  <a
                    href="https://www.melfinestfood.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-8 py-4 text-center rounded-full border-2 font-semibold hover:bg-forest hover:text-white transition-all"
                    style={{
                      borderColor: "var(--forest)",
                      color: "var(--forest)",
                    }}
                  >
                    Visit Our Website
                  </a>
                </div>

                <div
                  className="mt-8 pt-8 border-t"
                  style={{ borderColor: "var(--cream)" }}
                >
                  <p className="text-sm text-charcoal/60 text-center">
                    Join hundreds of satisfied clients who trust Mel's Finest
                    Foods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12"
        style={{ background: "var(--charcoal)", color: "white" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal to-forest rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold serif">M</span>
              </div>
              <div>
                <p className="font-bold">Mel's Finest Foods</p>
                <p className="text-sm text-white/70">
                  Fueling Work. Feeding Futures.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70">
              © 2026 Mel's Finest Foods. All rights reserved. | 100% Women-Owned
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
