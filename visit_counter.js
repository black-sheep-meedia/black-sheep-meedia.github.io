(function () {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source');
  console.log(`utm source: ${utmSource}`);
  if (utmSource) {
    console.log(`sending utm source: ${utmSource}`);
    fetch('test.blacksheepmeedia.com/api/track-visit', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({utm_source: utmSource, timestamp: Date.now()})
    }).catch(() => {
    });
  }
})();
