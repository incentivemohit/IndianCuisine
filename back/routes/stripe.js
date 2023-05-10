const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  try {
    const charge = await stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    });

    if (!charge) {
      res.status(500).json("");
    } else {
      res.status(200).json(charge);
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
