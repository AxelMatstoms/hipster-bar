const electron = require("electron");
const {app, BrowserWindow} = electron;
const path = require('path')
const url = require('url')

function createWindow () {
    // Create the browser window.
    let screen = electron.screen;
    let display = screen.getPrimaryDisplay();
    let width = display.bounds.width;
    
    win = new BrowserWindow({width, height: 24, resizable: false, alwaysOnTop: true, focusable: false})
    //win = new BrowserWindow({width: 800, height: 600, resizable: false})
    win.setMenu(null);
    win.setPosition(0, 0);
    //win.webContents.openDevTools();
    
    // and load the index.html of the app.
    win.loadURL(url.format({
	pathname: path.join(__dirname, 'index.html'),
	protocol: 'file:',
	slashes: true
    }))
}

app.on('ready', createWindow)
