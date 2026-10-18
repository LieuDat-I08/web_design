console.log(5 == "5");    // true  (so sánh sau khi ép kiểu)
console.log(5 === "5");   // false (so sánh cả kiểu): nên dùng ===
console.log("3" + 4);     // "34"  (nối chuỗi, không phải cộng số!)
console.log("3" - 1);     // 2     (trừ thì ép về số)
console.log(0.1 + 0.2);   // 0.30000000000000004 (sai số số thực)

var a // chỉ bị giới hạn bởi hàm function (không dùng được ngoài hàm)
let a //  bị giới hạn bởi {} (không dùng được ngoài {})
// nếu là biến toàn cục thì dùng được hết

var x = 1;
var x = 2;     // được phép, ghi đè

// let y = 1;
// let y = 2;     // LỖI: y has already been declared

let a = prompt("Nhập số thứ nhất:");   // người dùng gõ 5 → a = "5" (chữ)
let b = prompt("Nhập số thứ hai:");    // người dùng gõ 3 → b = "3" (chữ)
alert(a + b);                           // hiện "53", không phải 8!

// biến đổi
let a = Number(prompt("Nhập số thứ nhất:"));
// parseInt(x)	Đọc số nguyên từ đầu chuỗi	vd:parseInt("12px")	  -> 12

if (2<3) console.log("hai nho hon 3 nhe");
else console.log("hai lon hon 3 nhe");
let s=10;
for (let i=0; i<9; i++) {
    s=s-i;
    console.log(s);
}
console.log(typeof s);
a = 5;
while (a>0) {
    console.log("a dang lon hon 0 !!!");
    a-=3;
};
function lon(a, b) {
    return a**b;
}
console.log(lon(5,2));