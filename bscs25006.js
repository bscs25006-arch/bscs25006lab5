window.onload = function(){
    alert("WELCOME");
}
year=new Date().getFullYear();
Document.getElementById("year.").innerHTML=year;


function checkstock(id){
if(id=="instock"){
    alert("product is in stock");}
    else{
        alert("product is out of stock");
    }
}
function validateform(){
    let name=document.forms["my form"]["name"].value;
    let email=document.forms["my form"]["email"].value;
    if(name=="" ||email==""){
        alert("All fields must be filled out");
       return false;
    }
}
function sendMessage() {
  const input = document.getElementById("chatInput").value;
  if (input.trim() !== "") {
    console.log("Message sent:", input);
  }



    let chatlog=document .getElementryById("chat-log");

    if(input==" ")return ;
    let userMsg=document.createElement("p");
    userMsg,textContent ="you:" +input;
    chatlogLog.appendChild(userMsg);
    let botResponse=getBotResponse(input);
    let botMsg=document.createElement("p");
    botMsg.textContent="Bot:" +botResponse;
    chatlog.appendChild(botMsg);



    document.getElementryById("user-input").value=" ";

    chatlog.scrollTop= chatlLog.scrollHeight;
}

function getBotResponse(input){
    if(input.includes("hello")|| input.includes("hi")){
        return "Hello there! How can i help you?";

    }
    else if(input.includes("how are you")){
        return "I'm just abot ,but I'm doing great!";
    }
    else if(input.includes("bye")){
        return "Goodbye! Have a nice day!";

    }
    else if (input.includes("help")){
        return "Sure ASk me anything,you'd like to know .";

    }
    else{
        return "I'm not sure how to respond to that.Try asking something else!";
    }
    
}

