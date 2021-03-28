var req = new XMLHttpRequest();
req.open("GET", "https://raw.githubusercontent.com/ezhzz/Tktk/main/videos.txt", false);
req.send(null);

videos = req.responseText.split(' ')
ok = 0

function newvideo() {
  ok = Math.floor(Math.random() * videos.length);
  document.getElementById("sourceid").src=videos[ok];
}

let butt = document.getElementById('ok')
butt.addEventListener('click', newvideo)
