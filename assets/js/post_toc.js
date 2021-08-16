/* _variables.scss -> $medium: 768px;*/
let bp = 768;
let rightSide = document.getElementsByClassName("sidebar__right")[0];
let page_inner =  document.getElementsByClassName("page__inner-wrap")[0];
let pageHeader = page_inner.getElementsByTagName("header")[0];

window.onload = function(){
  postioningToc();
}

window.onresize = function(){
  postioningToc();
};

function postioningToc(){
  var screenWidth = window.innerWidth;
  if( screenWidth <= bp ){
    /*tablet screen*/
    pageHeader.append(rightSide);
  } else {
    /*desktop screen*/
    page_inner.append(rightSide);
  }
}
