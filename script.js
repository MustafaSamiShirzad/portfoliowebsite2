const navClosedBtn = document.querySelector('.nav_closed_btn');
const navMenuMobile = document.querySelector('.closing_menu_button');
const menuHamburger = document.querySelector('.menu');
const navMainBar = document.querySelector('.nav_main_bar');
const navMenuOptions = document.querySelectorAll('.nav_menu_options');
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
let comment ={
// // new code from here
// let popWindow = document.createElement('div');
// let popWindowElements = document.createElement('div');
// // pop window elements
// popWindow.className = 'popWindow';
// popWindowElements.className = 'popWindowElements';
// let obj1 = {
//   title:"Tonic",
//   cardDetail:["CANOPY","&#9679; Back End Dev","&#9679; 2015"],
//   img:"/imgs/Snapshoot Portfolio(2).png",
//   details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
//   btn:['HTML','CSS','JavaScript'],
//   seeLive:"https://mustafasamishirzad.github.io/portfoliowebsite2/",
//   seeSource:"https://github.com/MustafaSamiShirzad/Portifoliowebsite2.git",
// }
// let obj2 = {
//   title:"Multi-Post Stories",
//   cardDetail:["CANOPY","&#9679; Back End Dev","&#9679; 2015"],
//   img:"/imgs/Snapshoot Portfolio(3).png",
//   details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
//   btn:['HTML','CSS','JavaScript'],
//   seeLive:"https://mustafasamishirzad.github.io/portfoliowebsite2/",
//   seeSource:"https://github.com/MustafaSamiShirzad/Portifoliowebsite2.git",
// }
// let obj3 = {
//   title:"Tonic",
//   cardDetail:["CANOPY","&#9679; Back End Dev","&#9679; 2015"],
//   img:"/imgs/Snapshoot Portfolio22.png",
//   details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
//   btn:['HTML','CSS','JavaScript'],
//   seeLive:"https://mustafasamishirzad.github.io/portfoliowebsite2/",
//   seeSource:"https://github.com/MustafaSamiShirzad/Portifoliowebsite2.git",
// }
// let obj4 = {
//   title:"Multi-Post Stories",
//   cardDetail:["CANOPY","&#9679; Back End Dev","&#9679; 2015"],
//   img:"/imgs/Snapshoot Portfolio(1).png",
//   details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
//   btn:['HTML','CSS','JavaScript'],
//   seeLive:"https://mustafasamishirzad.github.io/portfoliowebsite2/",
//   seeSource:"https://github.com/MustafaSamiShirzad/Portifoliowebsite2.git",
// }
// // creating divs 
// let divHeading = document.createElement("div");
// // let divExperience = document.createElement("div");
// // let divImg = document.createElement("div");
// // let divDetails = document.createElement("div");
// // let divLangSkills = document.createElement("div");
// // let divAccess = document.createElement("div");

// // targeting btn see project one;
// let btnOne = document.querySelector("#cardBtn1");
// let btnTwo = document.querySelector("#cardBtn2");
// let btnThree = document.querySelector("#cardBtn3");
// let btnFour = document.querySelector("#cardBtn4");
// let crossBtn = document.createElement("button");

// // generatirng here 1
//  // creating image tag
//  crossBtn.innerText = "x";
//  crossBtn.className= "crossingBtn";
//  let cardImg = document.createElement("img");
//  cardImg.src=obj1.img;
//  cardImg.className='card-img'
//    let heading = document.createElement("h2");
//    // created the ul
//    let cardUl = document.createElement("ul"); 
//    cardUl.className="first_list";
//    // created the list
//    let cardLiOne = document.createElement("li");
//    cardLiOne.innerText = obj1.cardDetail[0];
//    let cardLiTwo = document.createElement("li");
//    cardLiTwo.className="dim_color_text";
//    cardLiTwo.innerHTML = obj1.cardDetail[1];
//    let cardLiThree = document.createElement("li");
//    cardLiThree.className="dim_color_text";
//    cardLiThree.innerHTML= obj1.cardDetail[2];
//    cardUl.append(cardLiOne,cardLiTwo,cardLiThree);
//    // creating a paragraph
//    let cardP = document.createElement("p");
//   cardP.innerText=obj1.details;
//    // creating a another ul 
//    let btnUl= document.createElement("ul");
//    btnUl.className="second_list";
//    //creating buttons
//    let btn1= document.createElement("button");
//    btn1.innerText=obj1.btn[0];
//    let btn2= document.createElement("button");
//    btn2.innerText=obj1.btn[1];
//    let btn3= document.createElement("button"); 
//     btn3.innerText=obj1.btn[2];
//    btn1.className=btn2.className=btn3.className="second_listbtn" ;
//    btnUl.append(btn1,btn2,btn3);
//    // added all the details needed for ul
//    let btnAccess = document.createElement("ul");
//    btnAccess.className="btnaccess";
//    let btnaccessOne = document.createElement("button");
//    let btnaccessTwo = document.createElement("button");
//    btnaccessOne.className=btnaccessTwo.className = "btnaccessbtns";
//    btnaccessOne.innerHTML="see project &#x293B;";
//    btnaccessOne.setAttribute('src','google.com');
//    btnaccessTwo.innerText="visit us";
//    btnAccess.append(btnaccessOne,btnaccessTwo);
//    let divLine = document.createElement("div");
//    divLine.className="lineforpop"
//    heading.innerText = obj1.title;
//    divHeading.className="card-info";
//    divHeading.append(heading);
//    popWindowElements.append(divHeading);
//    popWindowElements.append(crossBtn,cardUl,cardImg,cardP,btnUl,divLine,btnAccess);
//   //  end here 
//   // generatirng here 2
//  // creating image tag
//  crossBtn.innerText = "x";
//  crossBtn.className= "crossingBtn";
//  let cardImg2 = document.createElement("img");
//  cardImg2.src=obj2.img;
//  cardImg2.className='card-img'
//    let heading2 = document.createElement("h2");
//    // created the ul
//    let cardUl2 = document.createElement("ul"); 
//    cardUl2.className="first_list";
//    // created the list
//    let cardLiOne2 = document.createElement("li");
//    cardLiOne2.innerText = obj2.cardDetail[0];
//    let cardLiTwo2 = document.createElement("li");
//    cardLiTwo2.className="dim_color_text";
//    cardLiTwo2.innerHTML = obj2.cardDetail[1];
//    let cardLiThree2 = document.createElement("li");
//    cardLiThree2.className="dim_color_text";
//    cardLiThree2.innerHTML= obj2.cardDetail[2];
//    cardUl2.append(cardLiOne2,cardLiTwo2,cardLiThree2);
//    // creating a paragraph
//    let cardP2 = document.createElement("p");
//   cardP2.innerText=obj2.details;
//    // creating a another ul 
//    let btnUl2= document.createElement("ul");
//    btnUl2.className="second_list";
//    //creating buttons
//    let btn11= document.createElement("button");
//    btn11.innerText=obj2.btn[0];
//    let btn21= document.createElement("button");
//    btn21.innerText=obj2.btn[1];
//    let btn31= document.createElement("button"); 
//     btn31.innerText=obj2.btn[2];
//    btn11.className=btn21.className=btn3.className="second_listbtn" ;
//    btnUl2.append(btn11,btn21,btn31);
//    // added all the details needed for ul
//    let btnAccess2 = document.createElement("ul");
//    btnAccess2.className="btnaccess";
//    let btnaccessOne2 = document.createElement("button");
//    let btnaccessTwo2= document.createElement("button");
//    btnaccessOne2.className=btnaccessTwo2.className = "btnaccessbtns";
//    btnaccessOne2.innerHTML="see project &#x293B;";
//    btnaccessOne2.setAttribute('src','google.com');
//    btnaccessTwo2.innerText="visit us";
//    btnAccess2.append(btnaccessOne2,btnaccessTwo2);
//    let divLine2 = document.createElement("div");
//    divLine2.className="lineforpop"
//    heading2.innerText = obj2.title;
//    divHeading.className="card-info";
//    divHeading.append(heading2);
//    popWindowElements.append(divHeading);
//    popWindowElements.append(crossBtn,cardUl2,cardImg2,cardP2,btnUl2,divLine2,btnAccess2);
//   //  end here 
//   // generatirng here 3
//  // creating image tag
//  crossBtn.innerText = "x";
//  crossBtn.className= "crossingBtn";
//  let cardImg3 = document.createElement("img");
//  cardImg3.src=obj3.img;
//  cardImg3.className='card-img'
//    let heading3 = document.createElement("h2");
//    // created the ul
//    let cardUl3= document.createElement("ul"); 
//    cardUl3.className="first_list";
//    // created the list
//    let cardLiOne3 = document.createElement("li");
//    cardLiOne3.innerText = obj3.cardDetail[0];
//    let cardLiTwo3 = document.createElement("li");
//    cardLiTwo3.className="dim_color_text";
//    cardLiTwo3.innerHTML = obj3.cardDetail[1];
//    let cardLiThree3 = document.createElement("li");
//    cardLiThree3.className="dim_color_text";
//    cardLiThree3.innerHTML= obj3.cardDetail[2];
//    cardUl3.append(cardLiOne3,cardLiTwo3,cardLiThree3);
//    // creating a paragraph
//    let cardP3 = document.createElement("p");
//   cardP3.innerText=obj3.details;
//    // creating a another ul 
//    let btnUl3= document.createElement("ul");
//    btnUl3.className="second_list";
//    //creating buttons
//    let btn13= document.createElement("button");
//    btn13.innerText=obj3.btn[0];
//    let btn23= document.createElement("button");
//    btn23.innerText=obj3.btn[1];
//    let btn33= document.createElement("button"); 
//     btn33.innerText=obj3.btn[2];
//    btn13.className=btn23.className=btn33.className="second_listbtn" ;
//    btnUl.append(btn13,btn23,btn33);
//    // added all the details needed for ul
//    let btnAccess3 = document.createElement("ul");
//    btnAccess3.className="btnaccess";
//    let btnaccessOne3 = document.createElement("button");
//    let btnaccessTwo3 = document.createElement("button");
//    btnaccessOne3.className=btnaccessTwo3.className = "btnaccessbtns";
//    btnaccessOne3.innerHTML="see project &#x293B;";
//    btnaccessOne3.setAttribute('src','google.com');
//    btnaccessTwo3.innerText="visit us";
//    btnAccess.append(btnaccessOne,btnaccessTwo);
//    let divLine3 = document.createElement("div");
//    divLine3.className="lineforpop"
//    heading3.innerText = obj3.title;
//    divHeading.className="card-info";
//    divHeading.append(heading);
//    popWindowElements.append(divHeading);
//    popWindowElements.append(crossBtn,cardUl3,cardImg3,cardP3,btnUl3,divLine3,btnAccess3);
//   //  end here 
//   // generatirng here 4
//  // creating image tag
//  crossBtn.innerText = "x";
//  crossBtn.className= "crossingBtn";
//  let cardImg4 = document.createElement("img");
//  cardImg4.src=obj4.img;
//  cardImg4.className='card-img'
//    let heading4 = document.createElement("h2");
//    // created the ul
//    let cardUl4 = document.createElement("ul"); 
//    cardUl4.className="first_list";
//    // created the list
//    let cardLiOne4 = document.createElement("li");
//    cardLiOne4.innerText = obj4.cardDetail[0];
//    let cardLiTwo4 = document.createElement("li");
//    cardLiTwo4.className="dim_color_text";
//    cardLiTwo4.innerHTML = obj4.cardDetail[1];
//    let cardLiThree4 = document.createElement("li");
//    cardLiThree4.className="dim_color_text";
//    cardLiThree4.innerHTML= obj4.cardDetail[2];
//    cardUl4.append(cardLiOne4,cardLiTwo4,cardLiThree4);
//    // creating a paragraph
//    let cardP4 = document.createElement("p");
//   cardP4.innerText=obj4.details;
//    // creating a another ul 
//    let btnUl4= document.createElement("ul");
//    btnUl4.className="second_list";
//    //creating buttons
//    let btn14= document.createElement("button");
//    btn14.innerText=obj4.btn[0];
//    let btn24= document.createElement("button");
//    btn24.innerText=obj4.btn[1];
//    let btn34= document.createElement("button"); 
//     btn34.innerText=obj4.btn[2];
//    btn14.className=btn24.className=btn34.className="second_listbtn" ;
//    btnUl4.append(btn14,btn24,btn34);
//    // added all the details needed for ul
//    let btnAccess4 = document.createElement("ul");
//    btnAccess4.className="btnaccess";
//    let btnaccessOne4 = document.createElement("button");
//    let btnaccessTwo4 = document.createElement("button");
//    btnaccessOne4.className=btnaccessTwo4.className = "btnaccessbtns";
//    btnaccessOne4.innerHTML="see project &#x293B;";
//    btnaccessOne4.setAttribute('src','google.com');
//    btnaccessTwo4.innerText="visit us";
//    btnAccess4.append(btnaccessOne4,btnaccessTwo4);
//    let divLine4 = document.createElement("div");
//    divLine4.className="lineforpop"
//    heading4.innerText = obj4.title;
//    divHeading.className="card-info";
//    divHeading.append(heading4);
//    popWindowElements.append(divHeading);
//    popWindowElements.append(crossBtn,cardUl4,cardImg4,cardP4,btnUl4,divLine4,btnAccess4);
//   //  end here 


// btnOne.addEventListener('click',()=>{
//       popWindow.style.display="flex";
//       popWindowElements.style.display="flex";
//       popWindow.append(popWindowElements);
// });
// btnTwo.addEventListener('click',()=>{
//       popWindow.style.display="flex";
//       popWindowElements.style.display="flex";
//       popWindow.append(popWindowElements);
// });
// btnThree.addEventListener('click',()=>{
//       popWindow.style.display="flex";
//       popWindowElements.style.display="flex";
//       popWindow.append(popWindowElements);
// });
// btnFour.addEventListener('click',()=>{
//       popWindow.style.display="flex";
//       popWindowElements.style.display="flex";
//       popWindow.append(popWindowElements);
// });
// crossBtn.addEventListener("click",()=>{
//   console.log("im clicked");
  
//   popWindowElements.style.display="none";
//   popWindow.style.display="none";
// });

// popWindow.append(popWindowElements);
// document.body.append(popWindow);

}

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




