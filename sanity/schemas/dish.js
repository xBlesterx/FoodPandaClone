import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish in Dollors',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of dish',
    },
  ],
})
