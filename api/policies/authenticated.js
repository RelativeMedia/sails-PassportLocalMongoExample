/**
* Allow any authenticated user.
*/
module.exports = function(req, res, next){
  console.log('test 123');
  if (req.isAuthenticated()){
    console.log('user authenticated');
    return next();
  }else{
    return res.send(403, { message: 'Not Authorized' });
  }
}
