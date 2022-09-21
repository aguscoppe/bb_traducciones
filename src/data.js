import MatiasImg from './assets/matias.jpg';
import AgustinaImg from './assets/agustina.jpg';

// constants
const ENGLISH = 'en';
const SPANISH = 'es';

// data
const contactData = [
  { text: ['info@bybtraducciones.com'], icon: 'fa-solid fa-envelope' },
  {
    text: ['+54 11 2526-2184', '+54 11 3329-1571'],
    icon: 'fa-solid fa-phone',
  },
  { text: ['@bybtraducciones'], icon: 'fa-brands fa-instagram' },
];

const data = {
  es: {
    navBar: {
      links: [
        { name: 'Inicio', id: '#' },
        { name: 'Quiénes somos', id: '#about' },
        { name: 'Servicios', id: '#services' },
        { name: 'Especializaciones', id: '#specializations' },
        { name: 'Contacto', id: '#contact' },
      ],
      languages: [
        { name: 'Español', id: SPANISH },
        { name: 'English', id: ENGLISH },
      ],
    },
    header: {
      title: 'B&B TRADUCCIONES',
      subtitle: 'Servicios de idiomas',
      button: { text: 'Contacto', id: '#contact' },
      description:
        'B&B Traducciones es una empresa de servicios de idiomas fundada por los traductores públicos y científico-literarios de inglés Agustina Bartocci y Matías Borich, graduados de la Universidad del Salvador (USAL).',
    },
    about: {
      title: 'Quiénes somos',
      data: [
        {
          name: 'Matías Borich',
          image: MatiasImg,
          description:
            'Complementa su labor como traductor con la docencia universitaria en la USAL. Como miembro del Colegio de Traductores Públicos de la Ciudad de Buenos Aires, participa activamente en la Comisión de Relaciones Internacionales.',
        },
        {
          name: 'Agustina Bartocci',
          image: AgustinaImg,
          description:
            'Se desarrolla como traductora pública y científico-técnica. Luego de completar la Diplomatura en Traducción Audiovisual en la Universidad Tecnológica Nacional, sumó la subtitulación y la transcripción a sus áreas de experiencia. Además, forma parte del Colegio de Traductores Públicos de la Ciudad de Buenos Aires.',
        },
      ],
    },
    services: {
      title: 'Servicios',
      data: [
        { name: 'Traducción jurídica', icon: 'fa-solid fa-scale-balanced' },
        {
          name: 'Traducción científico-técnica',
          icon: 'fa-solid fa-microscope',
        },
        { name: 'Corrección de textos', icon: 'fa-solid fa-file-pen' },
        { name: 'Traducción audiovisual', icon: 'fa-solid fa-clapperboard' },
        { name: 'Transcripción', icon: 'fa-solid fa-closed-captioning' },
      ],
    },
    specializations: {
      title: 'Especializaciones',
      data: [
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
    },
    contact: {
      title: 'Contacto',
      data: [
        ...contactData,
        {
          text: ['Congreso (CABA)', 'Palermo (CABA)'],
          icon: 'fa-solid fa-location-dot',
        },
      ],
    },
  },
  en: {
    navBar: {
      links: [
        { name: 'Home', id: '#' },
        { name: 'About', id: '#about' },
        { name: 'Servicies', id: '#services' },
        { name: 'Specializations', id: '#specializations' },
        { name: 'Contact', id: '#contact' },
      ],
      languages: [
        { name: 'Español', id: SPANISH },
        { name: 'English', id: ENGLISH },
      ],
    },
    header: {
      title: 'B&B TRADUCCIONES',
      subtitle: 'Language Services',
      button: { text: 'Contact', id: '#contact' },
      description:
        'B&B Traducciones is a language service company founded by the English<>Spanish translators Agustina Bartocci and Matías Borich, both graduated from Universidad del Salvador (USAL). Their areas of expertise encompasses from Sworn to Technical and Scientific translations.',
    },
    about: {
      title: 'About',
      data: [
        {
          name: 'Matías Borich',
          image: MatiasImg,
          description:
            'His work as a freelance translator is complemented by his role as professor at Universidad del Salvador. As a member of the Colegio de Traductores Públicos de la Ciudad de Buenos Aires, he also participates actively in the Foreign Relations Committee.',
        },
        {
          name: 'Agustina Bartocci',
          image: AgustinaImg,
          description:
            'She is a Sworn and Technical-Scientific English<>Spanish Translator. After completing a Diploma in Audiovisual Translation, she added subtitling and transcription to her areas of expertise. She is also an active member of the Colegio de Traductores Públicos de la Ciudad de Buenos Aires.',
        },
      ],
    },
    services: {
      title: 'Services',
      data: [
        { name: 'Sworn translations', icon: 'fa-solid fa-scale-balanced' },
        {
          name: 'Technical-Scientific translations',
          icon: 'fa-solid fa-microscope',
        },
        { name: 'Proofreading', icon: 'fa-solid fa-file-pen' },
        { name: 'Audiovisual translations', icon: 'fa-solid fa-clapperboard' },
        { name: 'Transcriptions', icon: 'fa-solid fa-closed-captioning' },
      ],
    },
    specializations: {
      title: 'Specializations',
      data: [
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
    },
    contact: {
      title: 'Contact',
      data: [
        ...contactData,
        {
          text: ['Buenos Aires, Argentina'],
          icon: 'fa-solid fa-location-dot',
        },
      ],
    },
  },
};

export { ENGLISH, SPANISH, data };
