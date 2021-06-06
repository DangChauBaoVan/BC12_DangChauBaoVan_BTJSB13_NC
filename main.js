// Bài 1:
/* SƠ ĐỒ 3 KHỐI:
    Input:
        - Ngày tháng năm hợp lệ nhập từ bàn phím
    Handle:
        -Tạo biến d,m,y chứa giá trị ngày tháng năm nhập vào
        -Tạo biến dBefore,mBefore,yBefore chứa giá trị ngày tháng năm trước đó
        - Tạo biến dAfter,mAfter,yAfter chứa giá trị ngày thán năm sau đó
        - Tạo biến ktNamNhuan để chứa giá trị true false xem năm đó có nhuận không
        - Kiểm tra năm nhuận: Năm nhuận là năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100
        - Tính ngày hôm trước:
            + Ngày hôm trước chính là ngày giảm 1 đơn vị.
            + Nếu giảm ngày dẫn đến ngày không hợp lệ (bằng 0) thì ngày hôm trước chính là ngày cuối cùng của tháng trước. Vậy giảm tháng 1 đơn vị.
            + Nếu giảm tháng dẫn đến tháng không hợp lệ (bằng 0) thì ngày hôm trước chính là ngày cuối cùng của năm trước. Vậy tháng là 12 và giảm năm 1 đơn vị.
            + Khi đã xác định được tháng và năm cụ thể thì ngày chính là số ngày tối đa của tháng thuộc năm đó.
        - Tính ngày hôm sau:
            + Ngày hôm sau chính ngày tăng 1 đơn vị
            + Nếu tăng ngày dẫn đến ngày không hợp lệ (lớn hơn số ngày tối đa của tháng thuộc năm đó) thì ngày hôm sau chính là ngày đầu tiên của tháng sau. Vậy ngày bằng 1 và tăng tháng 1 đơn vị.
            + Nếu tăng tháng dẫn đến tháng không hợp lệ (lớn hơn 12) thì ngày hôm sau chính là ngày đầu tiên của tháng đầu thuộc năm sau. Vậy tháng là 1 và tăng năm 1 đơn vị.
    Output:
        - Xuấ ra ngày tháng năm trước đó, sau đó

 */
var dBefore, dAfter, mBefore, mAfter, yBefore, yAfter;
var showResult = document.getElementById('showResult');
document.getElementById('btnFind').onclick = function () {
    var d = Number(document.getElementById('day').value);
    var m = Number(document.getElementById('month').value);
    var y = Number(document.getElementById('year').value);
    
    var pDateBefore = document.getElementById('pDateBefore');
    var pDateAfter = document.getElementById('pDateAfter');
    var pDateCurrent = document.getElementById('pDateCurrent');

    var ktNamNhuan = false;
    
    if ((y % 400 === 0) || (y % 4 === 0 && y % 100 != 0)) {
        ktNamNhuan = true;
    }
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if ((d - 1) == 0) {
                if ((m - 1) == 0) {
                    dBefore = 31;
                    mBefore = 12;
                    yBefore = y - 1;
                } else {
                    mBefore = m - 1;
                    yBefore = y;
                    if (mBefore == 2) {
                        if (ktNamNhuan == true) {
                            dBefore = 29;
                        } else {
                            dBefore = 28;
                        }
                    }else if( m == 8){
                        dBefore = 31;
                    }else{
                        dBefore = 30;
                    }
                }

            } else{
                dBefore = d - 1;
                mBefore = m;
                yBefore = y;
            }
            if ( ( d + 1) > 31 ){
                if( ( m + 1 ) >12 ){
                    dAfter = 1;
                    mAfter = 1;
                    yAfter = y+1;
                }else{
                    dAfter = 1;
                    mAfter = m+1;
                    yAfter = y;
                }
            }else{
                dAfter = d + 1;
                mAfter = m;
                yAfter = y;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if( (d-1) == 0){
                mBefore = m-1;
                yBefore = y;
                dBefore=31;
            }else{
                dBefore = d-1;
                mBefore = m;
                yBefore = y;
            }
            if( (d+1) > 30){
                dAfter = 1;
                mAfter = m+1;
                yAfter = y;
            }else{
                dAfter = d+1;
                mAfter = m;
                yAfter = y;
            }
            break;
        case 2:
            if((d-1) == 0){
                dBefore = 31;
                mBefore = 1;
                yBefore = y;
            }else{
                dBefore = d-1;
                mBefore = m;
                yBefore = y;
            }
            if( ktNamNhuan == true){
                if((d+1) > 29){
                    dAfter = 1;
                    mAfter = 3;
                    yAfter = y;
                }else{
                    dAfter = d+1;
                    mAfter = 2;
                    yAfter = y;
                }
            }else{
                if((d+1) > 28){
                    dAfter = 1;
                    mAfter = 3;
                    yAfter = y;
                }else{
                    dAfter = d+1;
                    mAfter = 2;
                    yAfter = y;
                }
            }
            break;
    }
    showResult.style.display = 'block';
    pDateCurrent.innerHTML = 'Ngày đã nhập: ' + d + '/' + m + '/'+ y;
    pDateBefore.innerHTML = 'Ngày trước đó: ' +  dBefore + '/' + mBefore + '/' + yBefore;
    pDateAfter.innerHTML = 'Ngày sau đó: ' +  dAfter + '/' + mAfter + '/' + yAfter;
}

