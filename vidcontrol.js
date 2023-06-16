AFRAME.registerComponent('vidcontrol', {
  
    schema: {
      event: {type: 'string', default: ''},
      video: {type: 'asset', default: ''},
      videoSRC: {type: 'string', default: ''}
    },
  
    init: function () {
      
      
      var sceneSel = document.querySelector('#aScene');

      var self = this;
      var el = this.el;
      var vid;
      var src = this.data.videoSRC;
      var videoPlayer = document.getElementById("videoPlayer")
      var clickCount = 0;
              
      const sky = document.querySelector("#sky");
      var camera = document.querySelector("#camera");
      var rightHand = document.querySelector("#rightHand");
      var exitVRButton = document.querySelector("#exitButton");
  
      let homeworldelements = document.querySelectorAll(".homeworld");

      var galleryMenu = document.querySelector("#links");
      
      /*
      console.log("self.data.video.src " + src);
      console.log("self.data.video " + self.data.video);
      console.log("self.data " + self.data);
      console.log("self" + self);
      console.log("el" + el);
      console.log("vid "+ vid);
      */
     vid = document.querySelector(src);
     console.log("videoSRC =" + this.data.videoSRC);
    
    
      
      this.eventHandlerFn = function () { console.log("An Event Was Triggered"); vid = document.querySelector(self.data.video); };
     
      this.el.addEventListener('click', () => 
      {
        console.log("mainclick");
        window.location.replace(`alpha.relivable.com/version-test/beta_vr_playvideo?video=${vid.id}`);
  
        homeworldelements.forEach((homeworldelement) => {homeworldelement.setAttribute("visible", false)});

        //Blocks Gallery To Avoid Clicking
        galleryMenu.setAttribute('position',{x: 0, y: 10, z: 0});
        //galleryMenu.setAttribute('visible', false);

        //Disable Visibility for ExitVR Button
        if (sceneSel.is('vr-mode'))
        exitVRButton.setAttribute('visible', false);
 
        videoPlayer.setAttribute('visible', true);
        sky.setAttribute('src', src);
        vid.muted = false;
        vid.play();
        
        //Disable wasd-controls 
        //camera.removeAttribute('wasd-controls');
        //rightHand.removeAttribute('oculus-thumbstick-controls');
        
  
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

        // Resets Pause and Play Button when going home
        pauseButton.setAttribute('position', '0 -1 -2')
        playButton.setAttribute('visible', false);

        playButton.setAttribute('position', '0 -1 -3')
        pauseButton.setAttribute('visible', true);


        homeworldelements.forEach((homeworldelement) => {
        homeworldelement.setAttribute("visible", true)})

        //Unblocks Gallery Back For Viewing
        galleryMenu.setAttribute('position',{x: -2, y: 1.5, z: -2}); 
        //galleryMenu.setAttribute('visible', true);

        if (sceneSel.is('vr-mode'))
        exitVRButton.setAttribute('visible', true);


        console.log(this.data);
          
        playButton.removeEventListener('click', play);    
        pauseButton.removeEventListener('click', pause);
        resetButton.removeEventListener('click', reset)
          
        videoPlayer.setAttribute('visible', false);
        //camera.setAttribute('wasd-controls', '');
        //rightHand.setAttribute('oculus-thumbstick-controls', '');

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
