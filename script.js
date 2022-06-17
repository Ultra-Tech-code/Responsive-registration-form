function validate(){

  let errorMessage = document.getElementsByClassName("error-message");
  let inputBorder = document.getElementsByTagName("input");

  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let mail = document.getElementById("email").value;
  let pword = document.getElementById("password").value;

  // console.log(errorMessage.length);

  if((firstName.length == 0) || (lastName.length == 0) || (mail.match(mailFormat) == false) || (pword.length == 0)){
    for (let i=0; i < errorMessage.length; i++){
      errorMessage[i].style.display = "block"
    }
    for (let i=0; i < inputBorder.length; i++){
      inputBorder[i].className += "error";
      inputBorder[i].style.background = "url(./resources/icon-error.svg) no-repeat scroll right 7px  bottom 7px";
      inputBorder[i].removeAttribute("placeholder");

    }

  } 
}
