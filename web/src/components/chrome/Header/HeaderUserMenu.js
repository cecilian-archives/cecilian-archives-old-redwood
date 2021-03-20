import { useState, useRef } from "react";
import { useAuth } from "@redwoodjs/auth";
import { Link, routes } from "@redwoodjs/router";
import tw from "twin.macro";
// import { FaRegUserCircle } from "react-icons/fa";
// import { RiLogoutCircleLine } from "react-icons/ri";
import useClickOutside from "src/utils/useClickOutside";

const HeaderUserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  useClickOutside(dropdownRef, isOpen, () => setIsOpen(false));

  const { currentUser, userMetadata, logOut } = useAuth();
  const user = currentUser?.profile?.picture
    ? currentUser.profile
    : userMetadata;
  const fullUserName = `${user.firstNames || user.given_name} ${
    user.lastNames || user.family_name
  }`;

  return (
    <Root
      ref={dropdownRef}
      className="group"
      onClick={() => setIsOpen((current) => !current)}
    >
      <Container>
        <Button>
          <Avatar src={user.picture} />
        </Button>
      </Container>
      {isOpen && (
        <Panel onClick={(event) => event.stopPropagation()}>
          <PanelHeader>{fullUserName}</PanelHeader>
          <PanelItem onClick={() => setIsOpen(false)}>
            <StyledLink to={routes.myProfileEdit()}>
              {/* <FaRegUserCircle /> */}
              <span>Edit Profile</span>
            </StyledLink>
          </PanelItem>
          <PanelItem onClick={logOut}>
            {/* <RiLogoutCircleLine /> */}
            <span>Log Out</span>
          </PanelItem>
        </Panel>
      )}
    </Root>
  );
};

const Root = tw.div`
  relative
  w-16
  h-full
`;

const Container = tw.div`
  h-full
  flex
  flex-col
  items-center
  justify-center
  cursor-pointer
`;

const Button = tw.button`
  w-10
  h-10
  rounded-full
  bg-brightYellow
  hocus:outline-none
  group-hocus:outline-none
  group-hocus:ring-2
  group-hocus:ring-brightYellow
`;

const Avatar = tw.img`
  w-full
  rounded-full
`;

const Panel = tw.div`
  absolute
  right-0
  z-10
  w-64
  -mt-1
  mr-4
  bg-white
  rounded-md
  shadow-lg
  ring-1
  ring-grey-light
`;

const PanelHeader = tw.div`
  font-bold
  text-lg
  text-grey-darker
  pb-2
  pt-3
  px-4
`;

const PanelItem = tw.div`
  flex
  justify-start
  items-center
  space-x-4
  px-6
  py-3
  last:pb-4
  text-grey-darker
  cursor-pointer
  hover:bg-grey-lighter
`;

const StyledLink = tw(Link)`
  flex
  justify-start
  items-center
  space-x-4
`;

export default HeaderUserMenu;
