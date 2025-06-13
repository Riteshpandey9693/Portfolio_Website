import { useState } from 'react';
import { Send, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Get in Touch</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Contact Me</h2>
          
          <p className="text-white/70 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or would like to work together.
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className={`${inView ? 'animate-slide-in' : 'opacity-0'}`}>
            <div className="glass-panel rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:pandeyritesh9693@gmail.com"
                      className="text-white/70 text-sm break-all hover:text-primary transition-colors"
                    >
                      pandeyritesh9693@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+919693808905"
                      className="text-white/70 text-sm hover:text-primary transition-colors"
                    >
                      +91 9693808905
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/riteshkumarpandey9693/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:scale-110 transform transition-all flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://github.com/Riteshpandey9693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:scale-110 transform transition-all flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="mailto:pandeyritesh9693@gmail.com"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:scale-110 transform transition-all flex items-center justify-center"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="mt-10">
                <a
                  href="https://drive.google.com/file/d/1-27r9D9yOwsLNwWhnWQlADcb1mMm_a2i/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded-md bg-white/5 hover:bg-white/10 hover:scale-105 transform border border-white/10"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`${inView ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            <form 
              onSubmit={handleSubmit}
              className="glass-panel rounded-2xl p-8 h-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-md text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-md text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-md text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    required
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex items-center justify-center w-full h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded-md bg-primary hover:bg-primary/90 hover:scale-105 transform disabled:bg-primary/70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
              
              {submitMessage && (
                <div className="mt-4 p-3 bg-primary/20 text-primary rounded-md text-center">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
