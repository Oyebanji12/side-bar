var toggleBtn= document.querySelector('.sidebar-toggle');
var sideBar=document.querySelector('.sidebar');
var closeBtn= document.querySelector('.close-btn');

toggleBtn.addEventListener('click', function () {
   if(sideBar.classList.contains('show-sidebar')){
       sideBar.classList.remove('show-sidebar')
   } else{
       sideBar.classList.add('show-sidebar')
   }
    
})

// another method
/*
sideBar.classList.toggle('show-sidebar')
*/

closeBtn.addEventListener('click', function () {
    sideBar.classList.remove('show-sidebar')
    
})
