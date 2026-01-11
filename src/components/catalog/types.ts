export type StoryPreview = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  minutes?: number;
  ageLabel?: string;
  // keep language flexible; default content uses 'EN'
  language?: string;
};
