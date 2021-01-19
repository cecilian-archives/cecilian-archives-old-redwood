import { useState } from "react";
import { useAuth } from "@redwoodjs/auth";
import { Link, routes } from "@redwoodjs/router";
import tw, { styled } from "twin.macro";
import { FiUser } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";

const HeaderUserMenu = () => {
  const id = "headerUserMenu";
  const [isOpen, setIsOpen] = useState(false);

  const { currentUser, userMetadata, logOut } = useAuth();
  const user = currentUser?.profile?.picture
    ? currentUser.profile
    : userMetadata;
  const fullUserName = `${user.firstNames || user.given_name} ${
    user.lastNames || user.family_name
  }`;

  const button = (
    <HeaderButton
      aria-controls={id}
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-label="Account menu"
      onClick={() => setIsOpen((current) => !current)}
    >
      <div name={fullUserName} size="m" imageUrl={user.picture} />
    </HeaderButton>
  );

  const panelTitle = (
    <div gutterSize="m" responsive={false} alignItems="center">
      <div>
        <div name={fullUserName} size="l" imageUrl={user.picture} />
      </div>

      <div>
        <span>{fullUserName}</span>
      </div>
    </div>
  );

  const items = [
    <div key="profile" icon={<FiUser />}>
      <StyledLink to={routes.myProfile()}>Profile</StyledLink>
    </div>,
    <div key="logout" icon={<RiLogoutBoxLine />} onClick={logOut}>
      Log Out
    </div>,
  ];

  return (
    <div
      id={id}
      button={button}
      isOpen={isOpen}
      anchorPosition="downCenter"
      closePopover={() => setIsOpen(false)}
      panelPaddingSize="none"
    >
      <div title={panelTitle} items={items} />
    </div>
  );
};

const HeaderButton = tw.button`
  h-16
  hocus:bg-deepBlue-93
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

export default HeaderUserMenu;
