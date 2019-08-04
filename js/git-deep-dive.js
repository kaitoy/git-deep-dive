var vcsTyped = undefined;
Reveal.addEventListener(
  'vcs',
  function() {
    if (!vcsTyped) {
      vcsTyped = new Typed('#vcs', {
        strings: ['^650バージョン管理ツール?'],
        typeSpeed: 40,
      });
    }
  },
  false,
);

var subversionTyped = undefined;
Reveal.addEventListener(
  'subversion',
  function() {
    if (!subversionTyped) {
      subversionTyped = new Typed('#subversion', {
        strings: ['^650Subversionなら使ったことあるけど…'],
        typeSpeed: 30,
      });
    }
  },
  false,
);

var nwTyped = undefined;
Reveal.addEventListener(
  'nw',
  function() {
    if (!nwTyped) {
      nwTyped = new Typed('#nw', {
        strings: ['^650なるほど、^200分からん。'],
        typeSpeed: 40,
      });
    }
  },
  false,
);

var irairaTyped = undefined;
Reveal.addEventListener(
  'iraira',
  function() {
    if (!irairaTyped) {
      irairaTyped = new Typed('#iraira', {
        strings: ['^650変更書ってなんのこと?'],
        typeSpeed: 40,
      });
    }
  },
  false,
);
