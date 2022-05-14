var userData = JSON.parse(localStorage.getItem("userCreds"))||[]

  function signUpFun() {
    event.preventDefault();

    var userObj = {
      userName: document.querySelector("#user").value,
      mobile: document.querySelector("#mob").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#pass").value,
      
    };
    //console.log(userObj);
    userData.push(userObj);
    //console.log(userData)
    localStorage.setItem("userCreds",JSON.stringify(userData))

    window.location.href="login.html"
  }

    // loginButton.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     const username = loginForm.username.value;
    //     const password = loginForm.password.value;
    
    // }