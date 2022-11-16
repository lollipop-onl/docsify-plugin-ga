const init = (id) => {
  const $script = document.createElement('script');
  $script.async = true;
  $script.src = 'https://www.google-analytics.com/analytics.js';
  document.body.appendChild($script);

  window.ga =
    window.ga ||
    function () {
      (window.ga.q = window.ga.q || []).push(arguments);
    };

  window.ga.l = Number(new Date());
  window.ga('create', id, 'auto');
};

export const collectUA = (id) => {
  if (!window.ga) {
    init(id);
  }

  window.ga('set', 'page', window.location.hash);
  window.ga('send', 'pageview');
};
