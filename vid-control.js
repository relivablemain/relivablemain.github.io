AFRAME.registerComponent('vidcontrol', {
  
  schema: {
    event: {type: 'string', default: ''},
    video: {type: 'asset', default: ''}
  },

  init: function () {
    
    
    var self = this;
    var el = this.el;
    var vid;
    var src = el.getAttribute('src');
    var videoPlayer = document.getElementById("videoPlayer")
    var clickCount = 0;
            
    const sky = document.querySelector("#sky");
    var camera = document.querySelector("#camera");
    var rightHand = document.querySelector("#rightHand");

    let homeworldelements = document.querySelectorAll(".homeworld");
    
    
          
    console.log("self.data.video.src " + src);
    console.log("self.data.video " + self.data.video);
    console.log("self.data " + self.data);
    console.log("self" + self);
    console.log("el" + el);
    vid = document.querySelector(src);
    console.log("vid "+ vid);
  
  
    
    this.eventHandlerFn = function () { console.log("An Event Was Triggered"); vid = document.querySelector(self.data.video); };
   
    this.el.addEventListener('click', () => 
    {
      console.log("mainclick");
      
    


      homeworldelements.forEach((homeworldelement) => {homeworldelement.setAttribute("visible", false)});
      videoPlayer.setAttribute('visible', true);
      sky.setAttribute('src', src);
      vid.muted = false;
      //vid.play();
      
      //Disable wasd-controls 
      camera.removeAttribute('wasd-controls');
      rightHand.removeAttribute('oculus-thumbstick-controls');
      
      

          let pause = () => {
            
            clickCount++;
            
            if(clickCount == 2)
            {
              vid = document.querySelector(src);
              //vid.muted = true;
              vid.pause();
              console.log("inside videoControl Pause");
              console.log(src);

              console.log("pauseButton ");

              playButton.setAttribute('position', '0 -1 -2')
              pauseButton.setAttribute('visible', false);

              pauseButton.setAttribute('position', '0 -1 -3')
              playButton.setAttribute('visible', true);

              //pauseButton.removeEventListener('click', pause);
              //playButton.addEventListener('click', play);
              
              clickCount = 0;
            }
   
            
          }
          
          
            
            let play = () => {

            clickCount++;
            
            if(clickCount == 2)
            {
              vid = document.querySelector(src);
              //let vid = document.querySelector("#sky");
             // vid.muted = false;
              vid.play();
              console.log("inside videoControl Play");
              console.log(src);

              pauseButton.setAttribute('position', '0 -1 -2')
              playButton.setAttribute('visible', false);

              playButton.setAttribute('position', '0 -1 -3')
              pauseButton.setAttribute('visible', true);

              //playButton.removeEventListener('click', play);
              //pauseButton.addEventListener('click', pause);
              
              clickCount = 0;
            }
            
          }
            
            let reset = () => {
              
              vid = document.querySelector(src);
              vid.currentTime = 0;
              vid.play();

                  pauseButton.setAttribute('position', '0 -1 -2')
                  playButton.setAttribute('visible', false);

                  playButton.setAttribute('position', '0 -1 -3')
                  pauseButton.setAttribute('visible', true);

              console.log("reset!");
              
            }
          
      var playButton = document.querySelector("#menuPlayButton");
      var pauseButton = document.querySelector("#menuPauseButton");
      var resetButton = document.querySelector("#menuResetButton");

      pauseButton.addEventListener('click', pause);
      playButton.addEventListener('click', play);
      resetButton.addEventListener('click', reset)
      
      let gobackhome = () => {
      sky.setAttribute("src", "#skyhome");
      document.querySelectorAll('video').forEach(vid => vid.pause());
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", true)})
      console.log(this.data);
        
      playButton.removeEventListener('click', play);    
      pauseButton.removeEventListener('click', pause);
      resetButton.removeEventListener('click', reset)
        
      videoPlayer.setAttribute('visible', false);
      camera.setAttribute('wasd-controls', '');
      rightHand.setAttribute('oculus-thumbstick-controls', '');
        
      pause();
              
      }

      let homeBtn = document.querySelector("#menuHomeButton")
      homeBtn.addEventListener('click', gobackhome);
      

      

    });
  
  

  
  
  
  
  
  },
  
    update: function (oldData) {
    var data = this.data;
    var el = this.el;

    console.log()
    if (oldData.event && data.event !== oldData.event) {
      el.removeEventListener(oldData.event, this.eventHandlerFn);
    }

    if (data.event) {
      el.addEventListener(data.event, this.eventHandlerFn);
    } else {
      console.log(data.message);
    }
  },

  /**
   * Handle component removal.
   */
  remove: function () {
    var data = this.data;
    var el = this.el;

    // Remove event listener.
    if (data.event) {
      el.removeEventListener(data.event, this.eventHandlerFn);
    }
  }

});                                     
    
