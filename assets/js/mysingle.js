let relatedList = document.getElementsByClassName("page__related")[0];
let relatedItems = relatedList.querySelectorAll(".grid__item");
let currentItem = document.location.pathname;

function remove_redupItems(){
  let newList = new Array;
  Array.from(relatedItems).forEach((el, index) => {
    let check_el = el.querySelector("h2 > a").getAttribute("href");
    newList[index] = check_el;
  });

  // removeIdex = new Array; 
  newList.forEach((el, index) => {
    if(el == currentItem ){
      relatedItems[index].remove();
    }
  });
} remove_redupItems();