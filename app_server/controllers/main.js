/* GET homepage */
const index = (req, res) => {
 res.render('index', { title: 'Anurag Express' });
 };
 module.exports = {
  index
  };