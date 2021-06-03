// // bài tính điểm trung bình
// document.getElementById("demo").onclick = function(event){
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var toan = document.getElementById("Toan").value;
//     var Ly = document.getElementById("Ly").value;
//     var Hoa = document.getElementById("Hoa").value;

//     var dtb = tinhDiemTrungBinh(toan,Ly,Hoa);
//     console.log(dtb);   
//     var xl = tinhdiem(dtb);
//     console.log(xl); 
// }

// function tinhDiemTrungBinh(Toan,Ly,Hoa){
//     var dtb =( Number(Toan)+Number(Ly)+Number(Hoa)) / 3;
//     return dtb;
// }

// function tinhdiem(dtb){
//     var xl = 'r';
//     if(dtb >= 8.5){
//         xl = 'Giỏi';
//     }else if(6.5<= dtb && dtb <8.5){
//         xl = 'Khá';
//     }else if(5<=dtb && dtb <6.5){
//         xl = 'trung bình';
//     }else if(dtb <5){
//         xl = 'Yếu';
//     }else{
//         xl = 'Nhập tào lao';
//     }
//     return xl;
// }
// bài tập 4 home work
// document.getElementById("nutnhan").onclick = function(event){
//     event.preventDefault();
//     var canh1 = document.getElementById('canh1').value;
//     var canh2 = document.getElementById('canh2').value;
//     var canh3 = document.getElementById('canh3').value;
//     var tamgiac;
//     if(canh1===canh2 || canh1===canh3 || canh2===canh3){
//         console.log("đây là tam giác cân");
//     }
//     if(canh1===canh2 && canh2===canh3){
//         console.log('đây là tam giác đều');
//     }
//     if(canh1*canh1==canh2*canh2+canh3*canh3 || canh2*canh2==canh1*canh1+canh3*canh3 || canh3*canh3== canh1*canh1+canh2*canh2){
//         console.log('đây là tam giác vuông');
//     }
//     document.getElementById("footer_2").innerHTML = tamgiac;
// }
// BẢI TẬP 1 HOMEWORK
// document.getElementById("nut").onclick = function(event){
//     event.preventDefault();
//     var a = document.getElementById("NumBer1").value;
//     var b = document.getElementById("NumBer2").value;
//     var c = document.getElementById("NumBer3").value;
//     var sx = sapxep(a,b,c);
//     console.log(sx);
// }
// function sapxep(a,b,c){
//     if(a>b){
//         temp=a;
//         a=b;
//         b=temp;
//     }
 
//     if(a>c){
//         temp=a;
//         a=c;
//         c=temp;
//     }

//    if(b>c){
//         temp=b;
//         b=c;
//         c=temp;
//     }
//      var thuTu = (a + " " + b + " " + c);
//     return thuTu;
// }

// BÀI TẬP 3 HOMEWORK
// function soChanHayLe (n) {
//     if (n % 2 == 0) {
//         console.log(n + ' là số chẵn');
//     } else {
//         console.log(n + ' là số lẻ');
//     }
// }
 
// var x = 1;
// var y = 2;
// var z = 3;
// soChanHayLe(x);
// soChanHayLe(y);
// soChanHayLe(z);