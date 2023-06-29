const fs = require('fs');
const nunjucks = require('nunjucks');
var params =  { serviceName: "Name of example service", navigationItems: [
  {
    href: "#",
    text: 'service link 1',
    id: 'servicelink1'
  },{
    href: "#",
    text: 'service link 2',
    id: 'servicelink2'
  },{
    href: "#",
    text: 'service link 3',
    id: 'servicelink3'
  }] }
const previewHtml = nunjucks.render("src/preview.njk");
const headerHtml = nunjucks.render("src/template.njk", {params: params});

fs.writeFile(__dirname + '/dist/preview.html', previewHtml, err => {
  if (err) {
    console.error(err);
  }
  console.log('header preview generated');
});

fs.writeFile(__dirname + '/dist/html/header.html', headerHtml, err => {
  if (err) {
    console.error(err);
  }
  console.log('header HTML copied to dist folder');
});

fs.copyFile("src/service-header.njk", __dirname + '/dist/nunjucks/service-header.njk', (err) => {
  if (err) throw err;
  console.log('header nunjucks macro copied to dist folder');
});

fs.copyFile("src/template.njk", __dirname + '/dist/nunjucks/template.njk', (err) => {
  if (err) throw err;
  console.log('header nunjucks template copied to dist folder');
});


fs.copyFile("src/service-header.js", __dirname + '/dist/scripts/service-header.js', (err) => {
  if (err) throw err;
  console.log('service-header.js copied to dist folder');
});

fs.copyFile("src/service-header.scss", __dirname + '/dist/styles/service-header.scss', (err) => {
  if (err) throw err;
  console.log('service-header.scss file copied to dist folder');
});

fs.copyFile("src/service-header-no-imports.scss", __dirname + '/dist/styles/service-header-no-imports.scss', (err) => {
  if (err) throw err;
  console.log('service-header-no-imports.scss file copied to dist folder');
});