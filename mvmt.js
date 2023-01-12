// Récupération de la date de l'événement
var eventDate = new Date("March 1, 2023 00:00:00").getTime();

// Mise en place de la fonction de compte à rebours
var countdown = setInterval(function() {

  // Obtention de la date et de l'heure actuelles
  var currentDate = new Date().getTime();

  // Calcul de la différence entre la date de l'événement et la date actuelle
  var diff = eventDate - currentDate;

  // Calcul des jours, heures, minutes et secondes restants
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Mise à jour de l'affichage du compte à rebours
  document.getElementById("days").innerHTML = days + " Jours ";
  document.getElementById("hours").innerHTML = hours + " Heures ";
  document.getElementById("minutes").innerHTML = minutes + " Minutes ";
  document.getElementById("seconds").innerHTML = seconds + " Secondes ";

  // Arrêt du compte à rebours lorsque l'événement arrive
  if (diff < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "L'événement a commencé!";
  }
}, 1000);
