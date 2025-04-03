
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import FactCard from './FactCard';

const EvidenceRepository: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Simulated categories and evidence
  const categories = [
    { id: 'all', label: 'All Evidence' },
    { id: 'politics', label: 'Political Abuses' },
    { id: 'business', label: 'Business Practices' },
    { id: 'social', label: 'Social Impact' }
  ];
  
  const politicalEvidence = [
    {
      title: "Attempted to Overturn 2020 Election Results",
      description: "Encouraged supporters to march to the Capitol on January 6, 2021, resulting in a violent riot. Made numerous false claims about election fraud despite over 60 court cases being dismissed for lack of evidence.",
      date: "December 2020 - January 2021",
      source: "https://www.justice.gov/archives/dedicationofbuildingseal/how-department-justice-is-protecting-elections",
      category: "Politics"
    },
    {
      title: "First Presidential Impeachment",
      description: "Impeached by the House of Representatives for abuse of power and obstruction of Congress following allegations that he solicited Ukrainian authorities to influence the 2020 U.S. presidential election.",
      date: "December 18, 2019",
      source: "https://www.congress.gov/116/bills/hres755/BILLS-116hres755enr.pdf",
      category: "Politics"
    },
    {
      title: "Second Presidential Impeachment",
      description: "Became the first U.S. president to be impeached twice. The House charged him with 'incitement of insurrection' following the January 6 Capitol riot.",
      date: "January 13, 2021",
      source: "https://www.congress.gov/117/bills/hres24/BILLS-117hres24eh.pdf",
      category: "Politics"
    }
  ];
  
  const businessEvidence = [
    {
      title: "Trump University Settlement",
      description: "Paid $25 million to settle lawsuits against Trump University, which was accused of misleading students with false claims about its real estate courses and instructors.",
      date: "November 2016",
      source: "https://www.ftc.gov/news-events/news/press-releases/2016/11/federal-trade-commission-annual-highlights-2016",
      category: "Business"
    },
    {
      title: "Trump Foundation Dissolved",
      description: "The Donald J. Trump Foundation was dissolved under judicial supervision after the NY Attorney General filed a lawsuit alleging the foundation functioned as 'little more than a checkbook' for Trump's business and political interests.",
      date: "December 2018",
      source: "https://ag.ny.gov/press-release/2018/ag-underwood-announces-stipulation-dissolving-trump-foundation-under-judicial",
      category: "Business"
    },
    {
      title: "Tax Fraud Investigations",
      description: "The Trump Organization and its CFO were charged with tax fraud and other crimes related to an alleged scheme to avoid paying taxes on executive compensation.",
      date: "July 2021",
      source: "https://www.manhattanda.org/district-attorney-vance-announces-indictment-of-trump-organization-and-cfo-allen-weisselberg/",
      category: "Business"
    }
  ];
  
  const socialEvidence = [
    {
      title: "Family Separation Policy",
      description: "Implemented a 'zero tolerance' immigration policy that resulted in the separation of thousands of children from their parents at the U.S.-Mexico border. Many families remained separated for extended periods.",
      date: "April - June 2018",
      source: "https://www.dhs.gov/news/2018/06/20/fact-sheet-zero-tolerance-immigration-prosecutions-family-separation",
      category: "Social"
    },
    {
      title: "Discriminatory Housing Practices",
      description: "The Trump Organization was sued by the Justice Department in 1973 for violating the Fair Housing Act by discriminating against Black rental applicants. The case was settled with a consent decree.",
      date: "1973",
      source: "https://www.clearinghouse.net/chDocs/public/FH-NY-0024-0034.pdf",
      category: "Social"
    },
    {
      title: "Proposed Muslim Ban",
      description: "Called for a 'total and complete shutdown of Muslims entering the United States' during his campaign, and later implemented travel bans affecting several Muslim-majority countries.",
      date: "December 2015 - 2017",
      source: "https://www.aclu.org/issues/immigrants-rights/trump-administration-muslim-ban",
      category: "Social"
    }
  ];
  
  // Combine all evidence
  const allEvidence = [...politicalEvidence, ...businessEvidence, ...socialEvidence];

  // Filter evidence based on search query
  const filterEvidence = (items: any[], query: string) => {
    if (!query.trim()) return items;
    
    const lowercaseQuery = query.toLowerCase();
    return items.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery) || 
      item.description.toLowerCase().includes(lowercaseQuery)
    );
  };

  return (
    <div className="w-full">
      <div className="relative max-w-xl mx-auto mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search evidence..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-6">
          {categories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterEvidence(allEvidence, searchQuery).map((evidence, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <FactCard
                  title={evidence.title}
                  description={evidence.description}
                  date={evidence.date}
                  source={evidence.source}
                  category={evidence.category}
                />
              </AnimatedSection>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="politics">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterEvidence(politicalEvidence, searchQuery).map((evidence, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <FactCard
                  title={evidence.title}
                  description={evidence.description}
                  date={evidence.date}
                  source={evidence.source}
                  category={evidence.category}
                />
              </AnimatedSection>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="business">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterEvidence(businessEvidence, searchQuery).map((evidence, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <FactCard
                  title={evidence.title}
                  description={evidence.description}
                  date={evidence.date}
                  source={evidence.source}
                  category={evidence.category}
                />
              </AnimatedSection>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="social">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterEvidence(socialEvidence, searchQuery).map((evidence, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <FactCard
                  title={evidence.title}
                  description={evidence.description}
                  date={evidence.date}
                  source={evidence.source}
                  category={evidence.category}
                />
              </AnimatedSection>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EvidenceRepository;
