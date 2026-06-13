// ================================
// GRADIENT SYSTEM (FIXED VERSION)
// ================================

// 1. Modal පාලනය
window.openGradientModal = function() {
    const modal = document.getElementById('gradientEditor');
    if (modal) modal.classList.remove('hidden');
};

window.closeGradientModal = function() {
    const modal = document.getElementById('gradientEditor');
    if (modal) modal.classList.add('hidden');
};

// 2. Gradient Apply කිරීම (Fabric.js v5+ සඳහා නිවැරදි ක්‍රමය)
window.applyGradient = function() {
    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj) {
        alert("Please select an object first!");
        return;
    }

    // වැදගත්: මෙතැනදී HTML Input එකෙන් අගයන් ලබා ගනී
    const color1 = document.getElementById("gradColor1").value; 
    const color2 = document.getElementById("gradColor2").value;

    console.log("Applying colors:", color1, color2); // දෝෂ පරීක්ෂාවට

    const gradient = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'pixels',
        coords: { x1: 0, y1: 0, x2: obj.width, y2: 0 },
        colorStops: [
            { offset: 0, color: color1 }, // මෙතැනට වර්ණය ලැබිය යුතුයි
            { offset: 1, color: color2 }
        ]
    });

    obj.set("fill", gradient);
    canvas.requestRenderAll();
    
    if (typeof saveState === "function") saveState();
};
