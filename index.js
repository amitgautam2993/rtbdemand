
var img = document.createElement("img");

img.src="image.png";
var src = document.getElementById("image-wrap");

src.appendChild(img);

document.getElementById('closeButton').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);

  var owl = $('.owl-carousel');
  owl.owlCarousel({
      singleItem:true,
      items:1,
      navigation: false,
      pagination: false,
      loop:true,
      dots:false,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true
      
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })