(function () {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');
  const utmCampaign = params.get('utm_campaign');
  const utmTerm = params.get('utm_term');
  const utmContent = params.get('utm_content');
  
  // Always track the visit
  fetch('https://test.blacksheepmeedia.com/api/track-visit', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_term: utmTerm,
      utm_content: utmContent,
      path: window.location.pathname,
      metadata: {
        page_title: document.title,
        url: window.location.href
      }
    })
  }).catch(() => {
  });

  // Log UTM parameters if they exist
  if (utmSource || utmMedium || utmCampaign) {
    console.log(`tracking UTM: source=${utmSource}, medium=${utmMedium}, campaign=${utmCampaign}`);
  }
})();
