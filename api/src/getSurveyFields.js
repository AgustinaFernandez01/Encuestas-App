const fs = require('fs');
const jsonFile = './surveyFields.json';


const getSurveyFields = (cb) => { 
  fs.readFile(jsonFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }

  try {
   
    const formData = JSON.parse(data);
    cb(null, formData);

    console.log('Nombre completo:', formData.items[0].label);
    console.log('Número de teléfono:', formData.items[1].label);
    console.log('Fecha de inicio requerida:', formData.items[2].required);
    console.log('Idioma preferido:', formData.items[3].options);
    console.log('Formas de encontrarnos:', formData.items[4].options);
    console.log('¿Desea recibir el boletín informativo?', formData.items[5].required);
    console.log('Etiqueta del botón de enviar:', formData.items[6].label);

  } catch (error) {
    console.error('Error al analizar el JSON:', error);
    cb(error, null);
  }
})};

module.exports = getSurveyFields; 
