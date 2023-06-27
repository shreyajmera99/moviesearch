let moviename = document.getElementById('moviename')
let button = document.getElementById('btn')
// Select the <div> element with the id "result"
const resultDiv = document.getElementById('result');

// Update the innerHTML of the <div> element with the image
let key = "2921c1e";
  
  let fetchmovie = () => {
    let movieName = moviename.value;
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName.length <= 0) {
      resultDiv.innerHTML = `<p class="pone">Please Enter a Movie Name</p>`;
    } else {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.Response === 'True') {
            resultDiv.innerHTML = `
              <div class="info">
                <img src="${data.Poster}" class="poster">
                <h2>${data.Title}</h2>
                <div class="rating">
                  <img src="star1.png">
                  <h4>${data.imdbRating}</h4>
                </div>
                <div class="details">
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
              </div>
            `;
          } else {
            resultDiv.innerHTML = `<p class="pone">Oops! Could not find the movie. Try searching another movie.</p>`;
          }
        })
        .catch(error => {
          resultDiv.innerHTML = `<p class="pone">Oops! An error occurred. Please try again later.</p>`;
          console.error(error);
        });
    }
  }

button.addEventListener('click',fetchmovie)
// window.addEventListener("load", getMovie);

