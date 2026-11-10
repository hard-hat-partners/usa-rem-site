// ============================================================
// THE ONE SETTING. 'usarem' now. Change to 'hhp' on January 1.
var ACTIVE_BRAND = 'usarem';
// ============================================================
window.BRANDS = {
  hhp: {
    name: 'Hard Hat Partners',
    logo: 'assets/hhp-logo-horizontal-color.png',
    logoWhite: 'assets/hhp-logo-horizontal-reversed.png',
    favicon32: './favicon-32.png', favicon512: './favicon-512.png', touchIcon: './apple-touch-icon.png',
    ogImage: '/og-image.png'
  },
  usarem: {
    name: 'USA-REM',
    logo: 'assets/usarem-logo-color.png',
    logoWhite: 'assets/usarem-logo-white.png',
    favicon32: './usarem-favicon-32.png', favicon512: './usarem-favicon-512.png', touchIcon: './usarem-apple-touch-icon.png',
    ogImage: 'https://usa-rem.com/og-image.png'
  }
};
window.BRAND = Object.assign({
  active: ACTIVE_BRAND,
  legal: 'TX Real Estate Marketing LLC',
  email: 'info@usa-rem.com',
  linkedin: 'https://www.linkedin.com/company/hardhatpartners',
  // HubSpot Meetings link: replace with the real one so bookings land in The Hunt
  bookingUrl: 'https://meetings-na2.hubspot.com/joshua40'
}, window.BRANDS[ACTIVE_BRAND] || window.BRANDS.hhp);
document.documentElement.setAttribute('data-brand', window.BRAND.active);
(function () {
  if (window.BRAND.active === 'hhp') return;
  var B = window.BRAND;
  function head() {
    var t = document.title; if (t.indexOf('Hard Hat Partners') > -1) document.title = t.split('Hard Hat Partners').join(B.name);
    document.querySelectorAll('meta[content*="Hard Hat Partners"]').forEach(function (m) { m.setAttribute('content', m.getAttribute('content').split('Hard Hat Partners').join(B.name)); });
    document.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]').forEach(function (m) { m.setAttribute('content', B.ogImage); });
    document.querySelectorAll('link[rel="icon"][sizes="32x32"]').forEach(function (l) { l.href = B.favicon32; });
    document.querySelectorAll('link[rel="icon"][sizes="512x512"]').forEach(function (l) { l.href = B.favicon512; });
    document.querySelectorAll('link[rel="apple-touch-icon"]').forEach(function (l) { l.href = B.touchIcon; });
  }
  head();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', head);
})();
