const navClosedBtn = document.querySelector('.nav_closed_btn');
const navMenuMobile = document.querySelector('.closing_menu_button');
const menuHamburger = document.querySelector('.menu');
const navMainBar = document.querySelector('.nav_main_bar');
const navMenuOptions = document.querySelectorAll('.nav_menu_options');
const MainSection = document.querySelector('#work_card_section');

const obj = {
  names: [
    'Tonic', 'Multi-Post Stories', 'Facebook 360', 'Multi-Post Stories', 'Tonic', 'Multi-Post Stories', 'Facebook 360', 'Multi-Post Stories',
    'Tonic', 'Multi-Post Stories', 'Facebook 360', 'Multi-Post Stories', 'Tonic', 'Multi-Post Stories', 'Facebook 360', 'Multi-Post Stories',
  ],
  imgs: [
    '/imgs/Snapshoot Portfolio(1).png', '/imgs/Snapshoot Portfolio22.png', '/imgs/Snapshoot Portfolio(3).png', '/imgs/Snapshoot Portfolio(2).png',
    '/imgs/Snapshoot Portfolio(1).png', '/imgs/Snapshoot Portfolio22.png', '/imgs/Snapshoot Portfolio(3).png', '/imgs/Snapshoot Portfolio(2).png',
    '/imgs/Snapshoot Portfolio(1).png', '/imgs/Snapshoot Portfolio22.png', '/imgs/Snapshoot Portfolio(3).png', '/imgs/Snapshoot Portfolio(2).png',

  ],
  details: [
    'A daily selection of privately personalized reads; no accounts or sign-ups required',
    'A daily selection of privately personalized reads; no accounts or sign-ups required',
    'A daily selection of privately personalized reads; no accounts or sign-ups required',
    'lorem ipsum A daily selection of privately personalized reads; no accounts or sign-ups required',
  ],
  technologies: [
    'HTML', 'CSS', 'JavaScript',
  ],
  link: [
    'http://127.0.0.1:3002/index.html',
  ],
};

// cards section start from here
// Create the main card container
const cardContainer1 = document.createElement('div');
cardContainer1.className = 'card1 card';
// Create the card image container
const cardImageContainer1 = document.createElement('div');
cardImageContainer1.className = 'card-img';
// Create the card image element
const cardImage1 = document.createElement('img');
cardImage1.src = '/imgs/Snapshoot Portfolio(2).png';
cardImage1.alt = 'Tonic';
// Append the image to the image container
cardImageContainer1.appendChild(cardImage1);
// Create the card info container
const cardInfoContainer1 = document.createElement('div');
cardInfoContainer1.className = 'card-info';
// Create the card title
const cardTitle1 = document.createElement('h2');
cardTitle1.textContent = 'Tonic';
// Create the first list
const firstList1 = document.createElement('ul');
firstList1.className = 'first_list';
// Create the list items for the first list
const listItem11 = document.createElement('li');
listItem11.textContent = 'CANOPY';
const listItem21 = document.createElement('li');
listItem21.className = 'dim_color_text';
listItem21.innerHTML = '&#9679; Back End Dev';
const listItem31 = document.createElement('li');
listItem31.className = 'dim_color_text';
listItem31.innerHTML = '&#9679; 2015';
// Append the list items to the first list
firstList1.appendChild(listItem11);
firstList1.appendChild(listItem21);
firstList1.appendChild(listItem31);
// Create the paragraph
const paragraph1 = document.createElement('p');
paragraph1.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
// Create the second list
const secondList1 = document.createElement('ul');
secondList1.className = 'second_list';
// Create the buttons for the second list
const button11 = document.createElement('button');
button11.className = 'second_listbtn';
button11.textContent = 'html';

