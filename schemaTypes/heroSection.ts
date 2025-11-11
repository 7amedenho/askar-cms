import {defineField, defineType} from 'sanity'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({name: 'heading_ar', type: 'string', title: 'Heading (AR)'}),
    defineField({name: 'heading_en', type: 'string', title: 'Heading (EN)'}),
    defineField({name: 'description_ar', type: 'text', title: 'Description (AR)'}),
    defineField({name: 'description_en', type: 'text', title: 'Description (EN)'}),
    defineField({name: 'backgroundImage', type: 'image', title: 'Background Image'}),
    defineField({name: 'buttonText_ar', type: 'string', title: 'Button Text (AR)'}),
    defineField({name: 'buttonText_en', type: 'string', title: 'Button Text (EN)'}),
    defineField({name: 'buttonLink', type: 'url', title: 'Button Link'}),
  ],
})
