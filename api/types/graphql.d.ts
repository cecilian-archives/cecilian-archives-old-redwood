import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessKey: ResolverTypeWrapper<AccessKey>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Anniversary60Profile: ResolverTypeWrapper<Anniversary60Profile>;
  ArchiveCollection: ResolverTypeWrapper<ArchiveCollection>;
  ArchiveCollectionEditPerms: ArchiveCollectionEditPerms;
  ArchiveCollectionType: ArchiveCollectionType;
  ArchiveCollectionViewPerms: ArchiveCollectionViewPerms;
  ArchiveFile: ResolverTypeWrapper<ArchiveFile>;
  ArchiveFileKind: ArchiveFileKind;
  ArchiveItem: ResolverTypeWrapper<ArchiveItem>;
  ArchiveItemCecilian: ResolverTypeWrapper<ArchiveItemCecilian>;
  ArchiveItemFile: ResolverTypeWrapper<ArchiveItemFile>;
  ArchiveItemTag: ResolverTypeWrapper<ArchiveItemTag>;
  ArchiveItemType: ArchiveItemType;
  Cecilian: ResolverTypeWrapper<Cecilian>;
  CecilianTag: ResolverTypeWrapper<CecilianTag>;
  CollectionItem: ResolverTypeWrapper<CollectionItem>;
  CreateAccessKeyInput: CreateAccessKeyInput;
  CreateAnniversary60ProfileInput: CreateAnniversary60ProfileInput;
  CreateArchiveCollectionInput: CreateArchiveCollectionInput;
  CreateArchiveFileInput: CreateArchiveFileInput;
  CreateArchiveItemCecilianInput: CreateArchiveItemCecilianInput;
  CreateArchiveItemFileInput: CreateArchiveItemFileInput;
  CreateArchiveItemInput: CreateArchiveItemInput;
  CreateArchiveItemTagInput: CreateArchiveItemTagInput;
  CreateCecilianInput: CreateCecilianInput;
  CreateCecilianTagInput: CreateCecilianTagInput;
  CreateCollectionItemInput: CreateCollectionItemInput;
  CreateEventInput: CreateEventInput;
  CreateRoleInput: CreateRoleInput;
  CreateTagInput: CreateTagInput;
  CreateUserContactInput: CreateUserContactInput;
  CreateUserInput: CreateUserInput;
  CreateUserProfileInput: CreateUserProfileInput;
  CreateUserRoleInput: CreateUserRoleInput;
  CreateYearInput: CreateYearInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Event: ResolverTypeWrapper<Event>;
  EventType: EventType;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Role: ResolverTypeWrapper<Role>;
  RoleType: RoleType;
  Tag: ResolverTypeWrapper<Tag>;
  TagType: TagType;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateAccessKeyInput: UpdateAccessKeyInput;
  UpdateAnniversary60ProfileInput: UpdateAnniversary60ProfileInput;
  UpdateArchiveCollectionInput: UpdateArchiveCollectionInput;
  UpdateArchiveFileInput: UpdateArchiveFileInput;
  UpdateArchiveItemCecilianInput: UpdateArchiveItemCecilianInput;
  UpdateArchiveItemFileInput: UpdateArchiveItemFileInput;
  UpdateArchiveItemInput: UpdateArchiveItemInput;
  UpdateArchiveItemTagInput: UpdateArchiveItemTagInput;
  UpdateCecilianInput: UpdateCecilianInput;
  UpdateCecilianTagInput: UpdateCecilianTagInput;
  UpdateCollectionItemInput: UpdateCollectionItemInput;
  UpdateEventInput: UpdateEventInput;
  UpdateRoleInput: UpdateRoleInput;
  UpdateTagInput: UpdateTagInput;
  UpdateUserContactInput: UpdateUserContactInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserProfileInput: UpdateUserProfileInput;
  UpdateUserRoleInput: UpdateUserRoleInput;
  UpdateYearInput: UpdateYearInput;
  User: ResolverTypeWrapper<User>;
  UserContact: ResolverTypeWrapper<UserContact>;
  UserContactType: UserContactType;
  UserProfile: ResolverTypeWrapper<UserProfile>;
  UserRole: ResolverTypeWrapper<UserRole>;
  Visibility: Visibility;
  Year: ResolverTypeWrapper<Year>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessKey: AccessKey;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Anniversary60Profile: Anniversary60Profile;
  ArchiveCollection: ArchiveCollection;
  ArchiveFile: ArchiveFile;
  ArchiveItem: ArchiveItem;
  ArchiveItemCecilian: ArchiveItemCecilian;
  ArchiveItemFile: ArchiveItemFile;
  ArchiveItemTag: ArchiveItemTag;
  Cecilian: Cecilian;
  CecilianTag: CecilianTag;
  CollectionItem: CollectionItem;
  CreateAccessKeyInput: CreateAccessKeyInput;
  CreateAnniversary60ProfileInput: CreateAnniversary60ProfileInput;
  CreateArchiveCollectionInput: CreateArchiveCollectionInput;
  CreateArchiveFileInput: CreateArchiveFileInput;
  CreateArchiveItemCecilianInput: CreateArchiveItemCecilianInput;
  CreateArchiveItemFileInput: CreateArchiveItemFileInput;
  CreateArchiveItemInput: CreateArchiveItemInput;
  CreateArchiveItemTagInput: CreateArchiveItemTagInput;
  CreateCecilianInput: CreateCecilianInput;
  CreateCecilianTagInput: CreateCecilianTagInput;
  CreateCollectionItemInput: CreateCollectionItemInput;
  CreateEventInput: CreateEventInput;
  CreateRoleInput: CreateRoleInput;
  CreateTagInput: CreateTagInput;
  CreateUserContactInput: CreateUserContactInput;
  CreateUserInput: CreateUserInput;
  CreateUserProfileInput: CreateUserProfileInput;
  CreateUserRoleInput: CreateUserRoleInput;
  CreateYearInput: CreateYearInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Event: Event;
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Query: {};
  Redwood: Redwood;
  Role: Role;
  Tag: Tag;
  Time: Scalars['Time'];
  UpdateAccessKeyInput: UpdateAccessKeyInput;
  UpdateAnniversary60ProfileInput: UpdateAnniversary60ProfileInput;
  UpdateArchiveCollectionInput: UpdateArchiveCollectionInput;
  UpdateArchiveFileInput: UpdateArchiveFileInput;
  UpdateArchiveItemCecilianInput: UpdateArchiveItemCecilianInput;
  UpdateArchiveItemFileInput: UpdateArchiveItemFileInput;
  UpdateArchiveItemInput: UpdateArchiveItemInput;
  UpdateArchiveItemTagInput: UpdateArchiveItemTagInput;
  UpdateCecilianInput: UpdateCecilianInput;
  UpdateCecilianTagInput: UpdateCecilianTagInput;
  UpdateCollectionItemInput: UpdateCollectionItemInput;
  UpdateEventInput: UpdateEventInput;
  UpdateRoleInput: UpdateRoleInput;
  UpdateTagInput: UpdateTagInput;
  UpdateUserContactInput: UpdateUserContactInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserProfileInput: UpdateUserProfileInput;
  UpdateUserRoleInput: UpdateUserRoleInput;
  UpdateYearInput: UpdateYearInput;
  User: User;
  UserContact: UserContact;
  UserProfile: UserProfile;
  UserRole: UserRole;
  Year: Year;
  Boolean: Scalars['Boolean'];
};

