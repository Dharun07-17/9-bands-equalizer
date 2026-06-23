import { BrowserWindow, app,Menu } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 600,

    transparent: true,
   

   
  });

  Menu.setApplicationMenu(null);

  win.setBackgroundMaterial("acrylic");

  win.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);

