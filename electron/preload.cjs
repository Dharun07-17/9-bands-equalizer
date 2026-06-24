const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  savePreset: (eq) => ipcRenderer.invoke('save-eq-preset', eq),
});
