const loadAiUniverse = async(dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`

    const res = await fetch(url);
    const data = await res.json();
    displayHub(data.data.tools, dataLimit);

}

const displayHub = (universe, dataLimit) => {
    const hubContainer = document.getElementById('hub-container');
    hubContainer.textContent= '';

 // display 6 card only 
 const showAll = document.getElementById('show-all');
 if(dataLimit && universe.length > 6) {
     universe = universe.slice(0, 6);
 }
 else{
     showAll.classList.add('d-none');
 }



// display all card
    universe.forEach(tool => {
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
        <div class ="card p-4 rounded-4">
        <img src="${tool.image}" class = "card-img-top rounded-3">
        <div class="card-body">
        <h4 class= "card-title">Features</h4>
        <ol>
        <li>${tool.features[0]}</li>
        <li>${tool.features[1]}</li>
        <li>${tool.features[2]}</li>
        </ol>
        </div>
        <hr>
        <div class="d-flex justify-content-between align-items-center">
        <div>
        <h3 class= "card-title">${tool.name}</h3>
        <i class="fa-solid fa-calendar-days"></i> ${tool.published_in}
        </div>

        <div>
        <button class="btn btn-info">
        <i class="fa-solid fa-arrow-right"></i>
        </button>
        </div>
        </div>

        </div>
        </div>
        `;
        hubContainer.appendChild(toolDiv);
    })
}




loadAiUniverse(6);