const button21 = document.createElement('button');
button21.className = 'second_listbtn';
button21.textContent = 'css';
const button31 = document.createElement('button');
button31.className = 'second_listbtn';
button31.textContent = 'javascript';
// Append the buttons to the second list
secondList1.appendChild(button11);
secondList1.appendChild(button21);
secondList1.appendChild(button31);
// Create the "See project" button
const seeProjectButton1 = document.createElement('button');
seeProjectButton1.className = 'see_project';
seeProjectButton1.id = 'cardBtn1';
seeProjectButton1.textContent = 'See project';
// Append all elements to the card info container
cardInfoContainer1.appendChild(cardTitle1);
cardInfoContainer1.appendChild(firstList1);
cardInfoContainer1.appendChild(paragraph1);
cardInfoContainer1.appendChild(secondList1);
cardInfoContainer1.appendChild(seeProjectButton1);
// Append the card image and card info containers to the main card container
cardContainer1.appendChild(cardImageContainer1);
cardContainer1.appendChild(cardInfoContainer1);
// Now you can append the card container to your desired element in the DOM
// For example, if you have a container with an ID of "cardsContainer":
// const cardsContainer = document.getElementById('cardsContainer');
// cardsContainer.appendChild(cardContainer);

// card 2

// Create the card container element
const cardContainer2 = document.createElement('div');
cardContainer2.className = 'card2 card';

// Create the card image element
const cardImage2 = document.createElement('div');
cardImage2.className = 'card-img';
const image2 = document.createElement('img');
image2.src = '/imgs/Snapshoot Portfolio(3).png';
image2.alt = 'Multi-Post Stories';
cardImage2.appendChild(image2);

// Create the card info element
const cardInfo2 = document.createElement('div');
cardInfo2.className = 'card-info';

// Create the heading element
const heading2 = document.createElement('h2');
heading2.textContent = 'Multi-Post Stories';

// Create the first list element
const firstList2 = document.createElement('ul');
firstList2.className = 'first_list';

// Create the list items for the first list
const listItem12 = document.createElement('li');
listItem12.textContent = 'CANOPY';
const listItem22 = document.createElement('li');
listItem22.className = 'dim_color_text';
listItem22.innerHTML = '&#9679; Back End Dev';
const listItem32 = document.createElement('li');
listItem32.className = 'dim_color_text';
listItem32.innerHTML = '&#9679; 2015';

// Append list items to the first list
firstList2.appendChild(listItem12);
firstList2.appendChild(listItem22);
firstList2.appendChild(listItem32);

// Create the paragraph element
const paragraph2 = document.createElement('p');
paragraph2.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';

// Create the second list element
const secondList2 = document.createElement('ul');
secondList2.className = 'second_list';

// Create the buttons for the second list
const button12 = document.createElement('button');
button12.className = 'second_listbtn';
button12.textContent = 'html';
const button22 = document.createElement('button');
button22.className = 'second_listbtn';
button22.textContent = 'css';
const button32 = document.createElement('button');
button32.className = 'second_listbtn';
button32.textContent = 'Ruby on rails';
const button42 = document.createElement('button');
button42.className = 'second_listbtn';
button42.textContent = 'javascript';

// Append buttons to the second list
secondList2.appendChild(button12);
secondList2.appendChild(button22);
secondList2.appendChild(button32);
secondList2.appendChild(button42);

// Create the "See project" button
const seeProjectButton2 = document.createElement('button');
seeProjectButton2.className = 'see_project';
seeProjectButton2.id = 'cardBtn2';
seeProjectButton2.textContent = 'See project';

// Append all elements to the card info
cardInfo2.appendChild(heading2);
cardInfo2.appendChild(firstList2);
cardInfo2.appendChild(paragraph2);
cardInfo2.appendChild(secondList2);
cardInfo2.appendChild(seeProjectButton2);

// Append card image and card info to the card container
cardContainer2.appendChild(cardImage2);
cardContainer2.appendChild(cardInfo2);

// card 3
// Create card div
const cardDiv3 = document.createElement('div');
cardDiv3.classList.add('card3', 'card');

// Create card image div
const cardImgDiv3 = document.createElement('div');
cardImgDiv3.classList.add('card-img');

// Create image element
const imageElement3 = document.createElement('img');
imageElement3.src = '/imgs/Snapshoot Portfolio22.png';
imageElement3.alt = 'Facebook 360';

