import profileData from '@/content/profile.json';

export type ProfileExperience = {
  title: string;
  org: string;
  dates: string;
  location: string;
  summary: string;
};

export type ProfileEducation = {
  title: string;
  org: string;
  dates: string;
  summary: string;
};

export type ProfileAboutSection = {
  title: string;
  body: string;
};

export type Profile = {
  name: string;
  headline: string;
  shortHeadline: string;
  location: string;
  summary: string;
  about: ProfileAboutSection[];
  experience: ProfileExperience[];
  education: ProfileEducation[];
};

export const profile = profileData as Profile;
