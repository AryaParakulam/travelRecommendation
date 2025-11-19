const destArray=[];
function showDestinations(){
    debugger;
    const recommendationDiv  =document.getElementById('recommendationDiv');
    const keyword = document.getElementById('searchText').value.toLowerCase();
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        if ('beaches'.includes(keyword)){
            //recommendationDiv.innerHTML=data.beaches[0].name;
            viewResult(data.beaches)
        }

        //if (data.includes(keyword))
        //    recommendationDiv.innerHTML=data.keys()
        //endif
    })
    .catch(error => {

    });
}
document.getElementById('btnSearch').addEventListener('click',showDestinations);

function viewResult(destinations){
     destinations.forEach(element => {
        var destDiv = document.createElement('div');
        destDiv.classList.add('destinations');
  
        var name = document.createElement('h2');
        name.textContent = element.name;

        var description = document.createElement('p');
        description.textContent = element.description;

        

        destDiv.appendChild(name);
        destDiv.appendChild(description);
        recommendationDiv.appendChild(destDiv);
     });
}