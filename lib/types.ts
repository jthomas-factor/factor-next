import { PortableTextBlock } from '@portabletext/types';

type Tool = {
  name: string;
  description: string;
};

export type Post = {
  _id: string;
  title: string;
  subtitle: string;
  slug: string;
  imageUrl: string;
  industries: string[];
  services: string[];
  summary: string;
  body: PortableTextBlock[];
  tools?: Tool[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    imageUrl: string;
    noIndex: boolean;
  };
};

export type Leadership = {
  _id: string;
  name: string;
  position: string;
  slug: string;
  imageUrl: string;
  education: string[];
  bio: PortableTextBlock[];
  linkedin?: string;
};
