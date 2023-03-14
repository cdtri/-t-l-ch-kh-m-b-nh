'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'cdtri1619lqdnt@gmail.com',
      password: '123456789',
      firstName: 'Tri',
      lastName: 'Cao',
      address: 'Ninh Thuan',
      gender: 1,
      roleId: 'R1',
      phonenumber: '0398827408',
      positionId: 'P1',
      image: 'test.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
