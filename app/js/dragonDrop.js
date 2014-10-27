//References: 
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations#draggableattribute
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Recommended_Drag_Types
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Dragging_and_Dropping_Multiple_Items


var dragAndDropModule = function(draggableElement){
  'use strict';

  var elemYoureDragging = null,
      dataString        = 'text/html', //needs to be changed for IE LOL 
      startingPosition  = 0,
      that              = this;
      
}; //Don't know if this is best as a self executing bit of thing but seems like it'd be good

dragAndDropModule('[draggable]');
console.log('hello');
