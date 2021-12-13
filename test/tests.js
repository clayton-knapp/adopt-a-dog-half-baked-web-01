// IMPORT MODULES under test here:
import { renderDogCard } from '../render-utils.js';
import { renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('test if renderDogCard given a dog object, returns the expected DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./detail/?id=2"><div class="dog-card"><p>Boogie</p><img src="./assets/corgi.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const exampleDog = {
        id: 2,
        name: 'Boogie',
        breed: 'corgi'
    };
    
    const actual = renderDogCard(exampleDog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'successfully returns node "<a href="./detail/?id=2"><div class="dog-card"><p>Boogie</p><img src="./assets/corgi.jpeg"></div></a>"');

    //Arrange
    // Set up your arguments and expectations
    const expected2 = '<a href="./detail/?id=7"><div class="dog-card"><p>Ralphie</p><img src="./assets/shiba.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const exampleDog2 = {
        id: 7,
        name: 'Ralphie',
        breed: 'shiba'
    };
    
    const actual2 = renderDogCard(exampleDog2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2.outerHTML, expected2, 'successfully returns node "<a href="./detail/?id=7"><div class="dog-card"><p>Ralphie</p><img src="./assets/shiba.jpeg"></div></a>"');
});




test('tests to see if renderDogDetail returns correct DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="dog-detail"><p class="name">Boogie</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">corgi</p></div><p class="description">Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const exampleDog3 = {
        id: 2,
        name: 'Boogie',
        age: 5,
        breed: 'corgi',
        description: 'Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.'
    };

    const actual = renderDogDetail(exampleDog3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'successfully returns DOM element "<div class="dog-detail"><p class="name">Boogie</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">corgi</p></div><p class="description">Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.</p></div>"');

    //Arrange
    // Set up your arguments and expectations
    const expected4 = '<div class="dog-detail"><p class="name">Q Ball</p><img src="../assets/husky.jpeg"><div class="age-and-breed"><p class="age">3 years old</p><p class="breed">husky</p></div><p class="description">Husky is best dog</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const exampleDog4 = {
        id: 7,
        name: 'Q Ball',
        age: 3,
        breed: 'husky',
        description: 'Husky is best dog'
    };

    const actual4 = renderDogDetail(exampleDog4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual4.outerHTML, expected4, 'successfully returns DOM element "<div class="dog-detail"><p class="name">Q Ball</p><img src="../assets/husky.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">husky</p></div><p class="description">Husky is best dog</p></div>"');
});
