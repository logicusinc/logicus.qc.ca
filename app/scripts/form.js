$(document).ready(function(){
  $('#submitlogicus').click(function(){
    $.post("/php/send.php", $("#contact-form").serialize(),  function(response) {
      if(response === "0")
    {
      alert('Adresse courriel invalide, veuillez entrer une adresse courriel valide.');
    }
      else
    {
      if (response === "1")
    {
      var form = document.getElementById("contact-form");
      form.reset();
      alert('Votre information été envoyée avec succès!');
    }
      else
    {
      if (response === "2")
    {
      alert('Erreur lors de l\'envoie du message.');
    }
      else
      {
        alert('Catpcha invalide.');
      }
    }
    }
    });
    return false;
  });
  $('#submitinfo').click(function(){
    $.post("/php/infolettre.php", $("#infolettre-form").serialize(),  function(response) {
      if(response === "0")
    {
      alert('Adresse courriel invalide, veuillez entrer une adresse courriel valide.');
    }
      else
    {
      if (response === "1")
    {
      var form = document.getElementById("infolettre-form");
      form.reset();
      alert('Votre information été envoyée avec succès!');
    }
      else
    {
      if (response === "2")
    {
      alert('Erreur lors de l\'envoie du message.');
    }
      else
    {
      alert('Catpcha invalide.');
    }
    }
    }
    });
    return false;
  });

});

