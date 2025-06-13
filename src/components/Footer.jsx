
import { Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white/60 text-sm">
            &copy; {year} Ritesh Kumar Pandey. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="text-primary mx-1 animate-pulse" /> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