// Append image element to card image div
cardImgDiv3.appendChild(imageElement3);

// Create card info div
const cardInfoDiv3 = document.createElement('div');
cardInfoDiv3.classList.add('card-info');

// Create heading element
const headingElement3 = document.createElement('h2');
headingElement3.textContent = 'Facebook 360';

// Create first list ul element
const firstListUl3 = document.createElement('ul');
firstListUl3.classList.add('first_list');

// Create list items for first list
const listItem13 = document.createElement('li');
listItem13.textContent = 'CANOPY';

const listItem23 = document.createElement('li');
listItem23.classList.add('dim_color_text');
listItem23.innerHTML = '&#9679; Back End Dev';

const listItem33 = document.createElement('li');
listItem33.classList.add('dim_color_text');
listItem33.innerHTML = '&#9679; 2015';

// Append list items to first list ul
firstListUl3.appendChild(listItem13);
firstListUl3.appendChild(listItem23);
firstListUl3.appendChild(listItem33);

// Create paragraph element
const paragraphElement3 = document.createElement('p');
paragraphElement3.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';

// Create second list ul element
const secondListUl3 = document.createElement('ul');
secondListUl3.classList.add('second_list');

// Create list buttons for second list
const button13 = document.createElement('button');
button13.classList.add('second_listbtn');
button13.textContent = 'html';

const button23 = document.createElement('button');
button23.classList.add('second_listbtn');
button23.textContent = 'css';

const button33 = document.createElement('button');
button33.classList.add('second_listbtn');
button33.textContent = 'Ruby on rails';

const button43 = document.createElement('button');
button43.classList.add('second_listbtn');
button43.textContent = 'javascript';

// Append list buttons to second list ul
secondListUl3.appendChild(button13);
secondListUl3.appendChild(button23);
secondListUl3.appendChild(button33);
secondListUl3.appendChild(button43);

// Create see project button
const seeProjectBtn3 = document.createElement('button');
seeProjectBtn3.classList.add('see_project');
seeProjectBtn3.id = 'cardBtn3';
seeProjectBtn3.textContent = 'See project';

// Append elements to card info div
cardInfoDiv3.appendChild(headingElement3);
cardInfoDiv3.appendChild(firstListUl3);
cardInfoDiv3.appendChild(paragraphElement3);
cardInfoDiv3.appendChild(secondListUl3);
cardInfoDiv3.appendChild(seeProjectBtn3);

// Append card image div and card info div to card div
cardDiv3.appendChild(cardImgDiv3);
cardDiv3.appendChild(cardInfoDiv3);

// card 4

// Create the main container div
const cardDiv4 = document.createElement('div');
cardDiv4.classList.add('card4', 'card');

// Create the card image div and image element
const cardImgDiv4 = document.createElement('div');
cardImgDiv4.classList.add('card-img');
const cardImg4 = document.createElement('img');
cardImg4.src = '/imgs/Snapshoot Portfolio(1).png';
cardImg4.alt = 'Multi-Post Stories';

// Append the image element to the image div, and the image div to the main container div
cardImgDiv4.appendChild(cardImg4);
cardDiv4.appendChild(cardImgDiv4);

// Create the card info div
const cardInfoDiv4 = document.createElement('div');
cardInfoDiv4.classList.add('card-info');

// Create the heading element and set its text content
const heading4 = document.createElement('h2');
heading4.textContent = 'Multi-Post Stories';

// Create the first list element and its items
const firstList4 = document.createElement('ul');
firstList4.classList.add('first_list');
const listItem14 = document.createElement('li');
listItem14.textContent = 'CANOPY';
const listItem24 = document.createElement('li');
listItem24.classList.add('dim_color_text');
listItem24.innerHTML = '&#9679; Back End Dev';
const listItem34 = document.createElement('li');
listItem34.classList.add('dim_color_text');
listItem34.innerHTML = '&#9679; 2015';

// Append the list items to the first list
firstList4.appendChild(listItem14);
firstList4.appendChild(listItem24);
firstList4.appendChild(listItem34);

