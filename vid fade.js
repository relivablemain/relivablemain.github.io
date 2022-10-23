/*
The 'vidfade' component is attached to the a-scene element
Upon webload it will:
- Overlay a shadow on the entire screen until a button is pressed which fades out the shadow
*/

AFRAME.registerComponent('vidfade', {

	init: function()
	{
		// block pointer events until buttonEnter is clicked
		let uiDiv = document.getElementById("uiDiv");
		uiDiv.style["pointer-events"] = "auto";

		// set up background blocker
		uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.75)";

		// indicate clickable with hand cursor (desktop)
		let buttonEnter = document.getElementById("buttonEnter");
		buttonEnter.style.cursor = "pointer";
    
    
    		// fade-in functionality
 var opacity=0;
    var intervalID=0;
               setInterval(hide, 200);

    function hide(){
          opacity = Number(window.getComputedStyle(buttonEnter).getPropertyValue("opacity"));
  
            if(opacity>0){
                   opacity=opacity-0.1;
                           buttonEnter.style.opacity=opacity
            }
            else{
                clearInterval(intervalID); 
              	buttonEnter.parentNode.remove(buttonEnter);
            }
    }
    
    
    	// allow point events again
			uiDiv.style["pointer-events"] = "none";

			uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.0)";
    		uiDiv.style["transition"] = "background-color 1000ms linear";

    

}});
