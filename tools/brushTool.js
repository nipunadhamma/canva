// tools/brushTool.js
import { canvas, ctx } from "../core/canvas.js";

let isDrawing = false;
export let isBrushActive = false; // Brush එක සක්‍රියදැයි පරීක්ෂා කිරීමට

export function setBrushActive(status) {
    isBrushActive = status;
}

export function initBrushTool() {
    canvas.addEventListener('mousedown', (e) => {
        if (!isBrushActive) return; // Brush එක තෝරා නැත්නම් නතර කරන්න
        isDrawing = true;
        draw(e);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) draw(e);
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        ctx.beginPath(); // නව රේඛාවක් ආරම්භ කිරීමට
    });

    canvas.addEventListener('mouseleave', () => {
         isDrawing = false;
         ctx.beginPath();
   });
}

// tools/brushTool.js (යාවත්කාලීන කළ කොටස)
function draw(e) {
    // 1. Brush එක සක්‍රිය නැත්නම් හෝ drawing එක පටන් ගෙන නැත්නම් නතර කරන්න
    if (!isDrawing || !isBrushActive) return; 
    
    const colorPicker = document.getElementById('colorPicker');
    const sizeSlider = document.getElementById('sizeSlider');
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = sizeSlider.value;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round'; // මෙය මෙතැනට දැමීම සුදුසුයි
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

