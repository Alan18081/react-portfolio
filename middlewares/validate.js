exports.validateLogin = async (req,res,next) => {
  req.checkBody('email','Email cannot be empty').notEmpty();
  req.checkBody('email','Write email properly, please').isEmail();
  req.checkBody('password','Password cannot be empty').notEmpty();
  req.checkBody('password','Password should have at least 6 characters').isLength({min: 6});
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

exports.validateSetPassword = async (req,res,next) => {
  req.checkBody('password','Passwords have to match').equals(req.body.confirmPassword);
  try {
    const results = await req.getValidationResult();
    const errors = results.array();
    if(errors.length) {
      res.send({error: errors[0].msg});
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