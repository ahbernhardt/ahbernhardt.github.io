import Magnetic from "@/utils/magnetic";

const Link = ({ url, label, setMouseHover }) => {
  return (
    <Magnetic>
      <a
        href={url}
        target="_blank"
        rel="nopreferrer noreopened"
        onMouseOver={() => {
          setMouseHover(true);
        }}
        onMouseLeave={() => {
          setMouseHover(false);
        }}
      >
        {label}
      </a>
    </Magnetic>
  );
};
const Socials = ({ setMouseHover }) => {
  const list = [
    { label: "Github", url: "https://github.com/ahbernhardt" },
    { label: "Codepen", url: "https://codepen.io/ahbernhardt" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/anhbernhardt/" },
  ];
  return (
    <div className="mt-6 flex h-fit w-full justify-between lg:mt-0">
      <div className="flex w-fit items-end gap-8 text-left">
        {list.map((each, id) => (
          <Link
            key={id}
            url={each.url}
            label={each.label}
            setMouseHover={setMouseHover}
          />
        ))}
      </div>
    </div>
  );
};

export default Socials;
