export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type AccessKey = {
  __typename?: 'AccessKey';
  id: Scalars['Int'];
  key: Scalars['String'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['Int']>;
  usedBy: Array<Maybe<User>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type Anniversary60Profile = {
  __typename?: 'Anniversary60Profile';
  id: Scalars['Int'];
  userProfile?: Maybe<UserProfile>;
  userProfileId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  firstname: Scalars['String'];
  surname: Scalars['String'];
  prevNames: Scalars['String'];
  address: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  otherInfo: Scalars['String'];
  wouldLikeTo: Scalars['String'];
  dietary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ArchiveCollection = {
  __typename?: 'ArchiveCollection';
  id: Scalars['Int'];
  slug: Scalars['String'];
  type: ArchiveCollectionType;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  physicalLocation?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['Int']>;
  viewPerms: ArchiveCollectionViewPerms;
  editPerms: ArchiveCollectionEditPerms;
  items: Array<Maybe<CollectionItem>>;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export enum ArchiveCollectionEditPerms {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export enum ArchiveCollectionType {
  Physical = 'PHYSICAL',
  System = 'SYSTEM',
  User = 'USER'
}

export enum ArchiveCollectionViewPerms {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type ArchiveFile = {
  __typename?: 'ArchiveFile';
  id: Scalars['Int'];
  slug: Scalars['String'];
  kind: ArchiveFileKind;
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  items: Array<Maybe<ArchiveItemFile>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<User>;
  deletedById?: Maybe<Scalars['Int']>;
};

export enum ArchiveFileKind {
  /** Transcription */
  Transcription = 'TRANSCRIPTION',
  /** Scan */
  Scan = 'SCAN',
  /** Previously Digitised */
  PreviouslyDigitised = 'PREVIOUSLY_DIGITISED',
  /** Created Digitally */
  CreatedDigitally = 'CREATED_DIGITALLY'
}

export type ArchiveItem = {
  __typename?: 'ArchiveItem';
  id: Scalars['Int'];
  slug: Scalars['String'];
  archiveRef: Scalars['String'];
  type: ArchiveItemType;
  associatedDate?: Maybe<Scalars['DateTime']>;
  collections: Array<Maybe<CollectionItem>>;
  notes?: Maybe<Scalars['String']>;
  author?: Maybe<Cecilian>;
  authorId?: Maybe<Scalars['Int']>;
  tags: Array<Maybe<ArchiveItemTag>>;
  cecilians: Array<Maybe<ArchiveItemCecilian>>;
  files: Array<Maybe<ArchiveItemFile>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['Int']>;
};

export type ArchiveItemCecilian = {
  __typename?: 'ArchiveItemCecilian';
  id: Scalars['Int'];
  cecilian?: Maybe<Cecilian>;
  cecilianId?: Maybe<Scalars['Int']>;
  item?: Maybe<ArchiveItem>;
  itemId?: Maybe<Scalars['Int']>;
  addedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ArchiveItemFile = {
  __typename?: 'ArchiveItemFile';
  id: Scalars['Int'];
  file?: Maybe<ArchiveFile>;
  fileId?: Maybe<Scalars['Int']>;
  item?: Maybe<ArchiveItem>;
  itemId?: Maybe<Scalars['Int']>;
  addedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ArchiveItemTag = {
  __typename?: 'ArchiveItemTag';
  id: Scalars['Int'];
  item: ArchiveItem;
  itemId: Scalars['Int'];
  tag: Tag;
  tagId: Scalars['Int'];
  addedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export enum ArchiveItemType {
  Minutes = 'MINUTES',
  Photos = 'PHOTOS'
}

export type Cecilian = {
  __typename?: 'Cecilian';
  id: Scalars['Int'];
  slug: Scalars['String'];
  displayName: Scalars['String'];
  otherNames?: Maybe<Scalars['String']>;
  user?: Maybe<UserProfile>;
  tags: Array<Maybe<CecilianTag>>;
  inArchiveItems: Array<Maybe<ArchiveItemCecilian>>;
  authoredArchiveItems: Array<Maybe<ArchiveItem>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type CecilianTag = {
  __typename?: 'CecilianTag';
  id: Scalars['Int'];
  cecilian: Cecilian;
  cecilianId: Scalars['Int'];
  tag: Tag;
  tagId: Scalars['Int'];
  addedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type CollectionItem = {
  __typename?: 'CollectionItem';
  id: Scalars['Int'];
  item: ArchiveItem;
  itemId: Scalars['Int'];
  collection: ArchiveCollection;
  collectionId: Scalars['Int'];
  itemIndex?: Maybe<Scalars['String']>;
  addedBy?: Maybe<User>;
  addedById?: Maybe<Scalars['Int']>;
  addedAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateAccessKeyInput = {
  key: Scalars['String'];
  ownerId?: Maybe<Scalars['Int']>;
};

export type CreateAnniversary60ProfileInput = {
  userProfileId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  firstname: Scalars['String'];
  surname: Scalars['String'];
  prevNames: Scalars['String'];
  address: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  otherInfo: Scalars['String'];
  wouldLikeTo: Scalars['String'];
  dietary: Scalars['String'];
};

export type CreateArchiveCollectionInput = {
  slug: Scalars['String'];
  type: ArchiveCollectionType;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  physicalLocation?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['Int']>;
  viewPerms: ArchiveCollectionViewPerms;
  editPerms: ArchiveCollectionEditPerms;
  createdById: Scalars['Int'];
  updatedById?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateArchiveFileInput = {
  slug: Scalars['String'];
  kind: ArchiveFileKind;
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedById?: Maybe<Scalars['Int']>;
};

export type CreateArchiveItemCecilianInput = {
  cecilianId?: Maybe<Scalars['Int']>;
  itemId?: Maybe<Scalars['Int']>;
  addedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateArchiveItemFileInput = {
  fileId?: Maybe<Scalars['Int']>;
  itemId?: Maybe<Scalars['Int']>;
  addedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateArchiveItemInput = {
  slug: Scalars['String'];
  archiveRef: Scalars['String'];
  type: ArchiveItemType;
  associatedDate?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdById?: Maybe<Scalars['Int']>;
  updatedById?: Maybe<Scalars['Int']>;
};

export type CreateArchiveItemTagInput = {
  itemId: Scalars['Int'];
  tagId: Scalars['Int'];
  addedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateCecilianInput = {
  displayName: Scalars['String'];
  otherNames?: Maybe<Scalars['String']>;
};

export type CreateCecilianTagInput = {
  cecilianId: Scalars['Int'];
  tagId: Scalars['Int'];
  addedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateCollectionItemInput = {
  itemId: Scalars['Int'];
  collectionId: Scalars['Int'];
  itemIndex?: Maybe<Scalars['String']>;
  addedById?: Maybe<Scalars['Int']>;
  addedAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateEventInput = {
  type: EventType;
  name: Scalars['String'];
  inherentYearId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateRoleInput = {
  type: RoleType;
  name: Scalars['String'];
  inherentEventId?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateTagInput = {
  type: TagType;
  roleId?: Maybe<Scalars['Int']>;
  eventId?: Maybe<Scalars['Int']>;
  yearId?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateUserContactInput = {
  userId: Scalars['Int'];
  type: UserContactType;
  customType?: Maybe<Scalars['String']>;
  value: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  visibility: Visibility;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userProfileId?: Maybe<Scalars['Int']>;
};

export type CreateUserInput = {
  key: Scalars['String'];
  firstNames?: Maybe<Scalars['String']>;
  lastNames?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type CreateUserProfileInput = {
  userId: Scalars['Int'];
  cecilianId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  firstNames?: Maybe<Scalars['String']>;
  lastNames?: Maybe<Scalars['String']>;
  otherNames: Array<Maybe<Scalars['String']>>;
  visibility: Visibility;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateUserRoleInput = {
  roleName: Scalars['String'];
  accessLevel: Scalars['Int'];
};

export type CreateYearInput = {
  slug: Scalars['String'];
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};



export type Event = {
  __typename?: 'Event';
  id: Scalars['Int'];
  type: EventType;
  name: Scalars['String'];
  inherentYear?: Maybe<Year>;
  inherentYearId?: Maybe<Scalars['Int']>;
  roles: Array<Maybe<Role>>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  inTags: Array<Maybe<Tag>>;
};

export enum EventType {
  /** inherentYear */
  Show = 'SHOW',
  /** inherentYear */
  Anniversary = 'ANNIVERSARY',
  /** year */
  Event = 'EVENT'
}



export type Mutation = {
  __typename?: 'Mutation';
  createAccessKey: AccessKey;
  createAnniversary60Profile: Anniversary60Profile;
  createArchiveCollection: ArchiveCollection;
  createArchiveFile: ArchiveFile;
  createArchiveItem: ArchiveItem;
  createArchiveItemCecilian: ArchiveItemCecilian;
  createArchiveItemFile: ArchiveItemFile;
  createArchiveItemTag: ArchiveItemTag;
  createCecilian: Cecilian;
  createCecilianTag: CecilianTag;
  createCollectionItem: CollectionItem;
  createEvent: Event;
  createRole: Role;
  createTag: Tag;
  createUser: User;
  createUserContact: UserContact;
  createUserProfile: UserProfile;
  createUserRole: UserRole;
  createYear: Year;
  deleteAccessKey: AccessKey;
  deleteAnniversary60Profile: Anniversary60Profile;
  deleteArchiveCollection: ArchiveCollection;
  deleteArchiveFile: ArchiveFile;
  deleteArchiveItem: ArchiveItem;
  deleteArchiveItemCecilian: ArchiveItemCecilian;
  deleteArchiveItemFile: ArchiveItemFile;
  deleteArchiveItemTag: ArchiveItemTag;
  deleteCecilian: Cecilian;
  deleteCecilianTag: CecilianTag;
  deleteCollectionItem: CollectionItem;
  deleteEvent: Event;
  deleteRole: Role;
  deleteTag: Tag;
  deleteUser: User;
  deleteUserContact: UserContact;
  deleteUserProfile: UserProfile;
  deleteUserRole: UserRole;
  deleteYear: Year;
  updateAccessKey: AccessKey;
  updateAnniversary60Profile: Anniversary60Profile;
  updateArchiveCollection: ArchiveCollection;
  updateArchiveFile: ArchiveFile;
  updateArchiveItem: ArchiveItem;
  updateArchiveItemCecilian: ArchiveItemCecilian;
  updateArchiveItemFile: ArchiveItemFile;
  updateArchiveItemTag: ArchiveItemTag;
  updateCecilian: Cecilian;
  updateCecilianTag: CecilianTag;
  updateCollectionItem: CollectionItem;
  updateEvent: Event;
  updateRole: Role;
  updateTag: Tag;
  updateUser: User;
  updateUserContact: UserContact;
  updateUserProfile: UserProfile;
  updateUserRole: UserRole;
  updateYear: Year;
};


export type MutationCreateAccessKeyArgs = {
  input: CreateAccessKeyInput;
};


export type MutationCreateAnniversary60ProfileArgs = {
  input: CreateAnniversary60ProfileInput;
};


export type MutationCreateArchiveCollectionArgs = {
  input: CreateArchiveCollectionInput;
};


export type MutationCreateArchiveFileArgs = {
  input: CreateArchiveFileInput;
};


export type MutationCreateArchiveItemArgs = {
  input: CreateArchiveItemInput;
};


export type MutationCreateArchiveItemCecilianArgs = {
  input: CreateArchiveItemCecilianInput;
};


export type MutationCreateArchiveItemFileArgs = {
  input: CreateArchiveItemFileInput;
};


export type MutationCreateArchiveItemTagArgs = {
  input: CreateArchiveItemTagInput;
};


export type MutationCreateCecilianArgs = {
  input: CreateCecilianInput;
};


export type MutationCreateCecilianTagArgs = {
  input: CreateCecilianTagInput;
};


export type MutationCreateCollectionItemArgs = {
  input: CreateCollectionItemInput;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserContactArgs = {
  input: CreateUserContactInput;
};


export type MutationCreateUserProfileArgs = {
  input: CreateUserProfileInput;
};


export type MutationCreateUserRoleArgs = {
  input: CreateUserRoleInput;
};


export type MutationCreateYearArgs = {
  input: CreateYearInput;
};


export type MutationDeleteAccessKeyArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteAnniversary60ProfileArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteArchiveCollectionArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteArchiveFileArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteArchiveItemArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteArchiveItemCecilianArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteArchiveItemFileArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteArchiveItemTagArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteCecilianArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteCecilianTagArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteCollectionItemArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserContactArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserProfileArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserRoleArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteYearArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateAccessKeyArgs = {
  id: Scalars['Int'];
  input: UpdateAccessKeyInput;
};


export type MutationUpdateAnniversary60ProfileArgs = {
  id: Scalars['Int'];
  input: UpdateAnniversary60ProfileInput;
};


export type MutationUpdateArchiveCollectionArgs = {
  id: Scalars['Int'];
  input: UpdateArchiveCollectionInput;
};


export type MutationUpdateArchiveFileArgs = {
  id: Scalars['Int'];
  input: UpdateArchiveFileInput;
};


export type MutationUpdateArchiveItemArgs = {
  id: Scalars['Int'];
  input: UpdateArchiveItemInput;
};


export type MutationUpdateArchiveItemCecilianArgs = {
  id: Scalars['Int'];
  input: UpdateArchiveItemCecilianInput;
};


export type MutationUpdateArchiveItemFileArgs = {
  id: Scalars['Int'];
  input: UpdateArchiveItemFileInput;
};


export type MutationUpdateArchiveItemTagArgs = {
  id: Scalars['Int'];
  input: UpdateArchiveItemTagInput;
};


export type MutationUpdateCecilianArgs = {
  id: Scalars['Int'];
  input: UpdateCecilianInput;
};


export type MutationUpdateCecilianTagArgs = {
  id: Scalars['Int'];
  input: UpdateCecilianTagInput;
};


export type MutationUpdateCollectionItemArgs = {
  id: Scalars['Int'];
  input: UpdateCollectionItemInput;
};


export type MutationUpdateEventArgs = {
  id: Scalars['Int'];
  input: UpdateEventInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['Int'];
  input: UpdateRoleInput;
};


export type MutationUpdateTagArgs = {
  id: Scalars['Int'];
  input: UpdateTagInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  input: UpdateUserInput;
};


export type MutationUpdateUserContactArgs = {
  id: Scalars['Int'];
  input: UpdateUserContactInput;
};


export type MutationUpdateUserProfileArgs = {
  id: Scalars['Int'];
  input: UpdateUserProfileInput;
};


export type MutationUpdateUserRoleArgs = {
  id: Scalars['Int'];
  input: UpdateUserRoleInput;
};


export type MutationUpdateYearArgs = {
  id: Scalars['Int'];
  input: UpdateYearInput;
};

export type Query = {
  __typename?: 'Query';
  accessKey?: Maybe<AccessKey>;
  accessKeys: Array<AccessKey>;
  anniversary60Profile?: Maybe<Anniversary60Profile>;
  anniversary60Profiles: Array<Anniversary60Profile>;
  archiveCollection?: Maybe<ArchiveCollection>;
  archiveCollections: Array<ArchiveCollection>;
  archiveFile?: Maybe<ArchiveFile>;
  archiveFiles: Array<ArchiveFile>;
  archiveItem?: Maybe<ArchiveItem>;
  archiveItemCecilian?: Maybe<ArchiveItemCecilian>;
  archiveItemCecilians: Array<ArchiveItemCecilian>;
  archiveItemFile?: Maybe<ArchiveItemFile>;
  archiveItemFiles: Array<ArchiveItemFile>;
  archiveItemTag?: Maybe<ArchiveItemTag>;
  archiveItemTags: Array<ArchiveItemTag>;
  archiveItems: Array<ArchiveItem>;
  cecilian?: Maybe<Cecilian>;
  cecilianTag?: Maybe<CecilianTag>;
  cecilianTags: Array<CecilianTag>;
  cecilians: Array<Cecilian>;
  collectionItem?: Maybe<CollectionItem>;
  collectionItems: Array<CollectionItem>;
  event?: Maybe<Event>;
  events: Array<Event>;
  myProfile?: Maybe<UserProfile>;
  redwood?: Maybe<Redwood>;
  role?: Maybe<Role>;
  roles: Array<Role>;
  searchCecilians: Array<Cecilian>;
  searchEvents: Array<Event>;
  searchRoles: Array<Role>;
  searchYears: Array<Year>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  user?: Maybe<User>;
  userContact?: Maybe<UserContact>;
  userContacts: Array<UserContact>;
  userProfile?: Maybe<UserProfile>;
  userProfiles: Array<UserProfile>;
  userRole?: Maybe<UserRole>;
  userRoles: Array<UserRole>;
  users: Array<User>;
  year?: Maybe<Year>;
  years: Array<Year>;
};


export type QueryAccessKeyArgs = {
  id: Scalars['Int'];
};


export type QueryAnniversary60ProfileArgs = {
  id: Scalars['Int'];
};


export type QueryArchiveCollectionArgs = {
  id: Scalars['Int'];
};


export type QueryArchiveFileArgs = {
  id: Scalars['Int'];
};


export type QueryArchiveItemArgs = {
  id: Scalars['Int'];
};


export type QueryArchiveItemCecilianArgs = {
  id: Scalars['Int'];
};


export type QueryArchiveItemFileArgs = {
  id: Scalars['Int'];
};


export type QueryArchiveItemTagArgs = {
  id: Scalars['Int'];
};


export type QueryCecilianArgs = {
  id: Scalars['Int'];
};


export type QueryCecilianTagArgs = {
  id: Scalars['Int'];
};


export type QueryCollectionItemArgs = {
  id: Scalars['Int'];
};


export type QueryEventArgs = {
  id: Scalars['Int'];
};


export type QueryRoleArgs = {
  id: Scalars['Int'];
};


export type QuerySearchCeciliansArgs = {
  needle?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerySearchEventsArgs = {
  needle?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerySearchRolesArgs = {
  needle?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerySearchYearsArgs = {
  needle?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryTagArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryUserContactArgs = {
  id: Scalars['Int'];
};


export type QueryUserProfileArgs = {
  id: Scalars['Int'];
};


export type QueryUserRoleArgs = {
  id: Scalars['Int'];
};


export type QueryYearArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int'];
  type: RoleType;
  name: Scalars['String'];
  inherentEvent?: Maybe<Event>;
  inherentEventId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  inTags: Array<Maybe<Tag>>;
};

export enum RoleType {
  /** event|year */
  Society = 'SOCIETY',
  /** year */
  Committee = 'COMMITTEE',
  /** event */
  Production = 'PRODUCTION',
  /** inherentEvent */
  Performance = 'PERFORMANCE'
}

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  type: TagType;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['Int']>;
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']>;
  year?: Maybe<Year>;
  yearId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  cecilians: Array<Maybe<CecilianTag>>;
  archiveItems: Array<Maybe<ArchiveItemTag>>;
};

export enum TagType {
  Year = 'YEAR',
  Event = 'EVENT',
  Role = 'ROLE'
}


export type UpdateAccessKeyInput = {
  key?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['Int']>;
};

export type UpdateAnniversary60ProfileInput = {
  userProfileId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  prevNames?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  otherInfo?: Maybe<Scalars['String']>;
  wouldLikeTo?: Maybe<Scalars['String']>;
  dietary?: Maybe<Scalars['String']>;
};

export type UpdateArchiveCollectionInput = {
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<ArchiveCollectionType>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  physicalLocation?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['Int']>;
  viewPerms?: Maybe<ArchiveCollectionViewPerms>;
  editPerms?: Maybe<ArchiveCollectionEditPerms>;
  createdById?: Maybe<Scalars['Int']>;
  updatedById?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateArchiveFileInput = {
  slug?: Maybe<Scalars['String']>;
  kind?: Maybe<ArchiveFileKind>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedById?: Maybe<Scalars['Int']>;
};

export type UpdateArchiveItemCecilianInput = {
  cecilianId?: Maybe<Scalars['Int']>;
  itemId?: Maybe<Scalars['Int']>;
  addedAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateArchiveItemFileInput = {
  fileId?: Maybe<Scalars['Int']>;
  itemId?: Maybe<Scalars['Int']>;
  addedAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateArchiveItemInput = {
  slug?: Maybe<Scalars['String']>;
  archiveRef?: Maybe<Scalars['String']>;
  type?: Maybe<ArchiveItemType>;
  associatedDate?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdById?: Maybe<Scalars['Int']>;
  updatedById?: Maybe<Scalars['Int']>;
};

export type UpdateArchiveItemTagInput = {
  itemId?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
  addedAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateCecilianInput = {
  slug?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  otherNames?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateCecilianTagInput = {
  cecilianId?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
  addedAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateCollectionItemInput = {
  itemId?: Maybe<Scalars['Int']>;
  collectionId?: Maybe<Scalars['Int']>;
  itemIndex?: Maybe<Scalars['String']>;
  addedById?: Maybe<Scalars['Int']>;
  addedAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateEventInput = {
  type?: Maybe<EventType>;
  name?: Maybe<Scalars['String']>;
  inherentYearId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateRoleInput = {
  type?: Maybe<RoleType>;
  name?: Maybe<Scalars['String']>;
  inherentEventId?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateTagInput = {
  type?: Maybe<TagType>;
  roleId?: Maybe<Scalars['Int']>;
  eventId?: Maybe<Scalars['Int']>;
  yearId?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateUserContactInput = {
  userId?: Maybe<Scalars['Int']>;
  type?: Maybe<UserContactType>;
  customType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  visibility?: Maybe<Visibility>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userProfileId?: Maybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  slug?: Maybe<Scalars['String']>;
  verifiedByKeyId?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateUserProfileInput = {
  userId?: Maybe<Scalars['Int']>;
  cecilianId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  firstNames?: Maybe<Scalars['String']>;
  lastNames?: Maybe<Scalars['String']>;
  otherNames: Array<Maybe<Scalars['String']>>;
  visibility?: Maybe<Visibility>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateUserRoleInput = {
  roleName?: Maybe<Scalars['String']>;
  accessLevel?: Maybe<Scalars['Int']>;
};

export type UpdateYearInput = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  slug: Scalars['String'];
  profile?: Maybe<UserProfile>;
  accessKey?: Maybe<AccessKey>;
  verifiedByKey: AccessKey;
  verifiedByKeyId: Scalars['Int'];
  roles: Array<Maybe<UserRole>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  archiveItemsCreated: Array<Maybe<ArchiveItem>>;
  collectionsOwned: Array<Maybe<ArchiveCollection>>;
  collectionsCreated: Array<Maybe<ArchiveCollection>>;
  UserContact: Array<Maybe<UserContact>>;
  ArchiveItem: Array<Maybe<ArchiveItem>>;
  ArchiveFile: Array<Maybe<ArchiveFile>>;
  ArchiveCollection: Array<Maybe<ArchiveCollection>>;
  CollectionItem: Array<Maybe<CollectionItem>>;
};

export type UserContact = {
  __typename?: 'UserContact';
  id: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
  type: UserContactType;
  customType?: Maybe<Scalars['String']>;
  value: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  visibility: Visibility;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  UserProfile?: Maybe<UserProfile>;
  userProfileId?: Maybe<Scalars['Int']>;
};

export enum UserContactType {
  Address = 'ADDRESS',
  Email = 'EMAIL',
  Phone = 'PHONE',
  Custom = 'CUSTOM'
}

export type UserProfile = {
  __typename?: 'UserProfile';
  id: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
  cecilian?: Maybe<Cecilian>;
  cecilianId?: Maybe<Scalars['Int']>;
  accessKeys: Array<Maybe<AccessKey>>;
  title?: Maybe<Scalars['String']>;
  firstNames?: Maybe<Scalars['String']>;
  lastNames?: Maybe<Scalars['String']>;
  otherNames?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  contactDetails: Array<Maybe<UserContact>>;
  anniversary60?: Maybe<Anniversary60Profile>;
  visibility: Visibility;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UserRole = {
  __typename?: 'UserRole';
  id: Scalars['Int'];
  roleName: Scalars['String'];
  accessLevel: Scalars['Int'];
  users: Array<Maybe<User>>;
};

export enum Visibility {
  Hidden = 'HIDDEN',
  Visible = 'VISIBLE'
}

export type Year = {
  __typename?: 'Year';
  id: Scalars['Int'];
  slug: Scalars['String'];
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  events: Array<Maybe<Event>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  inTags: Array<Maybe<Tag>>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  specifiedByUrl?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

export type MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQuery = (
  { __typename?: 'Query' }
  & { myProfile?: Maybe<(
    { __typename?: 'UserProfile' }
    & Pick<UserProfile, 'title' | 'firstNames' | 'lastNames' | 'otherNames' | 'picture' | 'visibility' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'slug'>
    ), cecilian?: Maybe<(
      { __typename?: 'Cecilian' }
      & Pick<Cecilian, 'displayName'>
    )>, accessKeys: Array<Maybe<(
      { __typename?: 'AccessKey' }
      & Pick<AccessKey, 'key' | 'createdAt' | 'removedAt'>
    )>>, contactDetails: Array<Maybe<(
      { __typename?: 'UserContact' }
      & Pick<UserContact, 'type' | 'customType' | 'value' | 'notes' | 'visibility'>
    )>> }
  )> }
);

export type CecilianTagInputQueryVariables = Exact<{
  needle?: Maybe<Scalars['String']>;
}>;


export type CecilianTagInputQuery = (
  { __typename?: 'Query' }
  & { searchResults: Array<(
    { __typename?: 'Cecilian' }
    & Pick<Cecilian, 'slug' | 'displayName' | 'otherNames'>
    & { user?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'picture'>
    )>, tags: Array<Maybe<(
      { __typename?: 'CecilianTag' }
      & { tag: (
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'type'>
        & { year?: Maybe<(
          { __typename?: 'Year' }
          & Pick<Year, 'slug' | 'name'>
        )> }
      ) }
    )>> }
  )> }
);

export type CreateCecilianMutationVariables = Exact<{
  input: CreateCecilianInput;
}>;


export type CreateCecilianMutation = (
  { __typename?: 'Mutation' }
  & { newEntity: (
    { __typename?: 'Cecilian' }
    & Pick<Cecilian, 'slug' | 'displayName' | 'otherNames'>
    & { user?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'picture'>
    )>, tags: Array<Maybe<(
      { __typename?: 'CecilianTag' }
      & { tag: (
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'type'>
        & { year?: Maybe<(
          { __typename?: 'Year' }
          & Pick<Year, 'slug' | 'name'>
        )> }
      ) }
    )>> }
  ) }
);

export type EventTagInputQueryVariables = Exact<{
  needle?: Maybe<Scalars['String']>;
}>;


export type EventTagInputQuery = (
  { __typename?: 'Query' }
  & { searchResults: Array<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type' | 'name'>
    & { inherentYear?: Maybe<(
      { __typename?: 'Year' }
      & Pick<Year, 'slug' | 'name'>
    )> }
  )>, types?: Maybe<(
    { __typename?: '__Type' }
    & { enumValues?: Maybe<Array<(
      { __typename?: '__EnumValue' }
      & Pick<__EnumValue, 'name' | 'description'>
    )>> }
  )> }
);

export type CreateEventMutationVariables = Exact<{
  input: CreateEventInput;
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { newEntity: (
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'type' | 'name'>
  ) }
);

export type RoleTagInputQueryVariables = Exact<{
  needle?: Maybe<Scalars['String']>;
}>;


export type RoleTagInputQuery = (
  { __typename?: 'Query' }
  & { searchResults: Array<(
    { __typename?: 'Role' }
    & Pick<Role, 'id' | 'type' | 'name'>
    & { inherentEvent?: Maybe<(
      { __typename?: 'Event' }
      & Pick<Event, 'type' | 'name'>
      & { inherentYear?: Maybe<(
        { __typename?: 'Year' }
        & Pick<Year, 'slug' | 'name'>
      )> }
    )> }
  )>, types?: Maybe<(
    { __typename?: '__Type' }
    & { enumValues?: Maybe<Array<(
      { __typename?: '__EnumValue' }
      & Pick<__EnumValue, 'name' | 'description'>
    )>> }
  )> }
);

export type CreateRoleMutationVariables = Exact<{
  input: CreateRoleInput;
}>;


export type CreateRoleMutation = (
  { __typename?: 'Mutation' }
  & { newEntity: (
    { __typename?: 'Role' }
    & Pick<Role, 'id' | 'type' | 'name'>
  ) }
);

export type YearTagInputQueryVariables = Exact<{
  needle?: Maybe<Scalars['String']>;
}>;


export type YearTagInputQuery = (
  { __typename?: 'Query' }
  & { searchResults: Array<(
    { __typename?: 'Year' }
    & Pick<Year, 'slug' | 'name'>
    & { events: Array<Maybe<(
      { __typename?: 'Event' }
      & Pick<Event, 'type' | 'name'>
    )>> }
  )> }
);

export type CreateYearMutationVariables = Exact<{
  input: CreateYearInput;
}>;


export type CreateYearMutation = (
  { __typename?: 'Mutation' }
  & { newEntity: (
    { __typename?: 'Year' }
    & Pick<Year, 'slug' | 'name'>
  ) }
);

export type CreateUserWithKeyVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserWithKey = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename: 'User' }
    & Pick<User, 'createdAt'>
  ) }
);
