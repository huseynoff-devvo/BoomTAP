function playSound(id) {
  const sounds = document.querySelectorAll('audio');
  sounds.forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
  });

  const audio = document.getElementById(id);
  audio.play();
  
}

function downloadSound(id) {
  const audio = document.getElementById(id);
  const url = audio.src;
  const link = document.createElement("a");
  link.href = url;
  link.download = id + ".mp3";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


function filterSounds() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const buttons = document.querySelectorAll(".buttons .btn-wrapper");

    buttons.forEach(button => {
      const text = button.textContent.toLowerCase();
      button.style.display = text.includes(input) ? "inline-block" : "none";
    });
  }
