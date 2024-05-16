// import React, { useEffect, useState } from "react";

// var getRandomToy = () => {
//   var toys = [
//     "bunny",
//     "duck-yellow",
//     "duck-pink",
//     "star",
//     "water-melon",
//     "panda",
//     "dino",
//     "roboto-san",
//     "roboto-sama",
//     "penguin",
//     "turtle",
//   ];
//   return toys[Math.floor(Math.random() * toys.length)];
// };

// var CapsuleMachine = () => {
//   var [capsules, setCapsules] = useState([]);

//   var randomN = (max) => Math.ceil(Math.random() * max);
//   var distanceBetween = (a, b) => Math.round(Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2)));

//   useEffect(() => {
//     var initializeCapsules = () => {
//       var newCapsules = Array.from({ length: 10 }, (_, i) => {
//         var capsule = {
//           id: i,
//           deg: 0,
//           radius: 36,
//           bounce: 0,
//           friction: 0.99,
//           toy: getRandomToy(),
//           velocity: { x: 0, y: 0 },
//           acceleration: { x: 0, y: 4 },
//           x: Math.random() * (window.innerWidth * 0.5 - 12),
//           y: Math.random() * (window.innerHeight * 0.5 - 50),
//         };

//         capsule.velocity.x = Math.random() * 2 - 1; // Random initial velocity
//         capsule.velocity.y = Math.random() * 2 - 1;

//         return capsule;
//       });

//       setCapsules(newCapsules);
//     };

//     initializeCapsules();
//   }, []);

//   var spaceOutCapsules = (c) => {
//     capsuleData.forEach((c2) => {
//       if (c.id === c2.id || c2.selected) return;
//       var distanceBetweenCapsules = distanceBetween(c, c2);
//       if (distanceBetweenCapsules < c.radius * 2) {
//         c.velocity.multiplyBy(-0.6);
//         var overlap = distanceBetweenCapsules - c.radius * 2;
//         c.setXy(
//           getNewPosBasedOnTarget({
//             start: c,
//             target: c2,
//             distance: overlap / 2,
//             fullDistance: distanceBetweenCapsules,
//           }),
//         );
//       }
//     });
//   };
  
//   var hitCheckCapsuleMachineWalls = (c) => {
//     var buffer = 5;
//     var capsuleMachineWidth = capsuleMachineRef.current.offsetWidth;
//     var capsuleMachineHeight = capsuleMachineRef.current.offsetHeight;
  
//     if (c.x + c.radius + buffer > capsuleMachineWidth) {
//       c.x = capsuleMachineWidth - (c.radius + buffer);
//       c.velocity.x = c.velocity.x * c.bounce;
//     }
//     if (c.x - (c.radius + buffer) < 0) {
//       c.x = c.radius;
//       c.velocity.x = c.velocity.x * c.bounce;
//     }
//     if (c.y + c.radius + buffer > capsuleMachineHeight) {
//       c.y = capsuleMachineHeight - c.radius - buffer;
//       c.velocity.y = c.velocity.y * c.bounce;
//     }
//     if (c.y - c.radius < 0) {
//       c.y = c.radius;
//       c.velocity.y = c.velocity.y * c.bounce;
//     }
//   };
  

//   useEffect(() => {
//     var animateCapsules = () => {
//     setCapsules((prevCapsuleData) =>
//       prevCapsuleData.map((c) => {
//         if (c.selected) return c;
//         c.prevX = c.x;
//         c.prevY = c.y;

//         c.accelerate(c.acceleration);
//         c.velocity.multiplyBy(c.friction);
//         c.addTo(c.velocity);

//         var spaceOutCapsules = (c) => {
//           capsuleData.forEach(c2 =>{
//             if (c.id === c2.id || c2.selected) return
//             var distanceBetweenCapsules = distanceBetween(c, c2)
//             if (distanceBetweenCapsules < (c.radius * 2)) {
//               c.velocity.multiplyBy(-0.8)
//               var overlap = distanceBetweenCapsules - (c.radius * 2)
//               c.setXy(
//                 getNewPosBasedOnTarget({
//                   start: c,
//                   target: c2,
//                   distance: overlap / 2, 
//                   fullDistance: distanceBetweenCapsules
//                 })
//               )
//             }
//           })
//         };
      
//         var hitCheckCapsuleMachineWalls = (c) => {
//           var buffer = 24
//           if (c.x + c.radius + buffer > window.innerWidth) {
//             c.x = window.innerWidth - (c.radius + buffer)
//             c.velocity.x = c.velocity.x * c.bounce
//           }
//           if (c.x - (c.radius + buffer) < 0) {
//             c.x = c.radius
//             c.velocity.x = c.velocity.x * c.bounce
//           }
//           if (c.y + c.radius + buffer > window.innerHeight) {
//             c.y = window.innerHeight - c.radius - buffer
//             c.velocity.y = c.velocity.y * c.bounce
//           }
//           if (c.y - c.radius < 0) {
//             c.y = c.radius
//             c.velocity.y = c.velocity.y * c.bounce
//           }
//         };

