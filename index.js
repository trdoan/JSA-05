/**
 * - in ra màn hình: alert/ console.log
 * - khai báo biến: var tenBien = giaTri;
 * - câu điều kiện: if else
 * - toán tử javascript: 
 *  1. gán: =. gán giá trị của vế phải cho vế trái
 *  2. toán tử logic (so sánh):  == (2 dấu bằng), ===(3 dấu bằng)
 */

// var name = 'Chau Anh';

// sự khác nhau của 2 dấu bằng và 3 dấu bằng
/**
 * - 
 */


// console.log('2 dau bang', 3 == 3)
// console.log('3 dau bang', '3' === 3)
// console.log('magic', '3' == 3)
/**
 * 18: true 
 * 19: Minh true ||  false
 * 20: Vũ false || Dương ko chạy || true
 */

// console.log(3+2)
// console.log(3-2)
// console.log(3*2)
// console.log(3/2)
// console.log(3%2)
// var number = 3;
// var newNumber = number++;
/**
 * 0: number = 3;
 * 1: number = 3 && newNumber = 3
 * 2: number = number + 1 => number = 4
 */

// var numberPrefix = 3;
// var newNumberPrefix = ++numberPrefix;
/**
 * 0: numberPrefix = 3;
 * 1: numberPrefix = 4 => numberPrefix = 4
 * 
 */
// var newNumber_2 = ++number;
// ++ <=> number = number + 1;

// hậu tố
// console.log('newNumber',newNumber)
// console.log('number', number)
// prefix: tiền tố

// console.log('newNumberPrefix', newNumberPrefix)
// console.log('numberPrefix', numberPrefix)


// -- 

// var age = 20;
// console.log(age+=5)
// console.log(age-=3)


// BUỔI 3:
// var student = 3
// var studentName = "Doan"
// var studentAge = 3

var studentA = {
  // key: value,
  name: 'Trần Dương Doãn',
  address: 'District 9',
  hasGirlFriend: false,
  age: 3,
  role: 'TEACHER'
};
var studentB = {
  // key: value,
  name: 'Trần Dương Doãn B',
  address: 'District 8',
  hasGirlFriend: true,
  age: 20,
  role: 'TEACHER'
};
var studentC = {
  // key: value,
  name: 'Trần Dương Doãn C',
  address: 'District 10',
  hasGirlFriend: true,
  age: 40,
  role: 'ADMIN'
};

// move tips
// ALT mui ten len/xuong
// option mui ten len/xuong
// copy tips
// ALT + SHIFT + muiTenXuong
// option + SHIFT + muiTenXuong
// console.log(studentA.name , studentA.age);
// console.log(studentA)
// console.log(studentB)
// console.log(studentC)

// Mảng: ARRAY
var students = [
  studentA, // 0
  studentB, // 1
  studentC // 2
];

console.log(students.length)

// LOOP: vòng lặp
for (var i = 0;i < students.length; i++) {
  console.log(students[i].name)
}







/**
 * 
 * Buoi 4
 */


var numbers = [5 , 12 ,10 , 20, 21];
var magicNumber = numbers[4];
var result = 0;
for (var index = 0; index < numbers.length; index++) {
  result += numbers[index];
}
console.log(result);




var studentsB4 = [
  studentA,
  studentB,
  studentC
]

// khai báo function
function thongKeSoLuongHocSinh(){
  // hãy đếm số lượng học sinh từ mảng studentsB4
  return studentsB4.length;
} 



console.log("Số lượng HS", thongKeSoLuongHocSinh())


// ? in hoặc render danh sách học sinh ra HTML

// document.getElementById("danhSachHocSinh").innerHTML = `
//   <button>Hi</button>
// `



// DOM ELEMENT 

// thêm 1 học sinh vào lớp

var khoiStudent = {
  name: 'Khoi 1'
}

studentsB4.push(khoiStudent)

document.getElementById('danhSachHocSinh').innerHTML = `
  <span>SL học sinh: ${thongKeSoLuongHocSinh()}</span>
`

document.getElementById('danhSachHocSinh2').innerHTML = `
  <span>SL HS: ${thongKeSoLuongHocSinh()}</span>
`


var studentKhoi_1 = {
  name: 'Minh Khoi'
}
var studentKhoi_2 = {
  name: 'Minh Khoi 2'
}

var arrKhoi = [
  studentKhoi_1,
  studentKhoi_2
]


console.log('for khoi', arrKhoi);