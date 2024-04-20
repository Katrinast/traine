/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const refs = {
//   buttonSwapMe: document.querySelector("#swapButton"),
//   inputLeft: document.querySelector("#leftSwapInput"),
//   inputRight: document.querySelector("#rightSwapInput"),
// }

// refs.buttonSwapMe.addEventListener("click", onButtonSwapMeClick);

// function onButtonSwapMeClick(event) {
//   const valueLeft = refs.inputLeft.value;
//   refs.inputLeft.value = refs.inputRight.value;
//   refs.inputRight.value = valueLeft;
// }

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const refs = {
//   textTitle: document.querySelector("#taskTitle"),
//   buttonPassword: document.querySelector("#passwordButton"),
// }

// refs.buttonPassword.addEventListener("click", onPasswordButton);

// function onButtonSwapMeClick(event) {

//   if (refs.buttonPassword.textContent === "Приховати") {
//     refs.textTitle.style.display = "none";
//   }

//   refs.textTitle.style.display = "block";

// }

/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const buttonDouble = document.querySelector("#double");
// const items = document.querySelectorAll(".listItem");
// buttonDouble.addEventListener("click", onButtonDoubleClick);
// function onButtonDoubleClick(event) {
//   items.forEach(item => {
//     const value = Number.parseInt(item.textContent);
//     item.textContent = `${value * 2} px`;
//   });
// }

// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.
//

const refs = {
  resultbutton: document.querySelector("#resultButton"),
  statList: document.querySelector(".statList"),
  resultSection: document.querySelector("#resultSection"),
}
refs.resultbutton.addEventListener("click",)
refs.statList.addEventListener("click", onStatList);
let sum = 0;
let clickNumber = {};
function onStatList(event) {
  const number = parseInt(event.target.daset.number);
  sum += number;
  clickNumber[event.target.textContent] = () + 1;
}