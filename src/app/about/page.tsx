import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FaRocket, FaBullseye, FaHeart, FaUsers, FaAward, FaLightbulb, FaHandshake, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About Us - Expert Software Development Team',
  description: 'Learn about CodzUp, a leading software development company. Our mission is to transform businesses with innovative web development, mobile apps, and cloud solutions.',
  keywords: ['about codzup', 'software development team', 'web development company', 'software company', 'IT company', 'tech team'],
  openGraph: {
    title: 'About Us - Expert Software Development Team | CodzUp',
    description: 'Learn about CodzUp, a leading software development company. Our mission is to transform businesses with innovative technology solutions.',
    type: 'website',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems."
    },
    {
      icon: FaHeart,
      title: "Quality",
      description: "We're committed to delivering exceptional quality in every line of code we write."
    },
    {
      icon: FaHandshake,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices are at the core of everything we do."
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "We believe in working closely with our clients as partners in their success."
    }
  ];

  const achievements = [
    {
      icon: FaAward,
      number: "50+",
      title: "Projects Completed",
      description: "Successfully delivered diverse projects across industries"
    },
    {
      icon: FaUsers,
      number: "45+",
      title: "Happy Clients",
      description: "Building long-term relationships with satisfied clients"
    },
    {
      icon: FaClock,
      number: "5+",
      title: "Years Experience",
      description: "Proven track record in software development"
    },
    {
      icon: FaRocket,
      number: "98%",
      title: "Client Satisfaction",
      description: "Consistently exceeding client expectations"
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
                About <span className="text-secondary">CodzUp</span>
              </h1>
              <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
                We&apos;re a passionate team of developers, designers, and innovators dedicated to transforming 
                businesses through cutting-edge technology solutions. Our mission is to make premium software 
                development accessible and deliver exceptional results that drive growth.
              </p>
            </article>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <article>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our <span className="text-primary">Story</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Founded in 2020, CodzUp emerged from a simple yet powerful vision: to bridge the gap 
                    between innovative technology and businesses of all sizes. We recognized that many 
                    companies struggled to access high-quality software development services, often facing 
                    prohibitive costs or unreliable providers.
                  </p>
                  <p>
                    Starting as a small team of dedicated developers, we&apos;ve grown into a full-service 
                    software development company. Today, we serve clients worldwide, from ambitious startups 
                    to established enterprises, helping them leverage technology to achieve their business goals.
                  </p>
                  <p>
                    Our success is built on a foundation of technical excellence, transparent communication, 
                    and genuine commitment to our clients&apos; success. Every project we undertake is an 
                    opportunity to showcase our expertise and build lasting relationships.
                  </p>
                </div>
              </article>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-lime-50 rounded-2xl p-8 md:p-12">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaBullseye className="text-2xl text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                        <p className="text-gray-600">
                          To empower businesses with innovative, scalable, and cost-effective technology 
                          solutions that drive growth and create lasting value.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaRocket className="text-2xl text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                        <p className="text-gray-600">
                          To be the most trusted and innovative software development partner, known for 
                          transforming ideas into exceptional digital experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-24 px-4 bg-gray-50" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 id="values-heading" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Our Core <span className="text-primary">Values</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <article
                    key={index}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="text-3xl text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 md:py-24 px-4 bg-white" aria-labelledby="achievements-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12 md:mb-16">
              <h2 id="achievements-heading" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Our <span className="text-primary">Achievements</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <article
                    key={index}
                    className="text-center p-6 md:p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <IconComponent className="text-3xl text-primary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{achievement.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary to-purple-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Why Work With <span className="text-secondary">Us</span>?
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
                We&apos;re not just another software development company. We&apos;re your technology partner, 
                committed to your success every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <article className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
                <p className="text-purple-100 leading-relaxed">
                  Our developers are highly skilled in the latest technologies and best practices, 
                  ensuring your project is built with expertise and care.
                </p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Transparent Process</h3>
                <p className="text-purple-100 leading-relaxed">
                  We believe in open communication. You&apos;ll always know what we&apos;re working on, 
                  when it will be done, and how your budget is being used.
                </p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Ongoing Support</h3>
                <p className="text-purple-100 leading-relaxed">
                  Our relationship doesn&apos;t end at launch. We provide continued support, 
                  maintenance, and guidance to ensure your long-term success.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Now
              </a>
              <a
                href="https://wa.me/6284563903?text=Hi!%20I%E2%80%99m%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-400 transition-all shadow-lg"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

