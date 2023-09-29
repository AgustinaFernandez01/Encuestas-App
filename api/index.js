const PORT = process.env.PORT || 3001;
const server = require('./serverConfig');
const { conn } = require('./db.js'); 
  

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  });
});