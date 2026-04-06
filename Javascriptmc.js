   // Accordion: only one open at a time
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("toggle", () => {
        if (targetDetail.open) {
          details.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.open = false;
            }
          });
        }
      });
    });
      const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");

  toggleBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggleBtn.innerText = "🔇 Pause Music";
    } else {
      music.pause();
      toggleBtn.innerText = "🎵 Play Music";
    }
  });