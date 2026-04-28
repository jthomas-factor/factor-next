import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { industryType } from './industryType';
import { serviceType } from './serviceType';
import { leadershipType } from './leadershipType';
import { seo } from './seoType';
import imageWithText from './imageWithText';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    industryType,
    serviceType,
    leadershipType,
    seo,
    imageWithText,
  ],
};
