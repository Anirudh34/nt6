let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    // shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});




//   const firebaseConfig = {
//     apiKey: "AIzaSyD9m-RVCHFNxK4pBrWSmEgd-hxy5wGadss",
//     authDomain: "ntdatabase-f4bb5.firebaseapp.com",
//     databaseURL: "https://ntdatabase-f4bb5-default-rtdb.firebaseio.com",
//     projectId: "ntdatabase-f4bb5",
//     storageBucket: "ntdatabase-f4bb5.appspot.com",
//     messagingSenderId: "548201059306",
//     appId: "1:548201059306:web:d0c13e0740201e985dd893",
//     measurementId: "G-4NWB3BSHH7"
// };
  
// firebase.initializeApp(firebaseConfig);

// // reference your database
// var contactFormDB = firebase.database().ref("contactForm");

// document.getElementById("contactForm").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var name = getElementVal("name");
//   var emailid = getElementVal("emailid");
//   var msgContent = getElementVal("msgContent");

//   saveMessages(name, emailid, msgContent);

//   //   enable alert
//   document.querySelector(".alert").style.display = "block";

//   //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   //   reset the form
//   document.getElementById("contactForm").reset();
// }

// const saveMessages = (name, emailid, msgContent) => {
//   var newContactForm = contactFormDB.push();

//   newContactForm.set({
//     name: name,
//     emailid: emailid,
//     msgContent: msgContent,
//   });
// };

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };





var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});