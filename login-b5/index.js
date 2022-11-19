var user01 = {
  email: "a@gmail.com",
  password: "123"
}
var user02 = {
  email: "b@gmail.com",
  password: "1"
}
var accounts = [
  user01,
  user02
]

const notifications = [
  "Email chưa được đăng ký"
]

function getId (id){
  return document.getElementById(id);
}
var isLogin = localStorage.getItem("isLogin")
console.log(isLogin)
if(isLogin === "true"){
  console.log('vao if')
  getId("formLogin").classList.add("d-none");
  getId("body").innerHTML = `
  <div class="alert alert-info" role="alert">
    Da dang nhap vao website
  </div>
  `
}
// check login ?

  // console.log('vao if')
  // getId("formLogin").classList.add = "d-done";
// }

// khai bao ham xu ly login
function handleLogin(event){ 
  // chan su kien tai lai trang
  event.preventDefault();

  var password = getId("passwordInput").value;
  // email input
  var email = document.getElementById("emailInput").value;
  // console.log(email, password)
  var userDB;
  var isValid;
  for (var index = 0; index < accounts.length; index++) {
    if(accounts[index].email === email){
      userDB = accounts[index];
    }
    
  }
  var notification = getId("notification");
  if(!userDB){
    // console.log("Email nay chua duoc dang ki")
    notification.innerText = notifications[0];
    notification.classList.remove("d-none");
    notification.className = 'alert alert-warning';
  }
  else{
    if(password === userDB.password){
      notification.classList.remove("d-none");
      notification.className = 'alert alert-success';
      notification.innerText = `DANG NHAP THANH CONG`;

      // luu lai gia tri login
      localStorage.setItem("isLogin", true)
    }
    else {
      notification.classList.remove("d-none");
      notification.innerText = 'Sai mat khau roi be oi';
      notification.className = 'alert alert-danger';
    }
    // alert("dang nhap thanh cong")
  }
  
}

// bat su kien click de dang nhap
document.getElementById("btnLogin").addEventListener("click",handleLogin)
// xu ly dang nhap





/**
 * B1: tao UI form login (copy bootstrap)
 * B2: tao danh sach tai khoan user trong JS (array, object)
 * B3: lay thong tin cua 2 o input email/password
 * B4: chan su kien load trang de lay thong chinh xac
 * B5: so sanh du lieu nguoi dung nhap vao voi danh sach user co trong he thong
 * B6: neu ko tim email nao? => in ra cai alert "ko tim thay email"
 */