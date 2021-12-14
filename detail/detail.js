// remember to have .. in import paths to go up directory
import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
window.addEventListener('load', async() => {
    // get the id from URL
    const params = new URLSearchParams(window.location.search);
    // console.log(params);
    const id = params.get('id');

    // use the id to fetch the dog -> call the getDog function to call the database, pass it the id you just got
    const dogObj = await getDog(id);
    // console.log(dogObj);

    // render and append this dog's details to the container
    const dogNode = renderDogDetail(dogObj);

    dogDetailContainer.append(dogNode);

});
