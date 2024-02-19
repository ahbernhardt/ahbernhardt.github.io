import { useEffect, useRef } from "react";
import Matter from "matter-js";

const Contact = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const textRef = useRef(null);
  const circleRef = useRef(null);
  const gitRef = useRef(null);

  const instagramRef = useRef(null);
  const linkedInRef = useRef(null);
  const emailRef = useRef(null)
  

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let MouseConstraint = Matter.MouseConstraint;
    let Mouse = Matter.Mouse;

    let height = window.innerHeight;
    let width = window.innerWidth-24;
    console.log(width)

    let Composite = Matter.Composite;
    let Svg = Matter.Svg;
    let Vertices = Matter.Vertices;


    let engine = Engine.create({});

    let render = Render.create({
      element: [
        sectionRef.current,
        circleRef.current,
        textRef.current,
        gitRef.current,

        instagramRef.current,
        linkedInRef.current,
        emailRef.current
      ],
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: width,
        height: height,
        background: "transparent",
        wireframes: false,
        wireframeBackground: "transparent",
        pixelRatio: window.devicePixelRatio
      },
    });
   
    // add bodies
    const getInTouch = Bodies.rectangle(width/2, width > 768 ? height-60 : height-30, width*40, 30, {
      isStatic: true,
      label: "in-touch",
      render: {
        sprite: {
          texture: `
          ${width > 768 
            ? "https://ahbernhardt.github.io/images/png/get-in-touch.png" 
            : "https://ahbernhardt.github.io/images/png/contact.png"} 
          `,
        }
      },
    });


    if (typeof fetch !== "undefined") {
      var select = function (root, selector) {
        return Array.prototype.slice.call(root.querySelectorAll(selector));
      };

      const loadSvg = function(url) {
        return fetch(url)
          .then(function (response) {
            return response.text();
          })
          .then(function (raw) {
            return new window.DOMParser().parseFromString(raw, "image/svg+xml");
          });
      };

        {(width > 768 
          ? loadSvg("https://ahbernhardt.github.io/svg/get-in-touch.svg")
          : loadSvg("https://ahbernhardt.github.io/svg/contact.svg")).then(function (root) {
          const vertexSets = select(root, "path").map(function (path) {
            return Vertices.scale(
              Svg.pathToVertices(path, 10),
              width > 768 ? 2.25 : 1.25 ,  width > 768 ? 2.25 : 1.25);
          });

          Composite.add(engine.world,
            Bodies.fromVertices(
              width/1.8 ,
              width > 768 ? height - 60 : height - 30 ,
              vertexSets,
              {
                isStatic: true,
                render: {
                  fillStyle: "transparent",
                  // fillStyle: "#fff",
                  lineWidth: 0.000001,
                },
              },
            true));
          });
        }

    }

    function getRandom(min, max) {
      const floatRandom = Math.random()
    
      const difference = max - min
    
      // random between 0 and the difference
      const random = Math.round(difference * floatRandom)
    
      const randomWithinRange = random + min
    
      return randomWithinRange
    }

    // create bounds
    const floor = Bodies.rectangle(-10, height + 10, width * 10, 30, {
      isStatic: true,
      label: "floor",
    });
    const wallLeft = Bodies.rectangle(0, 0, 12, height * 3, {
      render: {
        fillStyle: "transparent",
      },
      isStatic: true,
      label: "leftWall",
    });
    const wallRight = Bodies.rectangle(width, 0, 20, height * 3, {
      render: {
        fillStyle: "transparent",
      },
      isStatic: true,
      label: "rightWall",
    });

    const circle = Bodies.circle(getRandom(100,480), 0, 40, {
      restitution: 0.9,
      render: {
        fillStyle: "red",
      },
    });

    const instagram = Bodies.circle(width/3.5, 0, 20, {
      restitution: 0.2,
      render: {
        sprite: {
          texture: "https://i.imgur.com/RStSwfG.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
      url: "https://www.instagram.com/ah_bernhardt",
    });

    const linkedIn = Bodies.rectangle(width/3, 0, 140, 40, {
      chamfer: { radius: 20 },
      render: {
        sprite: {
          texture:
            "https://ahbernhardt.github.io/images/png/linkedIn-white.png",
          xScale: 0.6,
          yScale: 0.6,
        },
      },
      url: "https://www.linkedin.com/in/anhbernhardt/",
    });

    const email = Bodies.rectangle(width /2, 0, 110, 38, {
      chamfer: { radius: 30 },
      render: {
        sprite: {
          texture:
            "https://ahbernhardt.github.io/images/png/email-white.png",
          xScale: 0.4,
          yScale: 0.4,
        },
      },
      url: "mailto:anhbernhardt@gmail.com",
    });

    var star = Bodies.rectangle(width/2.4, 0, 42, 40, {
      chamfer: { radius: 20 },
      render: {
        sprite: {
          texture: "https://i.imgur.com/C2qPMbB.png",
          xScale: 0.5,
          yScale: 0.5,
        },
      },
    });
    World.add(engine.world, [
      floor,
      wallLeft,
      wallRight,
      getInTouch,

      circle,
      star,

      //  Social
      instagram,
      linkedIn,
      email
    ]);

    // add mouse control
    const mouse = Mouse.create(render.canvas),
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
      mouseConstraint.mouse.mousewheel,
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel,
    );

    // Detect clicks vs. drags
    let click = false;

    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    document.addEventListener("mouseup", () =>
      console.log(click ? "click" : "drag"),
    );

    // Create a On-Mouseup Event-Handler
    Matter.Events.on(mouseConstraint, "mouseup", function (event) {
      let mouseconstraint = event.source;
      let bodies = engine.world.bodies;
      if (!mouseconstraint.body) {
        for (let i = 0; i < bodies.length; i++) {
          let bodyB = bodies[i];
          // Check if clicked or dragged
          if (click === true) {
            if (
              Matter.Bounds.contains(
                bodyB.bounds,
                mouseconstraint.mouse.position,
              )
            ) {
              var bodyUrl = bodyB.url;
              console.log("Body.Url >> " + bodyUrl);

              // Hyperlinking feature
              if (bodyUrl != undefined) {
                window.location.href = bodyUrl;
                window.open(bodyUrl, "_blank");
                console.log("Hyperlink was opened");
              }
              break;
            }
          }
        }
      }
    });

    Engine.run(engine);
    Render.run(render);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative mx-auto flex -mt-[11vh] h-[80vh] w-full flex-col"
    >
      <canvas ref={canvasRef} className="mx-auto flex h-[80vh] w-full flex-col overflow-hidden">
        <div ref={circleRef}></div> 
        <div ref={instagramRef}></div>
        <div ref={linkedInRef}></div>
        <div ref={emailRef}></div>
        <div ref={gitRef} className="w-full object-cover bg-cover"></div>
      </canvas>

      <div className="flex h-6 w-full border-4 border-white">
        <div className="h-full w-full bg-red-200"></div>
        <div className="h-full w-full border-x-4  border-white bg-blue-200"></div>
        <div className="h-full w-full bg-orange-200"></div>
        <div className="h-full w-full border-x-4  border-white bg-green-200"></div>
        <div className="h-full w-full bg-purple-200"></div>
        <div className="h-full w-full border-l-4  border-white bg-yellow-200"></div>
      </div>
    </section>
  );
};

export default Contact;
