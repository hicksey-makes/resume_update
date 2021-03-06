/* Grab nav elements, and add class active "onclick" */
var navigation = document.getElementById("myNav");
var navLinks = navigation.getElementsByClassName("nav-link");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Get the Modal, modal img and caption text */
var modal1 = document.getElementById('imgModal1');
var modalImg1 = document.getElementById('img-01');
var captionText = document.getElementById('caption');

var modal2 = document.getElementById('imgModal2');
var modalImgUb = document.getElementById('img-ub');
var captionText2 = document.getElementById('caption2');



/* get first certificate image and insert in modal - use its "title" text as a caption */
var img1 = document.getElementById('img-first');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* second certificate image */
var img1 = document.getElementById('img-second');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* third certificate image */
var img1 = document.getElementById('img-third');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* fourth certificate image */
var img1 = document.getElementById('img-fourth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* fifth certificate image */
var img1 = document.getElementById('img-fifth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* sixth certificate image */
var img1 = document.getElementById('img-sixth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* seventh certificate image */
var img1 = document.getElementById('img-seventh');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* eighth certificate image */
var img1 = document.getElementById('img-eighth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* ninth(uber) certificate image */
var img1 = document.getElementById('img-ninth');
img1.onclick = function() {
  modal2.style.display = "block";
  modalImgUb.src = this.src;
  captionText2.innerHTML = this.title;
}

/* tenth certificate image */
var img1 = document.getElementById('img-tenth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* eleventh certificate image */
var img1 = document.getElementById('img-eleventh');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* twelth certificate image */
var img1 = document.getElementById('img-twelth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
}

/* Get the <span> element that closes the modal */
var span1 = document.getElementsByClassName("exit")[0];
var span2 = document.getElementsByClassName("exit2")[0];


/* close the modal onclick of the <span> x */
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}
