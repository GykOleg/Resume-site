const bodyElement = document.body;
const bageObject = bodyElement.querySelector(".bage__body");
const buttonOpen = bodyElement.querySelector(".suit__bage");
const skills = bodyElement.querySelector(".skills");
const tech = bodyElement.querySelector(".tech");
const skillsC = bodyElement.querySelector(".skills__cover");
const techC = bodyElement.querySelector(".tech__cover");

let showBage = () => bageObject.classList.add('open');
let closeBage = () => bageObject.classList.remove('open');
let openSkillBox = () => skillsC.classList.add('open-box');
let closeSkillBox = () => skillsC.classList.remove('open-box');
let openTechBox = () => techC.classList.add('open-box');
let closeTechBox = () => techC.classList.remove('open-box');

buttonOpen.addEventListener("click", showBage);
bageObject.addEventListener("click", closeBage);
skills.addEventListener("mouseover", openSkillBox);
skills.addEventListener("mouseout", closeSkillBox);
tech.addEventListener("mouseover", openTechBox);
tech.addEventListener("mouseout", closeTechBox);