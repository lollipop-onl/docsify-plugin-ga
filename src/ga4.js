const init = (id) => {
  const $script = document.createElement('script');
  $script.async = true;
  $script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.body.appendChild($script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', id);
};

export const collectGA4 = (id) => {
  if (!window.gtag) {
    init(id);
  }

  const { origin, hash } = window.location;

  window.gtag('config', id, {
    page_path: hash,
    location_path: origin + hash,
  });
};
