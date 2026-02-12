import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://factorinc.com',
      lastModified: new Date(),
    },
    {
      url: 'https://factorinc.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://factorinc.com/about/leadership',
      lastModified: new Date(),
    },
    {
      url: 'https://factorinc.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://factorinc.com/industries',
      lastModified: new Date(),
    },
    {
      url: 'https://factorinc.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://factorinc.com/contracts',
      lastModified: new Date(),
    },
  ];
}
