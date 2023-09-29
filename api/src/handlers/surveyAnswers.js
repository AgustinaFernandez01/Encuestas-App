const getAnswers = require('../controllers/getAnswers');

const surveyAnswers = async(req, res)=>{
    try {
        const answers = await getAnswers(req);

        return answers? res.status(200).json(answers) :
        res.status(400).send('Could not get answers');
   
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports = surveyAnswers;