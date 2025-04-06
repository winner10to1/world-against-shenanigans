import { VerificationStatus } from "@/types/evidence";

export function getVerificationBadge(status: VerificationStatus): {
  icon: string;
  label: string;
  className: string;
} {
  switch (status) {
    case 'verified':
      return {
        icon: '✓',
        label: 'Verified',
        className: 'bg-green-100 text-green-800 border-green-200'
      };
    case 'under_review':
      return {
        icon: '⟳',
        label: 'Under Review',
        className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
      };
    case 'disputed':
      return {
        icon: '⚠',
        label: 'Disputed',
        className: 'bg-red-100 text-red-800 border-red-200'
      };
  }
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatVerificationDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function isFutureDate(date: string): boolean {
  return new Date(date) > new Date();
}