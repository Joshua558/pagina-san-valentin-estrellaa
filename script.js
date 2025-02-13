document.getElementById("btnSurprise").addEventListener("click", function() {
    // Mostrar la imagen y el mensaje
    document.getElementById("surpriseMessage").style.display = "block";

    // Mostrar el nuevo botón después de 1 segundo
    setTimeout(function() {
        document.getElementById("btnNext").style.display = "block";
    }, 1000);
});

// Evento para el botón "Dale al siguiente, bebé"
document.getElementById("btnNext").addEventListener("click", function() {
    document.getElementById("gifContainer").style.display = "block";

    // Mostrar los botones de "Sí" y "No" después de 1 segundo
    setTimeout(function() {
        document.getElementById("btnYes").style.display = "inline-block";
        document.getElementById("btnNo").style.display = "inline-block";
    }, 1000);
});

// Evento para el botón "SÍ"
document.getElementById("btnYes").addEventListener("click", function() {
    // Mostrar el contenedor del corazón con las fotos
    document.getElementById("heartContainer").style.display = "block";
    alert("¡Sabía que me amas! 💖😍 Eres mi todo, gordita. 💘");
});

// Evento para el botón "NO"
document.getElementById("btnNo").addEventListener("click", function() {
    // Mostrar el mensaje de "YA NO QUIERO NADA, ADIÓS" con el emoji
    document.getElementById("noMessage").style.display = "block"; 

    // También podemos mostrar una alerta si lo deseas (opcional)
    // alert("😡 ¡Cómo que NO! Te pego. 😂");
});
