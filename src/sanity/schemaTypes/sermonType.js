export const sermonType = {
  name: 'sermon',
  title: 'Sermones',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitulo',
      title: 'Subtítulo',
      type: 'string',
    },
    {
      name: 'youtubeId',
      title: 'ID de YouTube',
      type: 'string',
      description: 'El ID del video de YouTube (ej: dQw4w9WgXcQ)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
    },
  ],
}