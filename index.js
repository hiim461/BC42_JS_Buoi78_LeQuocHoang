function domId(id) {
    return document.getElementById(id);
}
let arrNums = [];

domId('btnNhapSo').onclick = function () {
    arrNums.push(+domId('nhapSo').value);
    domId('arrayNumber').innerHTML = 'Mảng số: ' + arrNums;
}
domId('resetArray').onclick = function () {
    arrNums.splice(0, arrNums.length);
    domId('arrayNumber').innerHTML = 'Mời bạn nhập số ' + arrNums;
}
//B1:
domId('btnB1').onclick = function () {
    let total = 0;
    let result = '';
    for (i = 0; i < arrNums.length; i++) {
        if (arrNums[i] > 0) {
            total += arrNums[i];
        }
    }
    if (total === 0) {
        result = 'Không có số dương trong mảng.';
    } else {
        result = 'Tổng các số dương: ' + total;
    }
    domId('ketQuaB1').innerHTML = result;
}

// B2:
domId('btnB2').onclick = function () {
    let count = 0;
    let result = '';
    for (i = 0; i < arrNums.length; i++) {
        if (arrNums[i] > 0) {
            count++;
        }
    }
    if (count === 0) {
        result = 'Không có số dương trong mảng.';
    } else {
        result = 'Có tất cả ' + count + ' số dương';
    }
    domId('ketQuaB2').innerHTML = result;
}

//B3:
domId('btnB3').onclick = function () {
    let min = arrNums[0];
    for (i = 1; i < arrNums.length; i++) {
        if (arrNums[i] < min) {
            min = arrNums[i];
        }
    }
    domId('ketQuaB3').innerHTML = 'Số nhỏ nhất: ' + min;
}

//B4:
domId('btnB4').onclick = function () {
    let min = 0;
    let result = '';
    let arrB4 = arrNums.filter((value, index) => {
        return value > 0;
    });
    if (arrB4.length === 0) {
        result = 'Không có số dương trong mảng.';
    } else {
        min = arrB4[0]
        for (i = 0; i < arrB4.length; i++) {
            if (arrB4[i] < min) {
                min = arrB4[i]
            }
        }
        result = 'Số dương nhỏ nhất trong mảng: ' + min;
    }
    domId('ketQuaB4').innerHTML = result;
}

//B5
domId('btnB5').onclick = function () {
    let result = '';
    let arrB5 = arrNums.filter((value, index) => {
        return value % 2 === 0;
    });
    if (arrB5.length === 0) {
        result = 'Không có số chẵn trong mảng.';
    } else {
        result = 'Số chẵn cuối cùng trong mảng: ' + arrB5[arrB5.length - 1];
    }
    domId('ketQuaB5').innerHTML = result;
}

//B6
domId('btnB6').onclick = function (){
    let arrB6 = arrNums.slice(0,arrNums.length);
    let add1 = +domId('add1B6').value;
    let add2 = +domId('add2B6').value;
    let num1 = arrB6[add1-1];
    let num2 = arrB6[add2-1];
    arrB6.splice(add1-1, 1, num2);
    arrB6.splice(add2-1, 1, num1);
    domId('ketQuaB6').innerHTML = arrB6;
}

//B7
domId('btnB7').onclick = function (){
    let arrB7 = arrNums.slice(0,arrNums.length);
    arrB7.sort((a,b) => a-b);
    domId('ketQuaB7').innerHTML = arrB7;
}

//B8
domId('btnB8').onclick = function (){
    let result = '';
    for (i=0; i< arrNums.length; i++){
        let check = checkSNT(arrNums[i]);
        if (check){
            result = 'Số nguyên tố đầu tiên trong mảng: ' + arrNums[i];
            break;
        }else{
            result = 'Không có số nguyên tố trong mảng.';
        }
    }
    domId('ketQuaB8').innerHTML = result;
}
function checkSNT(a){
    let check = true;
    if (a<=1){
        check = false;
    } else {
        if (a>2){
            for(i=2; i<=Math.sqrt(a); i++){
                if (a%i === 0){
                    check = false;
                    break;
                }
            }
        }
    }
    return check;
}
// B9 
domId('btnB9').onclick = function (){
    let count = 0;
    let result ='';
    for (i=0; i<arrNums.length; i++){
        if(arrNums[i]%1 ===0){
            count ++;
        }
    }
    if(count>0){
        result = 'Có tất cả ' + count + ' số nguyên trong mảng.'
    } else {
        result = 'Không có số nguyên trong mảng.';
    }
    domId('ketQuaB9').innerHTML = result;
}