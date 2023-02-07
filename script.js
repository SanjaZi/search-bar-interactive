const squareClass = document.getElementsByClassName('square');
const square = squareClass[0];
const lupicaClass = document.getElementsByClassName('lupica');
const lupica = lupicaClass[0];
const container = document.getElementById("container");
const hiddenClass = document.getElementsByClassName('hidden');
const hidden = hiddenClass[0];



lupica.addEventListener("click", function(){
    console.log("click on lupica");
    lupica.classList.toggle("lupicaNaKraj");
    container.classList.toggle("containerClicked");
    setTimeout(function(){
        myFunction()
    }, 130); 
})


function myFunction() {
   
    if (hidden.style.display === "none") {
        hidden.style.display = "block";
        hidden.classList.add("search");
    } else {
        hidden.style.display = "none";
    }
  }


