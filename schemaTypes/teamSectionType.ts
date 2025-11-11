import {defineField, defineType} from 'sanity'

export const teamSectionType = defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'document',
  fields: [
    defineField({
      name: 'members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name_ar', type: 'string', title: 'Name (AR)'},
            {name: 'name_en', type: 'string', title: 'Name (EN)'},
            {name: 'description_ar', type: 'text', title: 'Description (AR)'},
            {name: 'description_en', type: 'text', title: 'Description (EN)'},
            {name: 'position_ar', type: 'string', title: 'Position (AR)'},
            {name: 'position_en', type: 'string', title: 'Position (EN)'},
            {name: 'image', type: 'image', title: 'Image'},
          ],
        },
      ],
    }),
  ],
})
