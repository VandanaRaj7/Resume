function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if (xhr.readyState ===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
loadjson("data.json",function(text){
	let data =JSON.parse(text);
	console.log(data);
	basic(data.details);
	carr(data.carrier);
	edu(data.education);
	skil(data.skills);
});
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(MIC){
	var image=document.createElement("img");
	image.src=MIC.image;
	left.appendChild(image);
	var name=document.createElement("h3");
	name.textContent=MIC.name;
left.appendChild(name);
var phone=document.createElement("h3");
	phone.textContent=MIC.phone;
left.appendChild(phone);
var email=document.createElement("h3");
	email.textContent=MIC.email;
left.appendChild(email);

}

var right= document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
	var e=document.createElement("h1");
	e.textContent="Educational Details";
	right.appendChild(e);
	e.appendChild(document.createElement("HR"));
	var un=document.createElement("ul");
	e.appendChild(un);
	for (var i =0; i<education.length; i ++) {
		var l=document.createElement("h2");
		l.textContent=education[i].course;
		un.appendChild(l);
		
		var l=document.createElement("li");
		l.textContent=education[i].college;
		un.appendChild(l);
		var l=document.createElement("li");
		l.textContent=education[i].aggregation;
		un.appendChild(l);
	}
}
function skil(skills){
	var s=document.createElement("div");
	right.appendChild(s);
	s.classList.add("sset");
	var head=document.createElement("h1");
	head.textContent="Skills Set";
	s.appendChild(head);
    s.appendChild(document.createElement("HR"));
    var t=document.createElement("table");
    var tabledata="";
    for (var i = 0; i<skills.length; i++) {
    	tabledata+="<tr><td>"+skills[i].title+"</td><td>"+skills[i].output+"</td></tr>";
    
t.innerHTML=tabledata;
	}
	head.appendChild(t);

}
function carr(carrier){
	var d=document.createElement("div");
	d.classList.add("carrier");
	right.appendChild(d);
	var e=document.createElement("h1");
	e.textContent="Carrier Objective";
	d.appendChild(e);
	e.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=carrier.co;
	e.appendChild(para);
}
