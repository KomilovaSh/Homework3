// let deleteButtons = document.querySelector('#delete-button');
// let cards = document.querySelector('#card');

// // deleteButtons.forEach(function (button, index) {
//     deleteButtons.addEventListener('mouseenter', function () {
//         alert("Haqiqatdan o'chirmoqchimisiz?");
//     })



//     deleteButtons.addEventListener('mouseleave', function () {
//         alert("Rasm o'chirilmadi!");
//     });

//     deleteButtons.forEach(function (button, index){
//         button.addEventListener('click', function(){
//             cards[index].remove();
//         })
//     })

//     // deleteButtons.addEventListener('click', function(button, index){
//     //     cards[index].remove();
//     // })
// // });

// deleteButtons.forEach(function (button, index){
//     button.addEventListener('click', function (){

//     })
// })

let deleteButtons = document.querySelectorAll('.delete-button'); // .delete-button klassidan foydalanish
let cards = document.querySelectorAll('.card'); // .card klassidan foydalanish

deleteButtons.forEach(function(button, index) {
    button.addEventListener('mouseenter', function() {
        alert("Haqiqatdan o'chirmoqchimisiz?");
    });

    button.addEventListener('mouseleave', function() {
        alert("Rasm o'chirilmadi!");
    });

    button.addEventListener('click', function() {
        cards[index].remove();
    });
});





