
import { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState('');
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-secondary py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">
              <span className="text-primary">World</span> Against
            </h3>
            <p className="text-muted-foreground mb-4">
              Documenting controversial actions and statements by public figures with a commitment to factual accuracy and contextual understanding.
            </p>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#politics" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Politics
                </a>
              </li>
              <li>
                <a 
                  href="#business" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Business
                </a>
              </li>
              <li>
                <a 
                  href="#social" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Social Impact
                </a>
              </li>
              <li>
                <a 
                  href="#timeline" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">About</h4>
            <p className="text-muted-foreground mb-4">
              This project aims to provide factual information about controversial actions by public figures. All information is sourced from reputable publications and includes references. For Domain Selling queries, please email ogomondd@gmail.com
            </p>
            <p className="text-muted-foreground text-sm">
              &copy; {year} World Against. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
