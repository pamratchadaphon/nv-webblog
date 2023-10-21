module.exports = (sequelize, DataTypes) => {
  const Phone = sequelize.define("Phone", {
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
    memory: DataTypes.STRING,
    color: DataTypes.STRING,
    operatingSystem: DataTypes.STRING,
    price: DataTypes.STRING,
    screenSize: DataTypes.STRING,
    screenResolution: DataTypes.STRING,
    mainCamera: DataTypes.STRING,
    frontCamera: DataTypes.STRING,
    batteryCapacity: DataTypes.STRING,
    network: DataTypes.STRING,
    weight: DataTypes.STRING
  })
  return Phone;
};
