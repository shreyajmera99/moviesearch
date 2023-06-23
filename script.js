let moviename = document.getElementById('moviename')
let button = document.getElementById('btn')
// Select the <div> element with the id "result"
const resultDiv = document.getElementById('result');

// Update the innerHTML of the <div> element with the image
let key = "2921c1e";
let fetchmovie=()=>{
    let movienames = moviename.value
    // let url = `https://www.omdbapi.com/t=${movienames}&apikey=2921c1e`
    if(movienames.length <=0){
        resultDiv.innerHTML = `<h3 class "msg">Please Enter a Movie name</h3>`

    }
    else{
    let url = `https://www.omdbapi.com/?t=${movienames}&apikey=2921c1e`
    fetch(url).then(response => response.json()).then((data =>{
   
        
        resultDiv.innerHTML =  `  
        <div class = "info">     
          <img src=${data.Poster} class = "poster">
        <div>    
        <h2>${data.Title}</h2>
        <div class = "rating">     
        <img src="star1.png">
        <h4>${data.imdbRating}</h4>
      </div>  
      <div class = "details">
      <span>${data.Rated}</span>
      <span>${data.Year}</span>
      <span>${data.Runtime}</span>
        </div>
        <div class="genre">
        <div>${data.Genre.split(",").join("</div><div>")}</div>
        </div>
        <div class="actors">
        <div>${data.Actors.split(",").join("</div><div>")}</div>
    </div>    
        `

    }))

}

}

button.addEventListener('click',fetchmovie)
window.addEventListener("load", getMovie);

