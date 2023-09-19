const fs = require('fs');
const path = require('path');

function renameFiles() {
  const buildPathCss = path.resolve(__dirname, 'build/static/css');
  const buildPathJS =  path.resolve(__dirname, 'build/static/js');
  const indexPath =  path.resolve(__dirname, 'build', 'index.html');

  const jsFileName = 'showme.js'; // Replace with your desired JS filename
  const cssFileName = 'showme.css'; // Replace with your desired CSS filename
  const newJS = `<script defer="defer" src="static/js/showme.js"></script>`
  const newCss = `<link href="static/css/showme.css" rel="stylesheet">`
  try {
    const fileCcs = fs.readdirSync(buildPathCss);
    const fileJS = fs.readdirSync(buildPathJS);
    let indexContent = fs.readFileSync(indexPath, 'utf-8');
    
    // Find the JavaScript and CSS files
    const jsFile = fileJS.find((file) => file.startsWith('main.'));
    const cssFile = fileCcs.find((file) => file.endsWith('.css'));
    indexContent = indexContent.replace(`<script defer="defer" src="/static/js/${jsFile}"></script>`, newJS)
    indexContent = indexContent.replace(`<link href="/static/css/${cssFile}" rel="stylesheet">`, newCss);
    fs.writeFileSync(indexPath, indexContent);
    // Rename the JavaScript and CSS files
    if (jsFile) {
      fs.renameSync(path.join(buildPathJS, jsFile), path.join(buildPathJS, jsFileName));
    }

    if (cssFile) {
      fs.renameSync(path.join(buildPathCss, cssFile), path.join(buildPathCss, cssFileName));
    }

    console.log('Filenames set successfully.');
  } catch (error) {
    console.error('Error setting filenames:', error);
  }
}

renameFiles();
