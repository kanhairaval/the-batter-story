const router = require("express").Router();
const OrderDetails = require("../../models/OrderDetails");

// Create a new order detail
router.post("/", async (req, res) => {
    try {
        const newOrderDetail = await OrderDetails.create(req.body);
        res.status(201).json(newOrderDetail);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all order details
router.get("/", async (req, res) => {
    try {
        const orderDetails = await OrderDetails.findAll();
        res.status(200).json(orderDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single order detail by ID
router.get("/:id", async (req, res) => {
    try {
        const orderDetail = await OrderDetails.findByPk(req.params.id);
        if (!orderDetail) {
            return res.status(404).json({ message: "Order detail not found" });
        }
        res.status(200).json(orderDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;