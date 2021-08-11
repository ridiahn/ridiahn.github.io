window.onload = function(){
  const _iframe = document.getElementById("utterances-comments").getElementsByTagName("iframe")[0];

  _iframe.onload = function(){
    alert("연결");
    let cs1 = document.querySelector("h1.timeline-header");
    cs1.style.paddingLeft = "0";
  }
}