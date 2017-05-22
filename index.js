'use strict';
const electron = require('electron');

const app = electron.app;

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 900,
		height: 550,
		title: "Stratus",
		icon: __dirname + '/icons/512x512.png'
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);
	win.setMenu(null)

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
