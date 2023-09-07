'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movies', [
      {
        id: 1,
        title: 'Pengabdi Setan',
        description: 'Pengabdi Setan Comunism',
        rating: 8.0,
        image: 'https',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        title: 'Perahu Kertas 2',
        description: 'Perahu kertasku kan melaju',
        rating: 9.0,
        image: 'https',
        created_at: new Date(),
        updated_at: new Date()
      }      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('movies', null, {});
  }
};
