// References: 
//  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
//  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations#draggableattribute
//  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Recommended_Drag_Types

(function() {
  "use strict";
  var dragAndDropModule = function(draggableElements){


    var elemYoureDragging = null
        , dataString        = 'text/html' //needs to be changed for IE LOL 
        , startingPosition  = 0        
        , draggableElementArray = Array.prototype.slice.call(draggableElements) //Turn NodeList into array
        , dragonDrop = {}; //Put all our methods in a lovely object 
        


        dragonDrop.bindDragAndDropAbilities = function(elem, index, array) {
          console.log(elem);
          console.log(index);
          console.log(array);

          elem.setAttribute('draggable', 'true');
          elem.addEventListener('dragstart', dragonDrop.handleDragStartMove, false);
          elem.addEventListener('dragenter', dragonDrop.handleDragEnter, false);
          elem.addEventListener('dragover', dragonDrop.handleDragStartMove, false);
          elem.addEventListener('dragleave', dragonDrop.handleDragStartMove, false);
          elem.addEventListener('drop', dragonDrop.handleDragStartMove, false);
          elem.addEventListener('dragend', dragonDrop.handleDragStartMove, false);

        };

        dragonDrop.handleDragStartMove = function(e) {
          console.log('drag start');
          console.log('E', e);
          console.log(this.outerHTML);
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/html', this.outerHTML);

          var dragImg = document.createElement("img");
          dragImg.src = "img/poodle.jpg";

          e.dataTransfer.setDragImage(dragImg, 0, 0);

        };

        dragonDrop.handleDragEnter = function(e) {
          console.log('drag enter');
          console.log('E', e);          
        };

        dragonDrop.handleDragOver = function(e) {
          console.log('drag Over');
          console.log('E', e);          
        };

        dragonDrop.handleDragLeave = function(e) {
          console.log('drag leave');
          console.log('E', e);          
        };

        dragonDrop.handleDrop = function(e) {
          console.log('drop');
          console.log('E', e);          
        };

        dragonDrop.handleDragEnd = function(e) {
          console.log('drag end');
          console.log('E', e);          
        };


        draggableElementArray.forEach(dragonDrop.bindDragAndDropAbilities);
        
        
  };

  var allDraggableElements = document.querySelectorAll('.draggable-droppable');
  dragAndDropModule(allDraggableElements);

})();
