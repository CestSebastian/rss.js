'use strict';

Rss.Canvas = function(appendTo, canvasId, width, height) {
    if (!appendTo) appendTo = document.body;
    if (!canvasId) canvasId = 'canvas';
    
    var _canvas = document.createElement('canvas');
    _canvas.setAttribute('id', canvasId);
    
    _canvas.width = width || appendTo.offsetWidth;
    _canvas.height = height || appendTo.offsetHeight;
    
    appendTo.appendChild(_canvas);
    
    this.getCanvas = function() {
        return _canvas;
    }
    
    this.getContext2d = function() {
        return _canvas.getContext('2d');
    }
    
    this.destroy = function() {
        appendTo.removeChild(_canvas);
    }
}
