const express = require('express');
const {body,check,validationResult} = require('express-validator')

const router = express.Router();
const middleware = [
  check('name').notEmpty().withMessage('Debe ingresar un nombre wachin'),
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', middleware ,function(req, res, next) {
  console.log(validationResult(req))
  console.log(req.body);
  res.render('index', 
  { 
    title: 'POST',
    formData: req.body,
    isData: true
  });
});


module.exports = router;
