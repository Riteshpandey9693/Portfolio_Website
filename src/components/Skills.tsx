
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillItem {
  name: string;
  icon: string;
  description: string;
  category: string;
}

const skills: SkillItem[] = [
  {
    name: "HTML",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    description: "Semantic markup language for structuring web content with accessibility best practices.",
    category: "Frontend"
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    description: "Modern styling language for creating responsive and visually appealing interfaces.",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    description: "Dynamic programming language for interactive web applications and modern development.",
    category: "Frontend"
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    description: "Component-based JavaScript library for building dynamic user interfaces.",
    category: "Frontend"
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    description: "Popular CSS framework for rapid responsive web development.",
    category: "Framework"
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    description: "Utility-first CSS framework for creating custom designs efficiently.",
    category: "Framework"
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    description: "JavaScript runtime for building scalable server-side applications.",
    category: "Backend"
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    description: "Fast and minimalist web framework for Node.js applications.",
    category: "Backend"
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    description: "NoSQL database for flexible and scalable data storage solutions.",
    category: "Database"
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    description: "Reliable relational database management system for structured data.",
    category: "Database"
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    description: "Object-oriented programming language for enterprise applications.",
    category: "Programming"
  },
  {
    name: "GitHub",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    description: "Version control platform for collaborative software development.",
    category: "Tools"
  }
];

const categories = ["All", "Frontend", "Backend", "Framework", "Database", "Programming", "Tools"];

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-black via-black/98 to-black/95 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/60 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center space-x-3 mb-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Expertise
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white ${inView ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            My <span className="text-gradient bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <p className={`text-white/70 text-lg max-w-3xl mx-auto leading-relaxed ${inView ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
            A comprehensive collection of technologies and tools I've mastered throughout my journey, 
            enabling me to create powerful, scalable, and elegant digital solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 ${inView ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`group relative ${
                inView ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="glass-panel p-8 rounded-2xl h-full transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/10 border border-white/10 hover:border-primary/30 relative overflow-hidden">
                {/* Skill Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>

                {/* Skill Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {skill.description}
                  </p>

                  {/* Category Badge */}
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 ${inView ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
          <p className="text-white/60 mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
          >
            Let's Connect
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
