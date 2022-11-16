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
  window.gtag('config', id, {
    send_page_view: false,
  });
};

export const collectGA4 = (id) => {
  if (!window.gtag) {
    init(id);
  }

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    send_to: id,
  })
};
