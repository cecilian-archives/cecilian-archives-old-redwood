import tw from "twin.macro";

const tagColorMap = {
  cecilian: {
    root: tw`bg-transparent border-deepGreen`,
    icon: tw`text-deepGreen`,
    label: tw`text-deepGreen`,
    button: tw`bg-deepGreen`,
    path: tw`text-white`,
  },
  event: {
    root: tw`bg-transparent border-brightOrange`,
    icon: tw`text-brightOrange`,
    label: tw`text-brightOrange`,
    button: tw`bg-brightOrange`,
    path: tw`text-white`,
  },
  year: {
    root: tw`bg-transparent border-brightPurple`,
    icon: tw`text-brightPurple`,
    label: tw`text-brightPurple`,
    button: tw`bg-brightPurple`,
    path: tw`text-white`,
  },
  role: {
    root: tw`bg-transparent border-brightPink`,
    icon: tw`text-brightPink`,
    label: tw`text-brightPink`,
    button: tw`bg-brightPink`,
    path: tw`text-white`,
  },
  default: {
    root: tw`bg-transparent border-grey`,
    icon: tw`text-grey-darker`,
    label: tw`text-grey-darker`,
    button: tw`bg-deepBlue-85`,
    path: tw`text-white`,
  },
};

export default tagColorMap;