// Create the paragraph element and set its text content
const paragraph4 = document.createElement('p');
paragraph4.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';

// Create the second list element and its buttons
const secondList4 = document.createElement('ul');
secondList4.classList.add('second_list');
const button14 = document.createElement('button');
button14.classList.add('second_listbtn');
button14.textContent = 'html';
const button24 = document.createElement('button');
button24.classList.add('second_listbtn');
button24.textContent = 'css';
const button34 = document.createElement('button');
button34.classList.add('second_listbtn');
button34.textContent = 'Ruby on rails';
const button44 = document.createElement('button');
button44.classList.add('second_listbtn');
button44.textContent = 'javascript';

// Append the buttons to the second list
secondList4.appendChild(button14);
secondList4.appendChild(button24);
secondList4.appendChild(button34);
secondList4.appendChild(button44);

// Create the "See project" button
const seeProjectBtn4 = document.createElement('button');
seeProjectBtn4.classList.add('see_project');
seeProjectBtn4.id = 'cardBtn4';
seeProjectBtn4.textContent = 'See project';

// Append all the elements to the card info div
cardInfoDiv4.appendChild(heading4);
cardInfoDiv4.appendChild(firstList4);
cardInfoDiv4.appendChild(paragraph4);
cardInfoDiv4.appendChild(secondList4);
cardInfoDiv4.appendChild(seeProjectBtn4);

// Append the card info div to the main container div
cardDiv4.appendChild(cardInfoDiv4);

// appending childs

MainSection.append(cardContainer1, cardContainer2, cardDiv3, cardDiv4);

// appending popup

// Create the popup window elements dynamically
const popupWindowpop = document.createElement('div');
popupWindowpop.classList.add('popupwindow');

const popupElementpop = document.createElement('div');
popupElementpop.classList.add('popupwindowElement');

const closeButtonpop = document.createElement('button');
closeButtonpop.classList.add('closingBtn');
closeButtonpop.innerHTML = '&times;';

const headingpop = document.createElement('h2');
headingpop.textContent = 'Tonic';

const firstListpop = document.createElement('ul');
firstListpop.classList.add('first_list');

const listItem1pop = document.createElement('li');
listItem1pop.textContent = 'CANOPY';

const listItem2pop = document.createElement('li');
listItem2pop.classList.add('dim_color_text');
listItem2pop.innerHTML = '&#9679; Back End Dev';

const listItem3pop = document.createElement('li');
listItem3pop.classList.add('dim_color_text');
listItem3pop.innerHTML = '&#9679; 2015';

const imagepop = document.createElement('img');
imagepop.src = '/imgs/Snapshoot Portfolio(2).png';
imagepop.alt = 'Tonic';

const desktopPopuppop = document.createElement('div');
desktopPopuppop.classList.add('desktopPopup');

const paragraphpop = document.createElement('p');
paragraphpop.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis commodi tenetur nam molestiae magni, quam eligendi quisquam dolore, eaque quo dolor hic doloremque, dolorum voluptatibus asperiores libero quia facere ducimus quaerat inventore.';

const ulspop = document.createElement('div');
ulspop.classList.add('uls');

const secondListpop = document.createElement('ul');
secondListpop.classList.add('second_list');

const secondListBtn1pop = document.createElement('button');
secondListBtn1pop.classList.add('second_listbtn');
secondListBtn1pop.textContent = 'html';

const secondListBtn2pop = document.createElement('button');
secondListBtn2pop.classList.add('second_listbtn');
secondListBtn2pop.textContent = 'css';

const secondListBtn3pop = document.createElement('button');
secondListBtn3pop.classList.add('second_listbtn');
secondListBtn3pop.textContent = 'javascript';

const liveProjectspop = document.createElement('ul');
liveProjectspop.classList.add('Live_project');

