module.exports = function() {
  return (err, req, res, next) => {
    if(err) {
      console.log('error handled', err);
      res.status(500).send(err);
    }
  }
}