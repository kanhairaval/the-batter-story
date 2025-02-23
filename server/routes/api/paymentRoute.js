const router = require("express").Router();
const PaymentInfo = require("../../models/PaymentInfo");

// Create a new payment record
router.post("/", async (req, res) => {
    try {
        const newPayment = await PaymentInfo.create(req.body);
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all payment records
router.get("/", async (req, res) => {
    try {
        const payments = await PaymentInfo.findAll();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a payment record by ID
router.get("/:id", async (req, res) => {
    try {
        const payment = await PaymentInfo.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Payment record not found" });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update payment status
router.put("/:id", async (req, res) => {
    try {
        const payment = await PaymentInfo.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Payment record not found" });
        }
        await payment.update(req.body);
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;