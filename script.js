const bgm = document.getElementById("bgm");

bgm.volume = 1;

document.body.addEventListener("click", function () {
    bgm.play();
}, { once: true });

function toggleMusic() {
    const icon = document.getElementById("musicIcon");
    const label = document.getElementById("musicLabel");
    const btn = document.getElementById("musicBtn");

    if (bgm.paused) {
        bgm.play();
        icon.className = "fa-solid fa-pause";
        label.textContent = "Pause Music";
        btn.classList.add("playing");
    } else {
        bgm.pause();
        icon.className = "fa-solid fa-play";
        label.textContent = "Play Music";
        btn.classList.remove("playing");
    }
}