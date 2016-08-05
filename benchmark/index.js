
/**
 * Globals for benchmark.js
 */
global.escapeHtml = require('..');
global.escapeHtmlFromBemxjst = require('../bemxjst-escapeHtml');

/**
 * Module dependencies.
 */
var benchmark = require('benchmark');
var benchmarks = require('beautify-benchmark');

for (var dep in process.versions) {
  console.log('  %s@%s', dep, process.versions[dep]);
}

console.log('');

var suite = new benchmark.Suite;

suite.add({
  'name': 'no special characters',
  'minSamples': 100,
  'fn': 'escapeHtml(str)',
  'setup': 'str = "Hello, World!"'
});

suite.add({
  'name': 'single special character',
  'minSamples': 100,
  'fn': 'escapeHtml(str)',
  'setup': 'str = "Hello, World&!"'
});

suite.add({
  'name': 'many special characters',
  'minSamples': 100,
  'fn': 'escapeHtml(str)',
  'setup': 'str = "\'>\'\\"\\"&>h<e>&<y>"'
});

suite.add({
  'name': 'many special characters',
  'minSamples': 100,
  'fn': 'escapeHtml(str)',
  'setup': 'str = "<h2><span class=\\"mw-headline\\" id=\\"Biography\\">Biography</span><span class=\\"mw-editsection\\"><span class=\\"mw-editsection-bracket\\">[</span><a href=\\"/w/index.php?title=Hans_Hofmann&action=edit&section=1\\" title=\\"Edit section: Biography\\">edit</a><span class=\\"mw-editsection-bracket\\">]</span></span></h2><p>Hofmann was born in <a href=\\"/wiki/Wei%C3%9Fenburg_in_Bayern\\" title=\\"Weißenburg in Bayern\\">Weißenburg</a>, <a href=\\"/wiki/Kingdom_of_Bavaria\\" title=\\"Kingdom of Bavaria\\">Bavaria</a> on March 21, 1880, the son of Theodor and Franziska Hofmann. When he was six he moved with his family to Munich. Here his father took a job with the government.</p><p>Starting at a young age, Hofmann gravitated towards science and mathematics. At age sixteen, he started work with the Bavarian government as assistant to the director of Public Works where he was able to increase his knowledge of mathematics. He went on to develop and patent such devices as the electromagnetic comptometer, a radar device for ships at sea, a sensitized light bulb, and a portable freezer unit for military use. Even with such great abilities in science and mathematics, Hofmann became interested in creative studies, beginning educational art training after the death of his father.<sup id=\\"cite_ref-1\\" class=\\"reference\\"><a href=\\"#cite_note-1\\">[1]</a></sup></p><p>In 1932 he immigrated to the United States, where he resided until the end of his life.</p><h2><span class=\\"mw-headline\\" id=\\"Paintings\\">Paintings</span><span class=\\"mw-editsection\\"><span class=\\"mw-editsection-bracket\\">[</span><a href=\\"/w/index.php?title=Hans_Hofmann&action=edit&section=2\\" title=\\"Edit section: Paintings\\">edit</a><span class=\\"mw-editsection-bracket\\">]</span></span></h2><p>Hofmann\'s art work is distinguished by a rigorous concern with pictorial structure, spatial illusion, and color relationships.<sup id=\\"cite_ref-2\\" class=\\"reference\\"><a href=\\"#cite_note-2\\">[2]</a></sup> He was also heavily influenced in his later years by <a href=\\"/wiki/Henri_Matisse\\" title=\\"Henri Matisse\\">Henri Matisse</a>\'s ideas about color and form <sup id=\\"cite_ref-3\\" class=\\"reference\\"><a href=\\"#cite_note-3\\">[3]</a></sup></p><p>His completely abstract works date from the 1940s.<sup id=\\"cite_ref-4\\" class=\\"reference\\"><a href=\\"#cite_note-4\\">[4]</a></sup> Hofmann believed that abstract art was a way to get at the important reality. He famously stated that \\"the ability to simplify means to eliminate the unnecessary so that the necessary may speak\\".<sup id=\\"cite_ref-5\\" class=\\"reference\\"><a href=\\"#cite_note-5\\">[5]</a></sup></p><h2><span class=\\"mw-headline\\" id=\\"Teaching_and_writing\\">Teaching and writing</span><span class=\\"mw-editsection\\"><span class=\\"mw-editsection-bracket\\">[</span><a href=\\"/w/index.php?title=Hans_Hofmann&action=edit&section=3\\" title=\\"Edit section: Teaching and writing\\">edit</a><span class=\\"mw-editsection-bracket\\">]</span></span></h2><p>Hofmann was renowned not only as an artist but as a teacher of art, both in his native Germany and later in the U.S. In <a href=\\"/wiki/Munich\\" title=\\"Munich\\">Munich</a> he founded an art school, where <a href=\\"/wiki/Alf_Bayrle\\" title=\\"Alf Bayrle\\">Alf Bayrle</a>, <a href=\\"/wiki/Louise_Nevelson\\" title=\\"Louise Nevelson\\">Louise Nevelson</a>, <a href=\\"/wiki/Wolfgang_Paalen\\" title=\\"Wolfgang Paalen\\">Wolfgang Paalen</a>, <a href=\\"/wiki/Worth_Ryder\\" title=\\"Worth Ryder\\">Worth Ryder</a><sup id=\\"cite_ref-6\\" class=\\"reference\\"><a href=\\"#cite_note-6\\">[6]</a></sup> and <a href=\\"/wiki/Alfred_Julio_Jensen\\" class=\\"mw-redirect\\" title=\\"Alfred Julio Jensen\\">Alfred Jensen</a>, were among his students. He closed this school in 1932, the year he immigrated to the U.S.</p>"'
});

