const navClosedBtn = document.querySelector('.nav_closed_btn');
const navMenuMobile = document.querySelector('.closing_menu_button');
const menuHamburger = document.querySelector('.menu');
const navMainBar = document.querySelector('.nav_main_bar');
const navMenuOptions = document.querySelectorAll('.nav_menu_options');
const projectSection = document.querySelector('.projectSection');

contentCards = {
  name: [1,2,3,4], description: [1,2,3,4], technologies: [1,2,3,4], languages: [1,2,3]
}

for (let i=0;i<4;i++) {
  const mainWorks = document.createElement('section');
  mainWorks.className = 'works';
  mainWorks.id = 'work_card_section';
  const card1 = document.createElement('div');
  mainWorks.className = 'card1 card';
  const cardImg = document.createElement('div');
  cardImg.className = 'card-img';
  const cardImgItem = document.createElement('img');
  cardImgItem.alt = 'Tonic';
  const cardInfo = document.createElement('div');
  cardImgItem.className = 'card-info';
  const cardInfoH2 = document.createElement('h2');
  const firstList = document.createElement('ul');
  cardImgItem.className = 'first_list';
  projectSection.appendChild(mainWorks);
  mainWorks.appendChild(card1);
  card1.appendChild(cardImg);
  cardImg.appendChild(cardImgItem);
  card1.appendChild(cardInfo);
  cardInfo.appendChild(cardInfoH2);
  cardInfo.appendChild(firstList);

  for(let j=0;j<3;j++) { 
    const firtListLi = document.createElement('li');
    firtListLi.innerText = contentCards.technologies[j];//object.array[i]' --> CANOPY
    if(i>0) {
      firtListLi.className = 'dim_color_text';
    }
    firstList.appendChild(firtListLi);
  }
  const pcardInfo = document.createElement('p');
  pcardInfo.innerText = contentCards.decription[i];//object.array2[i]' --> A daily selection of privately...
  const secondList = document.createElement('ul');
  secondList.className = 'second_list';
  cardInfo.appendChild(pcardInfo);
  cardInfo.appendChild(secondList);
  for(let k=0;i<3;k++) { 
    const secondListbtn = document.createElement('button');
    secondListbtn.innerText = contentCards.languages[k];//object.array3[i]' --> CANOPY
    secondListbtn.className = 'second_listbtn';
    secondList.appendChild(secondListbtn);
  }
  const seeProject = document.createElement('button');
  seeProject.innerText = 'See project';
  secondListbtn.className = 'see_project';
  cardInfo.appendChild(seeProject);
}


// popup starts here
let popupWindow = document.querySelector(".popupwindow");
let popupWindowElement = document.querySelector(".popupwindowElement");
let closebtn = document.querySelector(".closingBtn");

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

let seeProject = document.querySelectorAll(".see_project");
seeProject.forEach((button)=>{
  button.addEventListener('click',()=>{
    popupWindow.style.display="flex";
    popupWindowElement.style.display= "flex";
    console.log(button);
    
  })
})


closebtn.addEventListener("click",()=>{
  popupWindow.style.display="none";
 popupWindowElement.style.display= "none";

})




