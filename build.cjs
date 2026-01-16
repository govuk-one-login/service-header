const fs = require('fs');
const nunjucks = require('nunjucks');

var params =  { 
  serviceNavigationParams: {
  serviceName: "Name of example service", 
  navigation: [
    {
      href: "#navigation1",
      text: "Navigation item 1"
    },
    {
      href: "#navigation2",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#navigation3",
      text: "Navigation item 3"
    }
  ] 
}}

// generate header HTML preview from nunjucks
const previewHtml = nunjucks.render("src/preview.njk");
// generate header HTML from the nunjucks template
const headerHtml = nunjucks.render("src/nunjucks/template.njk", { params: params });

fs.mkdirSync(__dirname + '/dist', { recursive: true });
fs.mkdirSync(__dirname + '/dist/html', { recursive: true });
fs.mkdirSync(__dirname + '/dist/scripts', { recursive: true });

fs.writeFile(__dirname + '/dist/preview.html', previewHtml, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('header preview generated');
  }
});

fs.writeFile(__dirname + '/dist/html/header.html', headerHtml, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('header HTML generated');
  }
});

fs.cp('src/nunjucks', 'dist/nunjucks/service-header', { recursive: true } , function (err) {
  if (err) throw err;
  console.log('copied njk templates to dist folder');
})

fs.cp('src/scripts/service-header.js', 'dist/scripts/service-header.js', function (err) {
  fs.appendFileSync('dist/scripts/service-header.js',fs.readFileSync("src/scripts/export.js").toString(), (err) => {
    if (err) {
      throw err;
    }
    else {
      console.log("created service-header.js")
    }
  });
});

fs.cp('src/scripts/service-header.js', 'dist/scripts/init-service-header.js', function (err) {
  fs.appendFileSync('dist/scripts/init-service-header.js',fs.readFileSync("src/scripts/init-service-header.js").toString(), (err) => {
    if (err) {
      throw err;
    }
    else {
      console.log("created init-service-header.js")
    }
  });
});

fs.cp('src/styles', 'dist/styles', { recursive: true } , function (err) {
  if (err) throw err;
  console.log('copied sass to dist folder');
}); 