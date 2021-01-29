import tw, { styled } from "twin.macro";
import logo1970 from "src/assets/images/cecilian_logo_c1970.jpg";
import logo1990 from "src/assets/images/cecilian_logo_c1990.jpg";
import logo2000 from "src/assets/images/cecilian_logo_c2000.jpg";
import logo2007 from "src/assets/images/cecilian_logo_c2007.png";

const Footer = () => {
  return (
    <Root>
      <HelpLink href="mailto:support@cecilianarchives.com">
        Got a question? Email support@cecilianarchives.com
      </HelpLink>
      <Logos>
        <Logo src={logo1970} alt="Cecilian Society logo, circa 1970" />
        <Logo src={logo1990} alt="Cecilian Society logo, circa 1990" />
        <Logo src={logo2000} alt="Cecilian Society logo, circa 2000" />
        <Logo
          src={logo2007}
          alt="Cecilian Society logo, circa 2007"
          whiteBg={true}
        />
      </Logos>
    </Root>
  );
};

const Root = tw.footer`
  h-14
  bg-deepBlue-90
  flex
  justify-between
  items-center
  p-4
  border-b-4
  border-brightYellow
  md:flex-col
  md:h-32
`;

const HelpLink = tw.a`
  text-grey-lighter
  text-sm
  transition-transform
  hover:underline
  hover:transform
  hover:-translate-y-0.5
  md:text-center
  md:m-4
  md:mt-0
`;

const Logos = tw.div`
  flex
  justify-end
  items-center
  md:justify-center
  md:mx-4
  md:my-1
`;

const Logo = styled.img(({ whiteBg }) => [
  whiteBg ? tw`bg-white` : tw`bg-brightYellow`,
  tw`max-h-8
  border
  border-brightYellow
  rounded-sm
  ml-1
  transition-transform
  origin-bottom
  hocus:-translate-x-4
  hocus:scale-150
  `,
]);

export default Footer;
