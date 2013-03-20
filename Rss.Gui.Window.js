'use strict';

Rss.Gui.Window = function (rssCanvas, title, content, w, h, posX, posY) {
    var _ctx = rssCanvas.getContext2d(),
            _focus = false;
    
    w = w || 200;
    h = h || 300;
    
    posX = posX || 0;
    posY = posY || 0;
    
    this.draw = function () {
        _ctx.fillStyle = 'rgba(51, 51, 51, 0.3)';
        _ctx.fillRect(posX, posY, w, h);
        _ctx.fillStyle = '#333333';
        _ctx.strokeRect(posX, posY, w, h);
        _ctx.strokeRect(posX, posY, w, 20);
        _ctx.strokeRect(posX + w - 20, posY, 20, 20);
        
        _ctx.font = '12px Arial';
        _ctx.fillStyle = '#000000';
        
        _ctx.fillText('x', posX + w - 13, posY + 13);
        _ctx.fillText(title, posX + 5, posY + 15);
        _ctx.fillText(content, posX + 5, posY + 35);
    };
    
    
    this.hasFocus = function () {
        return _focus;
    };
    
    this.draw();
};