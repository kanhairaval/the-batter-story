const { Model, DataTypes } = require("sequelize"); // Extracting the Model & DataTypes methods from the sequelize module to create model with datatypes

const sequelize = require("../config/connection"); // importing to connect model to the database connection

class Order extends Model {} // Inheriting all methods & properties from Model object

// Creating an instance of the Model object called UserDonationInfo
Order.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, // Automatically generate UUID
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true }, // Ensures the value is a valid email address
        },
        phone: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        orderDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        deliveryOrPickup: {
            type: DataTypes.ENUM("Delivery", "Pickup"),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true, // This will be conditionally required
            validate: {
                notEmpty: function () {
                    if (this.deliveryOrPickup === "Delivery" && !this.address) {
                        throw new Error("Address is required for delivery.");
                    }
                },
            },
        },
    },
    {
        // Properties for the model configuration
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "order",
    }
);

module.exports = Order;