/*
The 'exitStage' component is attached to a clickable element to allow exiting VR mode
*NOTE this does not seem to work for 3D objects. Attach to plane or image as a button
*/

AFRAME.registerComponent('exitstage', {
    

	init: function()
	{

        const sceneEl = document.querySelector('#aScene');
        let exitVRButton = document.querySelector('#exitButton');

        document.querySelector('#aScene').addEventListener('enter-vr', function () {
            console.log("ENTERED VR");
            exitVRButton.setAttribute('visible', true);

          });


        this.el.addEventListener('click', () => 
        {

            console.log("inside click event");

            if (sceneEl.is('vr-mode')){
                sceneEl.exitVR();
                exitVRButton.setAttribute('visible', false);
            } 
        });

    
}});


// Need to make button invisible until VR button is pressed and then make it visible and vice versa 
