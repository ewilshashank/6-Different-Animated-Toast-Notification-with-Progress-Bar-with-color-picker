let color = document.querySelectorAll('.btn-color')[0];
let t = document.querySelectorAll('.toast')[0];
let colorPro = t.querySelectorAll('.progress')[0];
let checkCol = document.querySelectorAll('.check')[0];



let hex = document.querySelectorAll('.btn-hex')[0];
let valueHex = document.querySelectorAll('.btn-hex')[0].value;

document.getElementsByClassName('btn')[0].style.backgroundColor = valueHex;
color.value = valueHex;
colorPro.style.setProperty('--bg-color', valueHex)
t.style.borderLeftColor = valueHex;
checkCol.style.backgroundColor = valueHex;


color.addEventListener("input", () => {
    let colorInput = color.value;
    hex.value = colorInput;
    document.getElementsByClassName('btn')[0].style.backgroundColor = colorInput;
    colorPro.style.setProperty('--bg-color', colorInput)
    t.style.borderLeftColor = colorInput;
    checkCol.style.backgroundColor = colorInput;
});

hex.addEventListener("input", () => {
    let hexInput = hex.value;
    color.value = hexInput;
    document.getElementsByClassName('btn')[0].style.backgroundColor = hexInput;
    colorPro.style.setProperty('--bg-color', hexInput)
    t.style.borderLeftColor = hexInput;
    checkCol.style.backgroundColor = hexInput;
});

// ----------------------------------------------------------------------- 1


let color1 = document.querySelectorAll('.btn-color')[1];
let t1 = document.querySelectorAll('.toast')[1];
let colorPro1 = t1.querySelectorAll('.progress')[0];
let checkCol1 = document.querySelectorAll('.check')[1];
let tCon = document.querySelectorAll('.toast-1')[0];

let hex1 = document.querySelectorAll('.btn-hex')[1];
let valueHex1 = document.querySelectorAll('.btn-hex')[1].value;

document.getElementsByClassName('btn')[1].style.backgroundColor = valueHex1;
color1.value = valueHex1;
colorPro1.style.setProperty('--bg-color', valueHex1)
t1.style.borderLeftColor = valueHex1;
tCon.style.borderRightColor = valueHex1;
checkCol1.style.backgroundColor = valueHex1;


color1.addEventListener("input", () => {
    let colorInput1 = color1.value;
    hex1.value = colorInput1;
    document.getElementsByClassName('btn')[1].style.backgroundColor = colorInput1;
    colorPro1.style.setProperty('--bg-color', colorInput1)
    t1.style.borderLeftColor = colorInput1;
    tCon.style.borderRightColor = colorInput1;
    checkCol1.style.backgroundColor = colorInput1;
});

hex1.addEventListener("input", () => {
    let hexInput1 = hex1.value;
    color1.value = hexInput1;
    document.getElementsByClassName('btn')[1].style.backgroundColor = hexInput1;
    colorPro1.style.setProperty('--bg-color', hexInput1)
    t1.style.borderLeftColor = hexInput1;
    tCon.style.borderRightColor = hexInput1;
    checkCol1.style.backgroundColor = hexInput1;
});


// ----------------------------------------------------------------------- 2

let color2 = document.querySelectorAll('.btn-color')[2];
let t2 = document.querySelectorAll('.toast')[2];
let colorPro2 = t2.querySelectorAll('.progress')[0];
let checkCol2 = document.querySelectorAll('.check')[2];
let checkOut = document.querySelectorAll('.closeOut')[0];


let hex2 = document.querySelectorAll('.btn-hex')[2];
let valueHex2 = document.querySelectorAll('.btn-hex')[2].value;

document.getElementsByClassName('btn')[2].style.backgroundColor = valueHex2;
color2.value = valueHex2;
colorPro2.style.setProperty('--bg-color', valueHex2)
t2.style.borderLeftColor = valueHex2;
checkCol2.style.backgroundColor = valueHex2;
checkOut.style.backgroundColor = valueHex2;


color2.addEventListener("input", () => {
    let colorInput2 = color2.value;
    hex2.value = colorInput2;
    document.getElementsByClassName('btn')[2].style.backgroundColor = colorInput2;
    colorPro2.style.setProperty('--bg-color', colorInput2)
    t2.style.borderLeftColor = colorInput2;
    checkCol2.style.backgroundColor = colorInput2;
    checkOut.style.backgroundColor = colorInput2;
});

hex2.addEventListener("input", () => {
    let hexInput2 = hex2.value;
    color2.value = hexInput2;
    document.getElementsByClassName('btn')[2].style.backgroundColor = hexInput2;
    colorPro2.style.setProperty('--bg-color', hexInput2)
    t2.style.borderLeftColor = hexInput2;
    checkCol2.style.backgroundColor = hexInput2;
    checkOut.style.backgroundColor = hexInput2;
});

// ----------------------------------------------------------------------- 3

let color3 = document.querySelectorAll('.btn-color')[3];
let t3 = document.querySelectorAll('.toast')[3];
let colorPro3 = t3.querySelectorAll('.progress')[0];
let checkCol3 = document.querySelectorAll('.check')[3];
let tCon1 = document.querySelectorAll('.toast-3')[0];


