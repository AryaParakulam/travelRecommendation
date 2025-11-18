const destArray=[];
function showDestinations(){
    debugger;
    const recommendationDiv  =document.getElementById('recommendationDiv');
    const keyword = document.getElementById('searchText').value.toLowerCase();
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        if (data.countries.cities.description.toLowerCase().includes(keyword))
            recommendationDiv.innerHTML=data.countries.name
        endif
    })
    .catch(error => {

    });
}
document.getElementById('btnSearch').addEventListener('click',showDestinations)