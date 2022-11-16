<p align="center">
  <img src="docsify.svg" alt="Docsify Logo" height="128">
</p>
<h1 align="center">Docsify Plugins</h1>
<h3 align="center">Google Analytics</h3>

Install Google Analytics 4 and Universal Analytics.

```html
<script>
  window.$docsify = {
    ga: 'G-XXXXX',
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/gh/lollipop-onl/docsify-plugin-ga"></script>
```

Using multiple tracking ids.

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
