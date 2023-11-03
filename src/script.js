const popup = document.getElementById('pop');
const button = document.getElementById('up');
// const button2 = document.getElementById('uping');
// const button3 = document.getElementById("respo")
// const cancelbutton = document.getElementById("cancelbutton")
// let isLeft = true;

// button.addEventListener('click', () => {
//     if (isLeft) {
//         popup.style.left = '50%';
//     }else {
//         popup.style.left = '-300px';
//     }
//     isLeft = !isLeft;
// });

// button2.addEventListener('click', () => {
//     if (isLeft) {
//         popup.style.left = '50%';
//     }else {
//         popup.style.left = '-300px';
//     }
//     isLeft = !isLeft;
// });
// button3.addEventListener('click', () => {
//     if (isLeft) {
//         popup.style.left = '50%';
//     }else {
//         popup.style.left = '-300px';
//     }
//     isLeft = !isLeft;
// });
// cancelbutton.addEventListener('click', () => {
//     if (isLeft) {
//         popup.style.left = '50%';
//     }else {
//         popup.style.left = '-300px';
//     }
//     isLeft = !isLeft;
// });



button.addEventListener('click',()=>{
    popup.classList.toggle('hide')
})