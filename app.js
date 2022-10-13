const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const { Review, Product, User} = require('./models/User');


const app = express();

app.use(express.static('public'));
app.use(methodOverride('_method'));

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sspprivate', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

const { ensureAuthenticated, forwardAuthenticated } = require('./config/auth');
app.get('/products/new', ensureAuthenticated, (req, res) =>{
  const user = req.user;
  console.log(user);
  res.render('new', {user})
});

app.get('/products/:id', ensureAuthenticated, async(req,res)=>{
  const{id} = req.params;
  const product = await Product.findById(id);
  const reviews = await Review.find({pid : id});
  var avg = 0;
  for(let review of reviews){
    avg += parseInt(review.rating);
  }
  product.rating = parseInt(avg)/(reviews.length);
  const user = req.user;
  res.render('show', { product, reviews,user});
});

app.delete('/product/:id', ensureAuthenticated, async(req,res)=>{
  const {id} = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/dashboard');
});

app.put("/review/:id/edit", async(req,res)=>{
  const { id } = req.params;
    const review = await Review.findByIdAndUpdate(id, { ...req.body.review });
    res.redirect(`/product/${review.pid}`)
})

app.post('/product/add', ensureAuthenticated, async(req, res) =>{
  const user = req.user;
  const product = new Product(req.body.product)
  product.uname = user.name;
  await product.save();
  console.log(product);
  res.redirect('/dashboard')
});

app.delete('/review/:id/del',ensureAuthenticated, async(req,res)=>{
  const {id} = req.params;
  const review = await Review.findById(id);
  const proid = review.pid;
  await Review.findByIdAndDelete(req.params.id);
  res.redirect(`/products/${proid}`);
})



app.post('/review/:id',ensureAuthenticated,async(req,res)=>{
  const { id } = req.params;
  const user = req.user;
  const review = new Review(req.body.review);
  review.pid = id;
  review.name = user.name;
  await review.save();
 console.log(review);
 console.log(user);
  // const reviews = await Review.find({pid : id});
  // const product = await Product.find({_id : id});
  // console.log(reviews)
  res.redirect(`/products/${id}`);
  // res.render('show',{})
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
