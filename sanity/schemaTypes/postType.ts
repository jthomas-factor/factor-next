import { DocumentTextIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,

  initialValue: {
    section: 'blog',
  },

  fields: [
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          { title: 'Main Blog', value: 'blog' },
          { title: 'Projects', value: 'projects' },
          { title: 'Services', value: 'services' },
          { title: 'Industries', value: 'industries' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
      type: 'string',
      validation: Rule =>
        Rule.required().max(120).warning('Max 120 characters'),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),

    defineField({
      name: 'industries',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'industry' },
        }),
      ],
    }),

    defineField({
      name: 'services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'service' },
        }),
      ],
    }),

    defineField({
      name: 'summary',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        { type: 'imageWithText' },
      ],
    }),

    defineField({
      name: 'tools',
      title: 'Tools Used',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tool',
          title: 'Tool',
          fields: [
            defineField({
              name: 'name',
              title: 'Tool Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
          ],

          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
});
