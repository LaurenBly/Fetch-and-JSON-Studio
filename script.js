window.addEventListener("load", event => {
    let jsonDat = [];
    let content = document.getElementById("content");

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(event => {
         event.json().then(astronautList => {

            for(let i =0; i <astronautList.length; i++){
                
            
            content.innerHTML = `<div class="astronaut">
            <div class ="bio">
            <h3>${astronautList[i].firstName} ${astronautList[i].lastName}</h3>
                <ul>
                    <li>${astronautList[i].hoursInSpace}</li>
                    <li `;
                    if({astronautList[i].active} === true) {
                        content.innerHTML += `class="active"`;
                    } else {
                        content.innerHTML +=``;
                    }    

                     content.innerHTML += `>Active: ${astronautList[i].active}</li>
                    <li>Skills: ${astronautList[i].skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${astronautList[i].picture}">
            </div>`;
            }
          
        });  
    
    });
});