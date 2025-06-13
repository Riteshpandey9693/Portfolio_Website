
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  github: string;
  categories: string[];
  type: 'major' | 'practice';
}

const projects: Project[] = [
  // Major Projects
  {
    id: 1,
    title: "Wanderlust",
    description: "A full-stack booking platform with user authentication, map integration, reviews, and CRUD functionality.",
    image: "/lovable-uploads/56295b6b-2868-427b-85bf-d3837078cb33.png",
    liveLink: "https://wanderlust-1-cg2z.onrender.com",
    github: "https://github.com/Riteshpandey9693/Wanderlust",
    categories: ["MongoDB", "Express.js", "Node.js", "EJS"],
    type: "major"
  },
  {
    id: 2,
    title: "Tasty Bite",
    description: "A React-based food delivery UI powered by live Swiggy API with Redux for cart functionality.",
    image: "/lovable-uploads/d398bd61-9df2-4b0f-9d9a-9b8b7f876111.png",
    liveLink: "https://tasty-bite-7p93.vercel.app",
    github: "https://github.com/Riteshpandey9693/Tasty_bite",
    categories: ["React.js", "Redux", "Tailwind CSS"],
    type: "major"
  },
  {
    id: 3,
    title: "Weather App",
    description: "A real-time weather checking web app using the OpenWeatherMap API.",
    image: "/lovable-uploads/1f3d7fe9-39cd-4e08-b634-ad5a50fb6fea.png",
    liveLink: "https://weather-app-96.netlify.app",
    github: "https://github.com/Riteshpandey9693/Weather-App",
    categories: ["HTML", "CSS", "JavaScript"],
    type: "major"
  },
  // Practice Projects
  {
    id: 4,
    title: "Spotify Clone",
    description: "A music streaming interface clone with modern design and responsive layout.",
    image: "/lovable-uploads/50fd6fa9-b736-4c9e-a5ed-25763c0925fc.png",
    liveLink: "https://spotify-clone-9.netlify.app",
    github: "https://github.com/Riteshpandey9693/Spotify_Clone",
    categories: ["HTML", "CSS", "JavaScript"],
    type: "practice"
  },
  {
    id: 5,
    title: "Amazon Clone",
    description: "E-commerce platform interface with product listings and shopping cart functionality.",
    image: "/lovable-uploads/211823dd-b202-4782-a321-e0af274542df.png",
    liveLink: "https://amazon-clone-9.netlify.app",
    github: "https://github.com/Riteshpandey9693/Amazon_Clone",
    categories: ["HTML", "CSS", "JavaScript"],
    type: "practice"
  },
  {
    id: 6,
    title: "Simon Game",
    description: "Interactive memory game with sound effects and progressive difficulty levels.",
    image: "/lovable-uploads/54ef0b51-6127-48c2-886b-5745045552d6.png",
    liveLink: "https://simon-game-9.netlify.app",
    github: "https://github.com/Riteshpandey9693/Simon-Game",
    categories: ["HTML", "CSS", "JavaScript"],
    type: "practice"
  },
  {
    id: 7,
    title: "To-Do List",
    description: "A simple and elegant task management application with local storage functionality.",
    image: "/lovable-uploads/08eac444-e598-474c-9d99-d78fcc6e5816.png",
    liveLink: "https://to-do-lists-9.netlify.app",
    github: "https://github.com/Riteshpandey9693/To-Do-List",
    categories: ["HTML", "CSS", "JavaScript"],
    type: "practice"
  },
  {
    id: 8,
    title: "Calculator",
    description: "A functional calculator with basic arithmetic operations and responsive design.",
    image: "/lovable-uploads/5409eaa2-91b8-4cf0-8a0f-aa69a90c1c06.png",
    liveLink: "https://calculator-96.netlify.app",
    github: "https://github.com/Riteshpandey9693/Calculator",
    categories: ["HTML", "CSS", "JavaScript"],
    type: "practice"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);
  
  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">My Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in design, development, and problem solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white/5 rounded-lg p-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeFilter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('major')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeFilter === 'major' 
                  ? 'bg-primary text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Major Projects (3)
            </button>
            <button
              onClick={() => setActiveFilter('practice')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeFilter === 'practice' 
                  ? 'bg-primary text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Practice Projects (5)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                inView ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay Content */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500 ${
                hoveredId === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <div className="transform transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.type === 'major' ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/70'
                    }`}>
                      {project.type === 'major' ? 'Major' : 'Practice'}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category) => (
                      <span 
                        key={category} 
                        className="text-xs py-1 px-2 rounded bg-white/10 text-white/70"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveLink} 
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors text-white"
                      aria-label={`View ${project.title} live demo`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.github} 
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors text-white"
                      aria-label={`View ${project.title} Github repository`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Riteshpandey9693" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded-md border border-primary/50 hover:bg-primary/10"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
