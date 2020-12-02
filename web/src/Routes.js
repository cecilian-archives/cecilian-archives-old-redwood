// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from "@redwoodjs/router";

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />

      <Private unauthenticated="home">
        <Route path="/auth/login" page={AuthLoginPage} name="authLogin" />
        <Route path="/auth/key" page={AuthKeyPage} name="authKey" />
      </Private>

      <Private unauthenticated="authKey" role="verifiedCecilian">
        <Route path="/cecilians/me" page={MyProfilePage} name="myProfile" />
      </Private>

      <Private unauthenticated="home" role="superadmin">
        <Route path="/data/years/new" page={DataNewYearPage} name="adminDataNewYear" />
        <Route path="/data/years/{id:Int}/edit" page={DataEditYearPage} name="adminDataEditYear" />
        <Route path="/data/years/{id:Int}" page={DataYearPage} name="adminDataYear" />
        <Route path="/data/years" page={DataYearsPage} name="adminDataYears" />
        <Route path="/data/users/new" page={DataNewUserPage} name="adminDataNewUser" />
        <Route path="/data/users/{id:Int}/edit" page={DataEditUserPage} name="adminDataEditUser" />
        <Route path="/data/users/{id:Int}" page={DataUserPage} name="adminDataUser" />
        <Route path="/data/users" page={DataUsersPage} name="adminDataUsers" />
        <Route path="/data/user-roles/new" page={DataNewUserRolePage} name="adminDataNewUserRole" />
        <Route path="/data/user-roles/{id:Int}/edit" page={DataEditUserRolePage} name="adminDataEditUserRole" />
        <Route path="/data/user-roles/{id:Int}" page={DataUserRolePage} name="adminDataUserRole" />
        <Route path="/data/user-roles" page={DataUserRolesPage} name="adminDataUserRoles" />
        <Route path="/data/user-profiles/new" page={DataNewUserProfilePage} name="adminDataNewUserProfile" />
        <Route path="/data/user-profiles/{id:Int}/edit" page={DataEditUserProfilePage} name="adminDataEditUserProfile" />
        <Route path="/data/user-profiles/{id:Int}" page={DataUserProfilePage} name="adminDataUserProfile" />
        <Route path="/data/user-profiles" page={DataUserProfilesPage} name="adminDataUserProfiles" />
        <Route path="/data/user-contacts/new" page={DataNewUserContactPage} name="adminDataNewUserContact" />
        <Route path="/data/user-contacts/{id:Int}/edit" page={DataEditUserContactPage} name="adminDataEditUserContact" />
        <Route path="/data/user-contacts/{id:Int}" page={DataUserContactPage} name="adminDataUserContact" />
        <Route path="/data/user-contacts" page={DataUserContactsPage} name="adminDataUserContacts" />
        <Route path="/data/tags/new" page={DataNewTagPage} name="adminDataNewTag" />
        <Route path="/data/tags/{id:Int}/edit" page={DataEditTagPage} name="adminDataEditTag" />
        <Route path="/data/tags/{id:Int}" page={DataTagPage} name="adminDataTag" />
        <Route path="/data/tags" page={DataTagsPage} name="adminDataTags" />
        <Route path="/data/roles/new" page={DataNewRolePage} name="adminDataNewRole" />
        <Route path="/data/roles/{id:Int}/edit" page={DataEditRolePage} name="adminDataEditRole" />
        <Route path="/data/roles/{id:Int}" page={DataRolePage} name="adminDataRole" />
        <Route path="/data/roles" page={DataRolesPage} name="adminDataRoles" />
        <Route path="/data/log-entries/new" page={DataNewLogEntryPage} name="adminDataNewLogEntry" />
        <Route path="/data/log-entries/{id:Int}/edit" page={DataEditLogEntryPage} name="adminDataEditLogEntry" />
        <Route path="/data/log-entries/{id:Int}" page={DataLogEntryPage} name="adminDataLogEntry" />
        <Route path="/data/log-entries" page={DataLogEntriesPage} name="adminDataLogEntries" />
        <Route path="/data/events/new" page={DataNewEventPage} name="adminDataNewEvent" />
        <Route path="/data/events/{id:Int}/edit" page={DataEditEventPage} name="adminDataEditEvent" />
        <Route path="/data/events/{id:Int}" page={DataEventPage} name="adminDataEvent" />
        <Route path="/data/events" page={DataEventsPage} name="adminDataEvents" />
        <Route path="/data/collection-items/new" page={DataNewCollectionItemPage} name="adminDataNewCollectionItem" />
        <Route path="/data/collection-items/{id:Int}/edit" page={DataEditCollectionItemPage} name="adminDataEditCollectionItem" />
        <Route path="/data/collection-items/{id:Int}" page={DataCollectionItemPage} name="adminDataCollectionItem" />
        <Route path="/data/collection-items" page={DataCollectionItemsPage} name="adminDataCollectionItems" />
        <Route path="/data/cecilian-tags/new" page={DataNewCecilianTagPage} name="adminDataNewCecilianTag" />
        <Route path="/data/cecilian-tags/{id:Int}/edit" page={DataEditCecilianTagPage} name="adminDataEditCecilianTag" />
        <Route path="/data/cecilian-tags/{id:Int}" page={DataCecilianTagPage} name="adminDataCecilianTag" />
        <Route path="/data/cecilian-tags" page={DataCecilianTagsPage} name="adminDataCecilianTags" />
        <Route path="/data/cecilians/new" page={DataNewCecilianPage} name="adminDataNewCecilian" />
        <Route path="/data/cecilians/{id:Int}/edit" page={DataEditCecilianPage} name="adminDataEditCecilian" />
        <Route path="/data/cecilians/{id:Int}" page={DataCecilianPage} name="adminDataCecilian" />
        <Route path="/data/cecilians" page={DataCeciliansPage} name="adminDataCecilians" />
        <Route path="/data/archive-item-tags/new" page={DataNewArchiveItemTagPage} name="adminDataNewArchiveItemTag" />
        <Route path="/data/archive-item-tags/{id:Int}/edit" page={DataEditArchiveItemTagPage} name="adminDataEditArchiveItemTag" />
        <Route path="/data/archive-item-tags/{id:Int}" page={DataArchiveItemTagPage} name="adminDataArchiveItemTag" />
        <Route path="/data/archive-item-tags" page={DataArchiveItemTagsPage} name="adminDataArchiveItemTags" />
        <Route path="/data/archive-items/new" page={DataNewArchiveItemPage} name="adminDataNewArchiveItem" />
        <Route path="/data/archive-items/{id:Int}/edit" page={DataEditArchiveItemPage} name="adminDataEditArchiveItem" />
        <Route path="/data/archive-items/{id:Int}" page={DataArchiveItemPage} name="adminDataArchiveItem" />
        <Route path="/data/archive-items" page={DataArchiveItemsPage} name="adminDataArchiveItems" />
        <Route path="/data/archive-item-files/new" page={DataNewArchiveItemFilePage} name="adminDataNewArchiveItemFile" />
        <Route path="/data/archive-item-files/{id:Int}/edit" page={DataEditArchiveItemFilePage} name="adminDataEditArchiveItemFile" />
        <Route path="/data/archive-item-files/{id:Int}" page={DataArchiveItemFilePage} name="adminDataArchiveItemFile" />
        <Route path="/data/archive-item-files" page={DataArchiveItemFilesPage} name="adminDataArchiveItemFiles" />
        <Route path="/data/archive-item-cecilians/new" page={DataNewArchiveItemCecilianPage} name="adminDataNewArchiveItemCecilian" />
        <Route path="/data/archive-item-cecilians/{id:Int}/edit" page={DataEditArchiveItemCecilianPage} name="adminDataEditArchiveItemCecilian" />
        <Route path="/data/archive-item-cecilians/{id:Int}" page={DataArchiveItemCecilianPage} name="adminDataArchiveItemCecilian" />
        <Route path="/data/archive-item-cecilians" page={DataArchiveItemCeciliansPage} name="adminDataArchiveItemCecilians" />
        <Route path="/data/archive-files/new" page={DataNewArchiveFilePage} name="adminDataNewArchiveFile" />
        <Route path="/data/archive-files/{id:Int}/edit" page={DataEditArchiveFilePage} name="adminDataEditArchiveFile" />
        <Route path="/data/archive-files/{id:Int}" page={DataArchiveFilePage} name="adminDataArchiveFile" />
        <Route path="/data/archive-files" page={DataArchiveFilesPage} name="adminDataArchiveFiles" />
        <Route path="/data/archive-collections/new" page={DataNewArchiveCollectionPage} name="adminDataNewArchiveCollection" />
        <Route path="/data/archive-collections/{id:Int}/edit" page={DataEditArchiveCollectionPage} name="adminDataEditArchiveCollection" />
        <Route path="/data/archive-collections/{id:Int}" page={DataArchiveCollectionPage} name="adminDataArchiveCollection" />
        <Route path="/data/archive-collections" page={DataArchiveCollectionsPage} name="adminDataArchiveCollections" />
        <Route path="/data/anniversary60-profiles/new" page={DataNewAnniversary60ProfilePage} name="adminDataNewAnniversary60Profile" />
        <Route path="/data/anniversary60-profiles/{id:Int}/edit" page={DataEditAnniversary60ProfilePage} name="adminDataEditAnniversary60Profile" />
        <Route path="/data/anniversary60-profiles/{id:Int}" page={DataAnniversary60ProfilePage} name="adminDataAnniversary60Profile" />
        <Route path="/data/anniversary60-profiles" page={DataAnniversary60ProfilesPage} name="adminDataAnniversary60Profiles" />
        <Route path="/data/access-keys/new" page={DataNewAccessKeyPage} name="adminDataNewAccessKey" />
        <Route path="/data/access-keys/{id:Int}/edit" page={DataEditAccessKeyPage} name="adminDataEditAccessKey" />
        <Route path="/data/access-keys/{id:Int}" page={DataAccessKeyPage} name="adminDataAccessKey" />
        <Route path="/data/access-keys" page={DataAccessKeysPage} name="adminDataAccessKeys" />
      </Private>
    </Router>
  );
};

export default Routes;
