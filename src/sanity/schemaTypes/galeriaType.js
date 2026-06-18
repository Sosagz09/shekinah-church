export const galeriaType = {
  name: 'galeria',
  title: 'Galería',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'orden',
      title: 'Orden',
      type: 'number',
    },
  ],
}