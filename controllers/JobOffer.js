const JobOffer = require("../Model/JobOffer");

const getJobOffers = async (req, res) => {
    JobOffer.find()
        .then((joboffers) => {
            res.json(joboffers);
        })
        .catch((err) => {
            res.send(err);
        });
};

const getOneJobOffer = async (req, res) => {
    try {
        const joboffer = await JobOffer.findById({ _id: req.params.id });
        res.json(joboffer);
    } catch (err) {
        res.send(err);
    }
}

const createJobOffer = async (req, res) => {
    const date = new Date();
    const joboffer = new JobOffer({
        company: req.body.company,
        logo: req.body.logo,
        logoBackground: req.body.logoBackground,
        position: req.body.position,
        postedAt: date,
        contract: req.body.contract,
        location: req.body.location,
        website: req.body.website,
        apply: req.body.apply,
        description: req.body.description,
        requirements: req.body.requirements,
        role: req.body.role,
    });

    try {
        const savedJobOffer = await joboffer.save();
        res.send(savedJobOffer);
    } catch (err) {
        res.send(err);
    }
};

const updateJobOffer = async (req, res) => {
    try {
        const jobOffer = await JobOffer.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    company: req.body.company,
                    logo: req.body.logo,
                    logoBackground: req.body.logoBackground,
                    position: req.body.position,
                    contract: req.body.contract,
                    location: req.body.location,
                    website: req.body.website,
                    apply: req.body.apply,
                    description: req.body.description,
                    requirements: req.body.requirements,
                    role: req.body.role,
                },
            },
            { new: true }
        );

        if (!jobOffer) {
            res.status(404).json({ message: "Job offer not found" });
            return;
        }

        res.json(jobOffer);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteJobOffer = (req, res) => {
    JobOffer.deleteOne({ _id: req.params.id })
        .then(() => {
            res.json({ message: "Job Offer Deleted" })
        })
        .catch((err) => res.send(err));
};

const searchJobOffers = async (req, res) => {
    const { position, location, contract } = req.query;

    const query = {};

    if (position) {
        // Recherche de position ou company contenant le terme de recherche
        query.$or = [
            { position: { $regex: position, $options: "i" } },
            { company: { $regex: position, $options: "i" } },
        ];
    }

    if (location) {
        // Recherche de localisation contenant le terme de recherche
        query.location = { $regex: location, $options: "i" };
    }

    if (contract) {
        // Recherche de contrat égal au terme de recherche
        query.contract = contract;
    }

    try {
        const jobOffers = await JobOffer.find({ $and: [ query ] });

        if (jobOffers.length === 0) {
            return res.status(404).json({ message: "No job offers found" });
        }

        res.json(jobOffers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



module.exports = {
    getJobOffers,
    createJobOffer,
    updateJobOffer,
    deleteJobOffer,
    getOneJobOffer,
    searchJobOffers
}