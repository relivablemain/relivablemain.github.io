AFRAME.registerComponent('*nameOfComponent', {
  
    init: function () {
      
      //Define variable to access DOM function
      let *myVariable = document.getElementById("IDOfElement");
      
      //Define variable function inherited from DOM
      function *functionOfVariable() {
          myVariable.*someDOMFunction();
      }
      
      //Define function to run during browser event happens through component addition to element
      let *functionToRun = () => {
          
      };
      
      //this refers to the entity the component is attached to!
      //el is the event listener on this component 
        this.el.addEventListener('*event', *functionToRun);
      // parameters('name of event', function to call when event happens)
      
      



      }
        
});

// Registering component in foo-component.js
AFRAME.registerComponent('foo', {
  schema: {},
  init: function () {},
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});