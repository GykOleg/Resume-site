$(function () {
   const bodyElement = document.body;
   const bageObject = bodyElement.querySelector(".bage__body");
   const buttonOpen = bodyElement.querySelector(".suit__bage");
   const box = bodyElement.querySelector(".box__body");
   const cover = bodyElement.querySelector(".box__cover");

   let showBage = () => bageObject.classList.add('open');
   let closeBage = () => bageObject.classList.remove('open');
   let OpenCloseBox = () => {
      if (cover.classList.contains('open-cover')) {
         cover.classList.remove('open-cover');
         box.classList.remove('open-box-text');
      } else {
         cover.classList.add('open-cover');
         box.classList.add('open-box-text');
      }
   };

   buttonOpen.addEventListener("click", showBage);
   bageObject.addEventListener("click", closeBage);
   box.addEventListener("click", OpenCloseBox);
});