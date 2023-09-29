const {Responses} = require('../../db');

const postCreateSurvey = async(req)=>{
    const {responses} = req.body;

    try {
        if(responses){
            const newAnswers = await Responses.create(responses);
            return newAnswers;  
        }
        return false;
        
    } catch (error) {
        console.error('Could not save results', error.message);
        return false;
    }
};

module.exports = postCreateSurvey;