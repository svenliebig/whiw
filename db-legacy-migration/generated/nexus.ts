/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  EpisodeWhereInput: { // input type
    AND?: NexusGenInputs['EpisodeWhereInput'][] | null; // [EpisodeWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['EpisodeWhereInput'][] | null; // [EpisodeWhereInput!]
    number?: number | null; // Int
    number_gt?: number | null; // Int
    number_gte?: number | null; // Int
    number_in?: number[] | null; // [Int!]
    number_lt?: number | null; // Int
    number_lte?: number | null; // Int
    number_not?: number | null; // Int
    number_not_in?: number[] | null; // [Int!]
    OR?: NexusGenInputs['EpisodeWhereInput'][] | null; // [EpisodeWhereInput!]
    release?: any | null; // DateTime
    release_gt?: any | null; // DateTime
    release_gte?: any | null; // DateTime
    release_in?: any[] | null; // [DateTime!]
    release_lt?: any | null; // DateTime
    release_lte?: any | null; // DateTime
    release_not?: any | null; // DateTime
    release_not_in?: any[] | null; // [DateTime!]
    season?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
  }
  EpisodeWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  SeasonWhereInput: { // input type
    AND?: NexusGenInputs['SeasonWhereInput'][] | null; // [SeasonWhereInput!]
    episodes_every?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    episodes_none?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    episodes_some?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['SeasonWhereInput'][] | null; // [SeasonWhereInput!]
    number?: number | null; // Int
    number_gt?: number | null; // Int
    number_gte?: number | null; // Int
    number_in?: number[] | null; // [Int!]
    number_lt?: number | null; // Int
    number_lte?: number | null; // Int
    number_not?: number | null; // Int
    number_not_in?: number[] | null; // [Int!]
    OR?: NexusGenInputs['SeasonWhereInput'][] | null; // [SeasonWhereInput!]
    series?: NexusGenInputs['SeriesWhereInput'] | null; // SeriesWhereInput
  }
  SeasonWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  SeriesWhereInput: { // input type
    AND?: NexusGenInputs['SeriesWhereInput'][] | null; // [SeriesWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['SeriesWhereInput'][] | null; // [SeriesWhereInput!]
    OR?: NexusGenInputs['SeriesWhereInput'][] | null; // [SeriesWhereInput!]
    seasons_every?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
    seasons_none?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
    seasons_some?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
  }
  SeriesWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserSeriesWhereInput: { // input type
    AND?: NexusGenInputs['UserSeriesWhereInput'][] | null; // [UserSeriesWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['UserSeriesWhereInput'][] | null; // [UserSeriesWhereInput!]
    OR?: NexusGenInputs['UserSeriesWhereInput'][] | null; // [UserSeriesWhereInput!]
    series?: NexusGenInputs['SeriesWhereInput'] | null; // SeriesWhereInput
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserSeriesWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    watched_every?: NexusGenInputs['WatchedEpisodeWhereInput'] | null; // WatchedEpisodeWhereInput
    watched_none?: NexusGenInputs['WatchedEpisodeWhereInput'] | null; // WatchedEpisodeWhereInput
    watched_some?: NexusGenInputs['WatchedEpisodeWhereInput'] | null; // WatchedEpisodeWhereInput
  }
  UserWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  WatchedEpisodeWhereInput: { // input type
    AND?: NexusGenInputs['WatchedEpisodeWhereInput'][] | null; // [WatchedEpisodeWhereInput!]
    episode?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['WatchedEpisodeWhereInput'][] | null; // [WatchedEpisodeWhereInput!]
    OR?: NexusGenInputs['WatchedEpisodeWhereInput'][] | null; // [WatchedEpisodeWhereInput!]
    userSeries?: NexusGenInputs['UserSeriesWhereInput'] | null; // UserSeriesWhereInput
  }
  WatchedEpisodeWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  EpisodeOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "number_ASC" | "number_DESC" | "release_ASC" | "release_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  SeasonOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "number_ASC" | "number_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  SeriesOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserSeriesOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  WatchedEpisodeOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AggregateEpisode: { // root type
    count: number; // Int!
  }
  AggregateSeason: { // root type
    count: number; // Int!
  }
  AggregateSeries: { // root type
    count: number; // Int!
  }
  AggregateUser: { // root type
    count: number; // Int!
  }
  AggregateUserSeries: { // root type
    count: number; // Int!
  }
  AggregateWatchedEpisode: { // root type
    count: number; // Int!
  }
  Episode: { // root type
    id: string; // ID!
    name?: string | null; // String
    number: number; // Int!
    release?: any | null; // DateTime
  }
  EpisodeConnection: { // root type
    edges: NexusGenRootTypes['EpisodeEdge'][]; // [EpisodeEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  EpisodeEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Episode']; // Episode!
  }
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  Season: { // root type
    id: string; // ID!
    number: number; // Int!
  }
  SeasonConnection: { // root type
    edges: NexusGenRootTypes['SeasonEdge'][]; // [SeasonEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  SeasonEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Season']; // Season!
  }
  Series: { // root type
    id: string; // ID!
    name: string; // String!
  }
  SeriesConnection: { // root type
    edges: NexusGenRootTypes['SeriesEdge'][]; // [SeriesEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  SeriesEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Series']; // Series!
  }
  User: { // root type
    id: string; // ID!
    name: string; // String!
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  UserSeries: { // root type
    id: string; // ID!
  }
  UserSeriesConnection: { // root type
    edges: NexusGenRootTypes['UserSeriesEdge'][]; // [UserSeriesEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserSeriesEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['UserSeries']; // UserSeries!
  }
  WatchedEpisode: { // root type
    id: string; // ID!
  }
  WatchedEpisodeConnection: { // root type
    edges: NexusGenRootTypes['WatchedEpisodeEdge'][]; // [WatchedEpisodeEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  WatchedEpisodeEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['WatchedEpisode']; // WatchedEpisode!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  EpisodeWhereInput: NexusGenInputs['EpisodeWhereInput'];
  EpisodeWhereUniqueInput: NexusGenInputs['EpisodeWhereUniqueInput'];
  SeasonWhereInput: NexusGenInputs['SeasonWhereInput'];
  SeasonWhereUniqueInput: NexusGenInputs['SeasonWhereUniqueInput'];
  SeriesWhereInput: NexusGenInputs['SeriesWhereInput'];
  SeriesWhereUniqueInput: NexusGenInputs['SeriesWhereUniqueInput'];
  UserSeriesWhereInput: NexusGenInputs['UserSeriesWhereInput'];
  UserSeriesWhereUniqueInput: NexusGenInputs['UserSeriesWhereUniqueInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  WatchedEpisodeWhereInput: NexusGenInputs['WatchedEpisodeWhereInput'];
  WatchedEpisodeWhereUniqueInput: NexusGenInputs['WatchedEpisodeWhereUniqueInput'];
  EpisodeOrderByInput: NexusGenEnums['EpisodeOrderByInput'];
  SeasonOrderByInput: NexusGenEnums['SeasonOrderByInput'];
  SeriesOrderByInput: NexusGenEnums['SeriesOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
  UserSeriesOrderByInput: NexusGenEnums['UserSeriesOrderByInput'];
  WatchedEpisodeOrderByInput: NexusGenEnums['WatchedEpisodeOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregateEpisode: { // field return type
    count: number; // Int!
  }
  AggregateSeason: { // field return type
    count: number; // Int!
  }
  AggregateSeries: { // field return type
    count: number; // Int!
  }
  AggregateUser: { // field return type
    count: number; // Int!
  }
  AggregateUserSeries: { // field return type
    count: number; // Int!
  }
  AggregateWatchedEpisode: { // field return type
    count: number; // Int!
  }
  Episode: { // field return type
    id: string; // ID!
    name: string | null; // String
    number: number; // Int!
    release: any | null; // DateTime
    season: NexusGenRootTypes['Season']; // Season!
  }
  EpisodeConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateEpisode']; // AggregateEpisode!
    edges: NexusGenRootTypes['EpisodeEdge'][]; // [EpisodeEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  EpisodeEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Episode']; // Episode!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    episode: NexusGenRootTypes['Episode'] | null; // Episode
    episodes: NexusGenRootTypes['Episode'][]; // [Episode!]!
    episodesConnection: NexusGenRootTypes['EpisodeConnection']; // EpisodeConnection!
    season: NexusGenRootTypes['Season'] | null; // Season
    seasons: NexusGenRootTypes['Season'][]; // [Season!]!
    seasonsConnection: NexusGenRootTypes['SeasonConnection']; // SeasonConnection!
    series: NexusGenRootTypes['Series'] | null; // Series
    serieses: NexusGenRootTypes['Series'][]; // [Series!]!
    seriesesConnection: NexusGenRootTypes['SeriesConnection']; // SeriesConnection!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersConnection: NexusGenRootTypes['UserConnection']; // UserConnection!
    userSeries: NexusGenRootTypes['UserSeries'] | null; // UserSeries
    userSerieses: NexusGenRootTypes['UserSeries'][]; // [UserSeries!]!
    userSeriesesConnection: NexusGenRootTypes['UserSeriesConnection']; // UserSeriesConnection!
    watchedEpisode: NexusGenRootTypes['WatchedEpisode'] | null; // WatchedEpisode
    watchedEpisodes: NexusGenRootTypes['WatchedEpisode'][]; // [WatchedEpisode!]!
    watchedEpisodesConnection: NexusGenRootTypes['WatchedEpisodeConnection']; // WatchedEpisodeConnection!
  }
  Season: { // field return type
    episodes: NexusGenRootTypes['Episode'][] | null; // [Episode!]
    id: string; // ID!
    number: number; // Int!
    series: NexusGenRootTypes['Series']; // Series!
  }
  SeasonConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateSeason']; // AggregateSeason!
    edges: NexusGenRootTypes['SeasonEdge'][]; // [SeasonEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  SeasonEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Season']; // Season!
  }
  Series: { // field return type
    id: string; // ID!
    name: string; // String!
    seasons: NexusGenRootTypes['Season'][] | null; // [Season!]
  }
  SeriesConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateSeries']; // AggregateSeries!
    edges: NexusGenRootTypes['SeriesEdge'][]; // [SeriesEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  SeriesEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Series']; // Series!
  }
  User: { // field return type
    id: string; // ID!
    name: string; // String!
    watched: NexusGenRootTypes['WatchedEpisode'][] | null; // [WatchedEpisode!]
  }
  UserConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUser']; // AggregateUser!
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  UserSeries: { // field return type
    id: string; // ID!
    series: NexusGenRootTypes['Series']; // Series!
    user: NexusGenRootTypes['User']; // User!
  }
  UserSeriesConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUserSeries']; // AggregateUserSeries!
    edges: NexusGenRootTypes['UserSeriesEdge'][]; // [UserSeriesEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserSeriesEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['UserSeries']; // UserSeries!
  }
  WatchedEpisode: { // field return type
    episode: NexusGenRootTypes['Episode']; // Episode!
    id: string; // ID!
    userSeries: NexusGenRootTypes['UserSeries']; // UserSeries!
  }
  WatchedEpisodeConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateWatchedEpisode']; // AggregateWatchedEpisode!
    edges: NexusGenRootTypes['WatchedEpisodeEdge'][]; // [WatchedEpisodeEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  WatchedEpisodeEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['WatchedEpisode']; // WatchedEpisode!
  }
}

