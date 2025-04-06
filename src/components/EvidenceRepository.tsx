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
    { id: 'imperialism', label: 'Imperialistic Actions', items: [] },
    { id: 'media', label: 'Attacks on Free Press', items: [] }
  ];

  const territorialEvidence: Evidence[] = [
    {
      id: 'terr1',
      title: "Canadian Annexation Attempts",
      description: "​President Donald Trump has proposed annexing Canada as the 51st U.S. state, asserting that such a move would resolve ongoing trade disputes. This suggestion has been met with strong opposition from Canadian leaders, including Prime Minister Justin Trudeau, who emphasized Canada's sovereignty and dismissed the idea outright. In parallel, Trump imposed a 25% tariff on Canadian steel and aluminum, escalating trade tensions between the two nations. While Canada has received certain tariff exemptions, some analysts view these as strategic maneuvers by the U.S. to exert economic pressure on Canada, potentially to encourage closer integration or annexation. This situation raises concerns about the implications of such actions on Canada's sovereignty and the potential for a broader geopolitical crisis.",
      date: "2025-03-07",
      category: "Imperialism",
      verification: {
        status: 'verified',
        lastVerified: "2025-04-06T14:18:00Z",
        verifiedBy: ["Media Reports", "International Analysis"],
        sources: [
          {
            url: "https://www.nytimes.com/2025/03/07/world/canada/trump-trudeau-canada-51st-state.html",
            title: "NY Times: Trump's Canada Strategy",
            type: "factCheck"
          },
          {
            url: "https://news.sky.com/story/carney-wastes-no-time-tearing-into-trump-but-can-he-save-canada-from-becoming-americas-51st-state-13329087",
            title: "Sky News: Canada's Response",
            type: "factCheck"
          },
          {
            url: "https://edition.cnn.com/2025/03/12/politics/fact-check-trump-canada-claims/index.html",
            title: "CNN: Fact Check on Canada Claims",
            type: "factCheck"
          },
          {
            url: "https://edition.cnn.com/2025/03/11/politics/canada-trump-51st-state-rob-ford/index.html",
            title: "CNN: Canadian Political Response",
            type: "factCheck"
          },
          {
            url: "https://www.bbc.co.uk/news/articles/cdde0r6eqy5o",
            title: "BBC: US-Canada Relations Analysis",
            type: "factCheck"
          },
          {
            url: "https://www.theguardian.com/world/2025/apr/03/canada-trump-tariffs-exemption",
            title: "Guardian: Tariff Impact Analysis",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'terr2',
      title: "Greenland Annexation Attempt and Threats",
      description: "​President Donald Trump's renewed interest in acquiring Greenland stems from its strategic military location and abundant natural resources, including rare earth minerals and potential oil reserves. Despite Denmark's firm refusal to sell and Greenland's leaders asserting their autonomy, Trump has suggested economic sanctions against Denmark and hinted at potential military action to secure control over the island. These aggressive tactics have heightened tensions between the U.S., Denmark, and Greenland, drawing international criticism. Experts caution that any coercive measures could destabilize the Arctic region and damage U.S. alliances.",
      date: "2024-12-23",
      category: "Imperialism",
      verification: {
        status: 'verified',
        lastVerified: "2025-04-06T13:48:00Z",
        verifiedBy: ["Media Analysis", "Think Tank Reports"],
        sources: [
          {
            url: "https://nymag.com/intelligencer/article/why-trump-wants-greenland-canada-panama-canal-explained.html",
            title: "NY Mag: Trump's Territorial Ambitions Analysis",
            type: "factCheck"
          },
          {
            url: "https://www.bnnbloomberg.ca/business/company-news/2024/12/23/can-trump-buy-greenland-what-to-know-besides-no/",
            title: "Bloomberg: Greenland Purchase Analysis",
            type: "factCheck"
          },
          {
            url: "https://www.csis.org/analysis/seizing-greenland-worse-bad-deal",
            title: "CSIS: Strategic Analysis of Greenland Acquisition",
            type: "primary"
          },
          {
            url: "https://www.thetimes.com/us/news-today/article/why-does-trump-want-greenland-america-03lbsmt9s",
            title: "The Times: US Greenland Strategy",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'terr3',
      title: "Panama Canal Control Demands",
      description: "​President Donald Trump has intensified focus on the Panama Canal, alleging excessive fees and Chinese influence over its operations. He suggested reclaiming control, despite the 1977 treaty transferring authority to Panama. In response, Defense Secretary Pete Hegseth plans to visit Panama to address these concerns and reinforce U.S. interests. Experts argue that Panama maintains sovereignty over the canal and that U.S. vessels are treated equitably. This situation underscores escalating U.S.-China tensions in Latin America and potential regional destabilization",
      date: "2025-02-15",
      category: "Imperialism",
      verification: {
        status: 'verified',
        lastVerified: "2025-04-06T14:00:00Z",
        verifiedBy: ["Think Tank Analysis", "Academic Research", "Media Reports"],
        sources: [
          {
            url: "https://carnegieendowment.org/emissary/2025/02/panama-canal-trump-china-crisis?lang=en",
            title: "Carnegie: Panama Canal Crisis Analysis",
            type: "primary"
          },
          {
            url: "https://apnews.com/article/hegseth-panama-canal-trump-china-pentagon-e990f217bd8fd4a48486c5db88622c29",
            title: "AP News: Military Options for Panama",
            type: "factCheck"
          },
          {
            url: "https://www.nbcnews.com/politics/national-security/trump-white-house-asked-us-military-develop-options-panama-canal-offic-rcna195994",
            title: "NBC: White House Military Plans",
            type: "factCheck"
          },
          {
            url: "https://www.hks.harvard.edu/faculty-research/policy-topics/international-relations-security/why-panama-canal-president-trumps",
            title: "Harvard Kennedy School Analysis",
            type: "primary"
          },
          {
            url: "https://www.atlanticcouncil.org/blogs/new-atlanticist/expert-context-whats-going-on-with-trump-and-the-panama-canal/",
            title: "Atlantic Council Expert Analysis",
            type: "primary"
          }
        ]
      }
    },
    {
      id: 'terr4',
      title: "Gulf of Mexico Renaming Controversy",
      description: "​President Trump's executive order to rename the Gulf of Mexico as the \"Gulf of America\" has been criticized as an act of imperialism aimed at erasing Mexico's historical ties and asserting U.S. dominance. Critics argue this move reflects a broader agenda to marginalize Mexico's cultural and geopolitical significance. Additionally, the administration's support for offshore drilling in the Gulf has raised concerns about environmental degradation, given the region's history of oil spills and industrial pollution.",
      date: "2025-02-19",
      category: "Imperialism",
      verification: {
        status: 'verified',
        lastVerified: "2025-04-06T13:35:00Z",
        verifiedBy: ["Media Analysis", "Political Commentary"],
        sources: [
          {
            url: "https://www.latimes.com/california/story/2025-02-19/donald-trump-gulf-of-mexico-gulf-of-america",
            title: "LA Times: Trump's Gulf Renaming Controversy",
            type: "factCheck"
          },
          {
            url: "yahoo.com/news/column-real-motive-behind-trump-110026007.html",
            title: "Yahoo News: Analysis of Gulf Renaming",
            type: "factCheck"
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
            url: "https://www.justice.gov/archives/opa/pr/attorney-general-merrick-b-garland-statement-second-anniversary-january-6-attack-capitol",
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
    },
    {
      id: 'pol4',
      title: "Loyalty or Nothing: How Trump Rewards Devotion and Punishes Dissent",
      description: "Donald Trump has consistently shown a pattern of praising individuals when they support him, attacking them when they criticize him, and praising them again if they realign. This loyalty-first approach has affected figures like Chris Christie, Michael Bloomberg, Marco Rubio, J.D. Vance, and even Fox News. In each case, Trump publicly flipped from admiration to ridicule, and sometimes back again—showing his relationships are driven less by principle and more by personal allegiance. This behavior highlights a transactional style of leadership, focused on control and loyalty rather than consistency or ideological alignment.",
      date: "2024-11-12",
      category: "Politics",
      verification: {
        status: 'verified',
        lastVerified: "2025-04-06T14:00:00Z",
        verifiedBy: ["Media Reports"],
        sources: [
          {
            url: "https://www.buzzfeednews.com/article/franciswhittaker/trump-slams-then-praises-protests-against-him-in-two-entirel",
            title: "BuzzFeed: Trump's Praise-Attack Cycle",
            type: "factCheck"
          },
          {
            url: "https://edition.cnn.com/2016/02/27/politics/donald-trump-marco-rubio-american-express/index.html",
            title: "CNN: Trump vs. Rubio",
            type: "factCheck"
          },
          {
            url: "https://cadenaser.com/nacional/2024/11/12/el-senador-cubano-estadounidense-marco-rubio-probable-secretario-de-estado-de-trump-segun-the-new-york-times-cadena-ser/",
            title: "Cadena SER: Rubio as Secretary of State?",
            type: "factCheck"
          },
          {
            url: "https://apnews.com/article/marco-rubio-trump-secretary-of-state-florida-72724ed81aa7918b54369beab8fbfce3",
            title: "AP: Rubio and Trump",
            type: "factCheck"
          }
        ]
      }
    }
  ];

  const businessEvidence: Evidence[] = [
    {
      id: 'bus1',
      title: "Trump University Fraud Settlement",
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
      title: "Nasty and Fraudulent Trump Foundation Dissolved",
      description: "The Donald J. Trump Foundation was dissolved under judicial supervision after the NY Attorney General filed a lawsuit alleging the foundation functioned as 'little more than a checkbook' for Trump's business and political interests.",
      date: "2018-12-18",
      category: "Business",
      verification: {
        status: 'verified',
        lastVerified: "2024-03-10T11:20:00Z",
        verifiedBy: ["NY Attorney General's Office"],
        sources: [
          {
            url: "https://www.nytimes.com/2018/12/18/nyregion/ny-ag-underwood-trump-foundation.html",
            title: "Trump Foundation Dissolution - NY Times",
            type: "primary"
          },
          {
            url: "https://ag.ny.gov/press-release/2019/donald-j-trump-pays-court-ordered-2-million-illegally-using-trump-foundation",
            title: "Trump pays $2 million for illegal use of foundation funds",
            type: "primary"
          }
        ]
      }
    },
    {
      id: 'bus3',
      title: "Trump Organization Tax Fraud Convictions",
      description: "​In January 2023, the Trump Organization was fined $1.6 million, the maximum allowable, after being convicted of a decade-long tax fraud scheme involving unreported compensation to executives. Allen Weisselberg, the company's former CFO, pleaded guilty to 15 felony charges related to tax evasion and was sentenced to five months in jail. In a separate civil case, New York Attorney General Letitia James sued Donald Trump and his company for financial fraud, alleging they inflated asset values to secure favorable loans. In February 2024, a judge ruled in favor of the Attorney General, ordering Trump and his companies to pay over $450 million in penalties.",
      date: "2023-01-13",
      category: "Business",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-06T14:30:00Z",
        verifiedBy: ["Manhattan District Attorney's Office", "New York Attorney General's Office", "Court Records"],
        sources: [
          {
            url: "https://ag.ny.gov/press-release/2022/attorney-general-james-sues-donald-trump-years-financial-fraud",
            title: "NY AG Fraud Lawsuit Announcement",
            type: "primary"
          },
          {
            url: "https://www.theguardian.com/us-news/2023/jan/13/trump-organization-sentenced-tax-fraud-scheme",
            title: "Trump Organization Tax Fraud Sentencing",
            type: "factCheck"
          },
          {
            url: "https://www.npr.org/2022/12/06/1140756394/former-president-donald-trumps-company-found-guilty-criminal-tax-fraud",
            title: "NPR: Trump Organization Found Guilty",
            type: "factCheck"
          },
          {
            url: "https://www.nytimes.com/interactive/2018/10/02/us/politics/donald-trump-tax-schemes-fred-trump.html",
            title: "NY Times Investigation: Trump Family Tax Schemes",
            type: "factCheck"
          },
          {
            url: "https://abcnews.go.com/US/live-updates/trump-fraud-trial/trump-tax-rep-acknowledged-much-lower-value-for-maralago-104481579?id=103642561",
            title: "ABC News: Mar-a-Lago Valuation Analysis",
            type: "factCheck"
          },
          {
            url: "https://www.houstonpublicmedia.org/articles/news/2022/12/06/438855/former-president-donald-trumps-company-is-found-guilty-of-criminal-tax-fraud/",
            title: "Houston Public Media: Criminal Tax Fraud Verdict",
            type: "factCheck"
          },
          {
            url: "https://www.france24.com/en/americas/20230113-former-us-president-trump-s-company-fined-1-6-million-for-tax-fraud",
            title: "France24: Trump Organization Fine Details",
            type: "factCheck"
          }
        ]
      }
    }
  ];

  const socialEvidence: Evidence[] = [
    {
      id: 'soc1',
      title: "Inhumane Family Separation Policy",
      description: "Implemented a 'zero tolerance' immigration policy that resulted in the separation of thousands of children from their parents at the U.S.-Mexico border. Many families remained separated for extended periods.",
      date: "2018-04-06",
      category: "Social",
      verification: {
        status: 'verified',
        lastVerified: "2024-03-25T13:40:00Z",
        verifiedBy: ["Department of Homeland Security", "Government Accountability Office"],
        sources: [
          {
            url: "https://www.americanbar.org/advocacy/governmental_legislative_work/priorities_policy/immigration/familyseparation/?utm_source=chatgpt.com",
            title: "ABA: Family Separation",
            type: "factCheck"
          },
          {
            url: "https://www.hrw.org/news/2018/08/16/qa-trump-administrations-zero-tolerance-immigration-policy?utm_source=chatgpt.com",
            title: "HRW: Trump's Zero Tolerance Policy",
            type: "factCheck"
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
      id: 'trade5',
      title: "China's Strategic Counter-Measures Triggers Global Markets Crisis",
      description: "China announced unprecedented retaliatory measures against US tariffs, including additional restrictions on semiconductor exports and agricultural imports. The response triggered a significant downturn in US stock markets, with analysts warning of a potential recession. Britain and other allies expressed concerns about global economic stability as China's response exceeded market expectations.",
      date: "2025-04-04",
      category: "Trade",
      verification: {
        status: 'verified',
        lastVerified: "2025-04-06T12:40:00Z",
        verifiedBy: ["Financial Media Reports", "Market Analysis"],
        sources: [
          {
            url: "https://www.theguardian.com/us-news/2025/apr/04/china-donald-trump-tariffs-recession--us-stock-market",
            title: "Guardian: China's Response Triggers Market Crisis",
            type: "factCheck"
          },
          {
            url: "https://www.telegraph.co.uk/business/2025/04/04/donald-trump-china-tariffs-britain-will-pay-price/",
            title: "Trump hits China, UK pays",
            type: "factCheck"
          },
          {
            url: "https://think.ing.com/articles/reciprocal-tariff-surprise-to-prompt-a-stronger-response-from-china/",
            title: "Trump’s tariffs provoke China retaliation",
            type: "primary"
          },
          {
            url: "https://www.bbc.co.uk/news/articles/c4grlzegewno",
            title: "China, US clash, no retreat",
            type: "factCheck"
          },
          {
            url: "https://www.bbc.co.uk/news/articles/cgm8vxevyplo",
            title: "Trump's tariffs escalate China tensions",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'trade1',
      title: "EU's 'Liberation Day' Tariffs Against US",
      description: "The European Union unveiled extensive retaliatory tariffs against US goods, dubbed 'Liberation Day' measures by EU officials. With overwhelming support from European citizens, the EU implemented targeted tariffs affecting $12.4 billion in US exports, including agricultural products, technology, and manufactured goods. The measures specifically target key electoral states and represent the largest coordinated European economic response to US trade actions in history.",
      date: "2025-04-01",
      category: "Trade",
      verification: {
        status: 'verified',
        lastVerified: "2025-04-06T12:50:00Z",
        verifiedBy: ["European Commission", "Public Opinion Polls", "Economic Analysis"],
        sources: [
          {
            url: "https://www.politico.eu/article/trump-tariffs-uk-retaliatory-goods-import-export-liberation-day-trade/",
            title: "UK hints at tariff payback",
            type: "factCheck"
          },
          {
            url: "https://www.bruegel.org/first-glance/retaliation-against-us-tariffs-eus-only-real-option",
            title: "EU sees retaliation as necessary",
            type: "primary"
          },
          {
            url: "https://www.bbc.co.uk/news/articles/c24q5jqyle0o",
            title: "EU pressure aims Trump reversal",
            type: "factCheck"
          },
          {
            url: "https://www.theguardian.com/us-news/2025/apr/01/large-majority-of-europeans-support-retaliatory-tariffs-against-us-poll-finds",
            title: "Europe backs tariffs against US",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'trade3',
      title: "Global Supply Chain Disruption",
      description: "Major manufacturing disruptions reported across automotive, electronics, chemicals, and consumer goods sectors. Companies report significant production delays and cost increases due to new tariffs. The fashion industry faces supply chain turmoil, while the shipping industry reports severe disruptions in global trade flows. The US Chamber of Commerce estimates potential job losses of 2.6 million if trade tensions escalate.",
      date: "2024-03-28",
      category: "Trade",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-06T12:35:00Z",
        verifiedBy: ["US Chamber of Commerce", "Industry Reports", "International Trade Organizations"],
        sources: [
          {
            url: "https://www.chemistryworld.com/news/trumps-new-tariffs-threaten-the-chemicals-sector/4021255.article",
            title: "Chemistry World: Tariffs Impact on Chemical Sector",
            type: "factCheck"
          },
          {
            url: "https://www.automotivelogistics.media/nearshoring/what-liberation-day-tariffs-mean-for-the-automotive-supply-chain/46993.article",
            title: "Automotive Logistics: Tariff Impact Analysis",
            type: "factCheck"
          },
          {
            url: "https://www.sdcexec.com/transportation/ocean-ports-carriers/article/22937916/cleveland-containers-how-american-sanctions-may-affect-global-shipping-industry",
            title: "Supply & Demand Chain Executive: Shipping Industry Impact",
            type: "factCheck"
          },
          {
            url: "https://www.thenationalnews.com/business/economy/2025/04/06/shipping-industry-sinks-into-crisis-as-trumps-tariffs-disrupt-global-trade-flows/",
            title: "The National: Global Trade Disruption Analysis",
            type: "factCheck"
          },
          {
            url: "https://tax.thomsonreuters.com/blog/what-trumps-global-tariff-announcement-means-for-trade-professionals/",
            title: "Thomson Reuters: Tariff Impact Analysis",
            type: "primary"
          },
          {
            url: "https://www.voguebusiness.com/story/companies/new-us-tariffs-throw-fashions-supply-chain-into-turmoil",
            title: "Vogue Business: Fashion Industry Impact",
            type: "factCheck"
          }
        ]
      }
    },
    {
      id: 'trade4',
      title: "ASEAN Nations React to US Tariffs",
      description: "In response to the newly announced U.S. tariffs, several Southeast Asian nations are seeking to diversify their export markets to reduce reliance on the U.S. Vietnam and Thailand, significantly affected by tariffs of 46% and 36% respectively, are open to negotiations with Washington but are also exploring alternative trade partnerships. Indonesia, facing a 32% tariff, plans to consult with businesses to devise strategies and explore alternative trade partnerships, particularly with European nations. Malaysia aims to expand trade relations with China, Russia, and Brazil to mitigate the impact of U.S. tariffs. These collective efforts aim to bolster regional trade and economic resilience amid escalating global trade tensions",     
      date: "2025-02-25",
      category: "Trade",
      verification: {
        status: 'verified',
        lastVerified: "2024-04-04T09:45:00Z",
        verifiedBy: ["ASEAN Secretariat", "Economic Research Institutes"],
        sources: [
          {
            url: "https://www.usasean.org/article/southeast-asia-reacts-us-tariff-policies",
            title: "ASEAN Joint Statement",
            type: "primary"
          }
        ]
      }
    }
  ];

  const mediaEvidence: Evidence[] = [
    {
      id: 'media2',
      title: "Elon Musk vs Free Speech (Elon is winning)",
      description: "Elon Musk, who identifies as a \"free speech absolutist,\" has faced criticism for inconsistent content moderation on X (formerly Twitter). Despite advocating for unrestricted speech, X has complied with government requests to suppress content in countries like India and Turkey, including blocking a BBC documentary critical of India's Prime Minister Narendra Modi and suspending opposition accounts amid Turkish civil unrest. Additionally, X's account suspensions have surged, with over 5.3 million accounts suspended in the first half of 2024, more than four times the number during similar periods before Musk's acquisition. Critics argue these actions contradict Musk's proclaimed commitment to free speech.​",
      date: "2024-09-04",
      category: "Media",
      verification: {
        status: 'verified',
        lastVerified: "2025-04-06T14:37:00Z",
        verifiedBy: ["Media Reports", "Digital Rights Organizations"],
        sources: [
          {
            url: "https://www.theverge.com/2024/9/4/24235213/x-brazil-suppression-speech-elon-musk-india-turkey",
            title: "The Verge: X's Global Content Suppression",
            type: "factCheck"
          },
          {
            url: "https://www.nextcenturyfoundation.org/elon-musk-free-speech-absolutist-in-a-kingdom-of-chaos/",
            title: "Next Century Foundation Analysis",
            type: "primary"
          },
          {
            url: "https://apnews.com/article/elon-musk-x-influence-uk-us-politics-48cc1870cbdb5df03829f5ab303b579d",
            title: "AP: Musk's Political Influence",
            type: "factCheck"
          },
          {
            url: "https://www.theunpopulist.net/p/elon-musk-the-phony-free-speech-absolutist",
            title: "The Unpopulist: Free Speech Analysis",
            type: "factCheck"
          },
          {
            url: "https://www.politico.eu/article/musks-x-suspends-opposition-accounts-turkey-protest-civil-unrest-erdogan-imamoglu-istanbul-mayor/",
            title: "Politico: Turkish Opposition Suppression",
            type: "factCheck"
          },
          {
            url: "https://www.msnbc.com/opinion/msnbc-opinion/trump-elon-musk-free-speech-defamation-censorship-rcna188846",
            title: "MSNBC: Free Speech Contradictions",
            type: "factCheck"
          },
          {
            url: "https://www.businessinsider.com/elon-musk-x-twitter-account-suspensions-rising-2024-9",
            title: "Business Insider: Account Suspension Data",
            type: "primary"
          }
        ]
      }
    },
    {
      id: 'media1',
      title: "Attacks on Free Press and Media",
      description: "​President Donald Trump has intensified his attacks on the media, labeling outlets like CNN and MSNBC as \"illegal\" and advocating for investigations into their operations. The Federal Communications Commission (FCC), under Trump-appointed chair Brendan Carr, has initiated probes into organizations such as NPR and PBS, raising concerns about press freedom. Additionally, the administration has taken control of the White House press pool, traditionally managed by the White House Correspondents' Association, allowing selective access to journalists. Despite these actions, public awareness of Trump's media confrontations has declined, with only 36% of Americans reporting significant attention to these issues, down from 72% in 2017. Experts warn that these developments pose a substantial threat to democratic principles and free speech.",
      date: "2025-03-15",
      category: "Media",
      verification: {
        status: 'verified',
        lastVerified: "2025-04-06T14:28:00Z",
        verifiedBy: ["Media Organizations", "Academic Research", "Press Freedom Watch"],
        sources: [
          {
            url: "https://www.vanityfair.com/news/story/trump-press-freedom-authoritarianism",
            title: "Vanity Fair: Press Freedom Analysis",
            type: "factCheck"
          },
          {
            url: "https://www.france24.com/en/live-news/20250314-trump-blasts-foes-and-media-in-speech-at-department-of-injustice",
            title: "France24: Trump's Media Attacks",
            type: "factCheck"
          },
          {
            url: "https://www.poynter.org/ethics-trust/2025/president-donald-trump-relationship-attacks-journalists/",
            title: "Poynter: Trump's War on Journalism",
            type: "factCheck"
          },
          {
            url: "https://www.nbcnews.com/politics/donald-trump/trumps-anti-media-rhetoric-turns-action-rcna191949",
            title: "NBC: Anti-Media Actions Analysis",
            type: "factCheck"
          },
          {
            url: "https://www.theguardian.com/us-news/2025/mar/15/trump-media-attacks",
            title: "Guardian: Press Freedom Crisis",
            type: "factCheck"
          },
          {
            url: "https://www.niemanlab.org/2025/03/far-fewer-americans-are-hearing-about-trumps-attacks-on-the-media-this-time-around-report-finds/",
            title: "Nieman Lab: Public Awareness Study",
            type: "primary"
          },
          {
            url: "https://www.hks.harvard.edu/publications/enemy-people-trumps-war-press-new-mccarthyism-and-threat-american-democracy",
            title: "Harvard: Democracy Under Threat",
            type: "primary"
          },
          {
            url: "https://www.theguardian.com/us-news/2025/feb/24/trump-free-speech-media-attack",
            title: "Guardian: Free Speech Analysis",
            type: "factCheck"
          },
          {
            url: "https://en.wikipedia.org/wiki/Donald_Trump%27s_conflict_with_the_media",
            title: "Wikipedia: Trump-Media Conflict",
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
    ...territorialEvidence,
    ...mediaEvidence
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
        <TabsList className="grid grid-cols-7 max-w-4xm mx-auto mb-8">
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
