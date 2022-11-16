import { collectGA4 } from './ga4';
import { collectUA } from './ua';

/** 配列化 */
const toArray = (value) => (Array.isArray(value) ? value : [value]);

const collect = () => {
  const ids = toArray($docsify.ga);
  const ga4 = ids.find((id) => typeof id === 'string' && id.startsWith('G-'));
  const ua = ids.find((id) => typeof id === 'string' && id.startsWith('UA-'));

  if (ga4) {
    collectGA4(ga4);
  }

  if (ua) {
    collectUA(ua);
  }
};

/** プラグインをインストール */
const install = (hook) => {
  if (
    !$docsify.ga ||
    (Array.isArray($docsify.ga) && $docsify.ga.length === 0)
  ) {
    console.error('[GA] $docsify.ga is required.');

    return;
  }

  console.log({ hook });
  hook.beforeEach(console.log);

  hook.beforeEach(collect);
};

$docsify.plugins = [].concat(install, $docsify.plugins);
