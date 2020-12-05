import styled from "styled-components";
import { transparentize } from "polished";
import logo1970 from "src/assets/images/cecilian_logo_c1970.jpg";
import logo1990 from "src/assets/images/cecilian_logo_c1990.jpg";
import logo2000 from "src/assets/images/cecilian_logo_c2000.jpg";
import logo2007 from "src/assets/images/cecilian_logo_c2007.png";

const Footer = () => {
  return (
    <Root>
      <HelpLink href="mailto:help@cecilianarchives.com">
        Something not working? Email help@cecilianarchives.com
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

const Root = styled.footer`
  height: 55px;
  background: ${({ theme }) => theme.archive.blueShades[90]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.euiSizeXL};
  border-bottom: 5px solid ${({ theme }) => theme.archive.brightYellow};

  @media (max-width: ${({ theme }) => theme.euiBreakpoints.m}) {
    flex-direction: column;
    height: 105px;
  }
`;

const HelpLink = styled.a`
  color: ${({ theme }) => theme.archive.shades.lightest};
  font-size: ${({ theme }) => theme.euiFontSizeS};
  transition: transform 0.2s ease-in 0s;
  &:hover {
    text-decoration: underline;
    transform: translateY(-1px);
  }
  @media (max-width: ${({ theme }) => theme.euiBreakpoints.m}) {
    text-align: center;
    margin: ${({ theme }) => theme.euiSizeM} 0;
    max-width: 300px;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.euiBreakpoints.m}) {
    justify-content: center;
    margin-top: ${({ theme }) => theme.euiSizeXS};
    margin-bottom: ${({ theme }) => theme.euiSizeM};
  }
`;

const Logo = styled.img`
  max-height: 32px;
  background: ${({ theme, whiteBg }) =>
    whiteBg ? theme.archive.shades.empty : theme.archive.brightYellow};
  border: 1px solid ${({ theme }) => theme.archive.brightYellow};
  border-radius: ${({ theme }) => theme.euiBorderRadius};
  margin-left: ${({ theme }) => theme.euiSizeS};
`;

export default Footer;
