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
   
        <div class ="card p-4 rounded-4">
        <img src="${tool.image}" class = "card-img-top rounded-3">
        <div class="card-body">
        <h4 class= "card-title">Features</h4>
        <ol>
        <li>${tool.features[0]}</li>
        <li>${tool.features[1]}</li>
        <li>${tool.features[2] ? tool.features[2]: "No data found"}</li>
        </ol>
        </div>
        <hr>
        <div class="d-flex justify-content-between align-items-center">
        <div>
        <h3 class= "card-title">${tool.name}</h3>
        <i class="fa-solid fa-calendar-days"></i> ${tool.published_in}
        </div>

        <div>
        <button onclick="loadApiDetails('${tool.id}')" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#apiDetailModal">
        <i class="fa-solid fa-arrow-right"></i>
        </button>
        </div>
        </div>

        </div>
        </div>
        `;
        hubContainer.appendChild(toolDiv);
    });
        // stop spinner or loader
        toggleSpinner(false);
}


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
         loaderSection.classList.add('d-none');
        
    }
}

document.getElementById('btn-show-all').addEventListener('click', function () {
    toggleSpinner(true);
    loadAiUniverse();
});


 loadAiUniverse(6);


 const loadApiDetails = async id =>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayApiDetails(data.data);
}

const displayApiDetails = tool =>{
    console.log(tool);
    toggleSpinner(true);
    const modalDetails = document.getElementById('api-details');

    modalDetails.innerHTML = `
<div class="container d-flex justify-content-between"> 

<div class="border border-danger rounded-5 p-3">
    <h5>${tool.description}</h5>

    <div class="d-flex justify-content-between  mt-5 mb-5">

    <div class="border rounded-3 p-4 text-success">
    ${tool.pricing[0].price}
    <br>
    ${tool.pricing[0].plan}
    </div>

    <div  class="border rounded-3 p-4 text-warning">
    ${tool.pricing[1].price}
    <br>
    ${tool.pricing[1].plan}
    </div>

    <div  class="border rounded-3 p-4 text-danger">
    ${tool.pricing[2].price}
    <br>
    ${tool.pricing[2].plan}
    </div>

    </div>

    <div class="d-flex justify-content-between">
    
    <div>
    <h5>Features</h5>
    <li>${tool.features[1].feature_name}</li>
    <li>${tool.features[2].feature_name}</li>
    <li>${tool.features[3].feature_name}</li>
    </div>

    <div>
    <h5>Integrations</h5>
    <li>${tool.integrations[0]}</li>
    <li>${tool.integrations[1] ? tool.integrations[1]: "No Data Found"}</li>
    <li>${tool.integrations[2] ? tool.integrations[2]: "No data found"}</li>
    </div>

    </div>
    </div>


    <div class = "border ms-4 border-light-subtle rounded-4 p-3 ">



    <img src="${tool.image_link[0]}" class = "card-img-top rounded-3">

    <button id="accuracy" class=" btn btn-danger text-center">${tool.accuracy.score ? tool.accuracy.score: "0" }
    % accuracy</button>


    <h4 class= "mt-5">${tool.input_output_examples[0].input ? tool.input_output_examples[0].input: "No! Not Yet! Take a break!!!"}</h4>

    <p>${tool.input_output_examples[0].output}</p>
    </div>


    </div>
    

    `
}


//sort-by-date
 document.getElementById('sort-by-date').addEventListener('click', function () {
    loadAiUniverse();

})



