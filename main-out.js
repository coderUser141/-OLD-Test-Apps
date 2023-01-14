

function doc(a){
	var b = document.getElementById(a);
	return b;
}
function register(){
	var a = 1;
	a++;
	var data = [];
	var fn = doc("regname").value;
	var sn = doc("regsurname").value;
	var fp = doc("regpasswd").value;
	var sp = doc("regpasswdconf").value;
	if (fp != sp){
		alert("These passwords do not match")
	} else if (fn == ""){
		alert("Please enter in your first name.");
	} else if (sn == ""){
		alert("Please enter in your last name.");
	} else if (fp == ""){
		alert("Please enter in your password.");
	} else if (sp == ""){
		alert("Please enter in your confirmation password.");
	} else {
		var email = fn+""+sn+"@testapps.com";
		for(i; i < i+1; i++){
			data.push(email);
			data.push(fp);
			localStorage.setItem("Data"+i,data);
		}
		alert("Success! Your email is: "+email);
	}
}

function validate(){
	var a = doc("loginname").value;
	var b = doc("loginpasswd").value;
}

window.addEventListener('keydown', function(evt) {
  var key = evt.keyCode;
  if(key == 13){
	if(window.location == 'file:///E:/code/testapps/login.html'){
		validate();
	} else if (window.location == 'file:///E:/code/testapps/register.html'){
		register();
	}
	  
  }
}, false);