const { Model, DataTypes } = require("sequelize"); // Extracting the Model & DataTypes methods from the sequelize module to create model with datatypes

const sequelize = require("../config/connection"); // importing to connect model to the database connection

const Order = require("./Order"); // Inheriting all methods & properties from Model object

// Creating an instance of the Model object called UserDonationInfo
class PaymentInfo extends Model {}

PaymentInfo.init(
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
        paymentMethod: {
            type: DataTypes.ENUM("Credit Card", "PayPal", "Stripe"),
            allowNull: false,
        },
        transactionId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        paymentStatus: {
            type: DataTypes.ENUM("Pending", "Completed", "Failed"),
            allowNull: false,
            defaultValue: "Pending",
        },
    },
    {
        // Properties for the model configuration
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "payment",
    }
);

// Define Association
Order.hasOne(PaymentInfo, { foreignKey: "orderId", onDelete: "CASCADE" });
PaymentInfo.belongsTo(Order, { foreignKey: "orderId" });

module.exports = PaymentInfo;