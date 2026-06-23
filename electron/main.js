import {BrowserWindow, app} from 'electron';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createwindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,

         transparent: true,
  frame: false,

  vibrancy: "fullscreen-ui",

       


    });

  win.loadURL('http://localhost:5173');
}

app.whenReady().then(createwindow);

