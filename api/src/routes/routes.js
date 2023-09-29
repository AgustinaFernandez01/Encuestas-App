const {Router} = require('express');

const surveyAnswers = require('../handlers/surveyAnswers');
const surveyFields = require('../handlers/surveyFields');
const createSurvey = require('../handlers/createSurvey');
const updateSurvey = require('../handlers/updateSurvey');

const router = Router();

//ruta get
router.get('/answers', surveyAnswers);

router.get('/surveyFields', surveyFields)
//ruta post
router.post('/', createSurvey);
//ruta put
router.put('/updateAnswer', updateSurvey);


module.exports = router;