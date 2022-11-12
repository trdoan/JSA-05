var user01 = {
  email: "a@gmail.com",
  pass: "123"
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
// khai bao ham xu ly login
function handleLogin(event){ 
  // chan su kien tai lai trang
  event.preventDefault();

  var password = getId("passwordInput").value;
  // email input
  var email = document.getElementById("emailInput").value;
  // console.log(email, password)
  var userDB;
  for (var index = 0; index < accounts.length; index++) {
    if(accounts[index].email === email){
      userDB = accounts[index];
    }
    
  }
  if(!userDB){
    // console.log("Email nay chua duoc dang ki")
    var notification = getId("notification");
    notification.innerText = notifications[0];
    notification.classList.remove("d-none");
  }
  else{
    console.log(userDB)
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