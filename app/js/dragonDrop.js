// References: 
//  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
//  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations#draggableattribute
//  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Recommended_Drag_Types

(function() {
  "use strict";
  var dragAndDropModule = function(draggableElements){


    var elemYoureDragging = null
        , dataString        = 'text/html' //needs to be changed for IE LOL - also not sure if should change for text/plain etc 
        , startingPosition  = 0        
        , draggableElementArray = Array.prototype.slice.call(draggableElements) //Turn NodeList into array
        , dragonDrop = {}; //Put all our methods in a lovely object 
        


        dragonDrop.bindDragAndDropAbilities = function(elem) {
          elem.setAttribute('draggable', 'true');
          elem.addEventListener('dragstart', dragonDrop.handleDragStartMove, false);
          elem.addEventListener('dragenter', dragonDrop.handleDragEnter, false);
          elem.addEventListener('dragover', dragonDrop.handleDragOver, false);
          elem.addEventListener('dragleave', dragonDrop.handleDragLeave, false);
          elem.addEventListener('drop', dragonDrop.handleDrop, false);
          elem.addEventListener('dragend', dragonDrop.handleDragEnd, false);

          elem.addEventListener('drop', dragonDrop.handleDrop, false);
        };



        dragonDrop.handleDragStartMove = function(e) {
          var dragImg = document.createElement("img");
          dragImg.src = "img/poodle.jpg";
          
          e.dataTransfer.effectAllowed = 'copy';
          e.dataTransfer.setData(dataString, this.outerHTML);
          //e.dataTransfer.setDragImage(dragImg, 20, 50);

          //console.log(e);
        };

        dragonDrop.handleDragEnter = function(e) {
          console.log('drag enter');
          console.log('E', e);

        };

        dragonDrop.handleDragOver = function(e) {
          console.log('drag Over');
          console.log('E', e);     
          e.preventDefault();
          e.dataTransfer.dropEffect = 'copy';     
        };

        dragonDrop.handleDragLeave = function(e) {
          console.log('drag leave');
          console.log('E', e);          
        };

        dragonDrop.handleDrop = function(e) {
          console.log('drop');
          console.log('E', e);

          var data = e.dataTransfer.getData(dataString);
          e.target.innerHTML = data;
          console.log('DATA', data);

          e.preventDefault();
          console.log('DROP', e);
        };

        dragonDrop.handleDragEnd = function(e) {
          console.log('drag end');
          console.log('E', e);   


        };

        // Actiavte Drag and Dropping on whatever element
        draggableElementArray.forEach(dragonDrop.bindDragAndDropAbilities);
        
        
  };

  var allDraggableElements = document.querySelectorAll('.draggable-droppable');
  dragAndDropModule(allDraggableElements);

})();
