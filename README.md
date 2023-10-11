<p align="center">
  <img src="docsify.svg" alt="Docsify Logo" height="128">
</p>
<h1 align="center">Docsify Plugins</h1>
<h3 align="center">Google Analytics</h3>

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/docsify-plugin-ga/badge)](https://www.jsdelivr.com/package/npm/docsify-plugin-ga)
[![npm version](https://badge.fury.io/js/docsify-plugin-ga.svg)](https://badge.fury.io/js/docsify-plugin-ga)
[![License](https://img.shields.io/npm/l/docsify-plugin-ga)](https://github.com/lollipop-onl/docsify-plugin-ga/blob/main/LICENSE)

Install Google Analytics 4 and Universal Analytics.

## Usage

```html
<script>
  window.$docsify = {
    ga: 'G-XXXXX',
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-plugin-ga"></script>
```

GA4 and UA can be used together.

```html
<script>
  window.$docsify = {
    ga: [
      'G-XXXXX',
      'UA-YYYYY-Z',
    ],
  };
</script>
```

## License

MIT
