// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs')
const ReactDOMServer = require('react-dom/server')
const babel = require("@babel/core");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('jsx-to-svg.previewSvg', async function ({ fsPath }) {

		const jsx = fs.readFileSync(fsPath).toString();
		// The code you place here will be executed every time your command is executed
		try {
			const compiledJsx = await babel.transformAsync(jsx, {
				"presets": [require('@babel/preset-env'), require("@babel/preset-react")]
			})

			fs.writeFile(`${__dirname}/template.js`, compiledJsx.code, (err) => {

				delete require.cache[require.resolve('./template')];
				const { default: app } = require('./template')

				const appHTML = ReactDOMServer.renderToString(
					app()
				);

				const panel = vscode.window.createWebviewPanel(
					'svgRender',
					'JSX to SVG',
					vscode.ViewColumn.One,
					{}
				);
				// And set its HTML content
				panel.webview.html = getWebviewContent(appHTML);
				if (err) {
					vscode.window.showErrorMessage(err)
					return
				}
			})
		} catch (e) {
			vscode.window.showErrorMessage(e.message)
		}
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent(svg) {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>JSX to SVG</title>
  </head>
  <body style="background:#FAFAFA;padding:1rem">
	  ${svg}
  </body>
  </html>`;
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
