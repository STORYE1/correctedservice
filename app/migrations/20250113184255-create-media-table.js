'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('media', {
      media_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tour_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tours',
          key: 'tour_id',
        },
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['image', 'video', 'audio', 'document']],
        },
      },
      media_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('media');
  }
};
