const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING,},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketClothes = sequelize.define('basket_clothes',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Clothes = sequelize.define('clothes',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER,allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const ClothesInfo = sequelize.define('clothes_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, unique: true, allowNull: false},
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketClothes)
BasketClothes.belongsTo(Basket)

Type.hasMany(Clothes)
Clothes.belongsTo(Type)

Clothes.hasMany(Rating)
Rating.belongsTo(Clothes)

Clothes.hasMany(ClothesInfo, {as: 'info'})
ClothesInfo.belongsTo(Clothes)

Clothes.hasMany(BasketClothes)
BasketClothes.belongsTo(Clothes)


module.exports = {
    User, 
    Basket, 
    BasketClothes,
    Clothes,
    Type,
    Rating,
    ClothesInfo
}