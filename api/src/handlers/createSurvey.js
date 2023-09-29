const postCreateSurvey = require('../controllers/postCreateSurvey');

const createSurvey = async(req, res)=>{
    try {
        const created = await postCreateSurvey(req);

        return created? res.status(200).json(created) :
        res.status(400).send('Error saving');
    } catch (error) {
        res.status(500).send('Error saving');
    }
};
module.exports = createSurvey;