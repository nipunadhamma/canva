// main.js - ප්‍රධාන ගොනුව
import { initCanvas, clearCanvas } from "./core/canvas.js"; 
import { initBrushTool, setBrushActive } from "./tools/brushTool.js"; // setBrushActive මෙතැනට ගෙන එන්න
import { initCanvasModal } from "./ui/modal.js";
import { initPropertyPanel } from "./ui/property.js";

document.addEventListener('DOMContentLoaded', () => {
    console.log("මෘදුකාංගය සාර්ථකව ආරම්භ විය!");

    initCanvas(); 
    initPropertyPanel(); 
    initBrushTool(); 
    initCanvasModal(); 

    // Brush Tool එක සක්‍රිය කිරීමේ බොත්තම
    const brushBtn = document.getElementById('brushBtn');
    if (brushBtn) {
        brushBtn.addEventListener('click', () => {
            setBrushActive(true); 
            console.log("Brush Tool තෝරා ගන්නා ලදී.");
        });
    }

    // මෙනු අයිතම සඳහා
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(item.innerText + " මෙනුව තෝරා ගන්නා ලදී.");
        });
    });

    // ටූල් අයිකන් සඳහා
    const tools = document.querySelectorAll('.tool-icon');
    tools.forEach(tool => {
        tool.addEventListener('click', () => {
            console.log("ඔබ තෝරාගත් ටූල් එක: " + tool.innerText);
        });
    });

    // Clear බොත්තම
    document.getElementById('clearBtn').addEventListener('click', () => {
        clearCanvas();
        console.log("කැන්වස් එක පිරිසිදු කරන ලදී.");
    });
});