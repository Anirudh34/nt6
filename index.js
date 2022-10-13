const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const { Review, Product, User} = require('../models/User');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, async(req, res) =>{
  const user = req.user;
  const products = await Product.find({});
  res.render('dashboard', {user, products})
});

router.get('/home', forwardAuthenticated, (req, res) =>{
  const user = req.user;
  res.render('dashboard', {user})
});


module.exports = router;
