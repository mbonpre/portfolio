(function(){
var mq=matchMedia("(max-width:55.99rem)");
if(mq.matches)document.querySelectorAll("details.mobclose").forEach(function(d){d.open=false});
var w=document.getElementById("wa"),b=document.getElementById("mbwa");
if(w&&b&&w.getAttribute("href")&&w.getAttribute("href")!=="#contact")b.href=w.href;
function lire(){
  if(!mq.matches)return;
  document.querySelectorAll(".card .ctext p:not(.role)").forEach(function(p){
    if(p.dataset.rm)return;p.dataset.rm="1";p.classList.add("clamp");
    if(p.scrollHeight<=p.clientHeight+2){p.classList.remove("clamp");return}
    var bt=document.createElement("button");bt.type="button";bt.className="readmore";bt.textContent="Lire la suite";bt.setAttribute("aria-expanded","false");
    bt.onclick=function(){var c=p.classList.toggle("clamp");bt.textContent=c?"Lire la suite":"Réduire";bt.setAttribute("aria-expanded",String(!c))};
    p.after(bt)})}
if(document.readyState==="complete")lire();else addEventListener("load",lire);
})();

(function(){
if(!matchMedia("(max-width:55.99rem)").matches)return;
[".training-steps",".fgrid",".packs"].forEach(function(s){
  var c=document.querySelector(s);
  if(!c||(c.previousElementSibling&&c.previousElementSibling.classList.contains("swipehint")))return;
  var h=document.createElement("p");h.className="swipehint";
  h.innerHTML='Faites glisser pour voir la suite <i aria-hidden="true">\u2192</i>';
  c.parentNode.insertBefore(h,c);
  c.addEventListener("scroll",function f(){if(c.scrollLeft>24){h.classList.add("gone");c.removeEventListener("scroll",f)}},{passive:true})})
})();
