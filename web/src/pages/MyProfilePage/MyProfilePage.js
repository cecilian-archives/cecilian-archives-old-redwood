import PageLayout from "src/layouts/PageLayout/PageLayout";
import { EuiText } from "@elastic/eui";
import { ImKey } from "react-icons/im";
import ResponsiveTabs from "src/components/ResponsiveTabs/ResponsiveTabs";

const MyProfilePage = ({ tab }) => {
  const tabs = [
    {
      id: "tag",
      name: "Archive Tag",
      icon: "tag",
      content: (
        <EuiText>
          <p>
            Items in the archive that are related to you can be tagged as such.
          </p>
          <p>
            If a tag exists for your name already, select it here. If you don't
            have an archive tag yet, create one!
          </p>
        </EuiText>
      ),
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

  return (
    <PageLayout headerTitle="Your Profile" noPadding>
      <ResponsiveTabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        topLevelRoute="myProfileTab"
      />
    </PageLayout>
  );
};

export default MyProfilePage;
