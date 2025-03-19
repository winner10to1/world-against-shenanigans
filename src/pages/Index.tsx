
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FactCard from '@/components/FactCard';
import Timeline from '@/components/Timeline';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  useEffect(() => {
    document.title = 'World Against | Documenting Controversies';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Documenting Controversial Actions by Public Figures
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              A factual archive of noteworthy controversies, policies, and statements with context and verified sources.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => document.getElementById('politics')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200"
              >
                Explore Topics
              </button>
              <button 
                onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors duration-200"
              >
                View Timeline
              </button>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Politics Section */}
      <section id="politics" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Political Controversies</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={100}>
              <FactCard 
                title="Attempted to Overturn 2020 Election Results"
                description="Encouraged supporters to march to the Capitol on January 6, 2021, resulting in a violent riot. Made numerous false claims about election fraud despite over 60 court cases being dismissed for lack of evidence."
                date="December 2020 - January 2021"
                source="https://www.justice.gov/archives/dedicationofbuildingseal/how-department-justice-is-protecting-elections"
                category="Politics"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <FactCard 
                title="First Presidential Impeachment"
                description="Impeached by the House of Representatives for abuse of power and obstruction of Congress following allegations that he solicited Ukrainian authorities to influence the 2020 U.S. presidential election."
                date="December 18, 2019"
                source="https://www.congress.gov/116/bills/hres755/BILLS-116hres755enr.pdf"
                category="Politics"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <FactCard 
                title="Second Presidential Impeachment"
                description="Became the first U.S. president to be impeached twice. The House charged him with 'incitement of insurrection' following the January 6 Capitol riot."
                date="January 13, 2021"
                source="https://www.congress.gov/117/bills/hres24/BILLS-117hres24eh.pdf"
                category="Politics"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Business Section */}
      <section id="business" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Business Practices</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={100}>
              <FactCard 
                title="Twitter Acquisition and Mass Layoffs"
                description="After acquiring Twitter for $44 billion, implemented immediate mass layoffs of approximately 50% of the staff without proper notice, raising questions about compliance with labor laws."
                date="October - November 2022"
                source="https://www.reuters.com/technology/musk-begins-twitter-ownership-with-firings-declares-bird-is-freed-2022-10-28/"
                category="Business"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <FactCard 
                title="Trump University Settlement"
                description="Paid $25 million to settle lawsuits against Trump University, which was accused of misleading students with false claims about its real estate courses and instructors."
                date="November 2016"
                source="https://www.ftc.gov/news-events/news/press-releases/2016/11/federal-trade-commission-annual-highlights-2016"
                category="Business"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <FactCard 
                title="SEC Securities Fraud Settlement"
                description="Settled with the SEC for $40 million after tweeting that he had 'funding secured' to take Tesla private at $420 per share. The SEC determined this was false and misleading to investors."
                date="September 2018"
                source="https://www.sec.gov/news/press-release/2018-226"
                category="Business"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Social Impact Section */}
      <section id="social" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Social Impact</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={100}>
              <FactCard 
                title="Family Separation Policy"
                description="Implemented a 'zero tolerance' immigration policy that resulted in the separation of thousands of children from their parents at the U.S.-Mexico border. Many families remained separated for extended periods."
                date="April - June 2018"
                source="https://www.dhs.gov/news/2018/06/20/fact-sheet-zero-tolerance-immigration-prosecutions-family-separation"
                category="Social"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <FactCard 
                title="Content Moderation Changes at Twitter"
                description="After acquiring Twitter, significantly reduced content moderation teams and reinstated numerous accounts previously banned for harassment, hate speech, and misinformation, leading to increased problematic content on the platform."
                date="November 2022 - Present"
                source="https://www.nbcnews.com/tech/tech-news/twitter-content-moderation-elon-musk-takeover-rcna59621"
                category="Social"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <FactCard 
                title="Discriminatory Housing Practices"
                description="The Trump Organization was sued by the Justice Department in 1973 for violating the Fair Housing Act by discriminating against Black rental applicants. The case was settled with a consent decree."
                date="1973"
                source="https://www.clearinghouse.net/chDocs/public/FH-NY-0024-0034.pdf"
                category="Social"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Chronological Timeline</h2>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <Timeline 
              events={[
                {
                  date: "1973",
                  title: "Housing Discrimination Lawsuit",
                  description: "The Trump Organization was sued by the Justice Department for discriminatory housing practices."
                },
                {
                  date: "2016",
                  title: "Trump University Settlement",
                  description: "Paid $25 million to settle fraud lawsuits related to Trump University."
                },
                {
                  date: "2018 (April)",
                  title: "Family Separation Policy",
                  description: "Implemented the 'zero tolerance' immigration policy at the southern border."
                },
                {
                  date: "2018 (September)",
                  title: "SEC Settlement",
                  description: "Settled with the SEC for $40 million over misleading tweets about taking Tesla private."
                },
                {
                  date: "2019",
                  title: "First Impeachment",
                  description: "Impeached by the House for abuse of power and obstruction of Congress."
                },
                {
                  date: "2021 (January)",
                  title: "Capitol Riot & Second Impeachment",
                  description: "Impeached for 'incitement of insurrection' following the January 6 Capitol riot."
                },
                {
                  date: "2022",
                  title: "Twitter Acquisition",
                  description: "Acquired Twitter for $44 billion and implemented mass layoffs and policy changes."
                }
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Stay Informed</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Knowledge is power. By staying informed about the actions of public figures, we can make better decisions as a society.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md text-black w-full"
              />
              <button className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
