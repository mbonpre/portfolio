(function(){
var API="https://club-anglais-backend.onrender.com/public/wa/";
var L={
"tmct":["yee","Bonjour, je vous contacte à propos du site du club d’anglais YEE."],
"ct-f":["fidele","Bonjour Fidèle, je vous contacte depuis le portfolio de Précieux."],
"ct-i":["immaculee","Bonjour Immaculée, je vous contacte depuis le portfolio de Précieux."],
"ct-m":["marcellin","Bonjour Marcellin, je vous contacte depuis le portfolio de Précieux."]};
Object.keys(L).forEach(function(k){var a=document.getElementById(k);if(a)a.href=API+L[k][0]+"?m="+encodeURIComponent(L[k][1])});
})();
