

let dropDownContent = document.getElementsByClassName('dropdown-content');
let dropDownLink = document.getElementsByClassName('dropdown-link');
let popupButton = document.getElementById('popup-button');
let contactFormWindow = document.getElementById('contact-form');
let closeFormButton = document.getElementById('close-button');
let subscribeForm = document.getElementById('subscribe-form');
let subscribeInput = document.getElementById('subscribe-input');

let dropDownAnimation = [
    {display: 'none', opacity: 0},
    {display: 'block', opacity: 0},
    {display: 'block', opacity: 1}
];
let dropDownTiming = {
    duration: 400,
};

let imgArray = [
    '/gallery/mountains.jpg',
    '/gallery/nature.jpeg',
    '/gallery/nature1.jpg',
    '/gallery/sea.jpeg'
];


// Dropdown-menu on mouseover

for (let i = 0; i < dropDownLink.length; i++) {
    dropDownLink[i].addEventListener('mouseover', function() {
            dropDownContent[i].animate(
                dropDownAnimation,
                dropDownTiming
            );
            dropDownContent[i].classList.add('show');
            dropDownContent[i].classList.remove('hidden');
    });
    dropDownLink[i].addEventListener('mouseout', function() {
        setTimeout(function() {
            dropDownContent[i].classList.remove('show');
            dropDownContent[i].classList.add('hidden');
        }, 200);
    })
};


// Thank you for subscribing message

subscribeForm.addEventListener('submit', function() {
    event.preventDefault()
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Thank you for subscribing!';
    newParagraph.style.fontSize = '0.8rem';
    subscribeForm.appendChild(newParagraph);
})

// Background image animation

let curIndex = 0;
let imgDuration = 6000;

let bgContainer = document.getElementById('bg-container');

function slideShow() {
    bgContainer.style.backgroundImage = 'url(' + imgArray[curIndex % 4] + ')';
    curIndex++;
    setTimeout("slideShow()", imgDuration);
};

slideShow();