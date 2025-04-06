
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FactCard from '@/components/FactCard';
import Timeline from '@/components/Timeline';
import AnimatedSection from '@/components/AnimatedSection';
import CountdownTimer from '@/components/CountdownTimer';
import EvidenceRepository from '@/components/EvidenceRepository';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = 'Truth Beacon | 90 Days for World Against Trump';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Countdown */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Truth Beacon: 90 Days for World Against Trump
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Exposing corruption and preventing catastrophic government overreach before it's too late.
            </p>
            
            <CountdownTimer className="mb-10" />
            
            <p className="text-lg mb-10 max-w-3xl mx-auto font-medium border-l-4 border-primary pl-4 py-2 bg-gray-50">
              Our mission is to document and expose verified incidents of corruption, abuse of power, and misinformation before irreversible damage is done to democratic institutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => document.getElementById('evidence')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="gap-2"
              >
                View Evidence Repository <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                onClick={() => document.getElementById('testimony')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
              >
                Share Your Story
              </Button>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Evidence Repository Section */}
      <section id="evidence" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Evidence Repository</h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
              A comprehensive collection of verified information, testimonies, and evidence regarding corruption and abuse of power.
            </p>
          </AnimatedSection>
          
          <EvidenceRepository />
        </div>
      </section>
      
      {/* Personal Testimony Section */}
      <section id="testimony" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Share Your Testimony</h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
              Your experiences matter. Submit your firsthand account securely and anonymously to help expose the truth.
            </p>
          </AnimatedSection>
          
          <div className="max-w-2xl mx-auto">
            <AnimatedSection delay={150}>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <p className="mb-6 text-muted-foreground">
                  This is a prototype version. In a full implementation, this would include:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>End-to-end encrypted submission form</li>
                  <li>Anonymous identity protection</li>
                  <li>Verification system for submitted content</li>
                  <li>Visualization tools showing patterns while protecting identities</li>
                </ul>
                <Button className="w-full" disabled>Coming Soon</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Chronological Timeline</h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
              Track the progression of concerning events leading to our current critical 90-day window.
            </p>
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
                  title: "Mar-a-Lago Documents Case",
                  description: "FBI search revealed classified documents improperly stored after leaving office."
                },
                {
                  date: "2023",
                  title: "Multiple Indictments",
                  description: "Charged with numerous felonies related to election interference and document mishandling."
                },
                {
                  date: "2025",
                  title: "90-Day Critical Window Begins",
                  description: "The beginning of our 90-day countdown to prevent catastrophic government overreach."
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join the Movement</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Knowledge is power. By staying informed and taking action, we can protect democratic values and ensure accountability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md text-black w-full"
              />
              <Button className="px-6 py-3 bg-white hover:bg-gray-100 text-primary font-medium whitespace-nowrap" disabled>
                Subscribe (Coming Soon)
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
