import aura from "/public/projects/statement/images/detail/AURA.jpg";
import belt from "/public/projects/statement/images/detail/BELT_LOGO.jpg";
import jordan from "/public/projects/statement/images/detail/JORDAN.jpg";
import lockup from "/public/projects/statement/images/detail/LOCKUP.jpg";
import timberLogo from "/public/projects/statement/images/detail/TIMBERWOLVES_LOGO.jpg";

export const details = [
  {
    id: 0,
    name: "The Aura Partner Patch",
    description:
      "The Minnesota Timberwolves are proud to feature Aura, a leading provider of all-in-one digital security for consumers, as the team’s jersey patch partner and official digital security provider.",
    image: `${aura}`,
    classes: "img one",
  },
  {
    id: 1,
    name: "The Jumpman Logo- Jordan",
    description:
      "Giving Jordan Brand a ubiquitous presence across the league, the Jumpman logo appears on the right shoulder of the jersey for all 30 Statement Edition uniforms. Each season, the Statement Edition designs set the tone for key matchups and are inspired by NBA teams making a bold statement every time they step onto the court — a natural connection to Jordan Brand’s namesake and his approach to the game.",
    image: `${jordan}`,
    classes: "img two",
  },
  {
    id: 2,
    name: "The Chest Wordmark",
    description:
      "The Timberwolves chestmark features subtle, fang-like detailing",
    image: `${lockup}`,
    classes: "img three",
  },
  {
    id: 3,
    name: "The Belt Buckle",
    description:
      "An Aurora Green illuminated North Star shines on both the ominous-looking belt buckle and short logo.",
    image: `${belt}`,
    classes: "img four",
  },
  {
    id: 4,
    name: "The Logos",
    description:
      "As the most beloved element in the Timberwolves brand identity and jersey collection, an Aurora Green" +
      " illuminated North Star shines on both the ominous-looking belt buckle and short logo.",
    image: `${timberLogo}`,
    classes: "img five",
  },
];