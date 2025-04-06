export type VerificationStatus = 'verified' | 'under_review' | 'disputed';

export interface VerificationDetails {
  status: VerificationStatus;
  lastVerified: string;
  verifiedBy: string[];
  sources: {
    url: string;
    title: string;
    type: 'primary' | 'factCheck' | 'archive';
  }[];
}

export interface Evidence {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  verification: VerificationDetails;
}

export interface EvidenceGroup {
  id: string;
  label: string;
  items: Evidence[];
}