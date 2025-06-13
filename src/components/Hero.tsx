
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, Code, Laptop, Zap } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const dynamicTexts = [
    "Frontend Developer",
    "React Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Text rotation effect
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Enhanced Overlay with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/85 to-black/90"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'slideGrid 20s linear infinite'
        }}></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code
          size={24}
          className="absolute top-1/4 left-1/4 text-primary/30 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <Laptop
          size={28}
          className="absolute top-1/3 right-1/3 text-blue-400/25 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <Zap
          size={20}
          className="absolute bottom-1/3 left-1/3 text-primary/40 animate-float"
          style={{ animationDelay: '4s' }}
        />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-blue-400/40 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-6 sm:px-8 lg:px-12 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

            {/* Left Content - Text */}
            <div className="space-y-8 text-center lg:text-left">

              {/* Greeting with slide-in animation */}
              <div
                className={`inline-flex items-center space-x-3 ${isLoaded ? 'animate-slide-in' : 'opacity-0 -translate-x-8'}`}
                style={{ animationDelay: '200ms' }}
              >
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-primary text-lg font-medium tracking-wider">Hello there, I'm</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary"></div>
              </div>

              {/* Name with enhanced styling and slide-in */}
              <div
                className={`space-y-2 ${isLoaded ? 'animate-slide-in' : 'opacity-0 -translate-x-8'}`}
                style={{ animationDelay: '400ms' }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  <span className="block">Ritesh Kumar</span>
                  <span className="block bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Pandey
                  </span>
                </h1>
              </div>

              {/* Dynamic role text with smooth transitions */}
              <div
                className={`${isLoaded ? 'animate-slide-in' : 'opacity-0 -translate-x-8'}`}
                style={{ animationDelay: '600ms' }}
              >
                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">
                    I'm a{' '}
                    <span className="text-primary font-medium transition-all duration-700 transform inline-block">
                      {dynamicTexts[currentText]}
                    </span>
                  </p>
                </div>
              </div>

              {/* Enhanced description */}
              <div
                className={`${isLoaded ? 'animate-slide-in' : 'opacity-0 -translate-x-8'}`}
                style={{ animationDelay: '800ms' }}
              >
                <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Passionate about crafting{' '}
                  <span className="text-primary font-medium">exceptional digital experiences</span> with{' '}
                  <span className="text-blue-400 font-medium">modern technologies</span>.
                  <br />
                  Specializing in React, Full Stack Development & UI/UX Design.
                </p>
              </div>

              {/* CTA buttons with staggered animation */}
              <div
                className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 ${isLoaded ? 'animate-slide-in' : 'opacity-0 -translate-x-8'}`}
                style={{ animationDelay: '1000ms' }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center h-14 px-8 font-medium tracking-wide text-white transition-all duration-300 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/25 hover:scale-105 transform w-full sm:w-auto"
                >
                  <Mail size={20} className="mr-2" />
                  Let's Connect
                  <ArrowDown size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://drive.google.com/file/d/1-27r9D9yOwsLNwWhnWQlADcb1mMm_a2i/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center h-14 px-8 font-medium tracking-wide text-white transition-all duration-300 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm hover:scale-105 transform shadow-lg w-full sm:w-auto"
                >
                  <Download size={20} className="mr-2" />
                  Resume
                </a>
              </div>

              {/* Social links with slide-in animation */}
              <div
                className={`flex items-center justify-center lg:justify-start space-x-4 pt-6 ${isLoaded ? 'animate-slide-in' : 'opacity-0 -translate-x-8'}`}
                style={{ animationDelay: '1200ms' }}
              >
                <a
                  href="https://github.com/Riteshpandey9693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-primary/20 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 transform"
                >
                  <Github size={20} className="text-white hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/ritesh-kumar-pandey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-110 transform"
                >
                  <Linkedin size={20} className="text-white hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="mailto:padeyritesh9693@gmail.com"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-primary/20 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 transform"
                >
                  <Mail size={20} className="text-white hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div
                className={`relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: '1400ms' }}
              >
                {/* Main card */}
                <div className="relative w-80 h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                  {/* Content inside card */}
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-2xl flex items-center justify-center mb-6">
                        <Code size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Frontend Developer</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Creating modern, responsive web applications with cutting-edge technologies and best practices.
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full border-2 border-white/20"></div>
                        <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white/20"></div>
                        <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white/20"></div>
                      </div>
                      <span className="text-white/60 text-xs">React • TypeScript • Tailwind</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements around card */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-full animate-pulse-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400/15 to-primary/15 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60 hover:text-white transition-all duration-300 group ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ animationDelay: '1600ms' }}
      >
        <span className="text-sm mb-3 font-light tracking-wider">Scroll to explore</span>
        <div className="flex flex-col items-center space-y-1">
          <ArrowDown size={20} className="animate-bounce group-hover:translate-y-1 transition-transform" />
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </a>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-primary/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Hero;
