const sharp = require('sharp');
const path = require('path');

const imagenes = [
  'eventos.png',
  'mensajes.png',
  'ministerios.png',
  'nosotros.png',
  'oracion.png',
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
  '7.jpeg',
  '8.jpeg',
  '9.jpeg',
  'pastores.jpeg',
  'soynuevo.jpeg',
  'inicio.jpeg',
];

async function optimizar() {
  for (const imagen of imagenes) {
    const input = path.join('public', imagen);
    const nombreSinExt = imagen.replace(/\.(png|jpeg|jpg)$/i, '');
    const output = path.join('public', `${nombreSinExt}.webp`);

    await sharp(input)
      .webp({ quality: 80 })
      .toFile(output);

    console.log(`✅ ${imagen} → ${nombreSinExt}.webp`);
  }
  console.log('\n🎉 Todas las imágenes optimizadas!');
}

optimizar();