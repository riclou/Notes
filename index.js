const flex = document.querySelector(".flex")
const cardTitle = document.querySelector("#title")
const cardText = document.querySelector("#description")
const modal = document.querySelector(".modal")

cardTitle.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        success()
    }
})

function success () {

    if(cardTitle.value == ""){
        alert("Adicione um título")
    }
    else{
        const card = document.createElement("div")
        card.style.width = "18rem"
        flex.appendChild(card)
        card.classList.add("card")
        card.classList.add("card-flex")
        card.innerHTML += `<div class="card-body">
                            <h5 class="card-title">${cardTitle.value}</h5>
                            <p class="card-text">${cardText.value}</p>
                            <button type="button" class="btn btn-danger">Excluir nota</button>
                        </div>`
    }

    const buttonDelete = document.querySelectorAll(".btn-danger")
    deleteNote(buttonDelete)

    cardTitle.value = ""
    cardText.value = ""
}


function deleteNote (button){
    button.forEach(element => {
       element.addEventListener("click", function(){
        element.parentNode.parentNode.remove()
       })
    });
}