// Bài 2:
/* SƠ ĐỒ 3 KHỐI:
    Input:
        - Tháng và Năm cần kiểm tra
    Handle:
        - Tạo biến chứa tháng năm nhập vào: month,year
        - Biến day để chứa số ngày của tháng
        - Biến ktNamNhuan để chứa kết quả kiểm tra năm đó có làm năm nhuận không
        - Kiểm tra năm nhuận nếu đúng thì ktNamNhuan = true sai thì ktNamNhuan = false
        - Kiểm tra nếu month là các tháng 1,3,5,7,8,10,12 thì day=31 (các tháng có 31 ngày) nếu month là các tháng: 4,6,9,11 thì day =30(các tháng có 30 ngày)
        - Nếu là tháng 2 kiểm tra xem năm đó là năm nhuận hay không bằng biến ktNamNhuan
            + Nếu ktNamNhuan == true -> tháng đó là năm nhuận -> day = 29 ( tháng 2 năm nhuận 29 ngày)
            + Ngược lại -> năm không nhuận -> day = 28 (tháng 2 năm bình thường 28 ngày)
    Output:
        - Xuất số ngày theo tháng và năm tương ứng
 */
document.getElementById('btnKetQua').onclick = function(){
    var month = Number(document.getElementById('ipMonth').value);
    var year = Number(document.getElementById('ipYear').value);
    var day;
    var ktNamNhuan = false;
    
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 != 0)) {
        ktNamNhuan = true;
    }

    if( month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month ==10 || month == 12){
        day = 31;
    }else if(month == 4 || month == 6 || month == 9 || month == 11){
        day = 30;
    }else{
        if(ktNamNhuan == true){
            day = 29;
        }else{
            day = 28;
        }
    }
    alert('Tháng ' + month + ' Năm ' + year + ' có ' + day + 'ngày');
}
//Bài 3:
/* SƠ ĐỒ 3 KHỐI:
    Input:
        - Số nguyên có 3 chữ số
    Handle:
        - Tạo biến chứa số nguyên có 3 chữ số: num
        - Tạo biến chứa chữ số hàng trăm chục đơn vị: tram,chuc,donvi
        - Tạo biến chứa cách đọc các chữ số: docTram,docChuc,docDonVi
        - Tách các chữ số theo thứ tự trăm chục đơn vị:
            + Tách chữ số hàng trăm : tram =parseInt(num/100) ;
            + Tách chữ số hàng chục: chuc = parseInt((num-(tram*100))/10) ;
            + Tách chữ số hàng đơn vị: donvi = parseInt((num-((tram*100)+(chuc*10)))) ;
        - Cách đọc hàng trăm:
            + Nếu tram = 1 -> doctram = 'Một trăm'
            + Tương tự như vậy cho đến 9
        - Cách đọc hàng chục:
            + Nếu chuc = 0 -> docChuc = 'lẻ'
            + Nếu chuc = 1 - 9 -> docChuc = 'Mười' - 'Chín mươi'
        - Cách đọc hàng đơn vị:
            + Nếu donvi = 1 -> docDonVi = 'Mốt'
            + Nếu donvi = 2,3,6,7,8,9 -> docDonVi = 'Hai' - 'Chín'
            + Nếu donvi = 4 -> docDonVi = 'Tư'
            + Nếu donvi = 5 -> docDonVi = 'Lăm'
    Ouput:
        - Cách đọc số nguyên 3 chữ số
 */
