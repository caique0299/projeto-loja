'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Caique Ramos',
        email: 'caiqueramoss@hotmail.com',
        address: 'Rua Abigail Zeni Nader, 738',
        city: 'Campinas',
        state: 'SP',
        zipcode: '12345-678',
        neighborhood: 'Teste',
        phone: '(19) 99999-9999',
        password: '1034d5f5bf8a0e7f10040d3eefee3e7a', /* AfroReact2023 */
        privacy: true,
        /* role: 'administrator',  */
      }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};