const liveProjectBtn1pop = document.createElement('button');
liveProjectBtn1pop.classList.add('live_project_btn');
const liveProjectLink1pop = document.createElement('a');
liveProjectLink1pop.href = 'https://mustafasamishirzad.github.io/portfoliowebsite2/';
liveProjectLink1pop.textContent = 'See Live';
const liveProjectImg1pop = document.createElement('img');
liveProjectImg1pop.src = 'imgs/Icon - Export.svg';
liveProjectImg1pop.alt = '';

const liveProjectBtn2pop = document.createElement('button');
liveProjectBtn2pop.classList.add('live_project_btn');
const liveProjectLink2pop = document.createElement('a');
liveProjectLink2pop.href = 'https://github.com/MustafaSamiShirzad/Portifoliowebsite2.git';
liveProjectLink2pop.textContent = 'See Source';
const liveProjectImg2pop = document.createElement('img');
liveProjectImg2pop.src = 'imgs/Icon -GitHub.svg';
liveProjectImg2pop.alt = 'icon';

// Append the elements to the DOM hierarchy
popupWindowpop.appendChild(popupElementpop);
popupElementpop.appendChild(closeButtonpop);
popupElementpop.appendChild(headingpop);
popupElementpop.appendChild(firstListpop);
firstListpop.appendChild(listItem1pop);
firstListpop.appendChild(listItem2pop);
firstListpop.appendChild(listItem3pop);
popupElementpop.appendChild(imagepop);
popupElementpop.appendChild(desktopPopuppop);
desktopPopuppop.appendChild(paragraphpop);
desktopPopuppop.appendChild(ulspop);
ulspop.appendChild(secondListpop);
secondListpop.appendChild(secondListBtn1pop);
secondListpop.appendChild(secondListBtn2pop);
secondListpop.appendChild(secondListBtn3pop);
ulspop.appendChild(liveProjectspop);
liveProjectspop.appendChild(liveProjectBtn1pop);
liveProjectBtn1pop.appendChild(liveProjectLink1pop);
liveProjectBtn1pop.appendChild(liveProjectImg1pop);
liveProjectspop.appendChild(liveProjectBtn2pop);
liveProjectBtn2pop.appendChild(liveProjectLink2pop);
liveProjectBtn2pop.appendChild(liveProjectImg2pop);

// Append the popup window to the document body
document.body.appendChild(popupWindowpop);

// popup starts here
const popupWindow = document.querySelector('.popupwindow');
const popupWindowElement = document.querySelector('.popupwindowElement');
const closebtn = document.querySelector('.closingBtn');

menuHamburger.addEventListener('click', () => {
  navMenuMobile.style.display = 'flex';
  navMainBar.style.display = 'none';
});

for (let i = 0; i < navMenuOptions.length; i += 1) {
  navMenuOptions[i].addEventListener('click', () => {
    navMenuMobile.style.display = 'none';
    navMainBar.style.display = 'flex';
  });
}

navClosedBtn.addEventListener('click', () => {
  navMenuMobile.style.display = 'none';
  navMainBar.style.display = 'flex';
});

const seeProject = document.querySelectorAll('.see_project');
let i = 0;
seeProject.forEach((button) => {
  button.addEventListener('click', () => {
    popupWindow.style.display = 'flex';
    popupWindowElement.style.display = 'flex';
    document.querySelector('.form_button').style.display = 'none';
    document.querySelector('.frame-skill').style.display = 'none';
    headingpop.textContent = obj.names[i];
    imagepop.src = obj.imgs[i];
    i += 1;
  });
});

closebtn.addEventListener('click', () => {
  popupWindow.style.display = 'none';
  popupWindowElement.style.display = 'none';
  document.querySelector('.form_button').style.display = 'block';
  document.querySelector('.frame-skill').style.display = 'flex';
});

const userEmailBox = document.getElementById('EmailValidation');

document.querySelector("#FormValidation").addEventListener("submit",(e)=>{
  // event.preventDefault();
  const emailValidation = userEmailBox.value.toLowerCase();
  if (userEmailBox.value !== emailValidation) {
    event.preventDefault();
    document.querySelector('.ErrorCounter').innerHTML = 'Please enter a valid email, it should be in lowercase only';
  }  
})