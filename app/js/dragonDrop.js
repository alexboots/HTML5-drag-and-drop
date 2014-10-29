// References: 
//  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
//  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations#draggableattribute
//  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Recommended_Drag_Types

(function() {
  "use strict";
  var dragAndDropModule = function(draggableElements){

    var elemYoureDragging = null
        , dataString        = 'text/html'    
        , elementDragged = null
        , draggableElementArray = Array.prototype.slice.call(draggableElements) //Turn NodeList into array
        , dragonDrop = {}; //Put all our methods in a lovely object 

        // Change the dataString type since IE doesn't support setData and getData correctly. 
        dragonDrop.changeDataStringForIe = (function () {
            var userAgent = window.navigator.userAgent,
                msie = userAgent.indexOf('MSIE '),       //Detect IE
                trident = userAgent.indexOf('Trident/'); //Detect IE 11

            if (msie > 0 || trident > 0) {
                dataString = 'Text';
                return true;
            } else {
                return false;
            }
        })();

        
        dragonDrop.bindDragAndDropAbilities = function(elem) {
          elem.setAttribute('draggable', 'true');
          elem.addEventListener('dragstart', dragonDrop.handleDragStartMove, false);
          elem.addEventListener('dragenter', dragonDrop.handleDragEnter, false);
          elem.addEventListener('dragover',  dragonDrop.handleDragOver, false);
          elem.addEventListener('dragleave', dragonDrop.handleDragLeave, false);
          elem.addEventListener('drop',      dragonDrop.handleDrop, false);
          elem.addEventListener('dragend',   dragonDrop.handleDragEnd, false);
        };

        dragonDrop.handleDragStartMove = function(e) {
          var dragImg = document.createElement("img");
          dragImg.src = "img/poodle.jpg";
          
          elementDragged = this;

          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData(dataString, this.innerHTML);
          //e.dataTransfer.setDragImage(dragImg, 20, 50); //idk about a drag image 
        };

        dragonDrop.handleDragEnter = function(e) {
          if(elementDragged !== this) {
            this.style.border = "2px dashed #3a3a3a";
          }
        };

        dragonDrop.handleDragOver = function(e) {   
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';     
        };

        dragonDrop.handleDragLeave = function(e) {
          this.style.border = "2px solid transparent";
        };

        dragonDrop.handleDrop = function(e) {
         if(elementDragged !== this) {
            var data = e.dataTransfer.getData(dataString);
            elementDragged.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData(dataString);
          }
          this.style.border = "2px solid transparent";
          e.stopPropagation();
          return false;
        };

        dragonDrop.handleDragEnd = function(e) {
          this.style.border = "2px solid transparent";
        };

        // Actiavte Drag and Dropping on whatever element
        draggableElementArray.forEach(dragonDrop.bindDragAndDropAbilities);
  };

  var allDraggableElements = document.querySelectorAll('.draggable-droppable');
  dragAndDropModule(allDraggableElements);

})();
