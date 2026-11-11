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
