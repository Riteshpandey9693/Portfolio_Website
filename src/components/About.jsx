
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const tabs = [
  {
    id: 'education',
    label: 'Education',
    content: [
      { year: '2021 - 2024', title: 'B.Sc. at VKSU 🎓' },
      { year: '2024 - 2026', title: 'MCA from VKSU (pursuing)' }
    ]
  },
  {
    id: 'certificates',
    label: 'Certificates',
    content: [
      { 
        year: '2023', 
        title: 'Delta (Full Stack Web Dev) - Apna College', 
        link: 'https://drive.google.com/file/d/1uscXHjOoXyvjOab__nB6mIFGRl49TCN-/view'
      },
      { 
        year: '2023', 
        title: 'Alpha (Java + DSA) - Apna College', 
        link: 'https://drive.google.com/file/d/1CoASST1drfYMSlZViyhd2QqXsvwtKRXV/view'
      },
    ]
  },
  {
    id: 'experience',
    label: 'Experience',
    content: [
      { year: 'Present', title: 'Fresher', link: '' },
      { year: '', title: 'Looking for Opportunity to Contribute in Projects' },
    ]
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState('certificates');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <section id="about" className="section-padding bg-black">
      <div className="container mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`relative ${inView ? 'animate-slide-in' : 'opacity-0'}`}>
            <div className="rounded-3xl overflow-hidden mb-4 transition-transform duration-500 hover:scale-105 transform shadow-xl">
              <img 
                src="/lovable-uploads/cf713ad0-3ecb-49b2-b215-963ec7b2ff77.png" 
                alt="Ritesh Kumar Pandey" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-64 h-32 bg-primary/5 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
          </div>
          
          <div className={`${inView ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">About me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Passionate about creating impactful digital experiences</h2>
            
            <p className="text-white/70 mb-8">
              I am a dedicated UI/UX designer and developer with a passion for creating clean, intuitive, and user-friendly interfaces. 
              My goal is to blend aesthetics with functionality to deliver exceptional digital experiences that not only look 
              beautiful but also solve real-world problems effectively.
            </p>
            
            {/* Tabs */}
            <div className="mb-6">
              <div className="flex space-x-6 border-b border-white/10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 relative text-sm font-medium transition-colors ${
                      activeTab === tab.id 
                        ? 'text-primary' 
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="py-6">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`space-y-4 ${activeTab === tab.id ? 'block' : 'hidden'}`}
                  >
                    {tab.content.map((item, index) => (
                      <div key={index} className="flex">
                        {item.year && (
                          <span className="text-primary/80 font-medium w-24 flex-shrink-0">{item.year}</span>
                        )}
                        <div>
                          <span className="text-white">{item.title}</span>
                          {item.link && (
                            <a 
                              href={item.link} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-sm text-primary hover:underline mt-1"
                            >
                              View Certificate
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 hover:scale-105 transform transition-all rounded-md"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1-27r9D9yOwsLNwWhnWQlADcb1mMm_a2i/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-medium text-white/90 bg-white/5 hover:bg-white/10 hover:scale-105 transform transition-all rounded-md border border-white/10"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
