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
        , elementDragged = null
        , elementDroppedOn = null    
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
          
          elementDragged = this;

          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/html', this.innerHTML);
          //e.dataTransfer.setDragImage(dragImg, 20, 50);
        };

        dragonDrop.handleDragEnter = function(e) {
          console.log('drag enter');
          console.log('E', e);

        };

        dragonDrop.handleDragOver = function(e) {
          console.log('drag Over');
          console.log('E', e);     
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';     
        };

        dragonDrop.handleDragLeave = function(e) {
          console.log('drag leave');
          console.log('E', e);          
        };

        dragonDrop.handleDrop = function(e) {
          var data = e.dataTransfer.getData('text/html');

          console.log('________');
          console.log('________');
          console.log('__drop__');
          console.log('e', e);
          console.log('Path', e.path);
          console.log('Path[0]', e.path[0]);
          console.log('Path[0].classname', e.path[0].className);
          console.log('DataTranfer', e.dataTransfer);
          console.log('Data', data);
          console.log('srcelement', e.target);
          console.log('srcelement', e.srcElement);
          console.log('srcelement', e.srcElement.lastChild);
          console.log('innerHTML', e.target.innerHTML);
          console.log('array', draggableElementArray);

          elementDragged.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData('text/html');

          //e.target

          e.stopPropagation();
          return false;
        };

        dragonDrop.handleDragEnd = function(e) {
          console.log('________');
          console.log('________');
          console.log('__drag end__');
          console.log('E', e);
          console.log('array', draggableElementArray);
          
        };

        // Actiavte Drag and Dropping on whatever element
        draggableElementArray.forEach(dragonDrop.bindDragAndDropAbilities);
        
        
  };

  var allDraggableElements = document.querySelectorAll('.draggable-droppable');
  dragAndDropModule(allDraggableElements);

})();
