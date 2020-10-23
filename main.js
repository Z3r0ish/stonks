const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 60, alwaysOnTop: true, y: 0, x: 0, transparent: true, frame: false}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true
   })) 
}  

app.on('ready', createWindow) 