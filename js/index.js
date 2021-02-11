var input = document.getElementById("input")
var desc = document.getElementById("desc");
var button = document.getElementById("button");
var cn = document.getElementById("cn");
var icn = document.getElementById("icn");
var txt = document.getElementById("txt");
var city = document.getElementById("city");
var sub = document.getElementById("sub");
var subcon = document.getElementById("subcon");
var loc = document.getElementById("loc");
var bg = document.getElementById("bg");
var date = document.getElementById("date");
var hour = document.getElementById("hour");
var timezones = document.getElementById("timezone");
var country = document.getElementById("country");
var hi;




function calculate(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=9fb278b4fc99c3d1b223ee25a2310420&units=metric')
.then(response => response.json())
.then(data => {
  var hi = 1;
 subcon.classList.add("hide");
 subcon.classList.remove("appear");
  result.innerHTML = data['weather'][0]['description'];
  desc.innerHTML = data['main']['temp'];
  //cn.innerHTML = data['sys']['country'];
  var timezone = data['timezone']
  var dt = data["dt"];
  txt.innerHTML = data['weather'][0]['icon'];
  icn.setAttribute('src',txt.innerHTML + '.png')
  city.innerText = data['name'] + ",";
  country.innerHTML= data['sys']['country'];
  input.value = ""
  loc.style.top = "0.1vh"
  console.log(timezone,dt);
var dat =new Date(dt*1000+(timezone*1000)-3600000+120000);


date.innerHTML = dat.toString().slice(0,15);
hour.innerHTML = dat.toString().slice(16,21);
timezones.innerHTML = dat.toString().slice(35,44);


})






.catch(err => alert("Could not find the city"));
}



function redo(){
  subcon.classList.remove("hide");
 subcon.classList.add("appear");
}

