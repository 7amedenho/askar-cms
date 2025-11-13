import {defineField, defineType} from 'sanity'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({name: 'label_ar', type: 'string', title: 'Lable (AR)'}),
    defineField({name: 'label_en', type: 'string', title: 'Lable (EN)'}),
    defineField({name: 'heading_ar', type: 'string', title: 'Heading (AR)'}),
    defineField({name: 'heading_en', type: 'string', title: 'Heading (EN)'}),
    defineField({
      name: 'discription_ar',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Discription (AR)',
    }),
    defineField({
      name: 'discription_en',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Discription (EN)',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Background Image',
    }),
    defineField({
      name: 'buttons_ar',
      title: 'Buttons (AR)',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'button',
          title: 'Button',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Phone', value: 'FaPhone'},
                  {title: 'Blog', value: 'FaBlog'},
                  {title: 'Message', value: 'FaEnvelope'},
                  {title: 'Web', value: 'FaGlobe'},
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'url',
              media: 'icon',
            },
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Button without text',
                subtitle: subtitle,
                media,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'buttons_en',
      title: 'Buttons (EN)',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'button',
          title: 'Button',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Phone', value: 'FaPhone'},
                  {title: 'Blog', value: 'FaBlog'},
                  {title: 'Message', value: 'FaEnvelope'},
                  {title: 'Web', value: 'FaGlobe'},
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'url',
              media: 'icon',
            },
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Button without text',
                subtitle: subtitle,
                media,
              }
            },
          },
        }),
      ],
    }),
  ],
})
