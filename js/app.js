// How can i get  user email
document.getElementById("submit-buttton").addEventListener('click', function(){ 
    const user = document.getElementById("user-email")
  const emailValu=user.value
console.log(emailValu);

    // console.log(valu);
  const poswordInp = document.getElementById("user-password")
const getPass = poswordInp.value;
console.log(getPass);

if(emailValu == "tk518580@gmail.com" && getPass == "1510658848"){
 
  alert("Loging success on Your account to prass ok");

window.location.href ="bank.html"
 
}
else if (emailValu != "tk518580@gmail.com" || getPass != "1510658848") {
  alert("please enter Your correct information to login page")
}



})

    



