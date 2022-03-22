const btn1 = document.getElementById('btnShow');
const btn2 = document.getElementById('btnHide');
const image = document.getElementById('imageShow');
function logTextAndShowImage(){
    image.style.display = "block";
    console.log(`My car is awesome`);
}

function hideImage(){
    image.style.display = "none";
}
btn1.addEventListener('click', logTextAndShowImage);
btn2.addEventListener('click', hideImage);
