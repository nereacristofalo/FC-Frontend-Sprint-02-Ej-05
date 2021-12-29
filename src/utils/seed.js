export const precenseOptions = [
  {
    name: 'presence',
    value: 'inoffice',
    text: 'Presencial',
  },
  {
    name: 'presence',
    value: 'remote',
    text: 'En remoto',
  },
];

export const transferOptions = [
  {
    name: 'transfer',
    value: 'yes',
    text: 'Sí',
  },
  {
    name: 'transfer',
    value: 'no',
    text: 'No',
  },
];

export const countryOptions = [
  {
    value: 'espanya',
    text: 'España',
  },
  {
    value: 'argentina',
    text: 'Argentina',
  },
];

export const cityOptions = [
  {
    value: 'barcelona',
    text: 'Barcelona',
  },
  {
    value: 'rosario',
    text: 'Rosario',
  },
];

const getRandomInt = () => {
  return Math.floor(Math.random() * 6);
};

export const getTableData = (amount) => {
  const data = [];

  const semilla = [
    {
      fullname: 'Peregrin Tuk',
      city: 'The Shire',
      country: 'Arnor',
      phone: '+34 123 45 67 89',
      email: 'pippin@lotr.com',
      skills: ['HTML&CSS', 'Angular', 'React'],
    },
    {
      fullname: 'Meriadoc Brandigamo',
      city: 'The Shire',
      country: 'Arnor',
      phone: '+34 123 45 67 89',
      email: 'merry@lotr.com',
      skills: ['HTML&CSS', 'Angular', 'React'],
    },
    {
      fullname: 'Frodo Baggins',
      city: 'The Shire',
      country: 'Arnor',
      phone: '+34 123 45 67 89',
      email: 'frodo@lotr.com',
      skills: ['NodeJS', 'Vue', 'HTML&CSS', 'React'],
    },
    {
      fullname: 'Samwise Gamgee',
      city: 'The Shire',
      country: 'Arnor',
      phone: '+34 123 45 67 89',
      email: 'sam@lotr.com',
      skills: ['Java', 'Spring'],
    },
    {
      fullname: 'Legolas Greenleaf',
      city: 'Mirkwood',
      country: 'Wilderland',
      phone: '+34 123 45 67 89',
      email: 'legolas@lotr.com',
      skills: ['C#', '.Net', 'SQL'],
    },
    {
      fullname: 'Gandalf Mithrandir',
      city: 'Valinor',
      country: 'Middle Earth',
      phone: '+34 123 45 67 89',
      email: 'gandalf@lotr.com',
      skills: [
        'NodeJS',
        'Vue',
        'HTML&CSS',
        'React',
        'Angular',
        'JavaScript',
        'TypeScript',
      ],
    },
  ];

  for (let i = 0; i < amount; i++) {
    const index = getRandomInt();
    data.push({ ...semilla[index] });
  }

  return data;
};
