const router = require("express").Router();
const { getJobOffers, createJobOffer, updateJobOffer, deleteJobOffer, getOneJobOffer, searchJobOffers } = require("./controllers/JobOffer");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.get('/search', searchJobOffers);
router.get("/job-offers", getJobOffers);
router.get("/job-offers/:id", getOneJobOffer);
router.post("/job-offers", createJobOffer);
router.put("/job-offers/:id", updateJobOffer);
router.delete("/job-offers/:id", deleteJobOffer);







module.exports = router;