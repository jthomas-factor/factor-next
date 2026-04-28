const imageWithText = {
  name: 'imageWithText',
  title: 'Image with Text',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: ['left', 'right'],
        layout: 'radio',
      },
      initialValue: 'left',
    },
  ],
  preview: {
    select: { title: 'text', media: 'image' },
  },
};

export default imageWithText;
