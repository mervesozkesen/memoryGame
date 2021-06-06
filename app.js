var imageCards = [],
    numberOfTries= 0,
    selectedImages= [],
    waitTime = 500,
    trialArea;

 function start() {
   trialArea = document.getElementById("trial-area");

   imageCards = [
      
      "resim1",
      "resim2",
      "resim3",
      "resim4",
      "resim5",
      "resim6",
      "resim7",
      "resim8",
      "resim9",
      "resim10",
   ];
      imageCards = imageCards.concat(imageCards);
      imageCards.sort(function () {
         return 0.5 -  Math.random();
      });
     for (var i= 0; i < imageCards.length; i++ ){
         var imageObjects = document.createElement("img");
         imageObjects.src = "img/" + imageCards[i] + ".png";
         imageObjects.title = imageCards[i];
         imageObjects.alt = imageCards[i];
         imageObjects.onclick = checkIt;
         document.getElementById("game-area").appendChild(imageObjects);

     }
       setTimeout (function() {
           for (var i = 0; i < document.images.length; i++) {
                 document.images[i].src = "img/resim.png";
                 document.images[i].title = "resim";
           }
       },waitTime * 4);
 };
 function checkIt() {
     if (this.title != "resim" || this.title == "open" || this.title == "opened" ) 
     return;
     if (selectedImages.length < 2) {
         selectedImages.push(this.alt);
         this.src = "img/" + this.alt + ".png";
         this.title ="open";

         if(selectedImages.length === 2) {
             if (selectedImages[0] === selectedImages[1]) {
                 for (var i = 0; i < document.images.length; i++ ) {
                     if(document.images[i].title =="open") {
                        
                         document.images[i].title="opened";
                     }
                 }
                 selectedImages = [];
                } else {
                    setTimeout(function () {
                        for (var i=0; i < document.images.length; i++) {
                            if (document.images[i].title == "open") {
                                document.images[i].src = "img/resim.png";
                                document.images[i].title = "resim";
                            }
                        }
                        selectedImages = [];
             }, waitTime);
             numberOfTries++;
             trialArea.innerText = "Try it" + numberOfTries + "times.";
         }
     }
 }
}
window.onload = start;