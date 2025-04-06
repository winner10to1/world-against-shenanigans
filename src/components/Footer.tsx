import { useEffect, useState } from 'react';
import LogoText from './LogoText';

const Footer: React.FC = () => {
  const [year, setYear] = useState('');
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-secondary py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <LogoText size="sm" />
            </div>
            <p className="text-muted-foreground mb-4">
              Documenting controversial actions and statements by public figures with a commitment to factual accuracy and contextual understanding for a better world and a cooperating human race.
            </p>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#evidence-repository" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Evidence Repository
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
              <li>
                <a 
                  href="#global-impact" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Impact Map
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">About</h4>
            <p className="text-muted-foreground mb-4">
              This project aims to provide factual information about controversial actions by public figures. All information is sourced from reputable publications and includes references.
            </p>
            <p className="text-muted-foreground text-sm">
              &copy; {year} <LogoText size="sm" className="inline-block mx-1" />. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p className="text-sm">
          This page needs contributors to add more important information. For design changes or to include additional information, please contact the email provided in the repository.
        </p>
        <p className="text-sm mt-2">
          While the owner of this website sympathizes with this cause, unfortunately they have other important goals. The owner is open to selling this domain to someone who wishes to continue this mission. Please email gutierrezhernandro@gmail.com for more info, as the owner feels their job is already done by making this effort in the first place.
          Please also note that the owner is not an expert journalist, and the news articles linked made sense to the best of the owner's knowledge. But it should more or less be accurate as it is in line with the struggle the world is facing now.
          The owner is not responsible for any misinformation or misinterpretation of the articles linked. The owner is not a lawyer and does not have any legal training, so please do not take this as legal advice. 
          The owner is not responsible for any legal issues that may arise from the use of this website. 
          The owner is not responsible for any damages that may occur from the use of this website. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
