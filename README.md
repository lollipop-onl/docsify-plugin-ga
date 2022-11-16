<p align="center">
  <img src="docsify.svg" alt="Docsify Logo" height="128">
</p>
<h1 align="center">Docsify Plugins</h1>
<h3 align="center">Google Analytics</h3>

[![License](https://img.shields.io/github/license/lollipop-onl/docsify-plugin-ga?logo=open-source-initiative&logoColor=green)](https://github.com/lollipop-onl/docsify-plugin-ga/blob/main/LICENSE)

Install Google Analytics 4 and Universal Analytics.

## Usage

```html
<script>
  window.$docsify = {
    ga: 'G-XXXXX',
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/gh/lollipop-onl/docsify-plugin-ga"></script>
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
