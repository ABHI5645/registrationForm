function validate(){
let firstNameInput=document.getElementById('first-name').value;
let lastNameInput=document.getElementById('last-name').value;
let emailInput=document.getElementById("email").value;
let cityInput=document.getElementById('city').value;
let zipInput=document.getElementById('zip').value;
let tnCInput=document.getElementById('tnC').checked
let stateInput=document.getElementById("state").value;
let error=false;
if(firstNameInput){
    document.getElementById('first-name-valid').style.display='block';
    document.getElementById("first-name-invalid").style.display='none'
}
else{
   document.getElementById("first-name-invalid").style.display='block'
    document.getElementById('first-name-valid').style.display='none';
    error=true
}
if(lastNameInput){
    document.getElementById("last-name-valid").style.display="block";
    document.getElementById("last-name-invalid").style.display="none"
}
else{
    document.getElementById("last-name-valid").style.display="none";
    document.getElementById("last-name-invalid").style.display="block"
    error=true
}
if(emailInput && emailInput.includes("@")&&emailInput.includes(".")&&emailInput.lastIndexOf(".")+3<=emailInput.length && emailInput.indexOf('@')!==0){
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
}
else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
    error=true
}
if(stateInput!='None'){
    document.getElementById('state-valid').style.display='block';
    document.getElementById('state-invalid').style.display='none';
}
else{
    document.getElementById('state-invalid').style.display='block';
    document.getElementById('state-valid').style.display='none';
    error=true
}
if(zipInput && zipInput.length===6 && parseInt(zipInput)){
    document.getElementById("zip-valid").style.display="block";
    document.getElementById("zip-invalid").style.display="none";

}

else{
    document.getElementById("zip-invalid").style.display = "block";
		document.getElementById("zip-valid").style.display = "none";
        error=true
}
if(cityInput && cityInput.length>=3){
    document.getElementById("city-valid").style.display="block";
    document.getElementById("city-invalid").style.display="none";

}
else{
    document.getElementById('city-invalid').style.display='block';
    document.getElementById('city-valid').style.display='none';
    error=true;
}
if(tnCInput){
    document.getElementById('tnC-invalid').style.display='none';
}
else{
    document.getElementById('tnC-invalid').style.display="block";
    error=true;
}

if(!error) {
    alert('Your details have been saved successfully!')
    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = 'None'
    document.getElementById('zip').value = ''
    document.getElementById('tnC').checked = false

    document.getElementById('first-name-valid').style.display = 'none'
    document.getElementById('last-name-valid').style.display = 'none'
    document.getElementById("email-valid").style.display = "none"
    document.getElementById("city-valid").style.display = "none";
    document.getElementById("zip-valid").style.display = "none";
    document.getElementById('state-valid').style.display = "none";
}
}

