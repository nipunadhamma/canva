// ================================
// GRADIENT SYSTEM (FINAL VERSION)
// ================================

// 1. Modal එක පෙන්වීමට
window.openGradientModal = function() {
    document.getElementById('gradientModal').style.display = 'block';
};

// 2. Modal එක වැසීමට
window.closeGradientModal = function() {
    document.getElementById('gradientModal').style.display = 'none';
};



window.applyGradient = function () {
    const activeObj = canvas.getActiveObject();

    if (!activeObj) {
        alert("Select an object first.");
        return;
    }

    // 1. වර්ණ ලබා ගැනීම
    const color1 = document.getElementById("gradColor1").value;
    // Transparent සඳහා rgba(0,0,0,0) හෝ ඕනෑම වර්ණයක අවසාන අගය 0 කිරීම
    const color2 = 'rgba(0, 0, 0, 0)'; 

    // 2. Gradient එක නිර්මාණය කිරීම
    const gradient = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'boundingbox',
        coords: { 
            x1: 0, 
            y1: 0, 
            x2: activeObj.width, 
            y2: 0 
        },
        colorStops: [
            { offset: 0, color: color1 }, // වම් පැත්ත: තෝරාගත් පාට
            { offset: 1, color: color2 }  // දකුණු පැත්ත: Transparent
        ]
    });

    // 3. වස්තුවට Gradient එක අදාළ කිරීම
    activeObj.set("fill", gradient);

    // 4. Canvas එක update කිරීම
    canvas.requestRenderAll();

    // 5. History සඳහා save කිරීම
    if (typeof saveState === "function") {
        saveState();
    }
};
