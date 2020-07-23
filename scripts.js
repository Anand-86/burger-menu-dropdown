//Create function to select elements

// const selectElement = (element) => {
//     document.querySelector(element);
// }

//Open and close nav on click

document.querySelector('.menu-icons').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});