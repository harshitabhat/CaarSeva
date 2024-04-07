let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

var users = [
            { username: 'user1', password: 'pass1' },
            { username: 'user2', password: 'pass2' }
            // Add more users as needed
        ];
        var users = JSON.parse(localStorage.getItem('users')) || [];

        function switchForm(activeSection) {
            if (activeSection === 'registrationSection') {
                document.getElementById('registrationSection').style.display = 'block';
                document.getElementById('loginSection').style.display = 'none';
            } else {
                document.getElementById('registrationSection').style.display = 'none';
                document.getElementById('loginSection').style.display = 'block';
            }
        }

        function validateRegistration() {
            // Reset error messages
            document.getElementById("usernameError").innerHTML = "";
            document.getElementById("passwordError").innerHTML = "";

            var regUsername = document.getElementById("regUsername").value;
            var regPassword = document.getElementById("regPassword").value;
            var confirmPassword = document .getElementById("confirmPassword").value;
            console.log(users);

            // Perform validation
            if (regUsername.length < 5) {
                document.getElementById("usernameError").innerHTML = "Username must be at least 5 characters long.";
                return;
            }

            if (regPassword.length < 8) {
                document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long.";
                return;
            }

            // Check if the username is already registered
            if(regPassword == confirmPassword) {

              if (isUserRegistered(regUsername)) {
                  alert("Username is already registered. Please choose a different one.");
              } else {
                  // If not registered, add the user to the array (in a real scenario, you'd store this on the server)
                  users.push({ username: regUsername, password: regPassword });
                    // Save users data to localStorage
                  localStorage.setItem('users', JSON.stringify(users));
                  alert("Registration successful. You can now login.");
                  switchForm('loginSection');
              }
            }
            else {
              alert("Please Enter the password correct in both the password filed");
            }
        }

        function validateLogin() {
            var loginUsername = document.getElementById("loginUsername").value;
            var loginPassword = document.getElementById("loginPassword").value;

            // Check if the username and password match any registered user
            var user = findUser(loginUsername, loginPassword);

            if (user) {
                alert("Login successful. Welcome, " + user.username + "!");
                // Redirect to the home page (replace 'home.html' with the actual URL of your home page)
                window.location.href = 'index.html';
            } else {
                document.getElementById("loginError").innerHTML = "Invalid username or password.";
            }
        }

        function isUserRegistered(username) {
            return users.some(user => user.username === username);
        }

        function findUser(username, password) {
          console.log(username + " " + password);
            return users.find(user => user.username === username && user.password === password);
        }
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};



// document.querySelector('.home').onmouseleave = (e) =>{

//   document.querySelectorAll('.home-parallax').forEach(elm =>{

//     elm.style.transform = `translateX(0px) translateY(0px)`;

//   });

// };

function clearUserData() {
  localStorage.removeItem('users');
  // Optionally, you can also clear other data stored in localStorage
  localStorage.clear();
  console.log(localStorage.getItem('users'));
  alert('User data cleared successfully.');
}

// Call this function when needed, for example, on a button click event
document.getElementById('clearUserDataBtn').addEventListener('click', clearUserData);

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});