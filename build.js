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

fs.mkdirSync(__dirname + '/dist', { recursive: true });
fs.mkdirSync(__dirname + '/dist/html', { recursive: true });
fs.mkdirSync(__dirname + '/dist/scripts', { recursive: true });

fs.writeFile(__dirname + '/dist/preview.html', previewHtml, err => {
  if (err) {
    console.error(err);
  }
  console.log('header preview generated');
  removeNewlines('dist/preview.html');
});

fs.writeFile(__dirname + '/dist/html/header.html', headerHtml, err => {
  if (err) {
    console.error(err);
  }
  console.log('header HTML copied to dist folder');
  removeNewlines('dist/html/header.html');
});

fs.cp('src/nunjucks', 'dist/nunjucks/di-govuk-one-login-service-header', { recursive: true } , function (err) {
  if (err) throw err;
  console.log('copied njk templates to dist folder');
})

fs.cp('src/scripts/service-header.js', 'dist/scripts/service-header.js', { recursive: true } , function (err) {
  if (err) throw err;
  console.log('copied main header script to dist folder');
})

fs.cp('src/scripts/service-header.js', 'dist/scripts/init-service-header.js', function (err) {
  fs.appendFileSync('dist/scripts/init-service-header.js', fs.readFileSync('src/scripts/init-service-header.js').toString(), (err) => {
    if (err) {
      throw err;
    }
    else {
      console.log("created init-service-header.js")
    }
  }); 
})

fs.cp('src/styles', 'dist/styles', { recursive: true } , function (err) {
  if (err) throw err;
  console.log('copied sass to dist folder');
  removeNewlines('dist/styles/service-header.css');

  fs.readFile('dist/styles/service-header.css', 'utf8', (err, fileContent) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const linesArray = fileContent.split('\n');
    const filteredLines = linesArray.filter(line => line.trim() !== '');
    const updatedContentWithoutNewlines = filteredLines.join('');

    // Write content without whitespaces to service-header.min.css
    fs.writeFile('dist/styles/service-header.min.css', updatedContentWithoutNewlines, 'utf8', (error) => {
      if (error) {
          console.error('Error writing to the file:', error);
          return;
      }
      console.log('created service-header.min.css.');
  });
});

}); 

function removeNewlines (fileName) {
  fs.readFile(fileName, 'utf8', (err, fileContent) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const linesArray = fileContent.split('\n');
    const filteredLines = linesArray.filter(line => line.trim() !== '');
    const updatedContent = filteredLines.join('\n');

    // Write the updated content back to the file
    fs.writeFile(fileName, updatedContent, 'utf8', (error) => {
        if (error) {
            console.error('Error writing to the file:', error);
            return;
        }
        console.log(`removed blank lines from ${fileName}.`);
    });
  });
}