export type AccessKeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessKey'] = ResolversParentTypes['AccessKey']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  usedBy?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  removedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Anniversary60ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Anniversary60Profile'] = ResolversParentTypes['Anniversary60Profile']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  userProfileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prevNames?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otherInfo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wouldLikeTo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dietary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArchiveCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArchiveCollection'] = ResolversParentTypes['ArchiveCollection']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ArchiveCollectionType'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physicalLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  viewPerms?: Resolver<ResolversTypes['ArchiveCollectionViewPerms'], ParentType, ContextType>;
  editPerms?: Resolver<ResolversTypes['ArchiveCollectionEditPerms'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['CollectionItem']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  createdById?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  updatedById?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArchiveFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArchiveFile'] = ResolversParentTypes['ArchiveFile']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['ArchiveFileKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['ArchiveItemFile']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  deletedById?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArchiveItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArchiveItem'] = ResolversParentTypes['ArchiveItem']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  archiveRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ArchiveItemType'], ParentType, ContextType>;
  associatedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  collections?: Resolver<Array<Maybe<ResolversTypes['CollectionItem']>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Cecilian']>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['ArchiveItemTag']>>, ParentType, ContextType>;
  cecilians?: Resolver<Array<Maybe<ResolversTypes['ArchiveItemCecilian']>>, ParentType, ContextType>;
  files?: Resolver<Array<Maybe<ResolversTypes['ArchiveItemFile']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdById?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  updatedById?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArchiveItemCecilianResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArchiveItemCecilian'] = ResolversParentTypes['ArchiveItemCecilian']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cecilian?: Resolver<Maybe<ResolversTypes['Cecilian']>, ParentType, ContextType>;
  cecilianId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['ArchiveItem']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  addedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  removedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArchiveItemFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArchiveItemFile'] = ResolversParentTypes['ArchiveItemFile']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['ArchiveFile']>, ParentType, ContextType>;
  fileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['ArchiveItem']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  addedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  removedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArchiveItemTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArchiveItemTag'] = ResolversParentTypes['ArchiveItemTag']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['ArchiveItem'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  addedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  removedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CecilianResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cecilian'] = ResolversParentTypes['Cecilian']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otherNames?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['CecilianTag']>>, ParentType, ContextType>;
  inArchiveItems?: Resolver<Array<Maybe<ResolversTypes['ArchiveItemCecilian']>>, ParentType, ContextType>;
  authoredArchiveItems?: Resolver<Array<Maybe<ResolversTypes['ArchiveItem']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CecilianTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['CecilianTag'] = ResolversParentTypes['CecilianTag']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cecilian?: Resolver<ResolversTypes['Cecilian'], ParentType, ContextType>;
  cecilianId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  addedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  removedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionItem'] = ResolversParentTypes['CollectionItem']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['ArchiveItem'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['ArchiveCollection'], ParentType, ContextType>;
  collectionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemIndex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  addedById?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  addedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  removedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inherentYear?: Resolver<Maybe<ResolversTypes['Year']>, ParentType, ContextType>;
  inherentYearId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  roles?: Resolver<Array<Maybe<ResolversTypes['Role']>>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  inTags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAccessKey?: Resolver<ResolversTypes['AccessKey'], ParentType, ContextType, RequireFields<MutationCreateAccessKeyArgs, 'input'>>;
  createAnniversary60Profile?: Resolver<ResolversTypes['Anniversary60Profile'], ParentType, ContextType, RequireFields<MutationCreateAnniversary60ProfileArgs, 'input'>>;
  createArchiveCollection?: Resolver<ResolversTypes['ArchiveCollection'], ParentType, ContextType, RequireFields<MutationCreateArchiveCollectionArgs, 'input'>>;
  createArchiveFile?: Resolver<ResolversTypes['ArchiveFile'], ParentType, ContextType, RequireFields<MutationCreateArchiveFileArgs, 'input'>>;
  createArchiveItem?: Resolver<ResolversTypes['ArchiveItem'], ParentType, ContextType, RequireFields<MutationCreateArchiveItemArgs, 'input'>>;
  createArchiveItemCecilian?: Resolver<ResolversTypes['ArchiveItemCecilian'], ParentType, ContextType, RequireFields<MutationCreateArchiveItemCecilianArgs, 'input'>>;
  createArchiveItemFile?: Resolver<ResolversTypes['ArchiveItemFile'], ParentType, ContextType, RequireFields<MutationCreateArchiveItemFileArgs, 'input'>>;
  createArchiveItemTag?: Resolver<ResolversTypes['ArchiveItemTag'], ParentType, ContextType, RequireFields<MutationCreateArchiveItemTagArgs, 'input'>>;
  createCecilian?: Resolver<ResolversTypes['Cecilian'], ParentType, ContextType, RequireFields<MutationCreateCecilianArgs, 'input'>>;
  createCecilianTag?: Resolver<ResolversTypes['CecilianTag'], ParentType, ContextType, RequireFields<MutationCreateCecilianTagArgs, 'input'>>;
  createCollectionItem?: Resolver<ResolversTypes['CollectionItem'], ParentType, ContextType, RequireFields<MutationCreateCollectionItemArgs, 'input'>>;
  createEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationCreateEventArgs, 'input'>>;
  createRole?: Resolver<ResolversTypes['Role'], ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'input'>>;
  createTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationCreateTagArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUserContact?: Resolver<ResolversTypes['UserContact'], ParentType, ContextType, RequireFields<MutationCreateUserContactArgs, 'input'>>;
  createUserProfile?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationCreateUserProfileArgs, 'input'>>;
  createUserRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType, RequireFields<MutationCreateUserRoleArgs, 'input'>>;
  createYear?: Resolver<ResolversTypes['Year'], ParentType, ContextType, RequireFields<MutationCreateYearArgs, 'input'>>;
  deleteAccessKey?: Resolver<ResolversTypes['AccessKey'], ParentType, ContextType, RequireFields<MutationDeleteAccessKeyArgs, 'id'>>;
  deleteAnniversary60Profile?: Resolver<ResolversTypes['Anniversary60Profile'], ParentType, ContextType, RequireFields<MutationDeleteAnniversary60ProfileArgs, 'id'>>;
  deleteArchiveCollection?: Resolver<ResolversTypes['ArchiveCollection'], ParentType, ContextType, RequireFields<MutationDeleteArchiveCollectionArgs, 'id'>>;
  deleteArchiveFile?: Resolver<ResolversTypes['ArchiveFile'], ParentType, ContextType, RequireFields<MutationDeleteArchiveFileArgs, 'id'>>;
  deleteArchiveItem?: Resolver<ResolversTypes['ArchiveItem'], ParentType, ContextType, RequireFields<MutationDeleteArchiveItemArgs, 'id'>>;
  deleteArchiveItemCecilian?: Resolver<ResolversTypes['ArchiveItemCecilian'], ParentType, ContextType, RequireFields<MutationDeleteArchiveItemCecilianArgs, 'id'>>;
  deleteArchiveItemFile?: Resolver<ResolversTypes['ArchiveItemFile'], ParentType, ContextType, RequireFields<MutationDeleteArchiveItemFileArgs, 'id'>>;
  deleteArchiveItemTag?: Resolver<ResolversTypes['ArchiveItemTag'], ParentType, ContextType, RequireFields<MutationDeleteArchiveItemTagArgs, 'id'>>;
  deleteCecilian?: Resolver<ResolversTypes['Cecilian'], ParentType, ContextType, RequireFields<MutationDeleteCecilianArgs, 'id'>>;
  deleteCecilianTag?: Resolver<ResolversTypes['CecilianTag'], ParentType, ContextType, RequireFields<MutationDeleteCecilianTagArgs, 'id'>>;
  deleteCollectionItem?: Resolver<ResolversTypes['CollectionItem'], ParentType, ContextType, RequireFields<MutationDeleteCollectionItemArgs, 'id'>>;
  deleteEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationDeleteEventArgs, 'id'>>;
  deleteRole?: Resolver<ResolversTypes['Role'], ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, 'id'>>;
  deleteTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  deleteUserContact?: Resolver<ResolversTypes['UserContact'], ParentType, ContextType, RequireFields<MutationDeleteUserContactArgs, 'id'>>;
  deleteUserProfile?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationDeleteUserProfileArgs, 'id'>>;
  deleteUserRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType, RequireFields<MutationDeleteUserRoleArgs, 'id'>>;
  deleteYear?: Resolver<ResolversTypes['Year'], ParentType, ContextType, RequireFields<MutationDeleteYearArgs, 'id'>>;
  updateAccessKey?: Resolver<ResolversTypes['AccessKey'], ParentType, ContextType, RequireFields<MutationUpdateAccessKeyArgs, 'id' | 'input'>>;
  updateAnniversary60Profile?: Resolver<ResolversTypes['Anniversary60Profile'], ParentType, ContextType, RequireFields<MutationUpdateAnniversary60ProfileArgs, 'id' | 'input'>>;
  updateArchiveCollection?: Resolver<ResolversTypes['ArchiveCollection'], ParentType, ContextType, RequireFields<MutationUpdateArchiveCollectionArgs, 'id' | 'input'>>;
  updateArchiveFile?: Resolver<ResolversTypes['ArchiveFile'], ParentType, ContextType, RequireFields<MutationUpdateArchiveFileArgs, 'id' | 'input'>>;
  updateArchiveItem?: Resolver<ResolversTypes['ArchiveItem'], ParentType, ContextType, RequireFields<MutationUpdateArchiveItemArgs, 'id' | 'input'>>;
  updateArchiveItemCecilian?: Resolver<ResolversTypes['ArchiveItemCecilian'], ParentType, ContextType, RequireFields<MutationUpdateArchiveItemCecilianArgs, 'id' | 'input'>>;
  updateArchiveItemFile?: Resolver<ResolversTypes['ArchiveItemFile'], ParentType, ContextType, RequireFields<MutationUpdateArchiveItemFileArgs, 'id' | 'input'>>;
  updateArchiveItemTag?: Resolver<ResolversTypes['ArchiveItemTag'], ParentType, ContextType, RequireFields<MutationUpdateArchiveItemTagArgs, 'id' | 'input'>>;
  updateCecilian?: Resolver<ResolversTypes['Cecilian'], ParentType, ContextType, RequireFields<MutationUpdateCecilianArgs, 'id' | 'input'>>;
  updateCecilianTag?: Resolver<ResolversTypes['CecilianTag'], ParentType, ContextType, RequireFields<MutationUpdateCecilianTagArgs, 'id' | 'input'>>;
  updateCollectionItem?: Resolver<ResolversTypes['CollectionItem'], ParentType, ContextType, RequireFields<MutationUpdateCollectionItemArgs, 'id' | 'input'>>;
  updateEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'id' | 'input'>>;
  updateRole?: Resolver<ResolversTypes['Role'], ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'id' | 'input'>>;
  updateTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'id' | 'input'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
  updateUserContact?: Resolver<ResolversTypes['UserContact'], ParentType, ContextType, RequireFields<MutationUpdateUserContactArgs, 'id' | 'input'>>;
  updateUserProfile?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<MutationUpdateUserProfileArgs, 'id' | 'input'>>;
  updateUserRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType, RequireFields<MutationUpdateUserRoleArgs, 'id' | 'input'>>;
  updateYear?: Resolver<ResolversTypes['Year'], ParentType, ContextType, RequireFields<MutationUpdateYearArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  accessKey?: Resolver<Maybe<ResolversTypes['AccessKey']>, ParentType, ContextType, RequireFields<QueryAccessKeyArgs, 'id'>>;
  accessKeys?: Resolver<Array<ResolversTypes['AccessKey']>, ParentType, ContextType>;
  anniversary60Profile?: Resolver<Maybe<ResolversTypes['Anniversary60Profile']>, ParentType, ContextType, RequireFields<QueryAnniversary60ProfileArgs, 'id'>>;
  anniversary60Profiles?: Resolver<Array<ResolversTypes['Anniversary60Profile']>, ParentType, ContextType>;
  archiveCollection?: Resolver<Maybe<ResolversTypes['ArchiveCollection']>, ParentType, ContextType, RequireFields<QueryArchiveCollectionArgs, 'id'>>;
  archiveCollections?: Resolver<Array<ResolversTypes['ArchiveCollection']>, ParentType, ContextType>;
  archiveFile?: Resolver<Maybe<ResolversTypes['ArchiveFile']>, ParentType, ContextType, RequireFields<QueryArchiveFileArgs, 'id'>>;
  archiveFiles?: Resolver<Array<ResolversTypes['ArchiveFile']>, ParentType, ContextType>;
  archiveItem?: Resolver<Maybe<ResolversTypes['ArchiveItem']>, ParentType, ContextType, RequireFields<QueryArchiveItemArgs, 'id'>>;
  archiveItemCecilian?: Resolver<Maybe<ResolversTypes['ArchiveItemCecilian']>, ParentType, ContextType, RequireFields<QueryArchiveItemCecilianArgs, 'id'>>;
  archiveItemCecilians?: Resolver<Array<ResolversTypes['ArchiveItemCecilian']>, ParentType, ContextType>;
  archiveItemFile?: Resolver<Maybe<ResolversTypes['ArchiveItemFile']>, ParentType, ContextType, RequireFields<QueryArchiveItemFileArgs, 'id'>>;
  archiveItemFiles?: Resolver<Array<ResolversTypes['ArchiveItemFile']>, ParentType, ContextType>;
  archiveItemTag?: Resolver<Maybe<ResolversTypes['ArchiveItemTag']>, ParentType, ContextType, RequireFields<QueryArchiveItemTagArgs, 'id'>>;
  archiveItemTags?: Resolver<Array<ResolversTypes['ArchiveItemTag']>, ParentType, ContextType>;
  archiveItems?: Resolver<Array<ResolversTypes['ArchiveItem']>, ParentType, ContextType>;
  cecilian?: Resolver<Maybe<ResolversTypes['Cecilian']>, ParentType, ContextType, RequireFields<QueryCecilianArgs, 'id'>>;
  cecilianTag?: Resolver<Maybe<ResolversTypes['CecilianTag']>, ParentType, ContextType, RequireFields<QueryCecilianTagArgs, 'id'>>;
  cecilianTags?: Resolver<Array<ResolversTypes['CecilianTag']>, ParentType, ContextType>;
  cecilians?: Resolver<Array<ResolversTypes['Cecilian']>, ParentType, ContextType>;
  collectionItem?: Resolver<Maybe<ResolversTypes['CollectionItem']>, ParentType, ContextType, RequireFields<QueryCollectionItemArgs, 'id'>>;
  collectionItems?: Resolver<Array<ResolversTypes['CollectionItem']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  myProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  roles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  searchCecilians?: Resolver<Array<ResolversTypes['Cecilian']>, ParentType, ContextType, RequireFields<QuerySearchCeciliansArgs, never>>;
  searchEvents?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QuerySearchEventsArgs, never>>;
  searchRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<QuerySearchRolesArgs, never>>;
  searchYears?: Resolver<Array<ResolversTypes['Year']>, ParentType, ContextType, RequireFields<QuerySearchYearsArgs, never>>;
  tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryTagArgs, 'id'>>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userContact?: Resolver<Maybe<ResolversTypes['UserContact']>, ParentType, ContextType, RequireFields<QueryUserContactArgs, 'id'>>;
  userContacts?: Resolver<Array<ResolversTypes['UserContact']>, ParentType, ContextType>;
  userProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType, RequireFields<QueryUserProfileArgs, 'id'>>;
  userProfiles?: Resolver<Array<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  userRole?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType, RequireFields<QueryUserRoleArgs, 'id'>>;
  userRoles?: Resolver<Array<ResolversTypes['UserRole']>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Year']>, ParentType, ContextType, RequireFields<QueryYearArgs, 'id'>>;
  years?: Resolver<Array<ResolversTypes['Year']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RoleType'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inherentEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  inherentEventId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  inTags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TagType'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  roleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  eventId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Year']>, ParentType, ContextType>;
  yearId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  cecilians?: Resolver<Array<Maybe<ResolversTypes['CecilianTag']>>, ParentType, ContextType>;
  archiveItems?: Resolver<Array<Maybe<ResolversTypes['ArchiveItemTag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  accessKey?: Resolver<Maybe<ResolversTypes['AccessKey']>, ParentType, ContextType>;
  verifiedByKey?: Resolver<ResolversTypes['AccessKey'], ParentType, ContextType>;
  verifiedByKeyId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roles?: Resolver<Array<Maybe<ResolversTypes['UserRole']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  archiveItemsCreated?: Resolver<Array<Maybe<ResolversTypes['ArchiveItem']>>, ParentType, ContextType>;
  collectionsOwned?: Resolver<Array<Maybe<ResolversTypes['ArchiveCollection']>>, ParentType, ContextType>;
  collectionsCreated?: Resolver<Array<Maybe<ResolversTypes['ArchiveCollection']>>, ParentType, ContextType>;
  UserContact?: Resolver<Array<Maybe<ResolversTypes['UserContact']>>, ParentType, ContextType>;
  ArchiveItem?: Resolver<Array<Maybe<ResolversTypes['ArchiveItem']>>, ParentType, ContextType>;
  ArchiveFile?: Resolver<Array<Maybe<ResolversTypes['ArchiveFile']>>, ParentType, ContextType>;
  ArchiveCollection?: Resolver<Array<Maybe<ResolversTypes['ArchiveCollection']>>, ParentType, ContextType>;
  CollectionItem?: Resolver<Array<Maybe<ResolversTypes['CollectionItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserContact'] = ResolversParentTypes['UserContact']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['UserContactType'], ParentType, ContextType>;
  customType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Visibility'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  UserProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  userProfileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cecilian?: Resolver<Maybe<ResolversTypes['Cecilian']>, ParentType, ContextType>;
  cecilianId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accessKeys?: Resolver<Array<Maybe<ResolversTypes['AccessKey']>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstNames?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastNames?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherNames?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactDetails?: Resolver<Array<Maybe<ResolversTypes['UserContact']>>, ParentType, ContextType>;
  anniversary60?: Resolver<Maybe<ResolversTypes['Anniversary60Profile']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Visibility'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserRole'] = ResolversParentTypes['UserRole']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roleName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accessLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YearResolvers<ContextType = any, ParentType extends ResolversParentTypes['Year'] = ResolversParentTypes['Year']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  events?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  inTags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessKey?: AccessKeyResolvers<ContextType>;
  Anniversary60Profile?: Anniversary60ProfileResolvers<ContextType>;
  ArchiveCollection?: ArchiveCollectionResolvers<ContextType>;
  ArchiveFile?: ArchiveFileResolvers<ContextType>;
  ArchiveItem?: ArchiveItemResolvers<ContextType>;
  ArchiveItemCecilian?: ArchiveItemCecilianResolvers<ContextType>;
  ArchiveItemFile?: ArchiveItemFileResolvers<ContextType>;
  ArchiveItemTag?: ArchiveItemTagResolvers<ContextType>;
  Cecilian?: CecilianResolvers<ContextType>;
  CecilianTag?: CecilianTagResolvers<ContextType>;
  CollectionItem?: CollectionItemResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Event?: EventResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Time?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserContact?: UserContactResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
  UserRole?: UserRoleResolvers<ContextType>;
  Year?: YearResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
