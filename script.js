var req = new XMLHttpRequest();
req.open("GET", "https://raw.githubusercontent.com/gittok/gittok.github.io/main/videos.txt", false);
req.send(null);

videos = req.responseText.split(' ')
ok = 0

function newvideo() {
  ok = Math.floor(Math.random() * videos.length);
  document.getElementById("sourceid").src=videos[ok];
  document.getElementById("forcopy").innerText="Ссылка: https://gittok.github.io" + videos[ok];
  document.getElementById("tg").innerText="Поделиться через Telegram";
  document.getElementById("tg").href="https://t.me/share?url=gittok.github.io" + videos[ok];
}

let butt = document.getElementById('ok')
butt.addEventListener('click', newvideo)
