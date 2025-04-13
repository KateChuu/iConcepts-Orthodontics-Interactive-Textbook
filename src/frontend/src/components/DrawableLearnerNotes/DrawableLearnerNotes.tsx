import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import "./DrawableLearnerNotes.css"; // Import CSS

const DrawableLearnerNotes: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [isDrawingMode, setIsDrawingMode] = useState(true);

  // Initialize Fabric.js canvas
  useEffect(() => {
    if (canvasRef.current) {
      const newCanvas = new fabric.Canvas(canvasRef.current, {
        height: 600,
        width: 800,
        backgroundColor: "#fff",
        isDrawingMode: true,
      });

      newCanvas.freeDrawingBrush = new fabric.PencilBrush(newCanvas);
      newCanvas.freeDrawingBrush.color = "black";
      newCanvas.freeDrawingBrush.width = 5;

      newCanvas.renderAll();
      setCanvas(newCanvas);

      return () => {
        newCanvas.dispose();
      };
    }
  }, []);

  const toggleDrawingMode = () => {
    if (canvas) {
      const newMode = !canvas.isDrawingMode;
      canvas.isDrawingMode = newMode;
      setIsDrawingMode(newMode);
    }
  };

  const clearCanvas = () => {
    if (canvas) {
      canvas.clear();
      canvas.backgroundColor = "#fff";
      canvas.renderAll();
    }
  };

  return (
    <div>
      <div
        style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
      >
        <label className="small-switch">
          <input
            type="checkbox"
            checked={isDrawingMode}
            onChange={toggleDrawingMode}
          />
          <span className="small-slider round"></span>
        </label>
        <span style={{ marginLeft: "10px" }}>
          {isDrawingMode ? "Drawing Enabled" : "Drawing Disabled"}
        </span>
      </div>

      <div style={{ position: "relative", width: "800px", height: "600px" }}>
        <canvas
          ref={canvasRef}
          style={{ display: "block", border: "1px solid #ddd" }}
        />

        {/* Clear Button */}
        <button onClick={clearCanvas} className="clear-button">
          ✕
        </button>
      </div>
    </div>
  );
};

export default DrawableLearnerNotes;
