"use client";
import * as fabric from 'fabric';
import React, { useEffect, useRef } from 'react';

const TypeableLearnerNotes: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    
    const initializeCanvas = () => {
      if (!canvasRef.current) return; 

      const canvasElement = canvasRef.current;

      
      const context = canvasElement.getContext('2d');
      if (!context) {
        console.error('Canvas context is not available');
        return;
      }

      
      const canvas = new fabric.Canvas(canvasElement, {
        width: 800,
        height: 600,
        backgroundColor: 'lightgray',
      });
      fabricCanvasRef.current = canvas;

      
      const savedCanvas = localStorage.getItem('learnerNotesCanvas');
      if (savedCanvas) {
        canvas.loadFromJSON(savedCanvas, () => {
          canvas.renderAll(); 
          
          canvas.getObjects().forEach((obj) => {
            if (obj.type === 'textbox') {
              (obj as fabric.Textbox).set({ editable: true });
            }
          });
        });
      }

      
      const saveCanvas = () => {
        const canvasJSON = canvas.toJSON();
        localStorage.setItem('learnerNotesCanvas', JSON.stringify(canvasJSON));
      };

      
      canvas.on('object:added', saveCanvas);
      canvas.on('object:modified', saveCanvas);

      
      const addText = (x: number, y: number) => {
        const textBox = new fabric.Textbox('', {
          left: x,
          top: y,
          width: 200,
          fontSize: 20,
          fill: 'black',
          editable: true,
        });
        canvas.add(textBox);
        canvas.setActiveObject(textBox);
        textBox.enterEditing();
      };

      
      canvas.on('mouse:dblclick', (event) => {
        const pointer = canvas.getPointer(event.e);
        addText(pointer.x, pointer.y);
      });

      window.addEventListener('beforeunload', saveCanvas);

      return () => {
        
        window.removeEventListener('beforeunload', saveCanvas);
        
        if (fabricCanvasRef.current) {
          fabricCanvasRef.current.dispose();
          fabricCanvasRef.current = null; 
        }
      };
    };

    
    const rafId = requestAnimationFrame(initializeCanvas);

    return () => cancelAnimationFrame(rafId); 
  }, []);

  
  const clearCanvas = () => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.clear(); 
      fabricCanvasRef.current.backgroundColor = 'lightgray'; 
      fabricCanvasRef.current.renderAll(); 
      localStorage.removeItem('learnerNotesCanvas'); 
    }
  };

  return (
    <div>
      <button onClick={clearCanvas}>Clear Notes</button> {/* 清空按钮 */}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default TypeableLearnerNotes;
