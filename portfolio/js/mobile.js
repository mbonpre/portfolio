(function(){
if(matchMedia("(max-width:55.99rem)").matches)document.querySelectorAll("details.mobclose").forEach(function(d){d.open=false});
var w=document.getElementById("wa"),b=document.getElementById("mbwa");
if(w&&b&&w.getAttribute("href")&&w.getAttribute("href")!=="#contact")b.href=w.href;
})();
