const RecipeModel = require('../../models/recette.model');

const countRecipes = async (req, res) => {
    try {
        const query = req.params.query 
        const count = await RecipeModel.countDocuments(query);
        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    countRecipes
};
