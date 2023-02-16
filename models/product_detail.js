'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product,{
        foreignKey:'product_id'
      })
    }
  }
  product_detail.init({
    qty: DataTypes.INTEGER,
    deskription:DataTypes.STRING,
    weight: DataTypes.INTEGER,
    size: DataTypes.STRING,
    createdAt:{
      type:DataTypes.DATE,
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt:{
      type:DataTypes.DATE,
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP')
    }

  }, {
    sequelize,
    modelName: 'product_detail',
  });
  return product_detail;
};