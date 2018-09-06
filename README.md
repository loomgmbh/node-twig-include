# Quick Install

Zum installieren führe folgenden Befehl aus:

`npm install git+https://github.com/loomgmbh/node-twig-include.git#1.0.0`

Dann füge eine eine `extend` option zum Twig Task hinzu.

```js
var twig = require('gulp-twig');
var twigInclude = require('twig-include');

...

  .pipe(twig({
      extend: twigInclude.extend,
    }))

...

```
