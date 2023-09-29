const {Responses} = require('../../db');

const changeSurvey = async(req)=>{
    const {update, id} = req.body;
    try {
        if (update && id) {
            const newAnswers = await Responses.update(update, {
                where:{
                    id: id,
                }
            });
            return newAnswers[0] > 0 ? true : false;
        }
        return false;
    } catch (error) {
        console.error('Error updating');
        return false;
    }

};

module.exports = changeSurvey;