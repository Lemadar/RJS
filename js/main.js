function initMap () {
  const map = new google.maps.Map(document.querySelector('.map'),{
    center: { lat: 6.601838, lng: 3.351486 },
    zoom: 14,
  });
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('#navbar');
  if (windowcrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});