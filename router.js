const router = require("express").Router();
const { getJobOffers, createJobOffer, updateJobOffer, deleteJobOffer, getOneJobOffer, searchJobOffers } = require("./controllers/JobOffer");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.get('/api/search', searchJobOffers);
router.get("/api/job-offers", getJobOffers);
router.get("/api/job-offers/:id", getOneJobOffer);
router.post("/api/job-offers", createJobOffer);
router.put("/api/job-offers/:id", updateJobOffer);
router.delete("/api/job-offers/:id", deleteJobOffer);







module.exports = router;