import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
const Project = ({ project, fonts, setMouseHover }) => {
  const handleClick = (project) => {
    return (
      project.link && window.open(project.link, "_blank", "noopener,noreferrer")
    );
  };

  return (
    <div
      key={project.title}
      id={project.id}
      onClick={() => handleClick(project)}
      onMouseOver={() => {
        setMouseHover(true);
      }}
      onMouseLeave={() => {
        setMouseHover(false);
      }}
      className="bg-hexBlack/20 group flex flex-col-reverse gap-6 rounded-2xl transition duration-200 ease-in-out lg:relative lg:flex-row lg:border lg:p-12 lg:hover:rotate-3"
    >
      <div className={`flex w-full flex-col gap-2 lg:w-3/5 lg:gap-4`}>
        <div className={`flex flex-col gap-1`}>
          <div className={fonts.accent}>Featured Project</div>
          <div className={`${fonts.primaryHeading} flex text-2xl lg:text-3xl`}>
            {project.title}{" "}
            {project.github ||
              (project.link && (
                <span className="mt-2 ml-2 flex flex-row gap-x-6">
                  {project.github && (
                    <a
                      className="hover:text-hexSage cursor-none text-gray-200"
                      aria-label="GitHub"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                    >
                      <FiGithub className="h-[16px] w-[16px]" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      className="text-hexYellow/70 cursor-none"
                      aria-label="External Link"
                      title="External Link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                    >
                      <FiExternalLink className="h-[16px] w-[16px]" />
                    </a>
                  )}
                </span>
              ))}
          </div>
          {project.subTitle && (
            <div
              className={`${fonts.primaryHeading} text-lg italic opacity-50 lg:text-xl`}
            >
              {project.subTitle}
            </div>
          )}
          <ul className="mt-2 flex flex-row gap-2 text-sm text-gray-400 lg:gap-3">
            {project.techStack.map((tech, i) => (
              <li
                key={i}
                className="bg-hexOrange/10 text-hexYellow/70 bg-opacity-50 w-fit rounded-2xl px-4 pt-2 pb-1 leading-none"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div
            className={`${fonts.base} w-full text-left leading-snug tracking-[.01rem] text-pretty lg:mt-4 lg:text-balance`}
          >
            {project.description}
          </div>
        </div>
      </div>
      <div
        className={`flex ${project.video ? "aspect-[2/1]" : "aspect-video"} w-full max-w-[480px] rounded-xl lg:absolute lg:-top-1/4 lg:right-8 lg:w-[40%] 2xl:w-[44%]`}
      >
        {project.image && (
          <img
            src={project.image}
            alt="image"
            className="w-full rounded-xl object-cover transition ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
          />
        )}
        {project.video && (
          <video
            poster={project.poster}
            preload="auto"
            muted
            playsInline
            autoPlay
            loop
            className="w-full rounded-xl object-cover transition ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
          >
            <source src={project.video} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
};

const Projects = ({ fonts, setMouseHover }) => {
  const projects = [
    {
      id: "prince",
      title: "City Edition Microsite",
      description:
        "A digital gallery to mark the re-release of the Prince-inspired Minnesota Timberwolves uniforms.",
      techStack: ["NextJS", "Tailwind", "Framer Motion"],
      image: "/images/works/prince.jpg",
      link: "https://www.nba.com/timberwolves/prince",
    },
    {
      id: "board",
      title: "MVPHEE Suite",
      subTitle: "'25 End Season Microsite",
      description:
        "Enter the Minnesota Lynx Boardroom. This site built to rally support for Phee's MVP campaign alongside her teammates vying for All-WNBA, All-Defense, and Sixth Player of the Year.",
      techStack: ["NextJS", "Tailwind", "Framer Motion", "GSAP"],
      video: "/images/works/mp4/lynx-board.mp4",
      poster: "/images/works/lynx-board.png",
      link: "https://go.lynxbasketball.com/awards/2025",
    },
    {
      id: "spicy",
      title: "Spicy & Nicey Co.",
      subTitle: "'24 End Season Microsite",
      description:
        "Bringing the heat: The landing page uses hot sauce as a metaphor to explain why Napheesa Collier, Kayla McBride, Alanna Smith, and Bridget Carleton should take home 2024 season's top WNBA honors.",
      techStack: ["NextJS", "Tailwind", "Framer Motion"],
      video: "/images/works/mp4/spicynicey.mp4",
      poster: "/images/works/spicynicey.png",
      link: "https://spicyandnicey.co",
    },
    {
      id: "classic",
      title: "'23 Classic Microsite",
      image: "/images/works/classic.jpg",
      description:
        "Featuring a trailing mouse cursor and clever pop-ups, this landing page put a modern twist on 90's web design to unveil the Timberwolves' 35th Anniversary Classic Edition Uniforms.",
      techStack: ["NextJS", "Tailwind", "Framer Motion"],
    },
    {
      id: "city",
      title: "'23 City Microsite",
      image: "/images/works/city.jpg",
      description:
        "This landing page was the web component of a Hashtag Sports Award-nominated marketing campaign. Using animated SVGs and subtle gradients, it celebrates a uniform inspired by the summertime fun that can only be found in the Land of 10,000 Lakes.",
      techStack: ["NextJS", "Tailwind", "Framer Motion"],
    },
    {
      id: "badnight",
      title: "All-Defense Microsite",
      post: "/images/works/jaden.jpg",
      video: "/images/works/mp4/badnight.mp4",
      description:
        "Minnesota Timberwolves forward Jaden McDaniels loves making the NBA's best players have a 'bad night.' This microsite, built to encourage his inclusion on the All-Defensive team, takes that quote and runs with it.",
      techStack: ["NextJS", "Tailwind", "Framer Motion"],
    },
  ];
  return (
    <div className="flex flex-col gap-16 pb-40 lg:gap-32">
      {projects.map((project, i) => (
        <Project
          key={project.id}
          project={project}
          i={i}
          fonts={fonts}
          setMouseHover={setMouseHover}
        />
      ))}
    </div>
  );
};

export default Projects;
