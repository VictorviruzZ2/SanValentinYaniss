const cornerImages = [
    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png'
  ];
  
  function cambiarImagenesAleatorias() {
    const corners = document.querySelectorAll('.corner');
    corners.forEach(corner => {
      const randomIndex = Math.floor(Math.random() * cornerImages.length);
      const randomImage = cornerImages[randomIndex];
      corner.style.backgroundImage = `url(${randomImage})`;
    });
  }
  
  cambiarImagenesAleatorias();
  setInterval(cambiarImagenesAleatorias, 3000);
  
  let fraseIndex = 0;
  const frases = [
    "Mi niña hermosa",
    "Dueña de mi corazón",
    "Mi pinguinita",
    "Mi más linda coincidencia",
    "Mi ingeniera",
    "Corazón de melón",
    "Las nalgas de algodón",
    "Mi nena hermosa",
    "Mi medicina",
    "Mi princesa amada"
  ];
  
  function cambiarFrase(direccion) {
    fraseIndex += direccion;
    if (fraseIndex < 0) {
      fraseIndex = frases.length - 1;
    } else if (fraseIndex >= frases.length) {
      fraseIndex = 0;
    }
    document.getElementById("mensaje").textContent = frases[fraseIndex];
  }
  