let hex3 = document.querySelectorAll('.btn-hex')[3];
let valueHex3 = document.querySelectorAll('.btn-hex')[3].value;

document.getElementsByClassName('btn')[3].style.backgroundColor = valueHex3;
color3.value = valueHex3;
colorPro3.style.setProperty('--bg-color', valueHex3)
t3.style.borderLeftColor = valueHex3;
checkCol3.style.backgroundColor = valueHex3;
tCon1.style.borderRightColor = valueHex3;



color3.addEventListener("input", () => {
    let colorInput3 = color3.value;
    hex3.value = colorInput3;
    document.getElementsByClassName('btn')[3].style.backgroundColor = colorInput3;
    colorPro3.style.setProperty('--bg-color', colorInput3)
    t3.style.borderLeftColor = colorInput3;
    checkCol3.style.backgroundColor = colorInput3;
    tCon1.style.borderRightColor = colorInput3;
    
});

hex3.addEventListener("input", () => {
    let hexInput3 = hex3.value;
    color3.value = hexInput3;
    document.getElementsByClassName('btn')[3].style.backgroundColor = hexInput3;
    colorPro3.style.setProperty('--bg-color', hexInput3)
    t3.style.borderLeftColor = hexInput3;
    tCon1.style.borderRightColor = hexInput3;
    checkCol3.style.backgroundColor = hexInput3;
    
});

// ----------------------------------------------------------------------- 4

let color4 = document.querySelectorAll('.btn-color')[4];
let t4 = document.querySelectorAll('.toast')[4];
let colorPro4 = t4.querySelectorAll('.progress')[0];
let checkCol4 = document.querySelectorAll('.check')[4];
let tCon2 = document.querySelectorAll('.overflow-vis')[0];
let checkOut1 = document.querySelectorAll('.closeOut')[1];

let hex4 = document.querySelectorAll('.btn-hex')[4];
let valueHex4 = document.querySelectorAll('.btn-hex')[4].value;

document.getElementsByClassName('btn')[4].style.backgroundColor = valueHex4;
color4.value = valueHex4;
colorPro4.style.setProperty('--bg-color', valueHex4)
t4.style.borderLeftColor = valueHex4;
checkCol4.style.backgroundColor = valueHex4;
tCon2.style.borderRightColor = valueHex4;
checkOut1.style.backgroundColor = valueHex4;


color4.addEventListener("input", () => {
    let colorInput4 = color4.value;
    hex4.value = colorInput4;
    document.getElementsByClassName('btn')[4].style.backgroundColor = colorInput4;
    colorPro4.style.setProperty('--bg-color', colorInput4)
    t4.style.borderLeftColor = colorInput4;
    checkCol4.style.backgroundColor = colorInput4;
    tCon2.style.borderRightColor = colorInput4;
    checkOut1.style.backgroundColor = colorInput4;
});

hex4.addEventListener("input", () => {
    let hexInput4 = hex4.value;
    color4.value = hexInput4;
    document.getElementsByClassName('btn')[4].style.backgroundColor = hexInput4;
    colorPro4.style.setProperty('--bg-color', hexInput4)
    t4.style.borderLeftColor = hexInput4;
    tCon2.style.borderRightColor = hexInput4;
    checkCol4.style.backgroundColor = hexInput4;
    checkOut1.style.backgroundColor = hexInput4;
});

// ----------------------------------------------------------------------- 5

let color5 = document.querySelectorAll('.btn-color')[5];
let t5 = document.querySelectorAll('.toast')[5];
let colorPro5 = t5.querySelectorAll('.progress')[0];
let checkCol5 = document.querySelectorAll('.check')[5];
let checkOut2 = document.querySelectorAll('.closeOut')[2];




let hex5 = document.querySelectorAll('.btn-hex')[5];
let valueHex5 = document.querySelectorAll('.btn-hex')[5].value;

document.getElementsByClassName('btn')[5].style.backgroundColor = valueHex5;
color5.value = valueHex5;
colorPro5.style.setProperty('--bg-color', valueHex5)
t5.style.borderLeftColor = valueHex5;
checkCol5.style.backgroundColor = valueHex5;
checkOut2.style.backgroundColor = valueHex5;


color5.addEventListener("input", () => {
    let colorInput5 = color5.value;
    hex5.value = colorInput5;
    document.getElementsByClassName('btn')[5].style.backgroundColor = colorInput5;
    colorPro5.style.setProperty('--bg-color', colorInput5)
    t5.style.borderLeftColor = colorInput5;
    checkCol5.style.backgroundColor = colorInput5;
    checkOut2.style.backgroundColor = colorInput5;
});

hex5.addEventListener("input", () => {
    let hexInput5 = hex5.value;
    color5.value = hexInput5;
    document.getElementsByClassName('btn')[5].style.backgroundColor = hexInput5;
    colorPro5.style.setProperty('--bg-color', hexInput5)
    t5.style.borderLeftColor = hexInput5;
    checkCol5.style.backgroundColor = hexInput5;
    checkOut2.style.backgroundColor = hexInput5;
});

// -----------------------------------------------------------------------