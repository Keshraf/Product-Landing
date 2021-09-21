mapboxgl.accessToken = 'pk.eyJ1Ijoia2VzaHJhZiIsImEiOiJja3RyaTRlaGMwcDNsMm5xbzhwbnB0ZTExIn0.yG30wveYFhWm-s0MtL39Bw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});


const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
});
