var contain=document.createElement("div")
contain.setAttribute("class","container")
contain.setAttribute("id","enclosure")
document.body.append(contain)



async function loop(){
    for (let i=1; i<=60;i++){                              // loop for 60 items
     await pokemon(i)                                      //give index to async function pokemon(id)
    }
}



async function pokemon(id){
    let url=`https://pokeapi.co/api/v2/pokemon/${id}`
    let val = await fetch(url)
    let data = await val.json()
   cards(data)                                           //calling the normal function to get the element in html
}
loop()                                                    // calling for loop to iterate over 60 elements


function cards(data){
    let sections = document.createElement("div")
    sections.classList.add("pokemon")                                                //item box for fetched data



    // getting required data from the api
    let pokhtml=`                                                                    
    <div class="main-content">
    <div class="image-container">
    <img src="${data.sprites.front_default}" id="monster">
    </div>    <br>                                                                                                    
    <div class="details-container">                                                  
    <p><b>Name:</b> ${data.name}</p>
    <p><strong>Abilities:</strong>  ${data.abilities[0].ability.name}</p>
    <p><strong>Moves:</strong>  ${data.moves[0].move.name} / 
    ${data.moves[1].move.name} / ${data.moves[2].move.name}</p>
    <p><strong>Weight:</strong>  ${data.weight} lbs</p>
    </div>
    </div>
    `
    
    

    sections.innerHTML=pokhtml
                                                                       //appending
    contain.appendChild(sections)

}






