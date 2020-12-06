import { useState } from "react";
import { useAuth } from "@redwoodjs/auth";
import { Link, routes } from "@redwoodjs/router";
import styled, { useTheme } from "styled-components";
import {
  EuiAvatar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderSectionItemButton,
  EuiPopover,
  EuiContextMenuPanel,
  EuiContextMenuItem,
  EuiTitle,
} from "@elastic/eui";
import { FiUser } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";

const HeaderUserMenu = () => {
  const id = "headerUserMenu";
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

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
      <EuiAvatar
        name={fullUserName}
        size="m"
        color={theme.archive.brightYellow}
        imageUrl={user.picture}
      />
    </HeaderButton>
  );

  const panelTitle = (
    <EuiFlexGroup
      gutterSize="m"
      className="euiHeaderProfile"
      responsive={false}
      alignItems="center"
    >
      <EuiFlexItem grow={false}>
        <EuiAvatar
          name={fullUserName}
          size="l"
          color={theme.archive.brightYellow}
          imageUrl={user.picture}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiTitle size="xs">
          <UserName>{fullUserName}</UserName>
        </EuiTitle>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  const items = [
    <EuiContextMenuItem key="profile" icon={<FiUser />}>
      <StyledLink to={routes.myProfile()}>Profile</StyledLink>
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="logout"
      icon={<RiLogoutBoxLine />}
      onClick={logOut}
    >
      Log Out
    </EuiContextMenuItem>,
  ];

  return (
    <EuiPopover
      id={id}
      button={button}
      isOpen={isOpen}
      anchorPosition="downCenter"
      closePopover={() => setIsOpen(false)}
      panelPaddingSize="none"
    >
      <EuiContextMenuPanel title={panelTitle} items={items} />
    </EuiPopover>
  );
};

const HeaderButton = styled(EuiHeaderSectionItemButton)`
  height: 60px;
  min-width: 60px;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.archive.blueShades[93]};
  }
`;

const UserName = styled.h4`
  text-transform: none;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

export default HeaderUserMenu;
