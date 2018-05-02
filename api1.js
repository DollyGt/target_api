let request = new XMLHttpRequest();

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
console.log(newData);
let htmlString = "<div><strong>City:</strong> " + newData.name + "</div>";
htmlString += "<div><strong>Current Weather:</strong> " + newData.weather[0].description + "</div>";
document.getElementById(“data”).innerHTML = htmlString;


// function displayNicely(apiData) {
//     let newData = JSON.parse(apiData);
       
//         document.getElementById("data").innerHTML = 
//         "<strong>Name:</strong> " + newData.name + 
//         "<br>" + "<strong>Height:</strong>" + newData.height +
//         "<br>" + "<strong>Mass:</strong>" + newData.mass + 
//         "<br>" + "<strong>Hair_color:</strong>" + newData.hair_color +
//         "<br>" + "<strong>Skin_color:</strong>" + newData.skin_color +
//         "<br>" + "<strong>Eye_color:</strong>" + newData.eye_color + 
//         "<br>" + "<strong>Birth_year:</strong>" + newData.birth_year + 
//         "<br>" + "<strong>Gender:</strong>" + newData.gender
// }

// let htmlString = "<div><strong>Name:</strong> " + newData.name + "</div>";  
//     htmlString += "<div><strong>Height:</strong> " + newData.height + "</div>";
//     htmlString += "<div><strong>Mass:</strong> " + newData.mass + "</div>";
//     htmlString += "<div><strong>Hair_color:</strong> " + newData.hair_color + "</div>";
//     htmlString += "<div><strong>Skin_color:</strong> " + newData.skin_color + "</div>";
//     htmlString += "<div><strong>Eye_color:</strong> " + newData.eye_color + "</div>";
//     htmlString += "<div><strong>Birth_year:</strong> " + newData.birth_year + "</div>";

request.onreadystatechange = function() {
    if (this.readyState == 4 && this .status == 200) {
        displayNicely(this.responseText);
  
    }
}

request.open("GET", "https://swapi.co/api/people/1/")

request.send();
}