//         spaceOutCapsules(c)
//         hitCheckCapsuleMachineWalls(c)

//         if (Math.abs(c.prevX - c.x) < 2 && Math.abs(c.prevY - c.y) < 2) {
//           c.velocity.setXy({ x: 0, y: 0 });
//           c.setXy({ x: c.prevX, y: c.prevY });
//         } else {
//           if (Math.abs(c.prevX - c.x)) {
//             // Rotate capsule
//             c.deg += (c.x - c.prevX) * 2;
//           }
//         }
//         return c;
//     }
//     ))
//     var intervalId = setInterval(animateCapsules, 0);
//     return () => clearInterval(intervalId);
//      }} , []);

//   return (
//     <div className="w-full h-full flex overflow-hidden justify-center items-center">
//       <div className="capsule-machine relative w-1/2 h-1/2 mx-auto overflow-hidden bg-yellow-100">
//         {capsules.map((c) => (
//           <div
//             key={c.id}
//             className={`capsule-wrapper pix ${c.selected ? "enlarge" : ""}`}
//             style={{
//               transform: `translate(${c.x}px, ${c.y}px) rotate(${c.deg}deg)`,
//             }}
//           >
//             <div className="capsule">
//               <div className={`${c.toy} toy pix`}></div>
//               <div className={`base ${["red", "pink", "white", "blue"][randomN(2) - 1]}`}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="toy-box"></div>
//     </div>
//   );
// };

// export default CapsuleMachine;

// import React, { useState, useEffect } from 'react';

// var CapsuleMachine = () => {
//   var [capsuleData, setCapsuleData] = useState([]);

//   var vector = {
//     x: 0,
//     y: 0,
//     create: function (x, y) {
//       return { x, y };
//     },
//     setXy: function({ x, y }) {
//       return { x , y }
//     },
//     setAngle: function(angle) {
//       var length = Math.sqrt(this.x * this.x + this.y * this.y)
//       return{
//         angle:{
//           x: Math.cos(angle) * length,
//           y: Math.sin(angle) * length
//         }
//       }
//     },
//     setLength: function(length) {
//       var angle = Math.atan2(this.y, this.x)
//       return{
//         length:{x: Math.cos(angle) * length, y: Math.sin(angle) * length}
//       }
//     },
//     magnitude: function() {
//       return Math.sqrt(this.x * this.x + this.y * this.y)
//     },
//     multiply: function(n) {
//       return this.create(this.x * n, this.y * n)
//     },
//     addTo: function(v2) {
//       this.x += v2.x
//       this.y += v2.y
//     },
//     multiplyBy: function(n) {
//       this.x *= n
//       this.y *= n
//     },
//   };

//   useEffect(() => {
//     var getRandomToy = () => {
//       return [
//         'bunny',
//         'duck-yellow',
//         'duck-pink',
//         'star',
//         'water-melon',
//         'panda',
//         'dino',
//         'roboto-san',
//         'roboto-sama',
//         'penguin',
//         'turtle',
//       ][Math.ceil(Math.random() * 11) - 1];
//     };

//     var createCapsuleData = () => {
//       var newCapsuleData = Array.from({ length: 20 }).map((_, i) => {
//         var capsule = {
//           ...vector,
//           id: i,
//           deg: 0,
//           radius: 32,
//           bounce: -0.3,
//           friction: 0.99,
//           toy: getRandomToy(),
//         };

//         capsule.velocity = capsule.create(0, 1);
//         capsule.velocity?.setLength(10);
//         capsule.velocity.setAngle(degToRad(90));
//         capsule.setXy({
//           x: Math.ceil(Math.random() * (window.innerWidth - 32)),
//           y: Math.ceil(Math.random() * (window.innerHeight - 250)),
//         });

//         capsule.acceleration = capsule.create(0, 4);
//         capsule.accelerate = function (acceleration) {
//           this.velocity.addTo(acceleration);
//         };
//         return capsule
//       });

//       console.log(newCapsuleData)
//       setCapsuleData(newCapsuleData);
//       return newCapsuleData
//     };

//     createCapsuleData();

//     var intervalId = setInterval(animateCapsules, 60);
//     return () => clearInterval(intervalId);
//   }, []);

//   // var animateCapsules = () => {
//   //   setCapsuleData((prevCapsuleData) =>
//   //     prevCapsuleData.map((c, i) => {
//   //       if (c.selected) return c;
//   //       c.prevX = c.x;
//   //       c.prevY = c.y;

