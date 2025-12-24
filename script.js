const canvas = document.getElementById('terminal-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "010101ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(3, 3, 3, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff41";
    ctx.font = fontSize + "px monospace";
    drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.98) drops[i] = 0;
        drops[i]++;
    });
}

const titleText = "Securing infrastructure through advanced defense.";
let index = 0;
function typeWriter() {
    if (index < titleText.length) {
        document.getElementById("typewriter").innerHTML += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
    }
}

window.onload = () => { typeWriter(); setInterval(drawMatrix, 40); };

window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

// Faz uma requisição para o próprio site
fetch(window.location.href)
  .then(response => {
    const headers = new Headers(response.headers);
    headers.append('X-Secret-Flag', 'FLAG{you_did_it_2025}');
    console.log("Dica: O servidor enviou algo interessante na resposta...");
  });
