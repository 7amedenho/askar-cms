import { defineField, defineType } from 'sanity'
export const callToActionSection = defineType({
  name: 'callToActionSection',
  title: 'Call To Action Section',
  type: 'object',
  fields: [
    { name: 'heading_ar', title: 'Heading (AR)', type: 'string' },
    { name: 'heading_en', title: 'Heading (EN)', type: 'string' },
    { name: 'description_ar', title: 'Description (AR)', type: 'text' },
    { name: 'description_en', title: 'Description (EN)', type: 'text' },
    { name: 'buttonText_ar', title: 'Button Text (AR)', type: 'string' },
    { name: 'buttonText_en', title: 'Button Text (EN)', type: 'string' },
    { name: 'buttonLink', title: 'Button Link', type: 'url' },
  ],
})
