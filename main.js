const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

var screenWidth = 1920
var windowHeight = 60

let win  

function createWindow() { 
   win = new BrowserWindow({width: screenWidth, height: windowHeight, alwaysOnTop: true, y: 0, x: 0, transparent: true, frame: false}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true
   })) 
   win.setIgnoreMouseEvents(true, {forward: true})
}  

app.on('ready', createWindow) 