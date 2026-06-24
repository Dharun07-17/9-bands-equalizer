import React from 'react'
import Srow from './Srow'

const Panel = ({ eq, setEq }) => {
  const savePreset = async () => {
    try {
      let presetPath;

      if (window.electronAPI?.savePreset) {
        presetPath = await window.electronAPI.savePreset(eq);
      } else if (window.require) {
        const { ipcRenderer } = window.require('electron');
        presetPath = await ipcRenderer.invoke('save-eq-preset', eq);
      } else {
        throw new Error('Electron API is unavailable in this renderer.');
      }

      alert(`Preset saved to ${presetPath}`);
    } catch (error) {
      console.error('Failed to save preset:', error);
      alert(`Failed to save preset: ${error.message || error}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col gap-4">
        <div className="box-border w-[635px] h-[360px] bg-white/5 rounded-4xl shadow-[0_0_50px_rgba(0,0,0,0.45)]">
          <Srow eq={eq} setEq={setEq} />
        </div>

        <div className="box-border w-[636px] h-[100px] bg-neutral-900/70 rounded-4xl shadow-[0_0_50px_rgba(0,0,0,0.35)]">
          <div className="flex justify-center py-8 w-24">
            <button
              onClick={savePreset}
              className="text-black cursor-pointer p-1.5 bg-white/90 rounded-xl w-16 font-semibold border-0 border-white hover:bg-white/60 ease-in-out"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel