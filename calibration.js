var Service = require('./Service');
var ServiceRequest = require('./ServiceRequest');

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

var ipaddress;

HMinText.innerHTML = HMin.value;
HMaxText.innerHTML = HMax.value;
SMinText.innerHTML = SMin.value;
SMaxText.innerHTML = SMax.value;
VMinText.innerHTML = VMin.value;
VMaxText.innerHTML = VMax.value;
GaussianText.innerHTML = Gaussian.value;
MorphologiText.innerHTML = Morphologi.value;

console.log(window.location.hash.substring(1));
ipaddress=window.location.hash.substring(1);
setWebSocket();



function main_htmlFun(){
    window.location.href = 'main.html' + '#' + ipaddress;
}

    function setWebSocket(){
        var str1='ws://';
        var str2=':8080';
        var combine=str1.concat(ipaddress);
        var ipaddress2=combine.concat(str2);

        var ros = new ROSLIB.Ros({
          url : ipaddress2
        });
      
        ros.on('connection', function() {
        document.getElementById("status").innerHTML = "Connected";
      });
      
      ros.on('error', function(error) {
        document.getElementById("status").innerHTML = "Error";
      });
      
      ros.on('close', function() {
        document.getElementById("status").innerHTML = "Closed";
      }); }

      
      /**


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