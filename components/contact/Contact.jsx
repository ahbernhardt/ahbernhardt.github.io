import { useEffect, useRef } from "react";
import Matter from "matter-js";

const Contact = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const textRef = useRef(null);
  const circleRef = useRef(null);
  const instaqramRef = useRef(null);
  const linkedInRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let MouseConstraint = Matter.MouseConstraint;
    let Mouse = Matter.Mouse;
    let height = window.innerHeight;
    let width = window.innerWidth;

    let engine = Engine.create({});

    let render = Render.create({
      element: [circleRef.current, instaqramRef.current, linkedInRef.current],
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: width,
        height: height,
        background: "transparent",
        wireframes: false,
        wireframeBackground: "transparent",
      },
    });

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

    const circle = Bodies.circle(Math.random(400), 0, 40, {
      restitution: 0.9,
      render: {
        fillStyle: "red",
      },
    });
    const instagram = Bodies.circle(Math.random(800), 0, 20, {
      restitution: 0.2,
      render: {
        sprite: {
          texture: "https://i.imgur.com/RStSwfG.png",
          xScale: 0.6,
          yScale: 0.6,
        },
      },
      url: "https://www.instagram.com/ah_bernhardt",
    });

    const linkedIn = Bodies.rectangle(Math.random(600), 0, 140, 42, {
      chamfer: { radius: 40 },
      render: {
        sprite: {
          texture: "https://ahbernhardt.github.io/pix/ln-white.png",
          xScale: 0.6,
          yScale: 0.6,
        },
      },
      url: "https://www.linkedin.com/in/anhbernhardt/",
    });

    var star = Bodies.rectangle(80, 60, 42, 40, {
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
      circle,
      star,

      //  Social
      instagram,
      linkedIn,
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
      className="relative mx-auto -mt-[11vh]  flex h-[80vh] w-full flex-col overflow-hidden z-3"
    >
      <canvas ref={canvasRef} className="h-[96%] w-full flex flex-col">
        <div ref={circleRef}></div>
        <div ref={instaqramRef}></div>
        <div ref={linkedInRef}></div>
        <div ref={textRef} className="absolute bottom-0 text-8xl text-center text-white">
            Get in touch
        </div>
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
