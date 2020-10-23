const { app, globalShortcut, BrowserWindow} = require('electron')
const url = require('url') 
const path = require('path')  

var screenWidth = 1920
var windowHeight = 40

app.commandLine.appendSwitch('enable-transparent-visuals');

let win
var i = 0

function createWindow() { 
    win = new BrowserWindow({width: screenWidth, height: windowHeight, alwaysOnTop: true, y: 0, x: 0, transparent: true, frame: false}) 
    win.loadURL(url.format ({ 
       pathname: path.join(__dirname, 'index.html'), 
       protocol: 'file:', 
       slashes: true
    })) 
   win.setIgnoreMouseEvents(true, {forward: true})
 }  
 
app.whenReady().then(() => {
  createWindow()
  const ret = globalShortcut.register('CommandOrControl+X', () => {
  if (i%2) {
    win.setIgnoreMouseEvents(false)
  } else {
    win.setIgnoreMouseEvents(true, {forward: true})
  }
  i++
})})
