import ChromeLayout from "src/layouts/ChromeLayout/ChromeLayout";
import tw from "twin.macro";
import { ImKey } from "react-icons/im";
import ResponsiveTabs from "src/components/chrome/ResponsiveTabs/ResponsiveTabs";
import MyProfileCell from "src/components/MyProfileCell/MyProfileCell";
import MyProfileArchiveTag from "src/components/MyProfileArchiveTag/MyProfileArchiveTag";
import MyProfileAboutYou from "src/components/MyProfileAboutYou/MyProfileAboutYou";

export const MyProfile = ({ profile, cecilians, tab }) => {
  const tabs = [
    {
      id: "tag",
      name: "Archive Tag",
      icon: "tag",
      content: <MyProfileArchiveTag profile={profile} cecilians={cecilians} />,
    },
    {
      id: "about",
      name: "About You",
      icon: "user",
      content: <MyProfileAboutYou profile={profile} cecilians={cecilians} />,
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
    <ChromeLayout headerTitle="Your Profile">
      <div>
        <div component="div">
          <PageContent>
            <div>
              <ResponsiveTabs
                tabs={tabs}
                selectedTabId={selectedTabId}
                topLevelRoute="myProfileTab"
              />
            </div>
          </PageContent>
        </div>
      </div>
    </ChromeLayout>
  );
};

const PageContent = tw.div`
  p-0
`;

const MyProfilePage = ({ tab }) => <MyProfileCell tab={tab} />;

export default MyProfilePage;
