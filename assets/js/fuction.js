
// Objet contenant les fuctions listeners
var listenerFuction = {
    h2Click: function (event){    // OU H2Click: fuction ()
        //window.alert("Click détecté sur H2")
        /*console.log(this);
        this.style.fontSize = "2rem"
        if(this.style.color && this.style.color== "red"){
            this.style.color = "green"
        }else{
            this.style.color = "red" 
        }*/
        //console.log(event); // pas ça avant // ou avec (event.target); target= this
        var element = event.target;
        console.log("element:", element);
        element.style.fontSize = "2rem"
        if(element && element.style.color == "red"){
            element.style.color = "blue"
        }else{
            element.style.color = "red"
        }
            
        console.log("Click détecté sur H2");
    } 
    
}

// Mise en place des  abonnements 
var setupListeners =()=>{
    var h2 = document.querySelector("section#html h2")
    h2.addEventListener("click", listenerFuction.h2Click)

   
}