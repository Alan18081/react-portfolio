module.exports = async (req,res,next) => {
  req.checkBody('email','Email cannot be empty').notEmpty();
  req.checkBody('email','Write email properly, please').isEmail();
  req.checkBody('password','Password cannot be empty').notEmpty();
  req.checkBody('password','Password should have at least 6 characters');
  try {
    const results = await req.getValidationResult();
    const errors = results.array();
    if(errors.length) {
      const messages = [];
      errors.forEach(error => {
        messages.push({
          error: error.msg
        })
      });
      res.send({errors: messages});
    }
    else {
      next();
    }
  }
  catch (error) {
    console.log(error);
    next(error);
  }
};