export interface NexusGenArgTypes {
  Query: {
    episode: { // args
      where: NexusGenInputs['EpisodeWhereUniqueInput']; // EpisodeWhereUniqueInput!
    }
    episodes: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['EpisodeOrderByInput'] | null; // EpisodeOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    }
    episodesConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['EpisodeOrderByInput'] | null; // EpisodeOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    }
    season: { // args
      where: NexusGenInputs['SeasonWhereUniqueInput']; // SeasonWhereUniqueInput!
    }
    seasons: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['SeasonOrderByInput'] | null; // SeasonOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
    }
    seasonsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['SeasonOrderByInput'] | null; // SeasonOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
    }
    series: { // args
      where: NexusGenInputs['SeriesWhereUniqueInput']; // SeriesWhereUniqueInput!
    }
    serieses: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['SeriesOrderByInput'] | null; // SeriesOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['SeriesWhereInput'] | null; // SeriesWhereInput
    }
    seriesesConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['SeriesOrderByInput'] | null; // SeriesOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['SeriesWhereInput'] | null; // SeriesWhereInput
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    userSeries: { // args
      where: NexusGenInputs['UserSeriesWhereUniqueInput']; // UserSeriesWhereUniqueInput!
    }
    userSerieses: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserSeriesOrderByInput'] | null; // UserSeriesOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserSeriesWhereInput'] | null; // UserSeriesWhereInput
    }
    userSeriesesConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserSeriesOrderByInput'] | null; // UserSeriesOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserSeriesWhereInput'] | null; // UserSeriesWhereInput
    }
    watchedEpisode: { // args
      where: NexusGenInputs['WatchedEpisodeWhereUniqueInput']; // WatchedEpisodeWhereUniqueInput!
    }
    watchedEpisodes: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['WatchedEpisodeOrderByInput'] | null; // WatchedEpisodeOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['WatchedEpisodeWhereInput'] | null; // WatchedEpisodeWhereInput
    }
    watchedEpisodesConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['WatchedEpisodeOrderByInput'] | null; // WatchedEpisodeOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['WatchedEpisodeWhereInput'] | null; // WatchedEpisodeWhereInput
    }
  }
  Season: {
    episodes: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['EpisodeOrderByInput'] | null; // EpisodeOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    }
  }
  Series: {
    seasons: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['SeasonOrderByInput'] | null; // SeasonOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
    }
  }
  User: {
    watched: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['WatchedEpisodeOrderByInput'] | null; // WatchedEpisodeOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['WatchedEpisodeWhereInput'] | null; // WatchedEpisodeWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregateEpisode" | "AggregateSeason" | "AggregateSeries" | "AggregateUser" | "AggregateUserSeries" | "AggregateWatchedEpisode" | "Episode" | "EpisodeConnection" | "EpisodeEdge" | "PageInfo" | "Query" | "Season" | "SeasonConnection" | "SeasonEdge" | "Series" | "SeriesConnection" | "SeriesEdge" | "User" | "UserConnection" | "UserEdge" | "UserSeries" | "UserSeriesConnection" | "UserSeriesEdge" | "WatchedEpisode" | "WatchedEpisodeConnection" | "WatchedEpisodeEdge";

export type NexusGenInputNames = "EpisodeWhereInput" | "EpisodeWhereUniqueInput" | "SeasonWhereInput" | "SeasonWhereUniqueInput" | "SeriesWhereInput" | "SeriesWhereUniqueInput" | "UserSeriesWhereInput" | "UserSeriesWhereUniqueInput" | "UserWhereInput" | "UserWhereUniqueInput" | "WatchedEpisodeWhereInput" | "WatchedEpisodeWhereUniqueInput";

export type NexusGenEnumNames = "EpisodeOrderByInput" | "SeasonOrderByInput" | "SeriesOrderByInput" | "UserOrderByInput" | "UserSeriesOrderByInput" | "WatchedEpisodeOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}