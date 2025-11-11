import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'name_ar', type: 'string', title: 'Name (AR)'}),
    defineField({name: 'name_en', type: 'string', title: 'Name (EN)'}),
    defineField({name: 'slug', type: 'slug'}),
    defineField({name: 'description_ar', type: 'text', title: 'Description (AR)',}),
    defineField({name: 'description_en', type: 'text', title: 'Description (EN)'}),
    defineField({name: 'coverImage', type: 'image', title: 'Cover Image'}),
    defineField({name: 'gallery', type: 'array', of: [{type: 'image'}], title: 'Gallery Images'}),
  ],
})
