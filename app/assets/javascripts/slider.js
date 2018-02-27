let i = 0 ;
let images = $(".imageslider");   // cible des div d'images
let nbimg = images.length;       // number of images in imageslider

function affichage(imageid) {
  let image = $(".imageslider").eq(i);  // on cible l'image actuelle
  images.hide(0, function(){image.show()});
};

$(".flechedroite").on( 'click', function (){
    if (i < nbimg-1) {
      i +=1;
      affichage(i);
    }
});

$(".flechegauche").on( 'click', function (){
    if (i > 0) {
      i -=1;
      affichage(i);
    }
});

$(".rond").eq(i).on( 'click', function (){
      affichage(i);
});
