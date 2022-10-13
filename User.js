const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sspprivate30', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
 
});

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    name: {
        type: String,
    },
    pid: {
        type: String,
    },
    rev:{
        type: String,
    },
    rating: {
        type: String,
    },
});

const ProductSchema = new Schema({
  uname: {
    type: String,
  },  
  name: {
        type: String,
    },
  price: {
        type: String,
    },
  rating: {
    type : String,
  }
});

const Review = mongoose.model('review', ReviewSchema)
const Product = mongoose.model('Product', ProductSchema)
const User = mongoose.model('User', UserSchema);

module.exports = { Review, Product, User};


