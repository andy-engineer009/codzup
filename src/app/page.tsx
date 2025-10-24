'use client';

import { useState } from 'react';
import { 
  FaGlobe, 
  FaMobileAlt, 
  FaPalette, 
  FaCloud, 
  FaTools,
  FaBolt,
  FaLock,
  FaDollarSign,
  FaHeadset,
  FaStar,
  FaRocket,
  FaChevronDown
} from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiMongodb, SiAmazon, SiDocker, SiNextdotjs, SiMysql, SiPostgresql, SiVuedotjs, SiAngular } from 'react-icons/si';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Offer from '@/components/offer';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const services = [
    {
      icon: FaGlobe,
      title: "Web Development",
      description: "Custom websites built with modern technologies, responsive design, and optimized performance."
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience."
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and drive conversions."
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, deployment, and management for your applications."
    },
    {
      icon: FaTools,
      title: "Maintenance & Support",
      description: "Ongoing technical support, updates, and maintenance to keep your systems running smoothly."
    },
  ];

  const features = [
    {
      icon: FaBolt,
      title: "Lightning Fast",
      description: "Optimized performance for the best user experience"
    },
    {
      icon: FaLock,
      title: "Secure & Reliable",
      description: "Industry-standard security practices and reliable infrastructure"
    },
    {
      icon: FaDollarSign,
      title: "Cost-Effective",
      description: "Premium quality at competitive prices"
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Round-the-clock technical support for your peace of mind"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your business goals, requirements, and target audience."
    },
    {
      number: "02",
      title: "Planning",
      description: "Strategic planning and architecture design for optimal results."
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development with regular updates and transparent communication."
    },
    {
      number: "04",
      title: "Launch",
      description: "Thorough testing, deployment, and post-launch support."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "Vue.js", category: "Frontend", icon: SiVuedotjs },
    { name: "Angular", category: "Frontend", icon: SiAngular },
    { name: "Node.js", category: "Backend", icon: SiNodedotjs },
    { name: "TypeScript", category: "Language", icon: SiTypescript },
    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "MySQL", category: "Database", icon: SiMysql },
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
    { name: "AWS", category: "Cloud", icon: SiAmazon },
    { name: "Docker", category: "DevOps", icon: SiDocker },
    { name: "Next.js", category: "Framework", icon: SiNextdotjs },
    { name: "React Native", category: "Mobile", icon: SiReact }
  ];

  const testimonials = [
    {
      name: "Rohit Choudhary",
      role: "CEO, Dumzoo",
      content: "CodzUp transformed our outdated website into a modern, high-performing platform. Their professionalism and expertise are unmatched!",
      rating: 5
    },
    {
      name: "Rizky Wirawandha",
      role: "Clothings Brand Owner",
      content: "The mobile app they developed exceeded our expectations. Highly recommend their services for anyone looking for quality development.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Owner",
      content: "Outstanding work! They delivered on time, within budget, and the results have significantly improved our online presence.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Timeline varies based on complexity. A basic website takes 2-3 weeks, while complex applications can take 2-3 months. We'll provide a detailed timeline during our consultation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer various maintenance and support packages to ensure your website or app continues to perform optimally. This includes updates, security patches, and technical support."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile methodology with regular client communication. You'll receive updates throughout the project and have opportunities to provide feedback at each milestone."
    },
    {
      question: "Can you work with my existing website?",
      answer: "Absolutely! We can redesign, optimize, or add new features to your existing website or application. We work with various technologies and platforms."
    },
    {
      question: "What makes CodzUp different from other agencies?",
      answer: "We combine technical expertise with a client-first approach. Our focus on communication, quality, and delivering measurable results sets us apart. Plus, our special offers make premium development accessible."
    }
  ];

  // Generate FAQ JSON-LD structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Generate Reviews JSON-LD structured data
  const reviewsJsonLd = testimonials.map(testimonial => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": testimonial.name,
      "jobTitle": testimonial.role
    },
    "reviewBody": testimonial.content,
    "itemReviewed": {
      "@type": "Organization",
      "name": "CodzUp",
      "url": "https://codzup.space"
    }
  }));

  return (
    <>
      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* JSON-LD Structured Data for Reviews */}
      {reviewsJsonLd.map((review, index) => (
        <script
          key={`review-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
        />
      ))}
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            aria-hidden="true"
          >
            <source src="/assets/home_banner_video.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay for better text visibility */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#111828]/80 z-10" aria-hidden="true"></div>
          
          <div className="max-w-7xl mx-auto relative z-20">
            <article className="text-center max-w-4xl mx-auto">
              {/* Main Headline */}
              <h1 className="text-[40px] leading-[63px] font-[700] md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
                We Build Fast,
                <span className="text-secondary"> Modern Websites,</span> 
                <span className="text-white"> Mobile Apps</span> 
                {/* <span className="text-white block"> small businesses</span> */}
              </h1>

              <p className="text-md md:text-xl text-purple-100 mb-8 md:mb-12 leading-relaxed">
                We build stunning websites, mobile apps, and cloud solutions that help your business grow. 
                Professional quality, competitive prices, exceptional results.
              </p>

              {/* CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-primary text-[#fff] px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-lime-400 transition-all transform hover:scale-105 shadow-2xl"
                >
                  Claim Your Free Website →
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto bg-white text-primary px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100 transition-all border-2 border-white shadow-lg"
                >
                  View Our Services
                </a>
              </div> */}

              {/* Talk to Our Team Button */}
              {/* <div className="mt-8 md:mt-10">
                <a
                  href="https://wa.me/6284563903?text=Hi!%20I%E2%80%99m%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-white/20 transition-all transform hover:scale-110 shadow-2xl animate-pulse border-2 border-white/50"
                >
                  <FaHeadset className="text-2xl" />
                  Talk to Our Team
                </a>
              </div> */}

              {/* Trust Indicators */}
              <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-secondary">50+</div>
                  <div className="text-sm md:text-base text-purple-100 mt-1">Projects Delivered</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-secondary">98%</div>
                  <div className="text-sm md:text-base text-purple-100 mt-1">Client Satisfaction</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-secondary">24/7</div>
                  <div className="text-sm md:text-base text-purple-100 mt-1">Support Available</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-secondary">5+</div>
                  <div className="text-sm md:text-base text-purple-100 mt-1">Years Experience</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="pt-10 pb-10 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <article
                    key={index}
                    className="p-6 md:p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 text-center"
                  >
                    <div className="w-16 h-16 mx-auto md:w-20 md:h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
                      <IconComponent className="text-3xl md:text-4xl text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary to-purple-900 text-white" aria-labelledby="why-choose-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 md:mb-16">
              <h2 id="why-choose-us" className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Why Choose <span className="text-secondary">CodzUp</span>?
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
                We deliver excellence in every project
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <article
                    key={index}
                    className="text-center p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 mx-auto" aria-hidden="true">
                      <IconComponent className="text-3xl md:text-4xl text-secondary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-purple-100">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section id="process" className="py-16 md:py-24 px-4 bg-white" aria-labelledby="our-process">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 id="our-process" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                A proven methodology for delivering successful projects
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {process.map((step, index) => (
                <article key={index} className="relative">
                  <div className="bg-gradient-to-br from-purple-50 to-lime-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all text-center">
                    <div className="text-5xl md:text-6xl font-bold text-secondary mb-4" aria-hidden="true">{step.number}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" aria-hidden="true"></div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-16 md:py-24 px-4 bg-gray-50" aria-labelledby="technologies">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 id="technologies" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                <span className="text-primary">Technologies</span> We Use
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Cutting-edge tools and frameworks for modern solutions
              </p>
            </header>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <article
                    key={index}
                    className="bg-white p-6 md:p-8 rounded-xl text-center hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 flex items-center justify-center" aria-hidden="true">
                      <IconComponent className="text-4xl md:text-5xl text-primary" />
                    </div>
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-xs md:text-sm text-primary font-medium">{tech.category}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 px-4 bg-white" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Client <span className="text-primary">Testimonials</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Don&apos;t just take our word for it - hear from our satisfied clients
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-purple-100"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex gap-1 mb-4 justify-center" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-secondary text-lg md:text-xl" aria-hidden="true" />
                    ))}
                  </div>
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    <meta itemProp="worstRating" content="1" />
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic" itemProp="reviewBody">&ldquo;{testimonial.content}&rdquo;</p>
                  <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div className="font-bold text-gray-900" itemProp="name">{testimonial.name}</div>
                    <div className="text-sm text-gray-600" itemProp="jobTitle">{testimonial.role}</div>
                  </div>
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="CodzUp" />
                    <meta itemProp="url" content="https://codzup.space" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 bg-gray-50" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Got questions? We&apos;ve got answers
              </p>
            </header>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    aria-expanded={openFAQ === index}
                  >
                    <span className="font-semibold text-gray-900 text-base md:text-lg pr-4" itemProp="name">{faq.question}</span>
                    <FaChevronDown
                      className={`w-5 h-5 md:w-6 md:h-6 text-primary transition-transform flex-shrink-0 ${openFAQ === index ? 'transform rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div 
                    className={`px-6 md:px-8 pb-5 md:pb-6 text-gray-600 leading-relaxed ${openFAQ === index ? '' : 'hidden'}`}
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="w-full py-16 md:py-24 bg-gradient-to-br from-primary via-purple-800 to-purple-900 text-white" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-3 bg-secondary text-primary px-4 md:px-6 py-3 md:py-4 rounded-full mb-6 md:mb-8 font-bold animate-bounce">
                <FaRocket className="text-xl md:text-2xl" />
                <span className="text-sm md:text-base">Limited Time Offer - Act Now!</span>
              </div>
              <h2 id="cta-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-purple-100 mb-8 md:mb-12">
                Get your first website absolutely FREE! No hidden costs, no commitments. 
                Let&apos;s build something amazing together.
              </p>
            </header>

            {/* Talk to Our Team Button - Highlighted */}
            <div className="mb-8 md:mb-12 text-center">
              <a
                href="https://wa.me/6284563903?text=Hi!%20I%E2%80%99m%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-secondary text-primary px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold hover:bg-lime-400 transition-all transform hover:scale-110 shadow-2xl animate-pulse border-4 border-lime-300"
              >
                <FaHeadset className="text-2xl md:text-3xl" />
                Talk to Our Team
              </a>
            </div>
    </div>
        </section>
      </main>

      <Footer />
      <Offer />
    </>
  );
}
