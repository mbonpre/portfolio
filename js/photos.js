(function(){
  var root=document.documentElement;
  function loadPhoto(file, variable, className, fallback){
    var img=new Image();
    img.onload=function(){root.style.setProperty(variable,'url("'+file+'")');root.classList.add(className)};
    img.onerror=function(){if(fallback)loadPhoto(fallback,variable,className,null)};
    img.src=file;
  }
  // Deux fichiers indépendants : une photo d'ambiance et une photo de profil.
  // photo.jpg reste accepté comme solution de secours pour les anciens portfolios.
  loadPhoto('photo-fond.jpg','--photo-bg','photo','photo.jpg');
  loadPhoto('photo-profil.jpg','--photo-profile','photo-profile','photo.jpg');
})();
