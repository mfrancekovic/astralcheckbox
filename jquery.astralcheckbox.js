(function($) {
	
	var methods = {
    
		bindAnchorClick: function(anchor, originalCheckbox, changeEvent) {
							
			anchor.on("click", function(event){

				event.preventDefault();
				//first check if original checkbox was already checked
				if(methods.isChecked(originalCheckbox)) {
					//originalcheckbox was already checked				
					//remove checked class from the anchor for styling purposes
					anchor.removeClass('checked');
					
					//remove the checked status from the originalCheckbox
					originalCheckbox.prop('checked', false);		
				} else {
					//originalcheckbox was unchecked					
					//add checked class to the anchor for styling purposes
					anchor.addClass('checked');
					
					//add the checked status to the originalCheckbox
					originalCheckbox.prop('checked', true);
				}
				
				originalCheckbox.trigger(changeEvent);
								
			});

		},
		//returns true if originalCheckbox was selected, otherwise false
		isChecked: function(originalCheckbox) {
			var checked = originalCheckbox.is(':checked');
			return checked;
		}
    };

    $.fn.astralCheckbox = function (options) {
        
        
        var settings = $.extend( {
            wrapperClass: "astral-checkbox-wrapper",
			anchorClass: "astral-checkbox-anchor",
			triggerEventName: "astral-checkbox-change"
        }, options);
        
        //hide the original checkbox
        this.hide();
                     
        //create the span wrapper for the newly create checbox             
		var wrapper = $('<div class='+settings.wrapperClass+'></div>');
		
		//create the anchor which will serve as a checkbox control
		var anchor = $('<a href="#" class='+settings.anchorClass+'></a>');
		
		//check initial state of the originalcheckbox
		if(methods.isChecked(this)) {
			//originalcheckbox was already checked
			//add checked class to the anchor for styling purposes
			anchor.addClass('checked');	
		}			
		
		//append the anchor in to the wrapper
		wrapper.append(anchor);
		
		//insert newly created dom elements before the original checkbox
		this.before(wrapper);
		
		methods.bindAnchorClick(anchor, this, settings.triggerEventName);
		
    };
    	
})(jQuery);



  
   
   
   
