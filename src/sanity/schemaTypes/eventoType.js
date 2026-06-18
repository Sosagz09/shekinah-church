export const eventoType = {
  name: 'evento',
  title: 'Eventos',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'fecha',
      title: 'Fecha',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}