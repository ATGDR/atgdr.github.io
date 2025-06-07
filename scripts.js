/* Place your JavaScript in this file */
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.add("show");
    } else {
        mybutton.classList.remove("show");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("load",loadHappened);

function loadHappened(){
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  if(acc[i].classList.contains("stateOpened"))
  toggleStatePanel.call(acc[i]);
}
}

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", toggleStatePanel);
}

function toggleStatePanel(){

this.classList.toggle("active-skills");
var panel = this.nextElementSibling;
if (!panel) {
panel = this.parentElement.nextElementSibling;
}
if (panel.style.maxHeight) {
panel.style.maxHeight = null;
} else {
          panel.style.maxHeight = panel.scrollHeight + "px";
} 
}

const slideIndices = { edu: 0, gew: 0, cms: 0, pos: 0 };
const projects = ['edu', 'gew', 'cms', 'pos'];

function showSlides(project, n) {
    const slides = document.getElementsByClassName('slide-' + project);
    if (!slides.length) return;
    if (n >= slides.length) slideIndices[project] = 0;
    if (n < 0) slideIndices[project] = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndices[project]].style.display = "block";

    // Dots
    const dotsContainer = document.getElementById('dots-' + project);
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot' + (i === slideIndices[project] ? ' active' : '');
            dot.onclick = () => {
                slideIndices[project] = i;
                showSlides(project, i);
            };
            dotsContainer.appendChild(dot);
        }
    }
}

function plusSlides(project, n) {
    showSlides(project, slideIndices[project] += n);
}

// Initialize all slideshows on page load
window.addEventListener('DOMContentLoaded', function() {
    projects.forEach(project => showSlides(project, 0));
});

// 07/06/2025 9:47 PM