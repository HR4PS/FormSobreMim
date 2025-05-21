// animação do fundo do site

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const STAR_COUNT = 200;

// ajusta canvas para full screen
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// cria estrelas com posições e fase de piscar aleatórias
for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2 + 0.3,
    blinkSpeed: Math.random() * 0.02 + 0.01,
    alpha: Math.random()
  });
}

// loop de animação
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    // atualiza alpha para piscar
    star.alpha += star.blinkSpeed;
    if (star.alpha <= 0) { star.alpha = 0; star.blinkSpeed *= -1; }
    if (star.alpha >= 1) { star.alpha = 1; star.blinkSpeed *= -1; }

    // desenha a estrela
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
    ctx.fill();
  }

  requestAnimationFrame(animate);
}
animate();
