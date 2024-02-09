// var menuIcon = document.querySelector(".menu-icon");
// var sidebar = document.querySelector(".sidebar");

// menuIcon.OnClick = function(){
//     sidebar.classList.toggle("small-sidebar");
// }


document.getElementById('menu-icon').addEventListener('click',function(){
    document.getElementById('small-sidebar').classList.toggle('hide');
    document.getElementById('cont').classList.toggle('large-container');
});