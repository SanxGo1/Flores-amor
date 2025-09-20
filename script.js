const boton = document.getElementById("btnFlor");
const mensajeExtra = document.getElementById("mensajeExtra");
const flores = document.getElementById("flores");

const mensajes = [
  "🌹 Una rosa para la que hace que mis dias sean mejores 💜",
  "🌷 Gracias por ser la luz que iluminan mis ojitos",
  "🌼 Te amodoro muchisimo mi niña de ojos bonitos 💜",
  "🌸 Que la vida siempre nos ayude a estar juntos sin importar que 💜",
  "🥀 Eres esa persona que jamas me cansare de ver 💜💜💜",
  "🏵 Te amo cada dia mas y recordartelo es algo que lo hago por el amor que te tengo 💜"
  

];

boton.addEventListener("click", () => {
  
  const randomIndex = Math.floor(Math.random() * mensajes.length);
  mensajeExtra.textContent = mensajes[randomIndex];

  
  for (let i = 0; i < 10; i++) {
    crearFlor();
  }
});

function crearFlor() {
  const flor = document.createElement("div");
  flor.classList.add("flower");

  
  const emojis = ["🌸", "💜", "🌼", "🌷", "💜","🥀","🌺" ];
  flor.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  
  flor.style.left = Math.random() * 100 + "vw";

  
  const duracion = Math.random() * 3 + 3; 
  flor.style.animationDuration = duracion + "s";

 
  flores.appendChild(flor);


  setTimeout(() => {
    flor.remove();
  }, duracion * 1000);

 
}
