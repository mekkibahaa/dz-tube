function loadVideo() {
  const url = document.getElementById("video-url").value.trim();
  const videoContainer = document.getElementById("video-container");

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = extractYouTubeId(url);
    if (videoId) {
      videoContainer.innerHTML = `
        <iframe width="100%" height="400" 
                src="https://www.youtube.com/embed/${videoId}" 
                frameborder="0" allowfullscreen></iframe>
        <a href="https://www.y2mate.com/youtube/${videoId}" target="_blank">
          <button style="margin-top: 10px;">تحميل الفيديو 🔽</button>
        </a>
      `;
    } else {
      videoContainer.innerHTML = "<p>رابط غير صالح.</p>";
    }
  } else {
    videoContainer.innerHTML = "<p>يرجى وضع رابط YouTube فقط حالياً.</p>";
  }
}

function extractYouTubeId(url) {
  const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}