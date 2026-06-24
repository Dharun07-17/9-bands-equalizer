import { BrowserWindow, app, Menu, ipcMain } from "electron";
import { execFile } from "child_process";
import fs from "fs";
import path from "path";

function getEqualizerApoConfigPath() {
  const programFiles = process.env.ProgramFiles || "C:/Program Files";
  const programFilesX86 = process.env["ProgramFiles(x86)"] || "C:/Program Files (x86)";
  const candidatePaths = [
    path.join(programFiles, "EqualizerAPO", "config", "config.txt"),
    path.join(programFilesX86, "EqualizerAPO", "config", "config.txt"),
  ];

  for (const candidatePath of candidatePaths) {
    if (fs.existsSync(candidatePath)) {
      return candidatePath;
    }
  }

  return candidatePaths[0];
}

function tryReloadEqualizerApo() {
  const candidates = [
    "C:/Windows/System32/WindowsPowerShell/v1.0/powershell.exe",
    "powershell.exe",
  ];

  const commands = [
    [
      "-NoProfile",
      "-Command",
      "Get-Service EqualizerAPO -ErrorAction SilentlyContinue | Restart-Service -Force",
    ],
    [
      "-NoProfile",
      "-Command",
      "Get-Service AudioEndpointBuilder -ErrorAction SilentlyContinue | Restart-Service -Force",
    ],
  ];

  for (const exe of candidates) {
    for (const args of commands) {
      execFile(exe, args, () => {
        // Best effort only; ignore failures and keep going.
      });
    }
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 600,
    title: "9-bands-EQ",
    webPreferences: {
      preload: path.join(app.getAppPath(), "electron", "preload.cjs"),
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  Menu.setApplicationMenu(null);

  win.setBackgroundMaterial("acrylic");

  win.loadURL("http://localhost:5173");
}

ipcMain.handle("save-eq-preset", (_event, eq) => {
  const frequencies = [63, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];
  const lines = ["Preamp: 0 dB", ""];

  frequencies.forEach((freq, index) => {
    const gain = Number(eq?.[freq] ?? 0);
    lines.push(`Filter ${index + 1}: ON PK Fc ${freq} Hz Gain ${gain} dB Q 0.7`);
  });

  const presetPath = getEqualizerApoConfigPath();
  const dirPath = path.dirname(presetPath);

  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(presetPath, lines.join("\n"));
  tryReloadEqualizerApo();

  return presetPath;
});

app.whenReady().then(createWindow);

