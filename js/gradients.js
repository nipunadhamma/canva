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

// 3. Gradient Templates ක්‍රියාත්මක කිරීමට
window.applyGradientTemplate = function(type) {
    const canvas = getCanvas();
    const obj = canvas.getActiveObject();

    if (!obj) {
        alert("Select an object (Text or Shape) first!");
        return;
    }

    let gradientConfig = {};

    // Template 1: Fade (එක පැත්තක් Transparent)
    if (type === 'fade') {
        gradientConfig = {
            type: 'linear',
            x1: 0, y1: 0, x2: obj.width, y2: 0,
            colorStops: {
                0: document.getElementById("gradColor1").value,
                1: 'rgba(0, 0, 0, 0)' // Transparent
            }
        };
    } 
    // Template 2: Multi-color (තැන් කිහිපයක පාට)
    else if (type === 'multi') {
        gradientConfig = {
            type: 'linear',
            x1: 0, y1: 0, x2: obj.width, y2: 0,
            colorStops: {
                0: document.getElementById("gradColor1").value,
                0.5: document.getElementById("gradColor2").value,
                1: '#000000' // අගට කළු පාට
            }
        };
    }

    // Fabric.js වස්තුවට gradient එක ලබා දීම
    obj.setGradient('fill', gradientConfig);
    
    // Canvas එක update කිරීම
    canvas.requestRenderAll();
    
    // History (Undo/Redo) සක්‍රීය කිරීම
    if (typeof saveState === "function") {
        saveState();
    }

    closeGradientModal();
};
