const { app, globalShortcut, BrowserWindow, webFrame  } = require('electron')
const url = require('url') 
const path = require('path')  

var screenWidth = 1920
var windowHeight = 25

let win
var i = 1

function createWindow() { 
    win = new BrowserWindow({width: screenWidth, height: windowHeight, minHeight : 65, alwaysOnTop: true, y: 0, x: 0, transparent: true, frame: false})
    win.loadURL(url.format ({ 
       pathname: path.join(__dirname, 'index.html'), 
       protocol: 'file:', 
       slashes: true
    })) 
   win.setIgnoreMouseEvents(true, {forward: true})
 }  

app.whenReady().then(() => {
  setTimeout(createWindow, 400)
  const ret = globalShortcut.register('Alt+H', () => {
  if (i%2) {
    win.setIgnoreMouseEvents(false)
  } else {
    win.setIgnoreMouseEvents(true, {forward: true})
  }
  i++
})})
