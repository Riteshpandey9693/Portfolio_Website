import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-black/95 to-black">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Get in Touch</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Contact Me</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`${inView ? 'animate-slide-in' : 'opacity-0'}`}>
            <div className="glass-panel rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Email</h4>
                    <a href="mailto:pandeyritesh9693@gmail.com" className="text-white/70 hover:text-primary transition-colors">
                      pandeyritesh9693@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Phone</h4>
                    <a href="tel:+919693808905" className="text-white/70 hover:text-primary transition-colors">
                      +91 9693808905
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-white text-sm font-medium mb-4">Social Profiles</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Riteshpandey9693"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/riteshkumarpandey9693/"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
              
              <div className="mt-12">
                <a
                  href="https://drive.google.com/file/d/1-27r9D9yOwsLNwWhnWQlADcb1mMm_a2i/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded-md bg-primary hover:bg-primary/90"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`${inView ? 'animate-slide-in delay-200' : 'opacity-0'}`}>
            <div className="glass-panel rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-white/80 text-sm mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-white/80 text-sm mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-white/80 text-sm mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-md bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
