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
  FaGift,
  FaStar,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiMongodb, SiAmazon, SiDocker, SiNextdotjs } from 'react-icons/si';

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
    {
      icon: FaRocket,
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge technology solutions."
    }
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
    { name: "Node.js", category: "Backend", icon: SiNodedotjs },
    { name: "TypeScript", category: "Language", icon: SiTypescript },
    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "AWS", category: "Cloud", icon: SiAmazon },
    { name: "Docker", category: "DevOps", icon: SiDocker },
    { name: "Next.js", category: "Framework", icon: SiNextdotjs },
    { name: "React Native", category: "Mobile", icon: SiReact }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "CodzUp transformed our outdated website into a modern, high-performing platform. Their professionalism and expertise are unmatched!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      content: "The mobile app they developed exceeded our expectations. Highly recommend their services for anyone looking for quality development.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BizSolutions",
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
              <a href="#home" className="text-2xl md:text-3xl font-bold text-primary">
                Codz<span className="text-secondary">Up</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium text-base">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium text-base">Services</a>
              <a href="#process" className="text-gray-700 hover:text-primary transition-colors font-medium text-base">Process</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors font-medium text-base">Testimonials</a>
              <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-purple-800 transition-all duration-300 font-medium text-base inline-flex items-center gap-2">
                Get Started
                <FaRocket className="text-sm" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">Services</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">Process</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-primary transition-colors font-medium py-2">Testimonials</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block bg-primary text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors font-medium text-center">
                Get Started
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 bg-gradient-to-br from-purple-50 via-white to-lime-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Special Offer Badge */}
            <div className="inline-flex items-center gap-3 bg-secondary/20 text-primary px-4 md:px-6 py-3 md:py-4 rounded-full mb-6 md:mb-8 animate-pulse">
              <FaGift className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base font-bold">LIMITED OFFER: 100% OFF Your First Website!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Transform Your Business with
              <span className="text-primary"> Powerful</span>
              <span className="text-secondary"> IT Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 leading-relaxed">
              We build stunning websites, mobile apps, and digital solutions that help your business grow. 
              Professional quality, competitive prices, exceptional results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Claim Your Free Website →
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto bg-white text-primary px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold hover:bg-gray-50 transition-all border-2 border-primary"
              >
                View Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
                <div className="text-sm md:text-base text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 bg-white">
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
                  <div className="text-5xl md:text-6xl font-bold text-secondary/30 mb-4">{step.number}</div>
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
                <div className="flex gap-1 mb-4">
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

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 text-sm md:text-base">
            <a href="mailto:hello@codzup.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FaEnvelope className="text-lg" />
              <span>hello@codzup.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FaPhone className="text-lg" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Codz<span className="text-secondary">Up</span>
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Your trusted partner for web development, mobile apps, and digital solutions. 
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
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" aria-label="Facebook">
                  <FaFacebookF className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" aria-label="Twitter">
                  <FaTwitter className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" aria-label="LinkedIn">
                  <FaLinkedinIn className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all" aria-label="Instagram">
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

