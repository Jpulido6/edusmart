const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let backendProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      contextIsolation: true,
    },
  });

  // En producción, carga el build de React
  // win.loadFile(path.join(__dirname, '../frontend/dist/index.html'));

  // En desarrollo, podrías usar:
  win.loadURL('http://localhost:5173'); // si usas Vite
}

function startBackend() {
  backendProcess = spawn('npm', ['run', 'start'], {
    cwd: path.join(__dirname, '../backend'),
    shell: true,
    stdio: 'inherit',
  });
}

app.whenReady().then(() => {
  startBackend();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
  if (backendProcess) backendProcess.kill();
});
