import { useState } from 'react';
import { 
  FaGlobe, 
  FaMobileAlt, 
  FaPalette, 
  FaCloud, 
  FaTools, 
  FaRocket,
  FaBolt,
  FaLock,
  FaDollarSign,
  FaHeadset,
  FaStar,
  // FaEnvelope,
  // FaPhone,
  FaFacebookF,
  // FaTwitter,
  // FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiMongodb, SiAmazon, SiDocker, SiNextdotjs, SiMysql, SiPostgresql, SiVuedotjs, SiAngular } from 'react-icons/si';
import logo from '../../assets/logo.svg';
import heroBannerVideo from '../../assets/home_banner_video.mp4';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      role: "clothings Brand Owner",
      content: "The mobile app they developed exceeded our expectations. Highly recommend their services for anyone looking for quality development.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "startup owner",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center">
                <img src={logo} alt="CodzUp Logo" className="h-10 md:h-12 w-[100px] md-w-auto" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium text-base">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium text-base">Services</a>
              <a href="#process" className="text-gray-700 hover:text-primary transition-colors font-medium text-base">Process</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors font-medium text-base">Testimonials</a>
              <a 
                href="https://wa.me/6284563903?text=Hi!%20I%E2%80%99m%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-5 py-2.5 rounded-full hover:bg-lime-400 transition-all duration-300 font-bold text-base inline-flex items-center gap-2 shadow-lg animate-pulse border-2 border-secondary/50"
              >
                <FaHeadset className="text-lg" />
                Talk to Our Team
              </a>
              <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-purple-800 transition-all duration-300 font-medium text-base inline-flex items-center gap-2">
                Get Started
                <FaRocket className="text-sm" />
              </a>
            </div>

            {/* Mobile Menu Button and Talk to Team */}
            <div className="flex md:hidden items-center gap-2">
              <a 
                href="https://wa.me/6284563903?text=Hi!%20I%E2%80%99m%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-4 py-2 rounded-full hover:bg-lime-400 transition-all duration-300 font-bold text-sm inline-flex items-center gap-2 shadow-lg animate-pulse border-2 border-secondary/50"
              >
                <FaHeadset className="text-base" />
                Talk to Us
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">Services</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">Process</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">Testimonials</a>
              <a 
                href="https://wa.me/6284563903?text=Hi!%20I%E2%80%99m%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary text-primary px-6 py-3 rounded-full hover:bg-lime-400 transition-colors font-bold text-center shadow-lg border-2 border-secondary/50"
              >
                <FaHeadset className="text-lg" />
                Talk to Our Team
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block bg-primary text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors font-medium text-center">
                Get Started
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={heroBannerVideo} type="video/mp4" />
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#111828]/80 z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Special Offer Badge */}
            {/* <div className="inline-flex items-center gap-3 bg-secondary text-primary px-4 md:px-6 py-3 md:py-4 rounded-full mb-6 md:mb-8 animate-pulse shadow-lg">
              <FaGift className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base font-bold">LIMITED OFFER: 100% OFF Your First Website!</span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-[45px] leading-[63px] font-[700] md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Transform Your Business with
              <span className="text-secondary "> Powerful</span>
              <span className="text-white"> IT Solutions</span>
            </h1>

            <p className="text-md md:text-xl text-purple-100 mb-8 md:mb-12 leading-relaxed">
              We build stunning websites, mobile apps, and cloud solutions that help your business grow. 
              Professional quality, competitive prices, exceptional results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            </div>

            {/* Talk to Our Team Button */}
            <div className="mt-8 md:mt-10">
              <a
                href="https://wa.me/6284563903?text=Hi!%20I%E2%80%99m%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-white/20 transition-all transform hover:scale-110 shadow-2xl animate-pulse border-2 border-white/50"
              >
                <FaHeadset className="text-2xl" />
                Talk to Our Team
              </a>
            </div>

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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-10 pb-10 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100"
                >
                  <div className="w-16 h-16 mx-auto md:w-20 md:h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="text-3xl md:text-4xl text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Why Choose <span className="text-secondary">CodzUp</span>?
            </h2>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
              We deliver excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="text-3xl md:text-4xl text-secondary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-purple-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="process" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering successful projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-lime-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all">
                  <div className="text-5xl md:text-6xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-primary">Technologies</span> We Use
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for modern solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl text-center hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 flex items-center justify-center">
                    <IconComponent className="text-4xl md:text-5xl text-primary" />
                  </div>
                  <div className="font-bold text-lg md:text-xl text-gray-900 mb-2">{tech.name}</div>
                  <div className="text-xs md:text-sm text-primary font-medium">{tech.category}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-purple-100"
              >
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-secondary text-lg md:text-xl" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">{faq.question}</span>
                  <FaChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 text-primary transition-transform flex-shrink-0 ${openFAQ === index ? 'transform rotate-180' : ''}`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 md:px-8 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="w-full py-16 md:py-24 bg-gradient-to-br from-primary via-purple-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-3 bg-secondary text-primary px-4 md:px-6 py-3 md:py-4 rounded-full mb-6 md:mb-8 font-bold animate-bounce">
              <FaRocket className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base">Limited Time Offer - Act Now!</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-8 md:mb-12">
              Get your first website absolutely FREE! No hidden costs, no commitments. 
              Let's build something amazing together.
            </p>
          </div>

          {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 mb-8 md:mb-12">
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 md:px-6 py-3 md:py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 md:px-6 py-3 md:py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-secondary text-primary px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-lime-400 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Claim Your Free Website Now!
                <FaGift className="text-xl" />
              </button>
            </form>
          </div> */}

          {/* Talk to Our Team Button - Highlighted */}
          <div className="mb-8 md:mb-12">
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

          {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 text-sm md:text-base">
            <a href="mailto:hello@codzup.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FaEnvelope className="text-lg" />
              <span>hello@codzup.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FaPhone className="text-lg" />
              <span>+1 (234) 567-890</span>
            </a>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              <svg className='mx-auto' width="240" height="68" viewBox="0 0 240 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.735 34.379C12.735 36.255 13.3603 37.729 14.611 38.801C15.8617 39.8283 17.1793 40.342 18.564 40.342C19.9933 40.342 21.311 39.94 22.517 39.136C23.7677 38.2873 24.7727 37.863 25.532 37.863C26.872 37.863 28.5023 39.0467 30.423 41.414C31.4503 42.7093 31.964 43.8707 31.964 44.898C31.964 46.5953 30.7357 48.181 28.279 49.655C25.733 51.4417 22.6063 52.335 18.899 52.335C14.745 52.335 10.7473 50.8387 6.906 47.846C5.07467 46.4167 3.57833 44.5183 2.417 42.151C1.25567 39.739 0.675 37.1037 0.675 34.245C0.675 31.3417 1.25567 28.7287 2.417 26.406C3.57833 24.0387 5.07467 22.1403 6.906 20.711C10.6133 17.763 14.5663 16.289 18.765 16.289C20.4623 16.289 22.115 16.5347 23.723 17.026C25.331 17.4727 26.5147 17.9193 27.274 18.366L28.346 19.036C29.15 19.572 29.7753 19.9963 30.222 20.309C31.3833 21.2023 31.964 22.2297 31.964 23.391C31.964 24.5077 31.495 25.7807 30.557 27.21C28.949 29.6667 27.408 30.895 25.934 30.895C25.0853 30.895 23.8793 30.4037 22.316 29.421C21.512 28.6617 20.3507 28.282 18.832 28.282C17.358 28.282 15.9733 28.818 14.678 29.89C13.3827 30.962 12.735 32.4583 12.735 34.379ZM35.2873 34.379C35.2873 29.019 37.1633 24.597 40.9153 21.113C44.6673 17.629 48.9553 15.887 53.7793 15.887C58.6033 15.887 62.869 17.629 66.5763 21.113C70.2836 24.5523 72.1373 28.952 72.1373 34.312C72.1373 38.0193 71.177 41.3247 69.2563 44.228C67.3356 47.0867 64.9906 49.2083 62.2213 50.593C59.4966 51.933 56.6603 52.603 53.7123 52.603C50.7643 52.603 47.9056 51.8883 45.1363 50.459C42.367 48.985 40.022 46.841 38.1013 44.027C36.2253 41.1683 35.2873 37.9523 35.2873 34.379ZM49.2903 39.203C50.7196 40.275 52.1713 40.811 53.6453 40.811C55.1193 40.811 56.5933 40.2527 58.0673 39.136C59.5413 38.0193 60.2783 36.3667 60.2783 34.178C60.2783 31.9893 59.586 30.359 58.2013 29.287C56.8166 28.215 55.3203 27.679 53.7123 27.679C52.1043 27.679 50.608 28.2373 49.2233 29.354C47.8386 30.4707 47.1463 32.1233 47.1463 34.312C47.1463 36.456 47.861 38.0863 49.2903 39.203ZM100.117 2.018C100.474 1.348 101.077 0.878998 101.926 0.610999C102.775 0.342997 103.891 0.208996 105.276 0.208996C106.705 0.208996 107.844 0.342997 108.693 0.610999C109.542 0.878998 110.122 1.348 110.435 2.018C110.792 2.688 110.993 3.291 111.038 3.827C111.127 4.31833 111.172 5.07767 111.172 6.105V46.104C111.172 47.1313 111.127 47.913 111.038 48.449C110.993 48.9403 110.792 49.4987 110.435 50.124C109.765 51.33 107.867 51.933 104.74 51.933C101.658 51.933 99.9385 50.8387 99.5811 48.65C97.7051 50.794 95.0921 51.866 91.7421 51.866C87.7221 51.866 84.0595 50.124 80.7541 46.64C77.4488 43.1113 75.7961 39.0243 75.7961 34.379C75.7961 29.689 77.4488 25.5797 80.7541 22.051C84.1041 18.5223 87.7668 16.758 91.7421 16.758C95.0475 16.758 97.6158 17.8747 99.4471 20.108V6.038C99.4471 5.01066 99.4695 4.25133 99.5141 3.76C99.6035 3.224 99.8045 2.64333 100.117 2.018ZM89.2631 38.399C90.4245 39.605 91.8315 40.208 93.4841 40.208C95.1368 40.208 96.4991 39.605 97.5711 38.399C98.6878 37.193 99.2461 35.8753 99.2461 34.446C99.2461 32.972 98.7101 31.6097 97.6381 30.359C96.6108 29.1083 95.2038 28.483 93.4171 28.483C91.6305 28.483 90.2011 29.1083 89.1291 30.359C88.0571 31.565 87.5211 32.905 87.5211 34.379C87.5211 35.853 88.1018 37.193 89.2631 38.399ZM134.13 40.208H145.587C147.374 40.208 148.647 40.4313 149.406 40.878C150.21 41.3247 150.746 41.9723 151.014 42.821C151.282 43.6697 151.416 44.7863 151.416 46.171C151.416 47.5557 151.282 48.6723 151.014 49.521C150.746 50.3697 150.277 50.9727 149.607 51.33C148.937 51.6427 148.334 51.8437 147.798 51.933C147.307 51.9777 146.547 52 145.52 52H121.333C119.77 52 118.407 51.4193 117.246 50.258C116.085 49.0967 115.504 47.712 115.504 46.104C115.504 44.496 116.085 43.1337 117.246 42.017C118.407 40.8557 120.194 39.203 122.606 37.059C125.018 34.915 127.207 32.9943 129.172 31.297C131.137 29.555 132.209 28.5947 132.388 28.416H122.941C120.395 28.416 118.787 27.9917 118.117 27.143C117.358 26.1603 116.978 24.865 116.978 23.257C116.978 21.649 117.09 20.4653 117.313 19.706C117.536 18.902 117.804 18.3213 118.117 17.964C118.43 17.562 118.876 17.2493 119.457 17.026C120.216 16.8027 121.378 16.691 122.941 16.691H144.716C146.279 16.691 147.642 17.2493 148.803 18.366C149.964 19.4827 150.545 20.8897 150.545 22.587C150.545 24.2397 149.875 25.7137 148.535 27.009C147.195 28.3043 142.393 32.704 134.13 40.208Z" fill="#fff"/>
<path d="M187.86 4.698C188.307 3.98333 188.954 3.492 189.803 3.224C190.652 2.956 191.701 2.822 192.952 2.822C194.247 2.822 195.275 2.93366 196.034 3.157C196.793 3.38033 197.374 3.64833 197.776 3.961C198.178 4.27366 198.468 4.74266 198.647 5.368C198.915 6.12733 199.049 7.28866 199.049 8.852V29.086C199.049 34.982 197.218 40.342 193.555 45.166C191.768 47.444 189.468 49.2977 186.654 50.727C183.84 52.1117 180.713 52.804 177.274 52.804C173.879 52.804 170.775 52.0893 167.961 50.66C165.192 49.2307 162.936 47.3547 161.194 45.032C157.576 40.2973 155.767 34.9373 155.767 28.952V8.785C155.767 7.713 155.789 6.93133 155.834 6.44C155.923 5.904 156.147 5.301 156.504 4.631C156.861 3.961 157.464 3.492 158.313 3.224C159.162 2.956 160.301 2.822 161.73 2.822C163.159 2.822 164.298 2.956 165.147 3.224C165.996 3.492 166.576 3.961 166.889 4.631C167.425 5.65833 167.693 7.06533 167.693 8.852V28.952C167.693 31.6767 168.363 34.2673 169.703 36.724C170.373 37.9747 171.378 38.9797 172.718 39.739C174.058 40.4983 175.644 40.878 177.475 40.878C180.736 40.878 183.17 39.672 184.778 37.26C186.386 34.848 187.19 32.0563 187.19 28.885V8.383C187.19 6.641 187.413 5.41266 187.86 4.698ZM204.381 61.581V22.453C204.381 21.4257 204.404 20.6663 204.448 20.175C204.538 19.6837 204.739 19.1253 205.051 18.5C205.677 17.294 207.173 16.691 209.54 16.691C211.908 16.691 213.493 17.0037 214.297 17.629C215.146 18.2097 215.637 19.0807 215.771 20.242C217.469 17.9193 220.126 16.758 223.744 16.758C227.407 16.758 230.869 18.4777 234.129 21.917C237.39 25.3563 239.02 29.354 239.02 33.91C239.02 38.466 237.39 42.4637 234.129 45.903C230.913 49.3423 227.474 51.062 223.811 51.062C220.149 51.062 217.491 50.0347 215.838 47.98V61.514C215.838 62.5413 215.794 63.3007 215.704 63.792C215.66 64.2833 215.459 64.8417 215.101 65.467C214.789 66.137 214.23 66.606 213.426 66.874C212.622 67.142 211.528 67.276 210.143 67.276C208.759 67.276 207.642 67.142 206.793 66.874C205.989 66.606 205.409 66.1593 205.051 65.534C204.739 64.9087 204.538 64.3503 204.448 63.859C204.404 63.3677 204.381 62.6083 204.381 61.581ZM217.647 30.024C216.62 31.23 216.106 32.5477 216.106 33.977C216.106 35.4063 216.62 36.724 217.647 37.93C218.719 39.0913 220.059 39.672 221.667 39.672C223.32 39.672 224.705 39.0913 225.821 37.93C226.983 36.7687 227.563 35.451 227.563 33.977C227.563 32.503 227.027 31.1853 225.955 30.024C224.883 28.818 223.476 28.215 221.734 28.215C220.037 28.215 218.675 28.818 217.647 30.024Z" fill="#C4E729"/>
</svg>

              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Your trusted partner for web development, mobile apps, and cloud solutions. 
                We turn ideas into reality with cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-secondary transition-colors">Process</a></li>
                <li><a href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4 justify-center">
                <a href="https://www.facebook.com/share/1Jr5arqiv4/" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" aria-label="Facebook">
                  <FaFacebookF className="text-lg" />
                </a>
                {/* <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" aria-label="Twitter">
                  <FaTwitter className="text-lg" />
                </a> */}
                {/* <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" aria-label="LinkedIn">
                  <FaLinkedinIn className="text-lg" />
                </a> */}
                <a href="https://www.instagram.com/codzup?igsh=MXNib2g4eXNrNXEz" target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" aria-label="Instagram">
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm md:text-base text-gray-400">
            <p>&copy; 2025 CodzUp. All rights reserved. Built with <span className="text-red-500">❤️</span> and cutting-edge technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

