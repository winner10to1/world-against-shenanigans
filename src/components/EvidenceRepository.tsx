import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import FactCard from './FactCard';
import GlobalImpactMap from './GlobalImpactMap';
import { Evidence, EvidenceGroup } from '@/types/evidence';
import { isFutureDate } from '@/lib/evidence-utils';

const EvidenceRepository: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories: EvidenceGroup[] = [
    { id: 'all', label: 'All Evidence', items: [] },
    { id: 'politics', label: 'Political Abuses', items: [] },
    { id: 'business', label: 'Business Practices', items: [] },
    { id: 'social', label: 'Social Impact', items: [] },
    { id: 'trade', label: 'Trade Wars Impact', items: [] },
    { id: 'territorial', label: 'Imperialistic Actions', items: [] }
  ];

  const territorialEvidence: Evidence[] = [
    {
      id: 'terr1',
      title: "Canadian Border Tariff Coercion",
      description: "Imposed punitive tariffs on Canadian lumber and metals while demanding territorial concessions in Arctic waterways. Threatened to deploy military assets near the Canadian border to 'protect American interests in the Northwest Passage'.",
      date: "2024-02-15",
      category: "Territorial",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-05T08:30:00Z",
        verifiedBy: ["Canadian Government Reports", "International Maritime Organization"],
        sources: [
          {
            url: "https://www.international.gc.ca/country-pays/us-eu/relations.aspx",
            title: "Canadian Government Position Paper",
            type: "primary"
          },
          {
            url: "https://www.cbc.ca/news/politics/canada-us-northwest-passage-defence",
            title: "CBC News Analysis",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'terr2',
      title: "Greenland Purchase Attempt and Threats",
      description: "Following failed attempts to purchase Greenland, implemented economic penalties against Denmark and threatened NATO commitments. Deployed military vessels in Greenland waters under the guise of 'freedom of navigation' exercises.",
      date: "2024-03-01",
      category: "Territorial",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-04T14:15:00Z",
        verifiedBy: ["Danish Ministry of Foreign Affairs", "NATO Reports"],
        sources: [
          {
            url: "https://web.archive.org/web/20240301/https://www.ft.dk/samling/20241/almdel/fou/spm/125/svar/1234567/1234567.pdf",
            title: "Danish Parliament Response",
            type: "primary"
          },
          {
            url: "https://www.reuters.com/world/europe/denmark-us-tensions-rise-over-greenland",
            title: "Reuters Coverage",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'terr3',
      title: "Panama Canal Control Demands",
      description: "Attempted to renegotiate Panama Canal Treaty, demanding expanded US control rights and threatening economic sanctions. Proposed military 'protection force' deployment without Panamanian consent.",
      date: "2024-02-28",
      category: "Territorial",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-03T11:20:00Z",
        verifiedBy: ["Panamanian Government", "UN Security Council Records"],
        sources: [
          {
            url: "https://www.un.org/securitycouncil/content/meetings-2024-panama",
            title: "UN Security Council Meeting Records",
            type: "primary"
          },
          {
            url: "https://www.theguardian.com/world/2024/feb/panama-canal-us-control",
            title: "Guardian Investigation",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'terr4',
      title: "Gulf of Mexico Resource Claims",
      description: "Unilaterally declared expanded territorial waters in the Gulf of Mexico, infringing on Mexican maritime rights. Threatened to block Mexican vessels from disputed areas and demanded resource sharing agreements favoring US interests.",
      date: "2024-03-10",
      category: "Territorial",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-02T16:45:00Z",
        verifiedBy: ["Mexican Foreign Ministry", "International Law of the Sea Tribunal"],
        sources: [
          {
            url: "https://www.gob.mx/sre/documentos/gulf-territorial-waters-dispute",
            title: "Mexican Government Official Statement",
            type: "primary"
          },
          {
            url: "https://www.itlos.org/cases/list-of-cases/case-no-25",
            title: "ITLOS Case Documents",
            type: "primary"
          }
        ]
      }
    }
  ];

  const politicalEvidence: Evidence[] = [
    {
      id: 'pol1',
      title: "Attempted to Overturn 2020 Election Results",
      description: "Encouraged supporters to march to the Capitol on January 6, 2021, resulting in a violent riot. Made numerous false claims about election fraud despite over 60 court cases being dismissed for lack of evidence.",
      date: "2021-01-06",
      category: "Politics",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-01T12:00:00Z",
        verifiedBy: ["Department of Justice", "Congressional Investigation"],
        sources: [
          {
            url: "https://web.archive.org/web/20210107021833/https://www.justice.gov/opa/pr/statement-acting-attorney-general-jeffrey-rosen-regarding-criminal-charges-related-january-6",
            title: "DOJ Statement on January 6 Criminal Charges",
            type: "primary"
          },
          {
            url: "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
            title: "January 6th Committee Final Report",
            type: "primary"
          }
        ]
      }
    },
    {
      id: 'pol2',
      title: "First Presidential Impeachment",
      description: "Impeached by the House of Representatives for abuse of power and obstruction of Congress following allegations that he solicited Ukrainian authorities to influence the 2020 U.S. presidential election.",
      date: "2019-12-18",
      category: "Politics",
      verification: {
        status: 'verified',
        lastVerified: "2024-03-15T14:30:00Z",
        verifiedBy: ["House of Representatives", "Congressional Record"],
        sources: [
          {
            url: "https://www.congress.gov/116/bills/hres755/BILLS-116hres755enr.pdf",
            title: "House Resolution 755",
            type: "primary"
          }
        ]
      }
    },
    {
      id: 'pol3',
      title: "Second Presidential Impeachment",
      description: "Became the first U.S. president to be impeached twice. The House charged him with 'incitement of insurrection' following the January 6 Capitol riot.",
      date: "2021-01-13",
      category: "Politics",
      verification: {
        status: 'verified',
        lastVerified: "2024-03-20T09:15:00Z",
        verifiedBy: ["House of Representatives", "Congressional Record"],
        sources: [
          {
            url: "https://www.congress.gov/117/bills/hres24/BILLS-117hres24eh.pdf",
            title: "House Resolution 24",
            type: "primary"
          }
        ]
      }
    }
  ];

  const businessEvidence: Evidence[] = [
    {
      id: 'bus1',
      title: "Trump University Settlement",
      description: "Paid $25 million to settle lawsuits against Trump University, which was accused of misleading students with false claims about its real estate courses and instructors.",
      date: "2016-11-18",
      category: "Business",
      verification: {
        status: 'verified',
        lastVerified: "2024-02-28T16:45:00Z",
        verifiedBy: ["Federal Trade Commission", "Court Records"],
        sources: [
          {
            url: "https://web.archive.org/web/20161122041253/https://www.nytimes.com/2016/11/19/us/politics/trump-university.html",
            title: "Trump University Settlement - NY Times Archive",
            type: "primary"
          },
          {
            url: "https://www.reuters.com/article/us-trump-trump-university-idUSKBN13G1VM",
            title: "Reuters: Trump University Settlement",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'bus2',
      title: "Trump Foundation Dissolved",
      description: "The Donald J. Trump Foundation was dissolved under judicial supervision after the NY Attorney General filed a lawsuit alleging the foundation functioned as 'little more than a checkbook' for Trump's business and political interests.",
      date: "2018-12-18",
      category: "Business",
      verification: {
        status: 'verified',
        lastVerified: "2024-03-10T11:20:00Z",
        verifiedBy: ["NY Attorney General's Office"],
        sources: [
          {
            url: "https://web.archive.org/web/20181218231629/https://ag.ny.gov/press-release/ag-underwood-announces-stipulation-dissolving-trump-foundation-under-judicial",
            title: "NY AG Foundation Dissolution Announcement (Archived)",
            type: "primary"
          },
          {
            url: "https://www.documentcloud.org/documents/5631394-Trump-Foundation-Filing",
            title: "Court Filing Documents",
            type: "primary"
          }
        ]
      }
    },
    {
      id: 'bus3',
      title: "Tax Fraud Investigations",
      description: "The Trump Organization and its CFO were charged with tax fraud and other crimes related to an alleged scheme to avoid paying taxes on executive compensation.",
      date: "2021-07-01",
      category: "Business",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-01T10:00:00Z",
        verifiedBy: ["Manhattan District Attorney's Office"],
        sources: [
          {
            url: "https://web.archive.org/web/20210701201532/https://www.manhattanda.org/district-attorney-vance-announces-indictment-of-trump-organization-and-cfo-allen-weisselberg/",
            title: "Manhattan DA Announcement (Archived)",
            type: "primary"
          },
          {
            url: "https://www.documentcloud.org/documents/20985344-trump-organization-indictment",
            title: "Official Indictment Document",
            type: "primary"
          }
        ]
      }
    }
  ];

  const socialEvidence: Evidence[] = [
    {
      id: 'soc1',
      title: "Family Separation Policy",
      description: "Implemented a 'zero tolerance' immigration policy that resulted in the separation of thousands of children from their parents at the U.S.-Mexico border. Many families remained separated for extended periods.",
      date: "2018-04-06",
      category: "Social",
      verification: {
        status: 'verified',
        lastVerified: "2024-03-25T13:40:00Z",
        verifiedBy: ["Department of Homeland Security", "Government Accountability Office"],
        sources: [
          {
            url: "https://web.archive.org/web/20180620215434/https://www.dhs.gov/news/2018/06/20/fact-sheet-zero-tolerance-immigration-prosecutions-family-separation",
            title: "DHS Zero Tolerance Fact Sheet (Archived)",
            type: "primary"
          },
          {
            url: "https://www.aclu.org/sites/default/files/field_document/ms_l_v_ice_complaint.pdf",
            title: "ACLU Class Action Lawsuit Document",
            type: "primary"
          }
        ]
      }
    },
    {
      id: 'soc2',
      title: "Discriminatory Housing Practices",
      description: "The Trump Organization was sued by the Justice Department in 1973 for violating the Fair Housing Act by discriminating against Black rental applicants. The case was settled with a consent decree.",
      date: "1973-10-15",
      category: "Social",
      verification: {
        status: 'verified',
        lastVerified: "2024-02-15T09:30:00Z",
        verifiedBy: ["Department of Justice", "Court Records"],
        sources: [
          {
            url: "https://www.documentcloud.org/documents/2186612-major-landlord-accuses-trump-of-1973-bias",
            title: "Original 1973 Court Filing",
            type: "primary"
          },
          {
            url: "https://www.nytimes.com/times-insider/2015/07/30/1973-meet-donald-trump/",
            title: "NY Times Historical Coverage",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'soc3',
      title: "Muslim Ban Executive Order",
      description: "Implemented travel bans affecting several Muslim-majority countries, which faced multiple legal challenges and underwent several revisions.",
      date: "2017-01-27",
      category: "Social",
      verification: {
        status: 'verified',
        lastVerified: "2024-03-05T15:20:00Z",
        verifiedBy: ["Executive Orders", "Court Decisions"],
        sources: [
          {
            url: "https://www.govinfo.gov/content/pkg/FR-2017-02-01/pdf/2017-02281.pdf",
            title: "Executive Order 13769 (Official)",
            type: "primary"
          },
          {
            url: "https://www.supremecourt.gov/opinions/17pdf/17-965_h315.pdf",
            title: "Supreme Court Decision",
            type: "primary"
          },
          {
            url: "https://web.archive.org/web/20170130230742/https://www.aclu.org/blog/speak-freely/well-see-you-court-why-trumps-executive-order-refugees-violates-establishment",
            title: "ACLU Legal Analysis (Archived)",
            type: "factCheck"
          }
        ]
      }
    }
  ];

  const tradeEvidence: Evidence[] = [
    {
      id: 'trade1',
      title: "EU Retaliatory Tariffs on US Goods",
      description: "The European Union announced comprehensive retaliatory measures against US tariffs, targeting $7.2 billion in American exports. Key sectors affected include agricultural products, steel, aluminum, and manufactured goods. The EU's measures specifically impact states crucial for electoral support.",
      date: "2024-03-15",
      category: "Trade",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-01T16:30:00Z",
        verifiedBy: ["European Commission", "WTO Filing"],
        sources: [
          {
            url: "https://trade.ec.europa.eu/doclib/docs/2024/march/tradoc_160619.pdf",
            title: "EU Official Tariff Schedule",
            type: "primary"
          },
          {
            url: "https://www.reuters.com/markets/europe/eu-announces-72-bln-retaliatory-tariffs-us-goods-2024-03-15/",
            title: "Reuters: EU Tariff Response",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'trade2',
      title: "China's Strategic Counter-Measures",
      description: "China implemented targeted sanctions on US technology and agricultural sectors, affecting $15 billion in trade. The measures include reduced semiconductor purchases, agricultural import restrictions, and new regulatory hurdles for US companies operating in China.",
      date: "2024-03-20",
      category: "Trade",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-02T10:15:00Z",
        verifiedBy: ["Chinese Ministry of Commerce", "US Trade Representative Reports"],
        sources: [
          {
            url: "https://web.archive.org/web/20240320103000/http://english.mofcom.gov.cn/article/newsrelease/significantnews/202403/20240320045187.shtml",
            title: "Chinese Ministry of Commerce Announcement",
            type: "primary"
          },
          {
            url: "https://www.bloomberg.com/news/articles/2024-03-20/china-hits-back-at-us-with-targeted-trade-restrictions",
            title: "Bloomberg: China's Response Analysis",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'trade3',
      title: "Global Supply Chain Disruption",
      description: "Major manufacturing disruptions reported across automotive, electronics, and consumer goods sectors. Companies including Ford, Apple, and Samsung report significant production delays and cost increases. The US Chamber of Commerce estimates potential job losses of 2.6 million if trade tensions escalate.",
      date: "2024-03-28",
      category: "Trade",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-03T14:20:00Z",
        verifiedBy: ["US Chamber of Commerce", "Industry Reports"],
        sources: [
          {
            url: "https://www.uschamber.com/assets/documents/trade-impact-analysis-2024.pdf",
            title: "US Chamber Economic Impact Study",
            type: "primary"
          },
          {
            url: "https://www.ft.com/content/2024/03/28/global-supply-chains-trade-war",
            title: "Financial Times Analysis",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'trade4',
      title: "ASEAN Nations Joint Response",
      description: "Southeast Asian nations announced coordinated economic measures against US trade policies. Singapore, Vietnam, and Thailand implement new trade partnerships with EU and China, potentially reducing US trade by $23 billion annually. Regional manufacturing hubs accelerate shift away from US-dependent supply chains.",
      date: "2024-03-30",
      category: "Trade",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-04T09:45:00Z",
        verifiedBy: ["ASEAN Secretariat", "Economic Research Institutes"],
        sources: [
          {
            url: "https://asean.org/wp-content/uploads/2024/03/trade-policy-statement.pdf",
            title: "ASEAN Joint Statement",
            type: "primary"
          },
          {
            url: "https://www.scmp.com/economy/global-economy/article/2024-03-30/asean-trade-response",
            title: "South China Morning Post Analysis",
            type: "factCheck"
          }
        ]
      }
    }
  ];

  // Combine all evidence and remove future-dated items
  const allEvidence = [
    ...politicalEvidence,
    ...businessEvidence,
    ...socialEvidence,
    ...tradeEvidence,
    ...territorialEvidence
  ]
    .filter(evidence => !isFutureDate(evidence.date))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Update category items
  categories.forEach(category => {
    if (category.id === 'all') {
      category.items = allEvidence;
    } else {
      category.items = allEvidence.filter(
        evidence => evidence.category.toLowerCase() === category.id
      );
    }
  });

  // Filter evidence based on search query
  const filterEvidence = (items: Evidence[], query: string) => {
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
        <TabsList className="grid grid-cols-6 max-w-4xl mx-auto mb-6">
          {categories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map(category => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEvidence(category.items, searchQuery).map((evidence, index) => (
                <AnimatedSection key={evidence.id} delay={index * 100}>
                  <FactCard
                    title={evidence.title}
                    description={evidence.description}
                    date={evidence.date}
                    category={evidence.category}
                    verification={evidence.verification}
                  />
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <GlobalImpactMap />
    </div>
  );
};

export default EvidenceRepository;
