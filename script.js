document.addEventListener("DOMContentLoaded", function () {
  var numCase = 0;
  
  DATA.forEach(function (information) {
    var blocMusique = document.createElement("section");
    blocMusique.innerHTML = 
        '<h2>' + information.musique + '</h2>' +
        '<p>' + information.description + '</p>' +
        // Ajouter le lien autour de l'image
        '<a href="' + information.link + '">' + 
            '<img src="' + information.img + '" id="' + information.logo + '" />' + 
        '</a>' +
        "<audio id='audio" + numCase + "' controls>" +
        "<source src='" + information.audio + "' type='audio/mpeg'>" +
        "</audio>" +
        "<div class='audio-button' id='play" + numCase + "'>&#9654;</div>";
    
    document.querySelector(".list").append(blocMusique);
    // Ajout des événements play et pause pour chaque audio
    const audio = document.getElementById("audio" + numCase);
    const playButton = document.querySelector('#play' + numCase);
    let running = false;

    playButton.addEventListener('click', function () {
      if (running) {
        audio.pause();
        playButton.innerHTML = '&#9654;'; // Remet le bouton play
      }
      else {
        audio.play();
        playButton.innerHTML = '&#9208;'; // Change le bouton pour pause
      }

      running = !running; // Inverse l'état
    });



    numCase++; // Incrémentation de numCase pour chaque nouveau bloc
  });
});
