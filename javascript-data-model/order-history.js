const orderHistory = [
  {
    orderPlaced: '08-08-2020',
    orderNumber: '114-3941689-877232',
    orderRecipient: 'JS Masher',
    orderTotal: 34.0,
    products: [
      {
        product: 'JavaScript for Impatient Programmers',
        author: 'Dr. Axel Rauschmayer',
        value: 31.55,
      },
    ],
    delivered: ['yes', 'directly'],
    returnableUntil: '09-07-2020',
  },

  {
    orderPlaced: '07-20-2020',
    orderNumber: '113-9984268-1280257',
    orderRecipient: 'JS Masher',
    orderTotal: 44.43,
    products: [
      {
        product: 'The Timeless Way of Building',
        author: 'Christopher Alexander',
        value: 41.33,
      },
    ],
    delivered: ['yes', 'directly'],
    returnableUntil: '08-19-2020',
  },

  {
    orderPlaced: '07-20-2020',
    orderNumber: '114-2875557-9059409',
    orderRecipient: 'JS Masher',
    orderTotal: 15.98,
    products: [
      {
        product:
          'Gamecube COntroller Adapter, Super Smash Bros Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No lag-Gamecube Adapter',
        value: 15.98,
      },
    ],
    delivered: ['yes', 'indirectly'],
    returnableUntil: '08-05-2020',
  },

  {
    orderPlaced: '07-05-2020',
    orderNumber: '113-2884177-2648248',
    orderRecipient: 'JS Masher',
    orderTotal: 138.93,
    products: [
      {
        product:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        value: 94.95,
      },
      {
        product: 'The Art of Sql',
        author: 'Stephanie Farcult',
        value: 33.99,
      },
    ],
    delivered: ['yes', 'indirectly'],
    returnableUntil: '08-04-2020',
  },
];
console.log(orderHistory);
