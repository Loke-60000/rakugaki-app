import React, { Component } from 'react';
import '../css/rakugaki_draw.css';
import '../css/ToolBar.css';
import '../Components/rakugakidraw.js';
import NavBanner from '../Components/NavBanner';
import drawinglogo from '../assets/rakugakidraw_logosvg.svg';
import ToolBar from '../Components/ToolBar';


class DrawingCanvas extends Component {
    
    componentDidMount() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const undoButton = document.getElementById('undo');
        undoButton.addEventListener('click', undo);
        const redoButton = document.getElementById('redo');
        redoButton.addEventListener('click', redo); 
        let isDrawing = false;
        let currentColor = 'black';
        let currentSize = 10;
        let currentTool = 'pen';
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        const controls = document.getElementById('controls');
        controls.addEventListener('click', setTool); 
        function startDrawing(event) {
          isDrawing = true;
          ctx.beginPath();
          ctx.moveTo(event.offsetX, event.offsetY);
        }
      
      function draw(event) {
        if (isDrawing) {
          ctx.lineTo(event.offsetX, event.offsetY);
          ctx.strokeStyle = currentColor;
          ctx.lineWidth = currentSize;
          ctx.stroke();
          states.push({
            image: canvas.toDataURL(),
            stroke: {
              color: currentColor,
              width: currentSize,
              x: event.offsetX,
              y: event.offsetY
            }
          });
          currentState++;
        }
      }
      
      function stopDrawing() {
        isDrawing = false;
      }
      
      function setTool(event) {
        if (event.target.id === 'pen') {
          currentTool = 'pen';
          currentColor = 'black';
        } else if (event.target.id === 'eraser') {
          currentTool = 'eraser';
          currentColor = 'white';
        } else if (event.target.id === 'small') {
          if(currentTool === 'pen') currentColor = 'black';
          currentSize = 10;
        } else if (event.target.id === 'medium') {
          if(currentTool === 'pen') currentColor = 'black';
          currentSize = 20;
        } else if (event.target.id === 'large') {
          if(currentTool === 'pen') currentColor = 'black';
          currentSize = 30;
        } else if (event.target.id === 'clear') {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else if (event.target.id === 'download') {
          downloadCanvas();
        }
      }
      
      function downloadCanvas() {
        const link = document.createElement('a');
        link.download = 'image.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
      }
        
        //=====================================================
        
      let currentState = 0;
      let states = [];
        
        // Push the initial state of the canvas onto the states array
      states.push(canvas.toDataURL());
        
      function undo() {
        if (currentState > 0) {
          currentState--;
          // Redraw the previous state of the canvas, but remove the last stroke
          const image = new Image();
          image.src = states[currentState].image;
          image.onload = function() {
            ctx.drawImage(image, 0, 0);
          };
        }
      }
        
      function redo() {
        if (currentState < states.length - 1) {
          currentState++;
          const image = new Image();
          image.src = states[currentState].image;
          image.onload = function() {
            ctx.drawImage(image, 0, 0);
          };
        }
      }
    }
    render() {
      return (
          <div id='background'>
            <NavBanner/>
            <ToolBar/>
            <img id='logodraw' src={drawinglogo}/>
              <div id="controls">
                  <button className="tool" id="pen"></button>
                  <button className="tool" id="eraser"></button>
                  <button className="tool" id="small"></button>
                  <button className="tool" id="medium"></button>
                  <button className="tool" id="large"></button>
                  <button className="tool" id="clear"></button>
                  <button className="tool" id="undo"></button>
                  <button className="tool" id="redo"></button>
                  <button className="tool" id="download"></button>
              </div>
              <div className="container">
                  <canvas id="canvas" width="500" height="300"></canvas>
              </div>
          </div>
          
      );
}}


export default DrawingCanvas;
