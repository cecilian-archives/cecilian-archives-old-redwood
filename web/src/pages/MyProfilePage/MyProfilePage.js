import PageLayout from "src/layouts/PageLayout/PageLayout";
import styled from "styled-components";
import { EuiTitle } from "@elastic/eui";
import { ImKey } from "react-icons/im";
import ResponsiveTabs from "src/components/ResponsiveTabs/ResponsiveTabs";

const MyProfilePage = ({ tab }) => {
  const tabs = [
    {
      id: "tag",
      name: "Archive Tag",
      icon: "tag",
      content: <p>Your archive tag</p>,
    },
    {
      id: "about",
      name: "About You",
      icon: "user",
      content: <p>Names, picture, and year/show/role tags</p>,
    },
    {
      id: "contact",
      name: "Contact Details",
      icon: "email",
      content: <p>Email addresses and the like</p>,
    },
    {
      id: "key",
      name: "Access Key",
      icon: ImKey,
      content: <p>Let other people in</p>,
    },
  ];

  const validTabIds = tabs.map((tab) => tab.id);
  const selectedTabId = validTabIds.includes(tab) ? tab : validTabIds[0];
  const [selectedTab] = tabs.filter((tab) => tab.id === selectedTabId);

  return (
    <PageLayout>
      <EuiTitle>
        <h1>Your Profile</h1>
      </EuiTitle>
      <ResponsiveTabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        topLevelRoute="myProfileTab"
      />
      <Content>{selectedTab.content}</Content>
    </PageLayout>
  );
};

const Content = styled.div`
  padding: ${({ theme }) => theme.euiSizeXL} 0;
`;

export default MyProfilePage;
