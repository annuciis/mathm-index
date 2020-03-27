const isEmpty = () => {
    const form = document.forms["contact-form"];
    if(form.name.value === "" || form.email.value === "" || form.message.value === "" ){

    if(form.name.value === ""){
        alert("You should need to write your name")
        
    } 
    if(form.email.value === "") {
        alert("You should need to write your e-mail");
        
    }
    if(form.message.value === ""){
        alert("Write your message!");
        
    }
    document.querySelector(".thanks-text").innerHTML= "";
} else {
    document.querySelector(".thanks-text").innerHTML= "<em>Thanks</em> for contacting us! We will get back to you soon!";
}
    
}

const isEmptyLv = () => {
    const form = document.forms["contact-form"];
    if(form.name.value === "" || form.email.value === "" || form.message.value === "" ){
    if(form.name.value === ""){
        alert("Norādiet savu vārdu!")
        
    } 
    if(form.email.value === "") {
        alert("Norādiet savu e-pastu!");
        
    }
    if(form.message.value === ""){
        alert("Norādiet savu ziņu!");
        
    }
    document.querySelector(".thanks-text").innerHTML= "";
    
    
} else {

    document.querySelector(".thanks-text").innerHTML= "<em>Paldies</em> par jūsu ziņu! Sazināsimies ar jums tuvākajā laikā!";
}
    
}