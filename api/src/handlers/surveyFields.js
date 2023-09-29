const getSurveyFields = require('../getSurveyFields');

const surveyFields = async(req, res)=>{

    try {
       
    const fields = await getSurveyFields(); 

    return fields? res.status(200).json(fields) :
     res.status(400).send('Could not get Fields');

    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports= surveyFields;