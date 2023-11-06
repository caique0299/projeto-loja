'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [

      {
        id: 1,
        user_id: 1,
        total_value: 140,
        delivery_address: 'Retirada na BEES',
        delivery_number: '',
        order_date: '2023-04-17',
        status: 'Entregue',
      },
      {
        id: 2,
        user_id: 1,
        total_value: 130,
        delivery_address: 'R. Dr. Heitor Penteado - Nova Campinas, Campinas - SP, 98670-019',
        delivery_number: '1987',
        order_date: '2023-05-03',
        status: 'Entregue',
      },
    ], { timestamps: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};