window.onload = function () {

  try {

    // ======================
    // 1. INIT CANVAS
    // ======================
    initCanvas();

    const canvas = getCanvas();
    if (!canvas) throw new Error("Canvas initialization failed!");

    // ======================
    // 2. TEXT UI EVENTS
    // ======================
    canvas.on("selection:created", updateTextUI);
    canvas.on("selection:updated", updateTextUI);
    canvas.on("object:modified", updateTextUI);

    // ======================
    // 3. LAYERS SYSTEM
    // ======================
    canvas.on("object:added", syncLayers);
    canvas.on("object:removed", syncLayers);
    canvas.on("object:modified", syncLayers);

    syncLayers(); // initial render

    // ======================
    // 4. OPTIONAL SYSTEMS
    // ======================
    initHistoryEvents?.();
    saveState?.();

     if (typeof loadFonts === 'function') {
        loadFonts(); // Fonts ලෝඩ් කිරීම ආරම්භ කරයි
    }

    // ======================
    // 5. CONTEXT MENU
    // ======================
    createContextMenu();
    bindContextMenu(canvas);

    console.log("Editor loaded and ready.");

  } catch (err) {
    console.error("Initialization error:", err.message);
  }

};
