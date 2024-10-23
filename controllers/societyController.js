const Society = require('../models/Society');
module.exports.insertSociety = async (req, res) => {
    try {
        if (req.body === '') {
            return res.status(400).json({ message: "Invalid Request", status: 0 });
        } else {
            const society = new Society(req.body);
            await society.save();
            if (society) {
                return res.status(200).json({ message: "Society added successfully", status: 1, data: society });
            } else {
                return res.status(400).json({ message: "Failed to add society", status: 0 });
            }
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error", status: 0 });
    }
}

module.exports.getSociety = async (req, res) => {
    try {
        if (req.params.id === '') {
            const society = await Society.find();
            if (society) {
                return res.status(200).json({ message: "Society fetched successfully", status: 1, data: society });
            } else {
                return res.status(400).json({ message: "Society not found", status: 0 });
            }
        } else {
            const society = await Society.findById(req.params.id);
            if (society) {
                return res.status(200).json({ message: "Society fetched successfully", status: 1, data: society });
            } else {
                return res.status(400).json({ message: "Society not found", status: 0 });
            }
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error", status: 0 });
    }
}
