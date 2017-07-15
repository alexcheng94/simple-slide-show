var slides = document.getElementsByClassName('slide');
var captionDiv = document.getElementById('caption');
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var dots = document.getElementsByClassName('dot');
var currentSlide = 0;
var sInterval;

// add caption for the first image
addCaption();
// start automatic slideshow
autoSlide();

// set caption equal to "alt" attribute of <img>
function addCaption(){
	var caption = slides[currentSlide].children[0].getAttribute('alt');
	captionDiv.innerHTML = caption;
}

// change slide function
function changeSlide (n) {
	// remove "showing"/"active" from current slide/dots class name 
	slides[currentSlide].className = 'slide';
	dots[currentSlide].className = 'dot';
	// change slide count 
  currentSlide = (n+slides.length)%slides.length;
  // add "showing"/"active" to impending slide/dots class name
  slides[currentSlide].className = 'slide showing';
  dots[currentSlide].className = 'dot active';
  addCaption();
}

// automatic slideshow
function autoSlide(){
	sInterval = window.setInterval(nextSlide,3000);
}
// stop automatic slideshow when buttons/dots are clicked
function stopAuto(){
	clearInterval(sInterval);
}

function nextSlide(){
	changeSlide(currentSlide+1);
}
function prevSlide(){
	changeSlide(currentSlide-1);
}
prevButton.onclick = function(){
	prevSlide();
	stopAuto();
};
nextButton.onclick = function(){
	nextSlide();
	stopAuto();
};

// use dots to navigate slides
for(var i = 0; i < dots.length; i++){
	dots[i].onclick = function(){
		// "cast" the "dots" HTMLNodeCollection into an Array
		var dotNodes = Array.prototype.slice.call(dots);
		// get the index of clicked dot
		var dotIndex = dotNodes.indexOf(this);
		changeSlide(dotIndex);
		stopAuto();
	};
}