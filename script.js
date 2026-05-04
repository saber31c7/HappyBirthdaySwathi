const marquee = document.querySelector(".marquee div");
const goalButtons = document.querySelectorAll(".goal-note button");

if (marquee) {
  const clone = marquee.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  marquee.append(...clone.children);
}

goalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isPressed = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isPressed));
  });
});

const confettiColors = ["#d9808f", "#e88f61", "#e4bb58", "#7c9a78", "#8eb3bc", "#8e7aae"];

function createConfettiPiece() {
  const piece = document.createElement("span");
  const duration = 13 + Math.random() * 8;

  piece.className = "confetti-piece";
  piece.style.left = `${Math.random() * 100}vw`;
  piece.style.width = `${5 + Math.random() * 7}px`;
  piece.style.height = `${8 + Math.random() * 14}px`;
  piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
  piece.style.animationDuration = `${duration}s`;
  piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
  piece.style.transform = `rotate(${Math.random() * 180}deg)`;
  document.body.appendChild(piece);

  window.setTimeout(() => piece.remove(), (duration + 1) * 1000);
}

window.setInterval(createConfettiPiece, 220);

for (let index = 0; index < 36; index += 1) {
  window.setTimeout(createConfettiPiece, index * 170);
}
