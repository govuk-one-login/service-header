const fs = require('fs');
const nunjucks = require('nunjucks');

var previewHtml = nunjucks.render("src/preview.njk");
var headerHtml = nunjucks.render("src/service-header.njk");

fs.writeFile(__dirname + '/dist/preview.html', previewHtml, err => {
  if (err) {
    console.error(err);
  }
  console.log('header preview generated');
});

fs.writeFile(__dirname + '/dist/header.html', headerHtml, err => {
  if (err) {
    console.error(err);
  }
  console.log('header copied to dist folder');
});

fs.copyFile("src/service-header.js", __dirname + '/dist/service-header.js', (err) => {
  if (err) throw err;
  console.log('service-header.js copied to dist folder');
});

fs.copyFile("src/service-header.scss", __dirname + '/dist/service-header.scss', (err) => {
  if (err) throw err;
  console.log('service-header.scss file copied to dist folder');
});