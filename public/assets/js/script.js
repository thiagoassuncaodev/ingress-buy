const modal = document.getElementById("ticketModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const eventDate = new Date("Oct 31, 2026 22:00:00").getTime();

function updateCountdown() {
    const agora = new Date().getTime();
    const distance = eventDate - agora;

    if (distance < 0) {
        document.querySelector(".timer").innerHTML = "🎃 O EVENTO COMEÇOU!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// atualiza a cada 1 segundo
setInterval(updateCountdown, 1000);

updateCountdown();