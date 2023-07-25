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
// generate header HTML preview from nunjucks
const previewHtml = nunjucks.render("src/preview.njk");
// generate header HTML from the nunjucks template
const headerHtml = nunjucks.render("src/nunjucks/template.njk", { params: params });

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

fs.cp('src/nunjucks', 'dist/nunjucks/di-govuk-one-login-service-header', { recursive: true } , function (err) {
  if (err) throw err;
  console.log('copied njk templates to dist folder');
})
fs.cp('src/scripts', 'dist/scripts', { recursive: true } , function (err) {
  if (err) throw err;
  console.log('copied scripts to dist folder');
}); 

fs.cp('src/styles', 'dist/styles', { recursive: true } , function (err) {
  if (err) throw err;
  console.log('copied sass to dist folder');
}); 

