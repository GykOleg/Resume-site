const bodyElement = document.body;
const bageObject = bodyElement.querySelector(".bage__body");
const buttonOpen = bodyElement.querySelector(".suit__bage");
const skills = bodyElement.querySelector(".skills");
const tech = bodyElement.querySelector(".tech");
const skillsC = bodyElement.querySelector(".skills__cover");
const techC = bodyElement.querySelector(".tech__cover");

let showBage = () => bageObject.classList.add('open');
let closeBage = () => bageObject.classList.remove('open');
let SkillBox = () => {
   if (skillsC.classList.contains('open-box')) {
      skillsC.classList.remove('open-box');
   } else {
      skillsC.classList.add('open-box')
   }
};
let TechBox = () => {
   if (techC.classList.contains('open-box')) {
      techC.classList.remove('open-box');
   } else {
      techC.classList.add('open-box')
   }
};

buttonOpen.addEventListener("click", showBage);
bageObject.addEventListener("click", closeBage);
skills.addEventListener("click", SkillBox);
tech.addEventListener("click", TechBox);
