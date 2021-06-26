module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define(
    'Offers',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      originalFileName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'pending',
      },
    },
    {
      timestamps: false,
    }
  );

  Offers.associate = function (models) {
    Offers.belongsTo(models.Users, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
    Offers.belongsTo(models.Contests, {
      foreignKey: 'contestId',
      targetKey: 'id',
    });
    Offers.hasOne(models.Ratings, {
      foreignKey: 'offerId',
      sourceKey: 'id',
    });
  };

  return Offer;
};
