import { resizeCanvas } from "../core/canvas.js";

export function initCanvasModal() {
    const modal = document.getElementById('canvasModal');
    document.getElementById('canvasSettingsBtn').onclick = () => modal.style.display = 'block';
    document.getElementById('closeBtn').onclick = () => modal.style.display = 'none';

    document.getElementById('applyBtn').onclick = () => {
        const w = document.getElementById('cWidth').value;
        const h = document.getElementById('cHeight').value;
        const color = document.getElementById('cColor').value;
        resizeCanvas(w, h, color);
        modal.style.display = 'none';
    };

    // Preset තෝරාගත් විට ප්‍රමාණය වෙනස් කිරීම
    document.getElementById('presetSelect').onchange = (e) => {
        const val = e.target.value;
        if(val === 'youtube') { document.getElementById('cWidth').value = 1280; document.getElementById('cHeight').value = 720; }
        else if(val === 'fb') { document.getElementById('cWidth').value = 1080; document.getElementById('cHeight').value = 1080; }
        else if(val === 'a5') { document.getElementById('cWidth').value = 835; document.getElementById('cHeight').value = 595; }
    };
}