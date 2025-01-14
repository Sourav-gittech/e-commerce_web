// Special Countdown 
let dayItem = document.getElementById('days');
let hoursItem = document.getElementById('hours');
let minItem = document.getElementById('min');
let secItem = document.getElementById('sec');

let countDown = ()=>{
    let currentDate = new Date();
    // let futureDate = new Date();
    let futureDate = new Date(`${currentDate.getDate()+4} January 2025`);
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    dayItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;

}

setInterval(countDown, 1000);


// scroll back to top 
function scrollTopBack(){
    let scrollTopButton = document.querySelector(".scrollUp");
    window.onscroll = function (){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 250){
            scrollTopButton.classList.add('scrollActive');
        }
        else{
            scrollTopButton.classList.remove('scrollActive'); 
        }
    }
}

scrollTopBack();


// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
});