import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', async() => {
    // fetch all dogs
    const dogsArr = await getDogs();
    // console.log(dogsArr);

    // render and append all dog cards to the container
    for (let eachDog of dogsArr) {
        const dogCardNode = renderDogCard(eachDog);
        dogListContainer.append(dogCardNode);
    }
});