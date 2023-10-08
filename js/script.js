//fonction apparition au scroll 1
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150; //hauteur mini avant apparition
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);


//fonction apparition au scroll 2
function reveal_2() {
  var reveals = document.querySelectorAll(".reveal_2");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50; //hauteur mini avant apparition
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active_2");
    } else {
      reveals[i].classList.remove("active_2");
    }
  }
}

window.addEventListener("scroll", reveal_2);







//fonction page accueil
window.addEventListener("load", loader);
function loader(){
  const TLLOAD = gsap.timeline();
  TLLOAD
  .to('.accueil', {height: 400, duration: 1.3, delay:0.4, ease: 'power2'})
}



//fonction appel use-case
let hiders = document.querySelectorAll('[data-js="hide"]');

Array.prototype.forEach.call(hiders, function (hider) {
	let hiderID = hider.getAttribute('href');
  let hiderTarget = document.querySelector(hiderID);
  
  hider.addEventListener('click', function (event) {
  	event.preventDefault();
    
    hiderTarget.classList.toggle('-visible');
  });
});