const { Model, DataTypes } = require("sequelize"); // Extracting the Model & DataTypes methods from the sequelize module to create model with datatypes

const sequelize = require("../config/connection"); // importing to connect model to the database connection

const Order = require("./Order"); // Inheriting all methods & properties from Model object

// Creating an instance of the Model object called UserDonationInfo
class OrderDetails extends Model {}

OrderDetails.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        orderId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "order",
                key: "id",
            },
            onDelete: "CASCADE",
        },
        size: {
            type: DataTypes.INTEGER, // Stores size in inches
            allowNull: false,
            validate: { min: 4, max: 20 }, // Example range for cake sizes
        },
        flavor: {
            type: DataTypes.STRING(50), // Stores selected flavor as a string
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING(30), // Stores color as a string
            allowNull: false,
        },
        comments: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        // Properties for the model configuration
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "cake",
    }
);

// Define Association
Order.hasOne(OrderDetails, { foreignKey: "orderId", onDelete: "CASCADE" });
OrderDetails.belongsTo(Order, { foreignKey: "orderId" });

module.exports = OrderDetails;