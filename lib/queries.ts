import { client } from '@/sanity/lib/client';
import { Post } from './types';

export const projectsQuery = `
  *[_type == "post" && section == "projects"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title,
    "services": services[]->title,
      seo {
    metaTitle,
    metaDescription,
    "imageUrl": ogImage.asset->url,
    noIndex
  }
  }
`;

export const projectBySlugQuery = `
  *[_type == "post" && section == "projects" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    tools,
    "slug": slug.current,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title,
    "services": services[]->title,
    body,
      seo {
    metaTitle,
    metaDescription,
    "imageUrl": ogImage.asset->url,
    noIndex
  }
  }
`;

export async function getProjectsByTitle(name: string) {
  return client.fetch<Post[]>(
    `
    *[
      _type == "post" &&
      section == "projects" &&
      ($name in industries[]->title || $name in services[]->title)
    ]
    | order(publishedAt desc) {
      _id,
      title,
      subtitle,
      "slug": slug.current,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      "industries": industries[]->{
        title
      },
      "services": services[]->{
        title
      },
      summary,
      body,
      tools,
        seo {
    metaTitle,
    metaDescription,
    "imageUrl": ogImage.asset->url,
    noIndex
  }
    }
    `,
    { name },
  );
}

export const servicesQuery = `
  *[_type == "post" && section == "services"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title,
      seo {
    metaTitle,
    metaDescription,
    "imageUrl": ogImage.asset->url,
    noIndex
  }
  }
`;

export const serviceBySlugQuery = `
  *[_type == "post" && section == "services" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title,
    "services": services[]->title,
    body,
      seo {
    metaTitle,
    metaDescription,
    "imageUrl": ogImage.asset->url,
    noIndex
  }
  }
`;

export async function getServicesByTitles(titles: string[]) {
  return client.fetch<Post[]>(
    ` *[ _type == "post" && section == "services" && title in $services ] | order(publishedAt desc) { _id, title, "slug": slug.current, subtitle, "imageUrl": mainImage.asset->url,   seo {
    metaTitle,
    metaDescription,
    "imageUrl": ogImage.asset->url,
    noIndex
  } } `,
    { services: titles },
  );
}

export const industriesQuery = `
  *[_type == "post" && section == "industries"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "services": services[]->title,
      seo {
    metaTitle,
    metaDescription,
    "imageUrl": ogImage.asset->url,
    noIndex
  }
  }
`;

export const industryBySlugQuery = `
  *[_type == "post" && section == "industries" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    "industries": industries[]->title,
    "services": services[]->title,
    body,
      seo {
    metaTitle,
    metaDescription,
    "imageUrl": ogImage.asset->url,
    noIndex
  }
  }
`;

export async function getIndustriesByTitles(titles: string[]) {
  return client.fetch<Post[]>(
    ` *[ _type == "post" && section == "industries" && title in $industries ] | order(publishedAt desc) { _id, title, "slug": slug.current, subtitle, "imageUrl": mainImage.asset->url,   seo {
    metaTitle,
    metaDescription,
    "imageUrl": ogImage.asset->url,
    noIndex
  }} `,
    { industries: titles },
  );
}

export const leadershipGridQuery = `
  *[_type == "leadership"]
    | order(order asc)[0...2] {
      _id,
      name,
      "slug": slug.current,
      position,
      "imageUrl": profileImage.asset->url,
      education
    }
`;

export const leadershipQuery = `
  *[_type == "leadership"]
  | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      position,
      "imageUrl": profileImage.asset->url,
      education
    }
`;

export const leadershipBySlugQuery = `
  *[_type == "leadership" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    position,
    "imageUrl": profileImage.asset->url,
    education,
    bio,
    linkedin
  }
`;
