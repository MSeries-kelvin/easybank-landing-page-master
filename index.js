// import { JavaScript, TypeScript, Both } from 'options';
// import { twitterAPI } from 'twitterAPI';

// this.onView = function() {

//     const currentUser = twitterAPI.getCurrentUser();
//     const userPreference = 
//         currentUser.prompt(`What do you prefer? '${JavaScript}' or '${TypeScript}'`);
    
//     if (userPreference === JavaScript) {

//         currentUser.performAction('Like');

//     } else if (userPreference === TypeScript) {

//         currentUser.performAction('Comment');

//     } else if (userPreference === Both) {

//         currentUser.performAction('Like');
//         currentUser.performAction('Comment');
//     }
// }



const openNavBtn = document.getElementById('menu-open');
const closeNavBtn = document.getElementById('menu-close');
const NavCont = document.getElementById('nav-mobile');

openNavBtn.addEventListener('click', () => {
    NavCont.style.display = 'flex';
    closeNavBtn.style.display = 'inline-block';
    openNavBtn.style.display = 'none';
});

closeNavBtn.addEventListener('click', () => {
    NavCont.style.display = 'none';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
});
