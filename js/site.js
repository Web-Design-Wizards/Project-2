// Splide Image Slider
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        height: '20em' ,
        width: '80%',
        trimSpace: true,
        cover: true,
        heightRatio: 0.5
    });
    splide.mount();
  } );


