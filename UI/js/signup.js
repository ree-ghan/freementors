// let fullname = document.querySelector(".fname").innertext;
// let email = document.querySelector(".email").innertext;
// let password = document.querySelector(".pword").innertext;
// let register = document.querySelector('.signup');

// function signup (fullname,email,password)
// {
//   this.fullname = fullname;
//   this.email = email;
//   this.password = password;
// }

// signup.prototype.sayname = function(){
//   console.log(`${this.fullname}   ${this.email}`);
// }



const form = document.querySelector("form");
let users = [];
export {users};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  // creates an inbuilt formobj
  // for(item of fd) {
  //   console.log(item);
  // }

  const user = Object.fromEntries(fd);
  // returns a js obj of form data
  // console.log(user);
  users.push(user);
  console.log(users);

  
});

