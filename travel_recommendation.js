const destArray=[];

function showDestinations(){
    debugger;
    const keyword = document.getElementById('searchText').value.toLowerCase();
    const recommendationDiv  =document.getElementById('recommendationDiv');
    recommendationDiv.innerHTML="";
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        if ('beaches'.includes(keyword)){
            //recommendationDiv.innerHTML=data.beaches[0].name;
            viewResult(data.beaches);
        }
        else if('temples'.includes(keyword)){
            viewResult(data.temples);
        }
        else if('countries'.includes(keyword) || 'country'.includes(keyword)){
            viewResult(data.countries[0]);
        }
        else{
            data.countries.forEach(element => {
               if (element.name.toLowerCase().includes(keyword)){
                    viewResult(element.cities);
               }
            });
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

        var image = document.createElement('img');
        image.src = element.imageUrl;
        image.classList.add('destImage');
    
        var description = document.createElement('p');
        description.textContent = element.description;

        destDiv.appendChild(image);
        destDiv.appendChild(name);
        destDiv.appendChild(description);
        recommendationDiv.appendChild(destDiv);
     });
}

document.getElementById('btnClear').addEventListener('click',clearDestinations);

function clearDestinations(){
    debugger;
    document.getElementById('recommendationDiv').innerHTML = "";
}
function thankyou(){
    window.alert("Thank you for contacting us!!!");
}