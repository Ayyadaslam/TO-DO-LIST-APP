const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");




// button function on click
function addTask() {
    if(inputBox.value ===''){
        alert("you must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // input value  store li 
        listContainer.appendChild(li); /// it will li value in list container 


        let span = document.createElement("span"); /// new variable 
        span.innerHTML = " \u00d7"; /// we add new icon inthe last of list to clear task
        li.appendChild(span); // its display value of li in span

    }
    inputBox.value = "";

}



/// below this section i m going write a remove area for task '''



listContainer.addEventListener("click" , function(e){

    if(e.target.tagName == 'LI'){  //it will check li item tag name
       e.target.classList.toggle("checked") // this will attch pic on it  with toggle
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();  /// check line item  checked or uncheked it delet line 
    }


}, false);







