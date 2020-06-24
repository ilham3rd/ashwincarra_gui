var HMin = document.getElementById("HMin");
var HMinText = document.getElementById("HMinText");
var HMax = document.getElementById("HMax");
var HMaxText = document.getElementById("HMaxText");

document.getElementById('logo').src='Ashwincarra.png';

var SMin = document.getElementById("SMin");
var SMinText = document.getElementById("SMinText");
var SMax = document.getElementById("SMax");
var SMaxText = document.getElementById("SMaxText");


var VMin = document.getElementById("VMin");
var VMinText = document.getElementById("VMinText");
var VMax = document.getElementById("VMax");
var VMaxText = document.getElementById("VMaxText");

var Gaussian = document.getElementById("Gaussian");
var GaussianText = document.getElementById("GaussianText");
var Morphologi = document.getElementById("Morphologi");
var MorphologiText = document.getElementById("MorphologiText");

HMinText.innerHTML = HMin.value;
HMaxText.innerHTML = HMax.value;
SMinText.innerHTML = SMin.value;
SMaxText.innerHTML = SMax.value;
VMinText.innerHTML = VMin.value;
VMaxText.innerHTML = VMax.value;
GaussianText.innerHTML = Gaussian.value;
MorphologiText.innerHTML = Morphologi.value;

// Update the current slider value (each time you drag the slider handle)
HMin.oninput = function() {
    HMinText.innerHTML =this.value;
} 
HMax.oninput = function() {
    HMaxText.innerHTML = this.value;
}
SMin.oninput = function() {
    SMinText.innerHTML = this.value;
} 
SMax.oninput = function() {
    SMaxText.innerHTML = this.value;
} 
VMin.oninput = function() {
    VMinText.innerHTML = this.value;
} 
VMax.oninput = function() {
    VMaxText.innerHTML = this.value;
} 
Gaussian.oninput = function() {
    GaussianText.innerHTML = this.value;
} 
Morphologi.oninput = function() {
    MorphologiText.innerHTML = this.value;
} 