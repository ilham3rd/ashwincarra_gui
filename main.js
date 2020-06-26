

document.getElementById('logo').src='Ashwincarra.png';

var ip,ipaddress,ipget;
ipget=window.location.hash.substring(1);
console.log(ipget)

if(ipget!=null){
  var str1='ws://';
  var str2=':8080';
  var combine=str1.concat(ipget);
  ipaddress=combine.concat(str2);
  document.getElementById("ip_address").value=ipget;
  setWebSocket();
}

function calibration_html(){
  ip=document.getElementById("ip_address");
  window.location.href = 'calibration.html' + '#' + ip.value;
}


function setIP(){
  ip=document.getElementById("ip_address");
  var str1='ws://';
  var str2=':8080';
  var combine=str1.concat(ip.value);
  ipaddress=combine.concat(str2);
  setWebSocket();
}


function setWebSocket(){
  
  var ros = new ROSLIB.Ros({
    url : ipaddress
  });

  ros.on('connection', function() {
  document.getElementById("status").innerHTML = "Connected";
});

ros.on('error', function(error) {
  document.getElementById("status").innerHTML = "Error";
});

ros.on('close', function() {
  document.getElementById("status").innerHTML = "Closed";
}); 


var txt_longitude= new ROSLIB.Topic({
ros : ros,
name : '/gui/longitude',
messageType : 'std_msgs/Float32'
});

txt_longitude.subscribe(function(m) {
document.getElementById("longitude").innerHTML = m.data;
});


var txt_latitude= new ROSLIB.Topic({
ros : ros,
name : '/gui/latitude',
messageType : 'std_msgs/Float32'
});

txt_latitude.subscribe(function(m) {
document.getElementById("latitude").innerHTML = m.data;
});

var txt_altitude= new ROSLIB.Topic({
ros : ros,
name : '/gui/altitude',
messageType : 'std_msgs/Float32'
});

txt_altitude.subscribe(function(m) {
document.getElementById("altitude").innerHTML = Math.round(m.data* 100) / 100;
});



var txt_mode= new ROSLIB.Topic({
ros : ros,
name : '/gui/mode',
messageType : 'std_msgs/String'
});

txt_mode.subscribe(function(m) {
document.getElementById("mode").innerHTML = m.data
});

var txt_motor_status= new ROSLIB.Topic({
ros : ros,
name : '/gui/armed',
messageType : 'std_msgs/Bool'
});

txt_motor_status.subscribe(function(m) {
  if(m.data==true){
    document.getElementById("motor_status").innerHTML = "Armed"
  }
  else{
    document.getElementById("motor_status").innerHTML = "Disarmed"
  }

});


var txt_lidar_range= new ROSLIB.Topic({
ros : ros,
name : '/gui/lidar',
messageType : 'std_msgs/Float32'
});

txt_lidar_range.subscribe(function(m) {
  if(m.data<=0){
    document.getElementById("lidar").innerHTML = "Unavailable"
  }
  else{
    document.getElementById("motor_status").innerHTML = m.data
  }

});
}

  
