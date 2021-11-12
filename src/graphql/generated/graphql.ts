/* eslint-disable */
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
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageProject: Array<Project>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetImageProjectArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  imageProject?: Maybe<ProjectCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  imageProject_every?: Maybe<ProjectWhereInput>;
  imageProject_none?: Maybe<ProjectWhereInput>;
  imageProject_some?: Maybe<ProjectWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: Maybe<DocumentTransformationInput>;
  image?: Maybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  imageProject?: Maybe<ProjectUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  fileName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  imageProject_every?: Maybe<ProjectWhereInput>;
  imageProject_none?: Maybe<ProjectWhereInput>;
  imageProject_some?: Maybe<ProjectWhereInput>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  size?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  width?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one profile */
  createProfile?: Maybe<Profile>;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Profile documents
   * @deprecated Please use the new paginated many mutation (deleteManyProfilesConnection)
   */
  deleteManyProfiles: BatchPayload;
  /** Delete many Profile documents, return deleted documents */
  deleteManyProfilesConnection: ProfileConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one profile from _all_ existing stages. Returns deleted document. */
  deleteProfile?: Maybe<Profile>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Profile documents
   * @deprecated Please use the new paginated many mutation (publishManyProfilesConnection)
   */
  publishManyProfiles: BatchPayload;
  /** Publish many Profile documents */
  publishManyProfilesConnection: ProfileConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one profile */
  publishProfile?: Maybe<Profile>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one profile */
  schedulePublishProfile?: Maybe<Profile>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one profile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProfile?: Maybe<Profile>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Profile documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProfilesConnection)
   */
  unpublishManyProfiles: BatchPayload;
  /** Find many Profile documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProfilesConnection: ProfileConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one profile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProfile?: Maybe<Profile>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many profiles
   * @deprecated Please use the new paginated many mutation (updateManyProfilesConnection)
   */
  updateManyProfiles: BatchPayload;
  /** Update many Profile documents */
  updateManyProfilesConnection: ProfileConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one profile */
  updateProfile?: Maybe<Profile>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one profile */
  upsertProfile?: Maybe<Profile>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationDeleteManyProfilesArgs = {
  where?: Maybe<ProfileManyWhereInput>;
};


export type MutationDeleteManyProfilesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProfileManyWhereInput>;
};


export type MutationDeleteManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyProfilesArgs = {
  to?: Array<Stage>;
  where?: Maybe<ProfileManyWhereInput>;
};


export type MutationPublishManyProfilesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ProfileManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishProfileArgs = {
  to?: Array<Stage>;
  where: ProfileWhereUniqueInput;
};


export type MutationPublishProjectArgs = {
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishProfileArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProfileWhereUniqueInput;
};


export type MutationSchedulePublishProjectArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishProfileArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ProfileWhereUniqueInput;
};


export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ProjectWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUnpublishManyProfilesArgs = {
  from?: Array<Stage>;
  where?: Maybe<ProfileManyWhereInput>;
};


export type MutationUnpublishManyProfilesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ProfileManyWhereInput>;
};


export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishProfileArgs = {
  from?: Array<Stage>;
  where: ProfileWhereUniqueInput;
};


export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PageUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUpdateManyProfilesArgs = {
  data: ProfileUpdateManyInput;
  where?: Maybe<ProfileManyWhereInput>;
};


export type MutationUpdateManyProfilesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ProfileUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProfileManyWhereInput>;
};


export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ProjectUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertProfileArgs = {
  upsert: ProfileUpsertInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: 'Page';
  body: RichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  heading: Scalars['String'];
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  body: Scalars['RichTextAST'];
  createdAt?: Maybe<Scalars['DateTime']>;
  heading: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  heading?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  heading_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  heading?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  heading?: Maybe<Scalars['String']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  heading?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  heading_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type Profile = Node & {
  __typename?: 'Profile';
  calloutLink?: Maybe<Scalars['String']>;
  calloutText?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Profile>;
  /** List of Profile versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ProfileCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProfileDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProfileHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ProfilePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProfileScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ProfileUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ProfileConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProfileWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProfileEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProfileCreateInput = {
  calloutLink?: Maybe<Scalars['String']>;
  calloutText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProfileCreateManyInlineInput = {
  /** Connect multiple existing Profile documents */
  connect?: Maybe<Array<ProfileWhereUniqueInput>>;
  /** Create and connect multiple existing Profile documents */
  create?: Maybe<Array<ProfileCreateInput>>;
};

export type ProfileCreateOneInlineInput = {
  /** Connect one existing Profile document */
  connect?: Maybe<ProfileWhereUniqueInput>;
  /** Create and connect one Profile document */
  create?: Maybe<ProfileCreateInput>;
};

/** An edge in a connection. */
export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Profile;
};

