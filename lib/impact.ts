import impactData from '@/content/impact.json';

export type ImpactStat = {
  value: string;
  label: string;
};

export type ImpactQuote = {
  quote: string;
  attribution: string;
};

type ImpactContent = {
  stats: ImpactStat[];
  quotes: ImpactQuote[];
};

export const impact = impactData as ImpactContent;

export function hasImpact(): boolean {
  return impact.stats.length > 0 || impact.quotes.length > 0;
}
