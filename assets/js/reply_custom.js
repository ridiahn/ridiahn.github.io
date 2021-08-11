window.onload = function(){
  // alert("연결성공");
  const _iframe = document.getElementsByClassName('utterances-frame')[0];

  _iframe.addEventListener('load', e => {  
    let cs1 = document.querySelector("h1.timeline-header");
    cs1.style.paddingLeft = "0";
  })
}