/** Identifies documents */
export type ProfileManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProfileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProfileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  calloutLink?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  calloutLink_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  calloutLink_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  calloutLink_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  calloutLink_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  calloutLink_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  calloutLink_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  calloutLink_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  calloutLink_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  calloutLink_starts_with?: Maybe<Scalars['String']>;
  calloutText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  calloutText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  calloutText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  calloutText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  calloutText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  calloutText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  calloutText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  calloutText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  calloutText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  calloutText_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ProfileOrderByInput {
  CalloutLinkAsc = 'calloutLink_ASC',
  CalloutLinkDesc = 'calloutLink_DESC',
  CalloutTextAsc = 'calloutText_ASC',
  CalloutTextDesc = 'calloutText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProfileUpdateInput = {
  calloutLink?: Maybe<Scalars['String']>;
  calloutText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProfileUpdateManyInlineInput = {
  /** Connect multiple existing Profile documents */
  connect?: Maybe<Array<ProfileConnectInput>>;
  /** Create and connect multiple Profile documents */
  create?: Maybe<Array<ProfileCreateInput>>;
  /** Delete multiple Profile documents */
  delete?: Maybe<Array<ProfileWhereUniqueInput>>;
  /** Disconnect multiple Profile documents */
  disconnect?: Maybe<Array<ProfileWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Profile documents */
  set?: Maybe<Array<ProfileWhereUniqueInput>>;
  /** Update multiple Profile documents */
  update?: Maybe<Array<ProfileUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Profile documents */
  upsert?: Maybe<Array<ProfileUpsertWithNestedWhereUniqueInput>>;
};

export type ProfileUpdateManyInput = {
  calloutLink?: Maybe<Scalars['String']>;
  calloutText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProfileUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProfileUpdateManyInput;
  /** Document search */
  where: ProfileWhereInput;
};

export type ProfileUpdateOneInlineInput = {
  /** Connect existing Profile document */
  connect?: Maybe<ProfileWhereUniqueInput>;
  /** Create and connect one Profile document */
  create?: Maybe<ProfileCreateInput>;
  /** Delete currently connected Profile document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Profile document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Profile document */
  update?: Maybe<ProfileUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Profile document */
  upsert?: Maybe<ProfileUpsertWithNestedWhereUniqueInput>;
};

export type ProfileUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProfileUpdateInput;
  /** Unique document search */
  where: ProfileWhereUniqueInput;
};

export type ProfileUpsertInput = {
  /** Create document if it didn't exist */
  create: ProfileCreateInput;
  /** Update document if it exists */
  update: ProfileUpdateInput;
};

export type ProfileUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProfileUpsertInput;
  /** Unique document search */
  where: ProfileWhereUniqueInput;
};

/** Identifies documents */
export type ProfileWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProfileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProfileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  calloutLink?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  calloutLink_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  calloutLink_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  calloutLink_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  calloutLink_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  calloutLink_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  calloutLink_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  calloutLink_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  calloutLink_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  calloutLink_starts_with?: Maybe<Scalars['String']>;
  calloutText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  calloutText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  calloutText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  calloutText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  calloutText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  calloutText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  calloutText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  calloutText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  calloutText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  calloutText_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Profile record uniquely */
export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Project = Node & {
  __typename?: 'Project';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** List of Project versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  linkSource?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  statusTag?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ProjectCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProjectHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ProjectImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ProjectUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: Maybe<AssetCreateOneInlineInput>;
  linkSource?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  statusTag?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  image?: Maybe<AssetWhereInput>;
  linkSource?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  linkSource_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkSource_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkSource_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  linkSource_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkSource_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkSource_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkSource_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  linkSource_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkSource_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  statusTag?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  statusTag_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  statusTag_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  statusTag_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  statusTag_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  statusTag_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  statusTag_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  statusTag_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  statusTag_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  statusTag_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkSourceAsc = 'linkSource_ASC',
  LinkSourceDesc = 'linkSource_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StatusTagAsc = 'statusTag_ASC',
  StatusTagDesc = 'statusTag_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectUpdateInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  linkSource?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  statusTag?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: Maybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: Maybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  linkSource?: Maybe<Scalars['String']>;
  statusTag?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Project document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Project document */
  update?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  image?: Maybe<AssetWhereInput>;
  linkSource?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  linkSource_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkSource_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkSource_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  linkSource_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkSource_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkSource_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkSource_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  linkSource_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkSource_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  statusTag?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  statusTag_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  statusTag_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  statusTag_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  statusTag_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  statusTag_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  statusTag_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  statusTag_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  statusTag_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  statusTag_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single profile */
  profile?: Maybe<Profile>;
  /** Retrieve document version */
  profileVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple profiles */
  profiles: Array<Profile>;
  /** Retrieve multiple profiles using the Relay connection interface */
  profilesConnection: ProfileConnection;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};


export type QueryProfileArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProfileWhereUniqueInput;
};


export type QueryProfileVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProfilesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ProfileOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ProfileWhereInput>;
};


export type QueryProfilesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ProfileOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ProfileWhereInput>;
};


export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryProjectsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Page | Profile | Project;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: Maybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: Maybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: Maybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: Maybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetPagesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type GetPagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', id: string, heading: string, slug: string, body: { __typename?: 'RichText', html: string } }> };

export type GetPageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPageBySlugQuery = { __typename?: 'Query', page?: { __typename?: 'Page', id: string, slug: string, heading: string, body: { __typename?: 'RichText', html: string } } | null | undefined };

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', title: string, description: string, linkSource?: string | null | undefined, statusTag?: string | null | undefined, image?: { __typename?: 'Asset', url: string } | null | undefined }> };

export type GetProfileByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProfileByIdQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', name: string, description: string, calloutText?: string | null | undefined, calloutLink?: string | null | undefined } | null | undefined };
