(function(){var t=document.getElementById("rt");if(!t)return;
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches,c=t.children,n=c.length,dots=document.getElementById("dots"),nav=document.getElementById("rnav");
for(var i=0;i<n;i++)dots.appendChild(document.createElement("i"));
function w(){return c[0].getBoundingClientRect().width+parseFloat(getComputedStyle(t).columnGap||14)}
function up(){var m=t.scrollWidth-t.clientWidth;nav.hidden=m<4;var k=m>0?Math.round(t.scrollLeft/m*(n-1)):0;[].forEach.call(dots.children,function(d,j){d.className=j===k?"on":""})}
t.addEventListener("scroll",up,{passive:true});addEventListener("resize",up);up();
function go(k){t.scrollBy({left:k*w(),behavior:rm?"auto":"smooth"})}
document.getElementById("rp").onclick=function(){go(-1)};document.getElementById("rn").onclick=function(){go(1)};
t.addEventListener("keydown",function(e){if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1)});
[].forEach.call(c,function(card){var p=card.querySelector(".rq p"),b=card.querySelector(".more");if(p.scrollHeight>p.clientHeight+2)b.hidden=false;
 b.onclick=function(){card.classList.toggle("open");b.textContent=card.classList.contains("open")?"Réduire":"Lire la suite"}});
})();