suite.add({
  'name': 'no special characters',
  'minSamples': 100,
  'fn': 'escapeHtmlFromBemxjst(str)',
  'setup': 'str = "Hello, World!"'
});

suite.add({
  'name': 'single special character',
  'minSamples': 100,
  'fn': 'escapeHtmlFromBemxjst(str)',
  'setup': 'str = "Hello, World&!"'
});

suite.add({
  'name': 'many special characters',
  'minSamples': 100,
  'fn': 'escapeHtmlFromBemxjst(str)',
  'setup': 'str = "\'>\'\\"\\"&>h<e>&<y>"'
});


suite.add({
  'name': 'many special characters',
  'minSamples': 100,
  'fn': 'escapeHtmlFromBemxjst(str)',
  'setup': 'str = "<h2><span class=\\"mw-headline\\" id=\\"Biography\\">Biography</span><span class=\\"mw-editsection\\"><span class=\\"mw-editsection-bracket\\">[</span><a href=\\"/w/index.php?title=Hans_Hofmann&action=edit&section=1\\" title=\\"Edit section: Biography\\">edit</a><span class=\\"mw-editsection-bracket\\">]</span></span></h2><p>Hofmann was born in <a href=\\"/wiki/Wei%C3%9Fenburg_in_Bayern\\" title=\\"Weißenburg in Bayern\\">Weißenburg</a>, <a href=\\"/wiki/Kingdom_of_Bavaria\\" title=\\"Kingdom of Bavaria\\">Bavaria</a> on March 21, 1880, the son of Theodor and Franziska Hofmann. When he was six he moved with his family to Munich. Here his father took a job with the government.</p><p>Starting at a young age, Hofmann gravitated towards science and mathematics. At age sixteen, he started work with the Bavarian government as assistant to the director of Public Works where he was able to increase his knowledge of mathematics. He went on to develop and patent such devices as the electromagnetic comptometer, a radar device for ships at sea, a sensitized light bulb, and a portable freezer unit for military use. Even with such great abilities in science and mathematics, Hofmann became interested in creative studies, beginning educational art training after the death of his father.<sup id=\\"cite_ref-1\\" class=\\"reference\\"><a href=\\"#cite_note-1\\">[1]</a></sup></p><p>In 1932 he immigrated to the United States, where he resided until the end of his life.</p><h2><span class=\\"mw-headline\\" id=\\"Paintings\\">Paintings</span><span class=\\"mw-editsection\\"><span class=\\"mw-editsection-bracket\\">[</span><a href=\\"/w/index.php?title=Hans_Hofmann&action=edit&section=2\\" title=\\"Edit section: Paintings\\">edit</a><span class=\\"mw-editsection-bracket\\">]</span></span></h2><p>Hofmann\'s art work is distinguished by a rigorous concern with pictorial structure, spatial illusion, and color relationships.<sup id=\\"cite_ref-2\\" class=\\"reference\\"><a href=\\"#cite_note-2\\">[2]</a></sup> He was also heavily influenced in his later years by <a href=\\"/wiki/Henri_Matisse\\" title=\\"Henri Matisse\\">Henri Matisse</a>\'s ideas about color and form <sup id=\\"cite_ref-3\\" class=\\"reference\\"><a href=\\"#cite_note-3\\">[3]</a></sup></p><p>His completely abstract works date from the 1940s.<sup id=\\"cite_ref-4\\" class=\\"reference\\"><a href=\\"#cite_note-4\\">[4]</a></sup> Hofmann believed that abstract art was a way to get at the important reality. He famously stated that \\"the ability to simplify means to eliminate the unnecessary so that the necessary may speak\\".<sup id=\\"cite_ref-5\\" class=\\"reference\\"><a href=\\"#cite_note-5\\">[5]</a></sup></p><h2><span class=\\"mw-headline\\" id=\\"Teaching_and_writing\\">Teaching and writing</span><span class=\\"mw-editsection\\"><span class=\\"mw-editsection-bracket\\">[</span><a href=\\"/w/index.php?title=Hans_Hofmann&action=edit&section=3\\" title=\\"Edit section: Teaching and writing\\">edit</a><span class=\\"mw-editsection-bracket\\">]</span></span></h2><p>Hofmann was renowned not only as an artist but as a teacher of art, both in his native Germany and later in the U.S. In <a href=\\"/wiki/Munich\\" title=\\"Munich\\">Munich</a> he founded an art school, where <a href=\\"/wiki/Alf_Bayrle\\" title=\\"Alf Bayrle\\">Alf Bayrle</a>, <a href=\\"/wiki/Louise_Nevelson\\" title=\\"Louise Nevelson\\">Louise Nevelson</a>, <a href=\\"/wiki/Wolfgang_Paalen\\" title=\\"Wolfgang Paalen\\">Wolfgang Paalen</a>, <a href=\\"/wiki/Worth_Ryder\\" title=\\"Worth Ryder\\">Worth Ryder</a><sup id=\\"cite_ref-6\\" class=\\"reference\\"><a href=\\"#cite_note-6\\">[6]</a></sup> and <a href=\\"/wiki/Alfred_Julio_Jensen\\" class=\\"mw-redirect\\" title=\\"Alfred Julio Jensen\\">Alfred Jensen</a>, were among his students. He closed this school in 1932, the year he immigrated to the U.S.</p>"'
});

suite.on('cycle', function onCycle(event) {
  benchmarks.add(event.target);
});

suite.on('complete', function onComplete() {
  benchmarks.log();
});

suite.run({'async': false});
