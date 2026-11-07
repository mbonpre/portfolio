(function(){
var root=document.documentElement,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
try{var t=localStorage.getItem("theme");if(t)root.setAttribute("data-theme",t)}catch(e){}
document.getElementById("theme").addEventListener("click",function(){
  var d=root.getAttribute("data-theme")==="dark"||(!root.getAttribute("data-theme")&&!matchMedia("(prefers-color-scheme:light)").matches);
  var n=d?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem("theme",n)}catch(e){}
});

var menuToggle=document.getElementById("menuToggle"),mainNav=document.getElementById("mainNav"),mainHeader=document.querySelector(".nav");
if(menuToggle&&mainNav){
  menuToggle.addEventListener("click",function(){
    var open=mainHeader.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded",String(open));
    menuToggle.setAttribute("aria-label",open?"Fermer le menu":"Ouvrir le menu");
  });
  mainNav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){
    mainHeader.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded","false");
    menuToggle.setAttribute("aria-label","Ouvrir le menu");
  })});
}

var u="mbonkemouprecieux",d="gmail.com",nu="2290162447762";
document.getElementById("mail").href="mailto:"+u+"@"+d+"?subject="+encodeURIComponent("Proposition de mission");
var tl=document.getElementById("tel");tl.href="tel:+"+nu;tl.textContent="Appeler · 01 62 44 77 62";
document.getElementById("wa").href="https://wa.me/"+nu;

/* apparition au défilement */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});

/* halo qui suit le curseur */
document.querySelectorAll(".card,.tile").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")})});

/* carrousels */
document.querySelectorAll(".car").forEach(function(c){
  var t=c.querySelector(".track"),f=t.children,n=f.length,ct=c.querySelector(".cnt");
  if(n<2)return;
  function w(){return f[0].getBoundingClientRect().width}
  t.addEventListener("scroll",function(){ct.textContent=(Math.round(t.scrollLeft/w())+1)+" / "+n},{passive:true});
  function go(k){t.scrollBy({left:k*w(),behavior:rm?"auto":"smooth"})}
  c.querySelectorAll("[data-d]").forEach(function(b){b.onclick=function(){go(+b.dataset.d)}});
  t.addEventListener("keydown",function(e){if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1)});
});

/* vidéos : lecture à l'écran, pause au clic */
var vo=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(rm)return;if(e.isIntersecting)v.play().catch(function(){});else v.pause()})},{threshold:.4});
document.querySelectorAll(".pv").forEach(function(b){var v=b.querySelector("video");vo.observe(v);b.onclick=function(){v.paused?v.play():v.pause()}});

/* agrandissement des captures */
document.querySelectorAll(".track img").forEach(function(im){im.onclick=function(){
  var o=document.createElement("div");o.className="lbx";o.setAttribute("role","dialog");o.setAttribute("aria-label","Capture agrandie");o.appendChild(im.cloneNode());
  function c(){o.remove();document.removeEventListener("keydown",k)}function k(e){if(e.key==="Escape")c()}
  o.onclick=c;document.addEventListener("keydown",k);document.body.appendChild(o)}});

/* widget d'orientation */
var map={"Mathématiques":{"Génie logiciel":2,"Statistiques":3,"Économie":1},"Programmation":{"Génie logiciel":3,"Informatique de gestion":2},"Biologie":{"Sciences de la santé":3,"Agronomie":2},"Santé":{"Sciences de la santé":3},"Gestion":{"Informatique de gestion":3,"Économie":2},"Langues":{"Lettres et traduction":3,"Communication":2},"Électronique":{"Génie électrique":3,"Génie logiciel":1},"Agriculture":{"Agronomie":3,"Sciences de la santé":1}};
var chips=document.getElementById("chips"),res=document.getElementById("res"),sel={"Programmation":true,"Mathématiques":true},tm;
Object.keys(map).forEach(function(n){
  var b=document.createElement("button");b.type="button";b.className="chip";b.textContent=n;b.setAttribute("aria-pressed",!!sel[n]);
  b.onclick=function(){sel[n]=!sel[n];b.setAttribute("aria-pressed",!!sel[n]);run()};chips.appendChild(b)});
function render(){
  var s={},why={},any=false;
  Object.keys(sel).forEach(function(n){if(sel[n]){any=true;for(var f in map[n]){s[f]=(s[f]||0)+map[n][f];(why[f]=why[f]||[]).push(n)}}});
  res.classList.remove("busy");
  if(!any){res.innerHTML='<li style="grid-template-columns:1fr"><span class="rn">Sélectionne au moins un centre d’intérêt.</span></li>';return}
  var r=Object.keys(s).sort(function(a,b){return s[b]-s[a]}).slice(0,4),top=s[r[0]];
  res.innerHTML=r.map(function(f,i){return '<li><span class="rk">0'+(i+1)+'</span><span class="rn">'+f+'<small>via '+why[f].join(" + ")+'</small></span><span class="bt"><i style="width:0" data-w="'+Math.round(s[f]/top*100)+'"></i></span></li>'}).join("");
  requestAnimationFrame(function(){requestAnimationFrame(function(){res.querySelectorAll("i[data-w]").forEach(function(i){i.style.width=i.dataset.w+"%"})})});
}
function run(){res.classList.add("busy");clearTimeout(tm);tm=setTimeout(render,rm?0:380)}
document.getElementById("rnd").onclick=function(){
  var k=Object.keys(map).sort(function(){return Math.random()-.5}).slice(0,2+Math.floor(Math.random()*2));
  sel={};k.forEach(function(n){sel[n]=true});chips.querySelectorAll(".chip").forEach(function(b){b.setAttribute("aria-pressed",!!sel[b.textContent])});run()};
render();
})();
