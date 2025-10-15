'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - Replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Redirect to WhatsApp as backup
      window.open(`https://wa.me/6284563903?text=Hi!%20My%20name%20is%20${formData.name}.%20${formData.message}`, '_blank');
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+62 845-6390-3",
      link: "https://wa.me/6284563903",
      description: "Chat with us anytime"
    },
    // {
    //   icon: FaEnvelope,
    //   title: "Email",
    //   value: "hello@codzup.com",
    //   link: "mailto:hello@codzup.com",
    //   description: "Send us an email"
    // },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+62 845-6390-3",
      link: "tel:+6284563903",
      description: "Call us directly"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Mohali, Punjab, India",
      link: null,
      description: "We serve clients globally"
    }
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      name: "Facebook",
      link: "https://www.facebook.com/share/1Jr5arqiv4/"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      link: "https://www.instagram.com/codzup?igsh=MXNib2g4eXNrNXEz"
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      link: "https://wa.me/6284563903"
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 bg-gradient-to-br from-primary via-purple-800 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto">
            <article className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
                Get in <span className="text-secondary">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
                Have a project in mind? Let&apos;s discuss how we can help transform your ideas into reality. 
                We&apos;re here to answer your questions and start your digital journey.
              </p>
            </article>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <article
                    key={index}
                    className="text-center p-6 md:p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-all"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <IconComponent className="text-3xl text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{info.description}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary font-semibold hover:text-purple-800 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-primary font-semibold">{info.value}</p>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Send Us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Fill out the form below and we&apos;ll get back to you within 24 hours. 
                  For urgent inquiries, please contact us directly via WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      Something went wrong. Please try again or contact us directly via WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <FaPaperPlane className="text-lg" />
                  </button>
                </form>
              </div>

              {/* Additional Info & Map */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-primary to-purple-900 text-white p-8 md:p-10 rounded-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Prefer to Chat?
                  </h3>
                  <p className="text-purple-100 mb-8 leading-relaxed">
                    Connect with us on WhatsApp for instant responses and direct communication with our team.
                  </p>
                  <a
                    href="https://wa.me/6284563903?text=Hi!%20I%E2%80%99m%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-400 transition-all shadow-lg w-full justify-center"
                  >
                    <FaWhatsapp className="text-2xl" />
                    Chat on WhatsApp
                  </a>
                </div>

      

                {/* Social Links */}
                <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-10 rounded-2xl border border-purple-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Follow Us
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Stay updated with our latest projects, tips, and industry insights.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                          aria-label={`Follow us on ${social.name}`}
                        >
                          <IconComponent className="text-xl" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Section */}
        <section className="py-16 md:py-24 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Have Questions?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Check out our FAQ section or contact us directly. We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#faq"
                className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all border-2 border-primary shadow-lg"
              >
                View FAQs
              </a>
              <a
                href="/"
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-800 transition-all shadow-lg"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