//   //       c.accelerate(c.acceleration);
//   //       c.velocity.multiplyBy(c.friction);
//   //       c.addTo(c.velocity);

//   //       spaceOutCapsules(c);
//   //       hitCheckCapsuleMachineWalls(c);

//   //       if (Math.abs(c.prevX - c.x) < 2 && Math.abs(c.prevY - c.y) < 2) {
//   //         c.velocity.setXy({ x: 0, y: 0 });
//   //         c.setXy({ x: c.prevX, y: c.prevY });
//   //       } else {
//   //         if (Math.abs(c.prevX - c.x)) {
//   //           setStyles({
//   //             el: c.toy,
//   //             deg: c.deg + (c.x - c.prevX) * 4,
//   //           });
//   //           c.deg += (c.x - c.prevX) * 2;
//   //         }
//   //       }
//   //       setStyles(c);
//   //       return c;
//   //     })
//   //   );
//   // };

//   console.log(capsuleData)
//   var animateCapsules = () => {
//     setCapsuleData((prevCapsuleData) =>
//       prevCapsuleData.map((c) => {
//         if (c.selected) return c;
//         c.prevX = c.x;
//         c.prevY = c.y;

//         c.accelerate(c.acceleration);
//         c.velocity.multiplyBy(c.friction);
//         c.addTo(c.velocity);

//         var spaceOutCapsules = (c) => {
//           capsuleData.forEach(c2 =>{
//             if (c.id === c2.id || c2.selected) return
//             var distanceBetweenCapsules = distanceBetween(c, c2)
//             if (distanceBetweenCapsules < (c.radius * 2)) {
//               c.velocity.multiplyBy(-0.8)
//               var overlap = distanceBetweenCapsules - (c.radius * 2)
//               c.setXy(
//                 getNewPosBasedOnTarget({
//                   start: c,
//                   target: c2,
//                   distance: overlap / 2, 
//                   fullDistance: distanceBetweenCapsules
//                 })
//               )
//             }
//           })
//         };
      
//         var hitCheckCapsuleMachineWalls = (c) => {
//           var buffer = 24
//           if (c.x + c.radius + buffer > window.innerWidth) {
//             c.x = window.innerWidth - (c.radius + buffer)
//             c.velocity.x = c.velocity.x * c.bounce
//           }
//           if (c.x - (c.radius + buffer) < 0) {
//             c.x = c.radius
//             c.velocity.x = c.velocity.x * c.bounce
//           }
//           if (c.y + c.radius + buffer > window.innerHeight) {
//             c.y = window.innerHeight - c.radius - buffer
//             c.velocity.y = c.velocity.y * c.bounce
//           }
//           if (c.y - c.radius < 0) {
//             c.y = c.radius
//             c.velocity.y = c.velocity.y * c.bounce
//           }
//         };

//         spaceOutCapsules(c)
//         hitCheckCapsuleMachineWalls(c)

//         if (Math.abs(c.prevX - c.x) < 2 && Math.abs(c.prevY - c.y) < 2) {
//           c.velocity.setXy({ x: 0, y: 0 });
//           c.setXy({ x: c.prevX, y: c.prevY });
//         } else {
//           if (Math.abs(c.prevX - c.x)) {
//             // Rotate capsule
//             c.deg += (c.x - c.prevX) * 2;
//           }
//         }
//         return c;
//       })
//     );
//   };

 

//   // var setStyles = ({ el, x, y, w, deg }) => {
//   //   if (w) el.style.width = w;
//   //   el.style.transform = `translate(${x ? x + 'px' : 0}, ${y ? y + 'px' : 0}) rotate(${deg || 0}deg)`;
//   // };

//   // return <div className="capsule-machine" ref={capsuleMachineRef}></div>;
//   return (
//     <div className="capsule-machine">
//       {capsuleData.map((c) => (
//         <div key={c.id} className="capsule" style={{ transform: `translate(${c.x}px, ${c.y}px) rotate(${c.deg}deg)` }}>
//           <div className={`${c.toy} toy pix`}></div>
//           <div className={`base ${['red', 'pink', 'white', 'blue'][Math.ceil(Math.random() * 4) - 1]}`}></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CapsuleMachine;
/* eslint-disable react/no-string-refs */
import React from "react";
import Matter from "matter-js"

class CapsuleBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
      var Engine = Matter.Engine,
        Render = Matter.Render,
        Events = Matter.Events,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        height= window.innerHeight,
        width = window.innerWidth;

    // create an engine
    var engine = Engine.create()

    // create a renderer
    var render = Render.create({
        element: this.refs.scene,
        engine: engine,
        options: {
          pixelRatio: 2,
          width: width,
          height: height,
          wireframes: false,
          background: 'transparent',
          wireframeBackground: "transparent",
        }
    });
    Render.run(render);

    let runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);


      // create bounds
      var wallLeft = Bodies.rectangle( 0, 0, 30, height*3 , { 
        render: {
          fillStyle: "transparent",
        },
          isStatic: true, 
          label: "leftWall" 
        });
      var wallRight = Bodies.rectangle(width, 0, 20, height*3, { 
        render: {
          fillStyle: "transparent",
        },
        isStatic: true,
        label: "rightWall"
      })
      var floor = Bodies.rectangle(width/2, height-100, width, 240,{
        render: {
          fillStyle: "transparent",
        },
        isStatic: true,
        label: "floor"
      });

      // object colors & variables
      var arts = "#EDDC8C"
      // var videos = "#B3E8F3"
      // var abouts = '#4D4D4D'

      var radius = 20

      // create objects

      // art & design
      var illustration = Bodies.rectangle(40, 20, 133, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/RADmiFI.png', xScale: 0.5, yScale: 0.5 }}})
      var art = Bodies.rectangle(35, 60, 56, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/NwQqeng.png', xScale: 0.5, yScale: 0.5 }}})
      var threeD = Bodies.rectangle(90, 60, 52, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/ptUWXgO.png', xScale: 0.5, yScale: 0.5 }}})
      var graphic = Bodies.rectangle(60, 20, 105, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/TyOmVtt.png', xScale: 0.5, yScale: 0.5 }}})
      var photo = Bodies.rectangle(50, 80, 86, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/tc3MsJP.png', xScale: 0.5, yScale: 0.5 }}})
      //misc
      var website = Bodies.rectangle(60, 20, 108, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/hr9p4uV.png', xScale: 0.5, yScale: 0.5 }}})
      var star = Bodies.rectangle(80, 60, 42, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/C2qPMbB.png', xScale: 0.5, yScale: 0.5 }}})
      //about
      var instagram = Bodies.rectangle(20, 80, 40, 40, {id: 'instagramBody', chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/RStSwfG.png', xScale: 0.5, yScale: 0.5 }}, url: 'https://www.instagram.com/ah_bernhardt'})
      var random = Bodies.rectangle(45, 80, 112, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/YS51eIC.png', xScale: 0.5, yScale: 0.5 }}})

      var extra = Bodies.rectangle(150, 100, 80, 80, {chamfer: {radius: 40},render: {fillStyle: "orange"}})
      var extra1 = Bodies.rectangle(75, 160, 80, 80, {chamfer: {radius: 20},render: {fillStyle: "#98B5CC"}})
      // add all of the bodies to the world
      World.add(engine.world, [
        // Container
        floor, wallLeft, wallRight,
        // each block
        illustration, art, threeD, graphic, photo, website,  star, instagram, random, 
        
        extra, extra1
      ]);

   
      // add mouse control
      var mouse = Mouse.create(render.canvas),
          mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
              stiffness: 0.2,
              render: {
                visible: false,
              },
            },
          });
      World.add(engine.world, mouseConstraint);

      // keep the mouse in sync with rendering
      render.mouse = mouse;

      // Allow page scrolling in matter.js window
      mouseConstraint.mouse.element.removeEventListener(
        "mousewheel",
        mouseConstraint.mouse.mousewheel
      );
      mouseConstraint.mouse.element.removeEventListener(
        "DOMMouseScroll",
        mouseConstraint.mouse.mousewheel
      );

      // Detect clicks vs. drags
      let click = false;

      document.addEventListener('mousedown', () => click = true);
      document.addEventListener('mousemove', () => click = false);
      document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

      // Create a On-Mouseup Event-Handler
      Matter.Events.on(mouseConstraint, 'mouseup', function(event) {
        var mouseconstraint = event.source;
        var bodies = engine.world.bodies;
        if (!mouseconstraint.body) {
          for(var i = 0; i < bodies.length; i++) { 
            var bodyB = bodies[i];
            // Check if clicked or dragged
            if (click === true) {
            if (Matter.Bounds.contains(bodyB.bounds, mouseconstraint.mouse.position)) {
                var bodyUrl = bodyB.url;
                console.log("Body.Url >> " + bodyUrl);

                // Hyperlinking feature
                if (bodyUrl != undefined) {
                  window.location.href = bodyUrl;
                  window.open(bodyUrl, '_blank');
                  console.log("Hyperlink was opened");
                }
                break;
              }
            }
          }
        }
      });
  // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
  }

  render() {
    return (
        <div className="relative h-full overflow-hidden">
          <div ref="scene" className="h-fit" />
        </div>
    );
  }
}

export default CapsuleBox;