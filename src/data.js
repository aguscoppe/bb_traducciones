// constants
const ENGLISH = 'en';
const SPANISH = 'esp';

// data
const data = {
  es: {
    links: [
      { name: 'Inicio', id: '#' },
      { name: 'Quiénes somos', id: '#about' },
      { name: 'Servicios', id: '#services' },
      { name: 'Especializaciones', id: '#specializations' },
      { name: 'Contacto', id: '#contact' },
    ],
    header:
      'B&B Traducciones es una empresa de servicios de idiomas fundada por los traductores públicos y científico-literarios de inglés Agustina Bartocci y Matías Borich, graduados de la Universidad del Salvador (USAL).',
    users: [
      {
        name: 'Matías Borich',
        description:
          'Complementa su labor como traductor con la docencia universitaria en la USAL. Como miembro del Colegio de Traductores Públicos de la Ciudad de Buenos Aires, participa activamente en la Comisión de Relaciones Internacionales.',
        image: '',
      },
      {
        name: 'Agustina Bartocci',
        description:
          'Se desarrolla como traductora pública y cinetífico- técnica. Luego de completar la Diplomatura en Traducción Audiovisual en la Universidad Tecnológica Nacional, sumó la subtitulación y la transcripción a sus áreas de experiencia . Además, forma parte del Colegio de Traductores Públicos de la Ciudad de Buenos Aires.',
        image: '',
      },
    ],
    services: [
      'Traducción jurídica',
      'Traducción científico-técnica',
      'Corrección de textos',
      'Traducción audiovisual',
      'Transcripción',
    ],
    specializations: [
      'Jurídica',
      'Legalizaciones',
      'Institucional',
      'Comercio exterior',
      'Comunicación',
      'Marketing',
      'Economía y finanzas',
      'Medicina',
      'Ciencias naturales',
      'Ciencias sociales',
    ],
    contact: {
      mail: 'info@bybtraducciones.com',
      phone: ['+54 11 2526-2184', '+54 11 3329-1571'],
      instagram: '@bybtraducciones',
      location: 'CABA (zona Congreso y Palermo)',
    },
  },
  en: {
    links: [
      { name: 'Home', id: '#' },
      { name: 'About', id: '#about' },
      { name: 'Servicies', id: '#services' },
      { name: 'Specializations', id: '#specializations' },
      { name: 'Contact', id: '#contact' },
    ],
    header:
      'B&B Traducciones is a language service company founded by the English<>Spanish translators Agustina Bartocci and Matías Borich, both graduated from Universidad del Salvador (USAL). Their area of expertise encompasses from Sworn to Technical and Scientific translations.',
    users: [
      {
        name: 'Matías Borich',
        description:
          'His work as a freelance translator is complemented by his role as professor at Universidad del Salvador. As a member of the Colegio de Traductores Públicos de la Ciudad de Buenos Aires, he also participates actively in the Foreign Relations Committee.',
        image: '',
      },
      {
        name: 'Agustina Bartocci',
        description:
          'She is a Sworn and Technical-Scientific English- Spanish Translator. After completing a Diploma in Audiovisual Translation, she added subtitling and transcription to her areas of expertise. She is also an active member of the Colegio de Traductores Públicos de la Ciudad de Buenos Aires.',
        image: '',
      },
    ],
    services: [
      'Sworn translations',
      'Technical-Scientific translations',
      'Proofreading',
      'Audiovisual translations',
      'Transcriptions',
    ],
    specializations: [
      'Legal',
      'Legalizations',
      'Institutional',
      'International trade',
      'Communication',
      'Marketing',
      'Economy and finance',
      'Medicine',
      'Natural Science',
      'Social Science',
    ],
    contact: {
      mail: 'info@bybtraducciones.com',
      phone: ['+54 11 2526-2184', '+54 11 3329-1571'],
      instagram: '@bybtraducciones',
      location: 'Buenos Aires, Argentina',
    },
  },
};

export { ENGLISH, SPANISH, data };
