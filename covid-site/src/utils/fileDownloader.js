function downloadOneKml(date) {
  let year = date.getFullYear();
  let month = date.getMonth();  // starts from 0
  let mday = date.getDate();

  let download_url = "https://www.google.com/maps/timeline/kml?authuser=0&pb=!1m8!1m3!1i" + year + "!2i" + month + "!3i" + mday +
    "!2m3!1i" + year + "!2i" + month + "!3i" + mday;

  let anchor = document.createElement('a');
  anchor.href = download_url;
  anchor.target = "_blank";
  anchor.setAttribute('rel', 'noreferrer');
  const str_month = `0${month + 1}`.slice(-2);
  const str_day = `0${mday}`.slice(-2);
  anchor.download = `history-${year}-${str_month}-${str_day}.kml`;

  var evt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: false
  });
  anchor.dispatchEvent(evt);
  (window.URL || window.webkitURL).revokeObjectURL(anchor.href);
}

export function downloadKml(period) {
  var begin, end;
  // last N seconds
  let now = (+ new Date()) / 1000;  // get cuurent timestamp
  begin = now - 2678400; // last 31 days
  end = now;

  const secs_per_day = 24 * 60 * 60;
  let anchors = [];
  for (let timestamp = begin; timestamp <= end; timestamp += secs_per_day) {
    let date = new Date(timestamp * 1000);
    downloadOneKml(date);
  }
}
