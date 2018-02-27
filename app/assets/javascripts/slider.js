let i = 0 ;
let images = $(".imageslider");   // cible des div d'images
let ronds = $(".rond");
let nbimg = images.length;       // number of images in imageslider

function affichage(i) {
  let image = $(".imageslider").eq(i);  // on cible l'image actuelle
  images.hide(0, function(){image.show()});

  function coloration() {  // Colore le bouton rond associé à l'image en cours
    $(".rond").eq(i).css("background-color", "white");
  };
  ronds.css("background-color", "grey");
  coloration();
  console.log(i);

};

$(".flechedroite").on( 'click', function (){
    if (i < nbimg-1) {
      i +=1;
      affichage(i);
    }
    else {
      i=0;
      affichage(i);
    }
});

$(".flechegauche").on( 'click', function (){
    if (i > 0) {
      i -=1;
      affichage(i);
    }
    else {
      i = nbimg-1;
      affichage(i);
    }
});

$(".rond").on( 'click', function(){
      affichage(i);
      $(this) = $(".rond").eq();
      console.log();
});

// Pour que le carrousel tourne automatiquement

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
        if(i < nbimg-1){ // si le compteur est inférieur au dernier index
          i++; // on l'incrémente
          affichage(i);
          slideImg();
        }
        else{ // sinon, on le remet à 0 (première image)
          i = 0;
          affichage(i);
          slideImg();
        }
    }, 5000); // on définit l'intervalle à 5 secondes
}

slideImg(); // enfin, on lance la fonction une première fois