document.getElementById('btnDoc').onclick = function () {
    var docTram,docChuc,docDonVi;
    var num = Number(document.getElementById('ipNum').value);
    var tram =parseInt(num/100) ;
    var chuc = parseInt((num-(tram*100))/10) ;
    var donvi = parseInt((num-((tram*100)+(chuc*10)))) ;
    console.log(tram)
    console.log(chuc)
    console.log(donvi)

    switch(tram){
        case 1:
            docTram = "Một trăm";
            break;
        case 2:
            docTram = "Hai trăm";
            break;
        case 3:
            docTram = "Ba trăm";
            break;
        case 4:
            docTram = "Bốn trăm";
            break;
        case 5:
            docTram = "Năm trăm";
            break;
        case 6:
            docTram = "Sáu trăm";
            break;
        case 7:
            docTram = " Bảy trăm";
            break;
        case 8:
            docTram = "Tám trăm";
            break;
        case 9:
            docTram = " Chín trăm";
            break;
    }
    switch(chuc){
        case 0:
            if( donvi != 0 ){
                docChuc = " lẻ ";
            }else{
                docChuc = "";
            }
            break;
        case 1:
            docChuc = " mười ";
            break;
        case 2:
            docChuc = " hai mươi ";
            break;
        case 3:
            docChuc = " ba mươi ";
            break;
        case 4:
            docChuc = " bốn mươi ";
            break;
        case 5:
            docChuc = " năm mươi ";
            break;
        case 6:
            docChuc = " sáu mươi ";
            break;
        case 7:
            docChuc = " bảy mươi ";
            break;
        case 8:
            docChuc = " tám mươi ";
            break;
        case 9:
            docChuc = " chín mươi ";
            break;
    }
    switch(donvi){
        case 0:
            docDonVi = "";
            break;
        case 1:
            if( chuc == 1 || chuc == 0){
                docDonVi = "một";
            }else{
                docDonVi = "mốt ";
            }
            break;
        case 2:
            docDonVi = "hai ";
            break;
        case 3:
            docDonVi = "ba ";
            break;
        case 4:
            if( chuc == 1 || chuc == 0){
                docDonVi = "bốn";
            }else{
                docDonVi = "tư ";
            }
            break;
        case 5:
            if(chuc == 0){
                docDonVi = "năm";
            }else{
                docDonVi = "lăm ";
            }
            break;
        case 6:
            docDonVi = "sáu ";
            break;
        case 7:
            docDonVi = "bảy ";
            break;
        case 8:
            docDonVi = "tám ";
            break;
        case 9:
            docDonVi = "chín ";
            break;
    }
    alert( " Cách đọc số " + num + " là: " + docTram + docChuc + docDonVi);

}
//BÀI 4:
/* SƠ ĐỒ 3 KHỐI:
    Input:
        - Tên của từng sinh viên và tọa độ của từng sinh viên dạng(X,Y)
        - Tọa độ của trường học
    Handle:
        - Tạo biến chứa tên các sinh viên: sv1,sv2,sv3
        - Tạo biến chứa tọa độ của các sinh viên:
            + sv1X, sv1Y, sv2X, sv2Y, sv3X, sv3Y
        - Tạo biến chứa tọa độ trường học: sX, sY
        - Tính khoảng cách từ trường đến nhà của từng sinh viên theo công thức:
         sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)))
         - So sánh 3 khoảng cách tìm ra khoảng cách có độ lớn lớn nhất là xa nhất
    Ouput:
        - Tên sinh viên xa trường nhất
 */
var kc1,kc2,kc3;
document.getElementById('btnTinh').onclick =function () {
    var sv1 = document.getElementById('ipNameA').value;
    var sv1X = Number(document.getElementById('ipXA').value);
    var sv1Y = Number(document.getElementById('ipYA').value);

    var sv2 = document.getElementById('ipNameB').value;
    var sv2X = Number(document.getElementById('ipXB').value);
    var sv2Y = Number(document.getElementById('ipYB').value);

    var sv3 = document.getElementById('ipNameC').value;
    var sv3X = Number(document.getElementById('ipXC').value);
    var sv3Y = Number(document.getElementById('ipYC').value);
    
    var sX = Number(document.getElementById('ipXS').value);
    var sY = Number(document.getElementById('ipYS').value);

    kc1 = Math.sqrt((sX-sv1X)*(sX-sv1X)+(sY-sv1Y)*(sY-sv1Y));
    kc2 = Math.sqrt((sX-sv2X)*(sX-sv2X)+(sY-sv2Y)*(sY-sv2Y));
    kc3 = Math.sqrt((sX-sv3X)*(sX-sv3X)+(sY-sv3Y)*(sY-sv3Y));
    var max = kc1;
    if( max < kc2) max = kc2;
    if (max < kc3) max = kc3;
     
    if( max == kc1 ){
        alert('Sinh viên xa trường nhất là: ' + sv1);
    }else if( max == kc2){
        alert('Sinh viên xa trường nhất là: ' + sv2);
    }else{
        alert('Sinh viên xa trường nhất là: ' + sv3);
    }
}

