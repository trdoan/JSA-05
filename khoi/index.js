var user01 = {
  email: "user01@gmail.com",
  password: "123"
}
var user02 = {
  email: "user02@gmail.com",
  password: "456"
}
var accounts = [
  user01,
  user02
]
function getID(id) {
  return document.getElementById(id)
}
function LoginHandle(event) {
  event.preventDefault();
  var email = getID("emailInput").value;
  var password = getID("passwordInput").value;
  console.log({email, password})
  var userDB;
  for (var index = 0; index < accounts.length; index++) {
      if(accounts[index].email === email) {
          console.log("chuoi")
          userDB = accounts[index]
      }
  }

  var notification = getID("notification")
  if (!userDB) {
      notification.innerText = 'Email nay khong ton tai';
      notification.classList.remove("d-none");
      notification.className = 'alert alert-warning';
  }
  else {
      if(password = userDB.password){
          notification.classList.remove('d-none')
          notification.className = 'alert alert-success';
          notification.innerText = `CHUC MUNG BAN DA MAT ACC`;

      }
      else{
          notification.classList.remove('d-none')
          notification.className = 'alert alert-danger'
          notification.innerText = `DANG NHAP THAT BAI`
      }
  }
}
getID("login-button").addEventListener("click", LoginHandle)
