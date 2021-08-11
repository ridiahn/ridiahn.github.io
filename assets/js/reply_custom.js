window.onload = function(){
  const _iframe = document.getElementById("utterances-comments").getElementsByTagName("iframe")[0];
  let cs1 = _iframe.contentWindow.document.querySelector("h1.timeline-header");
  cs1.style.paddingLeft = "0";
  console.log("연결은 됌 스타일적용은?");
}