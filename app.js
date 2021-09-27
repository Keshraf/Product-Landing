mapboxgl.accessToken = 'pk.eyJ1Ijoia2VzaHJhZiIsImEiOiJja3RyaTRlaGMwcDNsMm5xbzhwbnB0ZTExIn0.yG30wveYFhWm-s0MtL39Bw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});


const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
});

/* SCROLL BUTTON */
const scrollButton = document.querySelector(".up-button");
scrollButton.style.visibility = "hidden";
const viewHeight = window.innerHeight;
const scrollCheck = window.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY;
    if(scrollPosition<(viewHeight/2)){
        scrollButton.style.visibility = "hidden";
    }
    else{
        scrollButton.style.visibility = "visible";
    }
    /* const about = document.querySelector(".analysis");
    console.log(about.getBoundingClientRect()); */
})




