window.applyGradientTemplate = function(type) {
    const canvas = getCanvas();
    if (!canvas) return; // Canvas නැත්නම් නතර කරන්න

    const obj = canvas.getActiveObject();
    if (!obj) {
        alert("Select an object first!");
        return;
    }
    console.log("Gradient Script Loaded");

    // Fabric.js Gradient Object එක නිර්මාණය කිරීම
    const gradient = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'pixels', // හෝ 'percentage'
        coords: { x1: 0, y1: 0, x2: obj.width, y2: 0 },
        colorStops: type === 'fade' ? {
            0: document.getElementById("gradColor1").value,
            1: 'rgba(0, 0, 0, 0)'
        } : {
            0: document.getElementById("gradColor1").value,
            0.5: document.getElementById("gradColor2").value,
            1: '#000000'
        }
    });

    // මෙතැනදී setGradient වෙනුවට fill ලෙස අගය දීම සිදු කරයි
    obj.set("fill", gradient);
    
    canvas.requestRenderAll();
    
    if (typeof saveState === "function") saveState();
    closeGradientModal();
};
