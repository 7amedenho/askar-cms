import {defineField, defineType} from 'sanity'

export const contentSectionType = defineType({
  name: 'contentSection',
  title: 'Content Section',
  type: 'document',
  fields: [
    defineField({name: 'title_ar', type: 'string', title: 'Title (AR)'}),
    defineField({name: 'title_en', type: 'string', title: 'Title (EN)'}),
    defineField({name: 'text_ar', type: 'text', title: 'Text (AR)'}),
    defineField({name: 'text_en', type: 'text', title: 'Text (EN)'}),
    defineField({name: 'image', type: 'image', title: 'Image'}),
    defineField({name: 'buttonText_ar', type: 'string', title: 'Button Text (AR)'}),
    defineField({name: 'buttonText_en', type: 'string', title: 'Button Text (EN)'}),
    defineField({name: 'buttonLink', type: 'url', title: 'Button Link'}),
  ],
})
