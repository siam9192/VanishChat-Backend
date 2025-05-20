
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomMember
 * 
 */
export type RoomMember = $Result.DefaultSelection<Prisma.$RoomMemberPayload>
/**
 * Model Avatar
 * 
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>
/**
 * Model RoomPhoto
 * 
 */
export type RoomPhoto = $Result.DefaultSelection<Prisma.$RoomPhotoPayload>
/**
 * Model RoomJoinRequest
 * 
 */
export type RoomJoinRequest = $Result.DefaultSelection<Prisma.$RoomJoinRequestPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoomStatus: {
  Open: 'Open',
  Closed: 'Closed'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const RoomMemberRole: {
  Owner: 'Owner',
  Member: 'Member'
};

export type RoomMemberRole = (typeof RoomMemberRole)[keyof typeof RoomMemberRole]


export const RoomMemberStatus: {
  Active: 'Active',
  Inactive: 'Inactive'
};

export type RoomMemberStatus = (typeof RoomMemberStatus)[keyof typeof RoomMemberStatus]


export const AvatarStatus: {
  Active: 'Active',
  Inactive: 'Inactive',
  Deleted: 'Deleted'
};

export type AvatarStatus = (typeof AvatarStatus)[keyof typeof AvatarStatus]


export const RoomPhotoStatus: {
  Active: 'Active',
  Inactive: 'Inactive',
  Deleted: 'Deleted'
};

export type RoomPhotoStatus = (typeof RoomPhotoStatus)[keyof typeof RoomPhotoStatus]


export const RoomJoinRequestStatus: {
  Pending: 'Pending',
  Approve: 'Approve',
  Declined: 'Declined',
  Canceled: 'Canceled',
  Timeout: 'Timeout'
};

export type RoomJoinRequestStatus = (typeof RoomJoinRequestStatus)[keyof typeof RoomJoinRequestStatus]


export const MessageContentType: {
  Text: 'Text',
  Media: 'Media'
};

export type MessageContentType = (typeof MessageContentType)[keyof typeof MessageContentType]

}

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type RoomMemberRole = $Enums.RoomMemberRole

export const RoomMemberRole: typeof $Enums.RoomMemberRole

export type RoomMemberStatus = $Enums.RoomMemberStatus

export const RoomMemberStatus: typeof $Enums.RoomMemberStatus

export type AvatarStatus = $Enums.AvatarStatus

export const AvatarStatus: typeof $Enums.AvatarStatus

export type RoomPhotoStatus = $Enums.RoomPhotoStatus

export const RoomPhotoStatus: typeof $Enums.RoomPhotoStatus

export type RoomJoinRequestStatus = $Enums.RoomJoinRequestStatus

export const RoomJoinRequestStatus: typeof $Enums.RoomJoinRequestStatus

export type MessageContentType = $Enums.MessageContentType

export const MessageContentType: typeof $Enums.MessageContentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Rooms
 * const rooms = await prisma.room.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Rooms
   * const rooms = await prisma.room.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomMember`: Exposes CRUD operations for the **RoomMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomMembers
    * const roomMembers = await prisma.roomMember.findMany()
    * ```
    */
  get roomMember(): Prisma.RoomMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatar.findMany()
    * ```
    */
  get avatar(): Prisma.AvatarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomPhoto`: Exposes CRUD operations for the **RoomPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomPhotos
    * const roomPhotos = await prisma.roomPhoto.findMany()
    * ```
    */
  get roomPhoto(): Prisma.RoomPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomJoinRequest`: Exposes CRUD operations for the **RoomJoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomJoinRequests
    * const roomJoinRequests = await prisma.roomJoinRequest.findMany()
    * ```
    */
  get roomJoinRequest(): Prisma.RoomJoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Room: 'Room',
    RoomMember: 'RoomMember',
    Avatar: 'Avatar',
    RoomPhoto: 'RoomPhoto',
    RoomJoinRequest: 'RoomJoinRequest',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "room" | "roomMember" | "avatar" | "roomPhoto" | "roomJoinRequest" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomMember: {
        payload: Prisma.$RoomMemberPayload<ExtArgs>
        fields: Prisma.RoomMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          findFirst: {
            args: Prisma.RoomMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          findMany: {
            args: Prisma.RoomMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          create: {
            args: Prisma.RoomMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          createMany: {
            args: Prisma.RoomMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          delete: {
            args: Prisma.RoomMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          update: {
            args: Prisma.RoomMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          deleteMany: {
            args: Prisma.RoomMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          upsert: {
            args: Prisma.RoomMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          aggregate: {
            args: Prisma.RoomMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomMember>
          }
          groupBy: {
            args: Prisma.RoomMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomMemberCountArgs<ExtArgs>
            result: $Utils.Optional<RoomMemberCountAggregateOutputType> | number
          }
        }
      }
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>
        fields: Prisma.AvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvatarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatar>
          }
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number
          }
        }
      }
      RoomPhoto: {
        payload: Prisma.$RoomPhotoPayload<ExtArgs>
        fields: Prisma.RoomPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload>
          }
          findFirst: {
            args: Prisma.RoomPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload>
          }
          findMany: {
            args: Prisma.RoomPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload>[]
          }
          create: {
            args: Prisma.RoomPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload>
          }
          createMany: {
            args: Prisma.RoomPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload>[]
          }
          delete: {
            args: Prisma.RoomPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload>
          }
          update: {
            args: Prisma.RoomPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload>
          }
          deleteMany: {
            args: Prisma.RoomPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload>[]
          }
          upsert: {
            args: Prisma.RoomPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPhotoPayload>
          }
          aggregate: {
            args: Prisma.RoomPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomPhoto>
          }
          groupBy: {
            args: Prisma.RoomPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<RoomPhotoCountAggregateOutputType> | number
          }
        }
      }
      RoomJoinRequest: {
        payload: Prisma.$RoomJoinRequestPayload<ExtArgs>
        fields: Prisma.RoomJoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomJoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomJoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload>
          }
          findFirst: {
            args: Prisma.RoomJoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomJoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload>
          }
          findMany: {
            args: Prisma.RoomJoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload>[]
          }
          create: {
            args: Prisma.RoomJoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload>
          }
          createMany: {
            args: Prisma.RoomJoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomJoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload>[]
          }
          delete: {
            args: Prisma.RoomJoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload>
          }
          update: {
            args: Prisma.RoomJoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.RoomJoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomJoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomJoinRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload>[]
          }
          upsert: {
            args: Prisma.RoomJoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomJoinRequestPayload>
          }
          aggregate: {
            args: Prisma.RoomJoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomJoinRequest>
          }
          groupBy: {
            args: Prisma.RoomJoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomJoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomJoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<RoomJoinRequestCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    room?: RoomOmit
    roomMember?: RoomMemberOmit
    avatar?: AvatarOmit
    roomPhoto?: RoomPhotoOmit
    roomJoinRequest?: RoomJoinRequestOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    members: number
    joinRequests: number
    messages: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | RoomCountOutputTypeCountMembersArgs
    joinRequests?: boolean | RoomCountOutputTypeCountJoinRequestsArgs
    messages?: boolean | RoomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomJoinRequestWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type RoomMemberCountOutputType
   */

  export type RoomMemberCountOutputType = {
    messages: number
  }

  export type RoomMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | RoomMemberCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * RoomMemberCountOutputType without action
   */
  export type RoomMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMemberCountOutputType
     */
    select?: RoomMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomMemberCountOutputType without action
   */
  export type RoomMemberCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type AvatarCountOutputType
   */

  export type AvatarCountOutputType = {
    members: number
  }

  export type AvatarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | AvatarCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarCountOutputType
     */
    select?: AvatarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }


  /**
   * Count Type RoomPhotoCountOutputType
   */

  export type RoomPhotoCountOutputType = {
    rooms: number
  }

  export type RoomPhotoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomPhotoCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * RoomPhotoCountOutputType without action
   */
  export type RoomPhotoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhotoCountOutputType
     */
    select?: RoomPhotoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomPhotoCountOutputType without action
   */
  export type RoomPhotoCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    photoId: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    photoId: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    photoId: number | null
    status: $Enums.RoomStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    photoId: number | null
    status: $Enums.RoomStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    code: number
    name: number
    photoId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    photoId?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    photoId?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    photoId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    photoId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    photoId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    code: string
    name: string
    photoId: number
    status: $Enums.RoomStatus
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    photoId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean | RoomPhotoDefaultArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    joinRequests?: boolean | Room$joinRequestsArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    photoId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean | RoomPhotoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    photoId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean | RoomPhotoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    photoId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "photoId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | RoomPhotoDefaultArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    joinRequests?: boolean | Room$joinRequestsArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | RoomPhotoDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | RoomPhotoDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      photo: Prisma.$RoomPhotoPayload<ExtArgs>
      members: Prisma.$RoomMemberPayload<ExtArgs>[]
      joinRequests: Prisma.$RoomJoinRequestPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      photoId: number
      status: $Enums.RoomStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photo<T extends RoomPhotoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomPhotoDefaultArgs<ExtArgs>>): Prisma__RoomPhotoClient<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Room$membersArgs<ExtArgs> = {}>(args?: Subset<T, Room$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends Room$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Room$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Room$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly code: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly photoId: FieldRef<"Room", 'Int'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.members
   */
  export type Room$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * Room.joinRequests
   */
  export type Room$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    where?: RoomJoinRequestWhereInput
    orderBy?: RoomJoinRequestOrderByWithRelationInput | RoomJoinRequestOrderByWithRelationInput[]
    cursor?: RoomJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomJoinRequestScalarFieldEnum | RoomJoinRequestScalarFieldEnum[]
  }

  /**
   * Room.messages
   */
  export type Room$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomMember
   */

  export type AggregateRoomMember = {
    _count: RoomMemberCountAggregateOutputType | null
    _avg: RoomMemberAvgAggregateOutputType | null
    _sum: RoomMemberSumAggregateOutputType | null
    _min: RoomMemberMinAggregateOutputType | null
    _max: RoomMemberMaxAggregateOutputType | null
  }

  export type RoomMemberAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    avatarId: number | null
  }

  export type RoomMemberSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    avatarId: number | null
  }

  export type RoomMemberMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    userId: string | null
    name: string | null
    avatarId: number | null
    isAnonymous: boolean | null
    role: $Enums.RoomMemberRole | null
    status: $Enums.RoomMemberStatus | null
    joinedAt: Date | null
  }

  export type RoomMemberMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    userId: string | null
    name: string | null
    avatarId: number | null
    isAnonymous: boolean | null
    role: $Enums.RoomMemberRole | null
    status: $Enums.RoomMemberStatus | null
    joinedAt: Date | null
  }

  export type RoomMemberCountAggregateOutputType = {
    id: number
    roomId: number
    userId: number
    name: number
    avatarId: number
    isAnonymous: number
    role: number
    status: number
    joinedAt: number
    _all: number
  }


  export type RoomMemberAvgAggregateInputType = {
    id?: true
    roomId?: true
    avatarId?: true
  }

  export type RoomMemberSumAggregateInputType = {
    id?: true
    roomId?: true
    avatarId?: true
  }

  export type RoomMemberMinAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    name?: true
    avatarId?: true
    isAnonymous?: true
    role?: true
    status?: true
    joinedAt?: true
  }

  export type RoomMemberMaxAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    name?: true
    avatarId?: true
    isAnonymous?: true
    role?: true
    status?: true
    joinedAt?: true
  }

  export type RoomMemberCountAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    name?: true
    avatarId?: true
    isAnonymous?: true
    role?: true
    status?: true
    joinedAt?: true
    _all?: true
  }

  export type RoomMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMember to aggregate.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomMembers
    **/
    _count?: true | RoomMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMemberMaxAggregateInputType
  }

  export type GetRoomMemberAggregateType<T extends RoomMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomMember[P]>
      : GetScalarType<T[P], AggregateRoomMember[P]>
  }




  export type RoomMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithAggregationInput | RoomMemberOrderByWithAggregationInput[]
    by: RoomMemberScalarFieldEnum[] | RoomMemberScalarFieldEnum
    having?: RoomMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomMemberCountAggregateInputType | true
    _avg?: RoomMemberAvgAggregateInputType
    _sum?: RoomMemberSumAggregateInputType
    _min?: RoomMemberMinAggregateInputType
    _max?: RoomMemberMaxAggregateInputType
  }

  export type RoomMemberGroupByOutputType = {
    id: number
    roomId: number
    userId: string
    name: string | null
    avatarId: number
    isAnonymous: boolean
    role: $Enums.RoomMemberRole
    status: $Enums.RoomMemberStatus
    joinedAt: Date
    _count: RoomMemberCountAggregateOutputType | null
    _avg: RoomMemberAvgAggregateOutputType | null
    _sum: RoomMemberSumAggregateOutputType | null
    _min: RoomMemberMinAggregateOutputType | null
    _max: RoomMemberMaxAggregateOutputType | null
  }

  type GetRoomMemberGroupByPayload<T extends RoomMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomMemberGroupByOutputType[P]>
            : GetScalarType<T[P], RoomMemberGroupByOutputType[P]>
        }
      >
    >


  export type RoomMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    name?: boolean
    avatarId?: boolean
    isAnonymous?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
    messages?: boolean | RoomMember$messagesArgs<ExtArgs>
    _count?: boolean | RoomMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    name?: boolean
    avatarId?: boolean
    isAnonymous?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    name?: boolean
    avatarId?: boolean
    isAnonymous?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectScalar = {
    id?: boolean
    roomId?: boolean
    userId?: boolean
    name?: boolean
    avatarId?: boolean
    isAnonymous?: boolean
    role?: boolean
    status?: boolean
    joinedAt?: boolean
  }

  export type RoomMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "userId" | "name" | "avatarId" | "isAnonymous" | "role" | "status" | "joinedAt", ExtArgs["result"]["roomMember"]>
  export type RoomMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
    messages?: boolean | RoomMember$messagesArgs<ExtArgs>
    _count?: boolean | RoomMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }
  export type RoomMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }

  export type $RoomMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomMember"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      avatar: Prisma.$AvatarPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      userId: string
      name: string | null
      avatarId: number
      isAnonymous: boolean
      role: $Enums.RoomMemberRole
      status: $Enums.RoomMemberStatus
      joinedAt: Date
    }, ExtArgs["result"]["roomMember"]>
    composites: {}
  }

  type RoomMemberGetPayload<S extends boolean | null | undefined | RoomMemberDefaultArgs> = $Result.GetResult<Prisma.$RoomMemberPayload, S>

  type RoomMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomMemberCountAggregateInputType | true
    }

  export interface RoomMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomMember'], meta: { name: 'RoomMember' } }
    /**
     * Find zero or one RoomMember that matches the filter.
     * @param {RoomMemberFindUniqueArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomMemberFindUniqueArgs>(args: SelectSubset<T, RoomMemberFindUniqueArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomMemberFindUniqueOrThrowArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindFirstArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomMemberFindFirstArgs>(args?: SelectSubset<T, RoomMemberFindFirstArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindFirstOrThrowArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomMembers
     * const roomMembers = await prisma.roomMember.findMany()
     * 
     * // Get first 10 RoomMembers
     * const roomMembers = await prisma.roomMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomMemberFindManyArgs>(args?: SelectSubset<T, RoomMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomMember.
     * @param {RoomMemberCreateArgs} args - Arguments to create a RoomMember.
     * @example
     * // Create one RoomMember
     * const RoomMember = await prisma.roomMember.create({
     *   data: {
     *     // ... data to create a RoomMember
     *   }
     * })
     * 
     */
    create<T extends RoomMemberCreateArgs>(args: SelectSubset<T, RoomMemberCreateArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomMembers.
     * @param {RoomMemberCreateManyArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMember = await prisma.roomMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomMemberCreateManyArgs>(args?: SelectSubset<T, RoomMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomMembers and returns the data saved in the database.
     * @param {RoomMemberCreateManyAndReturnArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMember = await prisma.roomMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomMembers and only return the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomMember.
     * @param {RoomMemberDeleteArgs} args - Arguments to delete one RoomMember.
     * @example
     * // Delete one RoomMember
     * const RoomMember = await prisma.roomMember.delete({
     *   where: {
     *     // ... filter to delete one RoomMember
     *   }
     * })
     * 
     */
    delete<T extends RoomMemberDeleteArgs>(args: SelectSubset<T, RoomMemberDeleteArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomMember.
     * @param {RoomMemberUpdateArgs} args - Arguments to update one RoomMember.
     * @example
     * // Update one RoomMember
     * const roomMember = await prisma.roomMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomMemberUpdateArgs>(args: SelectSubset<T, RoomMemberUpdateArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomMembers.
     * @param {RoomMemberDeleteManyArgs} args - Arguments to filter RoomMembers to delete.
     * @example
     * // Delete a few RoomMembers
     * const { count } = await prisma.roomMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomMemberDeleteManyArgs>(args?: SelectSubset<T, RoomMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomMembers
     * const roomMember = await prisma.roomMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomMemberUpdateManyArgs>(args: SelectSubset<T, RoomMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMembers and returns the data updated in the database.
     * @param {RoomMemberUpdateManyAndReturnArgs} args - Arguments to update many RoomMembers.
     * @example
     * // Update many RoomMembers
     * const roomMember = await prisma.roomMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomMembers and only return the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomMember.
     * @param {RoomMemberUpsertArgs} args - Arguments to update or create a RoomMember.
     * @example
     * // Update or create a RoomMember
     * const roomMember = await prisma.roomMember.upsert({
     *   create: {
     *     // ... data to create a RoomMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomMember we want to update
     *   }
     * })
     */
    upsert<T extends RoomMemberUpsertArgs>(args: SelectSubset<T, RoomMemberUpsertArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberCountArgs} args - Arguments to filter RoomMembers to count.
     * @example
     * // Count the number of RoomMembers
     * const count = await prisma.roomMember.count({
     *   where: {
     *     // ... the filter for the RoomMembers we want to count
     *   }
     * })
    **/
    count<T extends RoomMemberCountArgs>(
      args?: Subset<T, RoomMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomMemberAggregateArgs>(args: Subset<T, RoomMemberAggregateArgs>): Prisma.PrismaPromise<GetRoomMemberAggregateType<T>>

    /**
     * Group by RoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomMemberGroupByArgs['orderBy'] }
        : { orderBy?: RoomMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomMember model
   */
  readonly fields: RoomMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avatar<T extends AvatarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvatarDefaultArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends RoomMember$messagesArgs<ExtArgs> = {}>(args?: Subset<T, RoomMember$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomMember model
   */
  interface RoomMemberFieldRefs {
    readonly id: FieldRef<"RoomMember", 'Int'>
    readonly roomId: FieldRef<"RoomMember", 'Int'>
    readonly userId: FieldRef<"RoomMember", 'String'>
    readonly name: FieldRef<"RoomMember", 'String'>
    readonly avatarId: FieldRef<"RoomMember", 'Int'>
    readonly isAnonymous: FieldRef<"RoomMember", 'Boolean'>
    readonly role: FieldRef<"RoomMember", 'RoomMemberRole'>
    readonly status: FieldRef<"RoomMember", 'RoomMemberStatus'>
    readonly joinedAt: FieldRef<"RoomMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomMember findUnique
   */
  export type RoomMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember findUniqueOrThrow
   */
  export type RoomMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember findFirst
   */
  export type RoomMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember findFirstOrThrow
   */
  export type RoomMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember findMany
   */
  export type RoomMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMembers to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember create
   */
  export type RoomMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomMember.
     */
    data: XOR<RoomMemberCreateInput, RoomMemberUncheckedCreateInput>
  }

  /**
   * RoomMember createMany
   */
  export type RoomMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMemberCreateManyInput | RoomMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomMember createManyAndReturn
   */
  export type RoomMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMemberCreateManyInput | RoomMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMember update
   */
  export type RoomMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomMember.
     */
    data: XOR<RoomMemberUpdateInput, RoomMemberUncheckedUpdateInput>
    /**
     * Choose, which RoomMember to update.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember updateMany
   */
  export type RoomMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number
  }

  /**
   * RoomMember updateManyAndReturn
   */
  export type RoomMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMember upsert
   */
  export type RoomMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomMember to update in case it exists.
     */
    where: RoomMemberWhereUniqueInput
    /**
     * In case the RoomMember found by the `where` argument doesn't exist, create a new RoomMember with this data.
     */
    create: XOR<RoomMemberCreateInput, RoomMemberUncheckedCreateInput>
    /**
     * In case the RoomMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomMemberUpdateInput, RoomMemberUncheckedUpdateInput>
  }

  /**
   * RoomMember delete
   */
  export type RoomMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter which RoomMember to delete.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember deleteMany
   */
  export type RoomMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMembers to delete
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to delete.
     */
    limit?: number
  }

  /**
   * RoomMember.messages
   */
  export type RoomMember$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * RoomMember without action
   */
  export type RoomMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
  }


  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  export type AvatarAvgAggregateOutputType = {
    id: number | null
  }

  export type AvatarSumAggregateOutputType = {
    id: number | null
  }

  export type AvatarMinAggregateOutputType = {
    id: number | null
    url: string | null
    status: $Enums.AvatarStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvatarMaxAggregateOutputType = {
    id: number | null
    url: string | null
    status: $Enums.AvatarStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvatarCountAggregateOutputType = {
    id: number
    url: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvatarAvgAggregateInputType = {
    id?: true
  }

  export type AvatarSumAggregateInputType = {
    id?: true
  }

  export type AvatarMinAggregateInputType = {
    id?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvatarMaxAggregateInputType = {
    id?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvatarCountAggregateInputType = {
    id?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarMaxAggregateInputType
  }

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>
  }




  export type AvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithAggregationInput | AvatarOrderByWithAggregationInput[]
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum
    having?: AvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarCountAggregateInputType | true
    _avg?: AvatarAvgAggregateInputType
    _sum?: AvatarSumAggregateInputType
    _min?: AvatarMinAggregateInputType
    _max?: AvatarMaxAggregateInputType
  }

  export type AvatarGroupByOutputType = {
    id: number
    url: string
    status: $Enums.AvatarStatus
    createdAt: Date
    updatedAt: Date
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
        }
      >
    >


  export type AvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Avatar$membersArgs<ExtArgs>
    _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectScalar = {
    id?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["avatar"]>
  export type AvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Avatar$membersArgs<ExtArgs>
    _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvatarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvatarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatar"
    objects: {
      members: Prisma.$RoomMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      status: $Enums.AvatarStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["avatar"]>
    composites: {}
  }

  type AvatarGetPayload<S extends boolean | null | undefined | AvatarDefaultArgs> = $Result.GetResult<Prisma.$AvatarPayload, S>

  type AvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvatarCountAggregateInputType | true
    }

  export interface AvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatar'], meta: { name: 'Avatar' } }
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarFindUniqueArgs>(args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarFindFirstArgs>(args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvatarFindManyArgs>(args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     * 
     */
    create<T extends AvatarCreateArgs>(args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avatars.
     * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarCreateManyArgs>(args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avatars and returns the data saved in the database.
     * @param {AvatarCreateManyAndReturnArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvatarCreateManyAndReturnArgs>(args?: SelectSubset<T, AvatarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     * 
     */
    delete<T extends AvatarDeleteArgs>(args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarUpdateArgs>(args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarDeleteManyArgs>(args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarUpdateManyArgs>(args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars and returns the data updated in the database.
     * @param {AvatarUpdateManyAndReturnArgs} args - Arguments to update many Avatars.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvatarUpdateManyAndReturnArgs>(args: SelectSubset<T, AvatarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
     */
    upsert<T extends AvatarUpsertArgs>(args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvatarAggregateArgs>(args: Subset<T, AvatarAggregateArgs>): Prisma.PrismaPromise<GetAvatarAggregateType<T>>

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatar model
   */
  readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Avatar$membersArgs<ExtArgs> = {}>(args?: Subset<T, Avatar$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avatar model
   */
  interface AvatarFieldRefs {
    readonly id: FieldRef<"Avatar", 'Int'>
    readonly url: FieldRef<"Avatar", 'String'>
    readonly status: FieldRef<"Avatar", 'AvatarStatus'>
    readonly createdAt: FieldRef<"Avatar", 'DateTime'>
    readonly updatedAt: FieldRef<"Avatar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar create
   */
  export type AvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatar.
     */
    data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
  }

  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avatar createManyAndReturn
   */
  export type AvatarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
  }

  /**
   * Avatar updateManyAndReturn
   */
  export type AvatarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
  }

  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
  }

  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to delete.
     */
    limit?: number
  }

  /**
   * Avatar.members
   */
  export type Avatar$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
  }


  /**
   * Model RoomPhoto
   */

  export type AggregateRoomPhoto = {
    _count: RoomPhotoCountAggregateOutputType | null
    _avg: RoomPhotoAvgAggregateOutputType | null
    _sum: RoomPhotoSumAggregateOutputType | null
    _min: RoomPhotoMinAggregateOutputType | null
    _max: RoomPhotoMaxAggregateOutputType | null
  }

  export type RoomPhotoAvgAggregateOutputType = {
    id: number | null
  }

  export type RoomPhotoSumAggregateOutputType = {
    id: number | null
  }

  export type RoomPhotoMinAggregateOutputType = {
    id: number | null
    url: string | null
    status: $Enums.RoomPhotoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomPhotoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    status: $Enums.RoomPhotoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomPhotoCountAggregateOutputType = {
    id: number
    url: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomPhotoAvgAggregateInputType = {
    id?: true
  }

  export type RoomPhotoSumAggregateInputType = {
    id?: true
  }

  export type RoomPhotoMinAggregateInputType = {
    id?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomPhotoMaxAggregateInputType = {
    id?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomPhotoCountAggregateInputType = {
    id?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPhoto to aggregate.
     */
    where?: RoomPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPhotos to fetch.
     */
    orderBy?: RoomPhotoOrderByWithRelationInput | RoomPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomPhotos
    **/
    _count?: true | RoomPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomPhotoMaxAggregateInputType
  }

  export type GetRoomPhotoAggregateType<T extends RoomPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomPhoto[P]>
      : GetScalarType<T[P], AggregateRoomPhoto[P]>
  }




  export type RoomPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPhotoWhereInput
    orderBy?: RoomPhotoOrderByWithAggregationInput | RoomPhotoOrderByWithAggregationInput[]
    by: RoomPhotoScalarFieldEnum[] | RoomPhotoScalarFieldEnum
    having?: RoomPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomPhotoCountAggregateInputType | true
    _avg?: RoomPhotoAvgAggregateInputType
    _sum?: RoomPhotoSumAggregateInputType
    _min?: RoomPhotoMinAggregateInputType
    _max?: RoomPhotoMaxAggregateInputType
  }

  export type RoomPhotoGroupByOutputType = {
    id: number
    url: string
    status: $Enums.RoomPhotoStatus
    createdAt: Date
    updatedAt: Date
    _count: RoomPhotoCountAggregateOutputType | null
    _avg: RoomPhotoAvgAggregateOutputType | null
    _sum: RoomPhotoSumAggregateOutputType | null
    _min: RoomPhotoMinAggregateOutputType | null
    _max: RoomPhotoMaxAggregateOutputType | null
  }

  type GetRoomPhotoGroupByPayload<T extends RoomPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], RoomPhotoGroupByOutputType[P]>
        }
      >
    >


  export type RoomPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | RoomPhoto$roomsArgs<ExtArgs>
    _count?: boolean | RoomPhotoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomPhoto"]>

  export type RoomPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["roomPhoto"]>

  export type RoomPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["roomPhoto"]>

  export type RoomPhotoSelectScalar = {
    id?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["roomPhoto"]>
  export type RoomPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomPhoto$roomsArgs<ExtArgs>
    _count?: boolean | RoomPhotoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomPhoto"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      status: $Enums.RoomPhotoStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomPhoto"]>
    composites: {}
  }

  type RoomPhotoGetPayload<S extends boolean | null | undefined | RoomPhotoDefaultArgs> = $Result.GetResult<Prisma.$RoomPhotoPayload, S>

  type RoomPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomPhotoCountAggregateInputType | true
    }

  export interface RoomPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomPhoto'], meta: { name: 'RoomPhoto' } }
    /**
     * Find zero or one RoomPhoto that matches the filter.
     * @param {RoomPhotoFindUniqueArgs} args - Arguments to find a RoomPhoto
     * @example
     * // Get one RoomPhoto
     * const roomPhoto = await prisma.roomPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomPhotoFindUniqueArgs>(args: SelectSubset<T, RoomPhotoFindUniqueArgs<ExtArgs>>): Prisma__RoomPhotoClient<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomPhotoFindUniqueOrThrowArgs} args - Arguments to find a RoomPhoto
     * @example
     * // Get one RoomPhoto
     * const roomPhoto = await prisma.roomPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomPhotoClient<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPhotoFindFirstArgs} args - Arguments to find a RoomPhoto
     * @example
     * // Get one RoomPhoto
     * const roomPhoto = await prisma.roomPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomPhotoFindFirstArgs>(args?: SelectSubset<T, RoomPhotoFindFirstArgs<ExtArgs>>): Prisma__RoomPhotoClient<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPhotoFindFirstOrThrowArgs} args - Arguments to find a RoomPhoto
     * @example
     * // Get one RoomPhoto
     * const roomPhoto = await prisma.roomPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomPhotoClient<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomPhotos
     * const roomPhotos = await prisma.roomPhoto.findMany()
     * 
     * // Get first 10 RoomPhotos
     * const roomPhotos = await prisma.roomPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomPhotoWithIdOnly = await prisma.roomPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomPhotoFindManyArgs>(args?: SelectSubset<T, RoomPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomPhoto.
     * @param {RoomPhotoCreateArgs} args - Arguments to create a RoomPhoto.
     * @example
     * // Create one RoomPhoto
     * const RoomPhoto = await prisma.roomPhoto.create({
     *   data: {
     *     // ... data to create a RoomPhoto
     *   }
     * })
     * 
     */
    create<T extends RoomPhotoCreateArgs>(args: SelectSubset<T, RoomPhotoCreateArgs<ExtArgs>>): Prisma__RoomPhotoClient<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomPhotos.
     * @param {RoomPhotoCreateManyArgs} args - Arguments to create many RoomPhotos.
     * @example
     * // Create many RoomPhotos
     * const roomPhoto = await prisma.roomPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomPhotoCreateManyArgs>(args?: SelectSubset<T, RoomPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomPhotos and returns the data saved in the database.
     * @param {RoomPhotoCreateManyAndReturnArgs} args - Arguments to create many RoomPhotos.
     * @example
     * // Create many RoomPhotos
     * const roomPhoto = await prisma.roomPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomPhotos and only return the `id`
     * const roomPhotoWithIdOnly = await prisma.roomPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomPhoto.
     * @param {RoomPhotoDeleteArgs} args - Arguments to delete one RoomPhoto.
     * @example
     * // Delete one RoomPhoto
     * const RoomPhoto = await prisma.roomPhoto.delete({
     *   where: {
     *     // ... filter to delete one RoomPhoto
     *   }
     * })
     * 
     */
    delete<T extends RoomPhotoDeleteArgs>(args: SelectSubset<T, RoomPhotoDeleteArgs<ExtArgs>>): Prisma__RoomPhotoClient<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomPhoto.
     * @param {RoomPhotoUpdateArgs} args - Arguments to update one RoomPhoto.
     * @example
     * // Update one RoomPhoto
     * const roomPhoto = await prisma.roomPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomPhotoUpdateArgs>(args: SelectSubset<T, RoomPhotoUpdateArgs<ExtArgs>>): Prisma__RoomPhotoClient<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomPhotos.
     * @param {RoomPhotoDeleteManyArgs} args - Arguments to filter RoomPhotos to delete.
     * @example
     * // Delete a few RoomPhotos
     * const { count } = await prisma.roomPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomPhotoDeleteManyArgs>(args?: SelectSubset<T, RoomPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomPhotos
     * const roomPhoto = await prisma.roomPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomPhotoUpdateManyArgs>(args: SelectSubset<T, RoomPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomPhotos and returns the data updated in the database.
     * @param {RoomPhotoUpdateManyAndReturnArgs} args - Arguments to update many RoomPhotos.
     * @example
     * // Update many RoomPhotos
     * const roomPhoto = await prisma.roomPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomPhotos and only return the `id`
     * const roomPhotoWithIdOnly = await prisma.roomPhoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomPhoto.
     * @param {RoomPhotoUpsertArgs} args - Arguments to update or create a RoomPhoto.
     * @example
     * // Update or create a RoomPhoto
     * const roomPhoto = await prisma.roomPhoto.upsert({
     *   create: {
     *     // ... data to create a RoomPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomPhoto we want to update
     *   }
     * })
     */
    upsert<T extends RoomPhotoUpsertArgs>(args: SelectSubset<T, RoomPhotoUpsertArgs<ExtArgs>>): Prisma__RoomPhotoClient<$Result.GetResult<Prisma.$RoomPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPhotoCountArgs} args - Arguments to filter RoomPhotos to count.
     * @example
     * // Count the number of RoomPhotos
     * const count = await prisma.roomPhoto.count({
     *   where: {
     *     // ... the filter for the RoomPhotos we want to count
     *   }
     * })
    **/
    count<T extends RoomPhotoCountArgs>(
      args?: Subset<T, RoomPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomPhotoAggregateArgs>(args: Subset<T, RoomPhotoAggregateArgs>): Prisma.PrismaPromise<GetRoomPhotoAggregateType<T>>

    /**
     * Group by RoomPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomPhotoGroupByArgs['orderBy'] }
        : { orderBy?: RoomPhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomPhoto model
   */
  readonly fields: RoomPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends RoomPhoto$roomsArgs<ExtArgs> = {}>(args?: Subset<T, RoomPhoto$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomPhoto model
   */
  interface RoomPhotoFieldRefs {
    readonly id: FieldRef<"RoomPhoto", 'Int'>
    readonly url: FieldRef<"RoomPhoto", 'String'>
    readonly status: FieldRef<"RoomPhoto", 'RoomPhotoStatus'>
    readonly createdAt: FieldRef<"RoomPhoto", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomPhoto findUnique
   */
  export type RoomPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
    /**
     * Filter, which RoomPhoto to fetch.
     */
    where: RoomPhotoWhereUniqueInput
  }

  /**
   * RoomPhoto findUniqueOrThrow
   */
  export type RoomPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
    /**
     * Filter, which RoomPhoto to fetch.
     */
    where: RoomPhotoWhereUniqueInput
  }

  /**
   * RoomPhoto findFirst
   */
  export type RoomPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
    /**
     * Filter, which RoomPhoto to fetch.
     */
    where?: RoomPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPhotos to fetch.
     */
    orderBy?: RoomPhotoOrderByWithRelationInput | RoomPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPhotos.
     */
    cursor?: RoomPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPhotos.
     */
    distinct?: RoomPhotoScalarFieldEnum | RoomPhotoScalarFieldEnum[]
  }

  /**
   * RoomPhoto findFirstOrThrow
   */
  export type RoomPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
    /**
     * Filter, which RoomPhoto to fetch.
     */
    where?: RoomPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPhotos to fetch.
     */
    orderBy?: RoomPhotoOrderByWithRelationInput | RoomPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPhotos.
     */
    cursor?: RoomPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPhotos.
     */
    distinct?: RoomPhotoScalarFieldEnum | RoomPhotoScalarFieldEnum[]
  }

  /**
   * RoomPhoto findMany
   */
  export type RoomPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
    /**
     * Filter, which RoomPhotos to fetch.
     */
    where?: RoomPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPhotos to fetch.
     */
    orderBy?: RoomPhotoOrderByWithRelationInput | RoomPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomPhotos.
     */
    cursor?: RoomPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPhotos.
     */
    skip?: number
    distinct?: RoomPhotoScalarFieldEnum | RoomPhotoScalarFieldEnum[]
  }

  /**
   * RoomPhoto create
   */
  export type RoomPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomPhoto.
     */
    data: XOR<RoomPhotoCreateInput, RoomPhotoUncheckedCreateInput>
  }

  /**
   * RoomPhoto createMany
   */
  export type RoomPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomPhotos.
     */
    data: RoomPhotoCreateManyInput | RoomPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomPhoto createManyAndReturn
   */
  export type RoomPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many RoomPhotos.
     */
    data: RoomPhotoCreateManyInput | RoomPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomPhoto update
   */
  export type RoomPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomPhoto.
     */
    data: XOR<RoomPhotoUpdateInput, RoomPhotoUncheckedUpdateInput>
    /**
     * Choose, which RoomPhoto to update.
     */
    where: RoomPhotoWhereUniqueInput
  }

  /**
   * RoomPhoto updateMany
   */
  export type RoomPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomPhotos.
     */
    data: XOR<RoomPhotoUpdateManyMutationInput, RoomPhotoUncheckedUpdateManyInput>
    /**
     * Filter which RoomPhotos to update
     */
    where?: RoomPhotoWhereInput
    /**
     * Limit how many RoomPhotos to update.
     */
    limit?: number
  }

  /**
   * RoomPhoto updateManyAndReturn
   */
  export type RoomPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * The data used to update RoomPhotos.
     */
    data: XOR<RoomPhotoUpdateManyMutationInput, RoomPhotoUncheckedUpdateManyInput>
    /**
     * Filter which RoomPhotos to update
     */
    where?: RoomPhotoWhereInput
    /**
     * Limit how many RoomPhotos to update.
     */
    limit?: number
  }

  /**
   * RoomPhoto upsert
   */
  export type RoomPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomPhoto to update in case it exists.
     */
    where: RoomPhotoWhereUniqueInput
    /**
     * In case the RoomPhoto found by the `where` argument doesn't exist, create a new RoomPhoto with this data.
     */
    create: XOR<RoomPhotoCreateInput, RoomPhotoUncheckedCreateInput>
    /**
     * In case the RoomPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomPhotoUpdateInput, RoomPhotoUncheckedUpdateInput>
  }

  /**
   * RoomPhoto delete
   */
  export type RoomPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
    /**
     * Filter which RoomPhoto to delete.
     */
    where: RoomPhotoWhereUniqueInput
  }

  /**
   * RoomPhoto deleteMany
   */
  export type RoomPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPhotos to delete
     */
    where?: RoomPhotoWhereInput
    /**
     * Limit how many RoomPhotos to delete.
     */
    limit?: number
  }

  /**
   * RoomPhoto.rooms
   */
  export type RoomPhoto$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * RoomPhoto without action
   */
  export type RoomPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPhoto
     */
    select?: RoomPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPhoto
     */
    omit?: RoomPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPhotoInclude<ExtArgs> | null
  }


  /**
   * Model RoomJoinRequest
   */

  export type AggregateRoomJoinRequest = {
    _count: RoomJoinRequestCountAggregateOutputType | null
    _avg: RoomJoinRequestAvgAggregateOutputType | null
    _sum: RoomJoinRequestSumAggregateOutputType | null
    _min: RoomJoinRequestMinAggregateOutputType | null
    _max: RoomJoinRequestMaxAggregateOutputType | null
  }

  export type RoomJoinRequestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
  }

  export type RoomJoinRequestSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
  }

  export type RoomJoinRequestMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    status: $Enums.RoomJoinRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomJoinRequestMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    status: $Enums.RoomJoinRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomJoinRequestCountAggregateOutputType = {
    id: number
    userId: number
    roomId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomJoinRequestAvgAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
  }

  export type RoomJoinRequestSumAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
  }

  export type RoomJoinRequestMinAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomJoinRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomJoinRequestCountAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomJoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomJoinRequest to aggregate.
     */
    where?: RoomJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomJoinRequests to fetch.
     */
    orderBy?: RoomJoinRequestOrderByWithRelationInput | RoomJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomJoinRequests
    **/
    _count?: true | RoomJoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomJoinRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomJoinRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomJoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomJoinRequestMaxAggregateInputType
  }

  export type GetRoomJoinRequestAggregateType<T extends RoomJoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomJoinRequest[P]>
      : GetScalarType<T[P], AggregateRoomJoinRequest[P]>
  }




  export type RoomJoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomJoinRequestWhereInput
    orderBy?: RoomJoinRequestOrderByWithAggregationInput | RoomJoinRequestOrderByWithAggregationInput[]
    by: RoomJoinRequestScalarFieldEnum[] | RoomJoinRequestScalarFieldEnum
    having?: RoomJoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomJoinRequestCountAggregateInputType | true
    _avg?: RoomJoinRequestAvgAggregateInputType
    _sum?: RoomJoinRequestSumAggregateInputType
    _min?: RoomJoinRequestMinAggregateInputType
    _max?: RoomJoinRequestMaxAggregateInputType
  }

  export type RoomJoinRequestGroupByOutputType = {
    id: number
    userId: number
    roomId: number
    status: $Enums.RoomJoinRequestStatus
    createdAt: Date
    updatedAt: Date
    _count: RoomJoinRequestCountAggregateOutputType | null
    _avg: RoomJoinRequestAvgAggregateOutputType | null
    _sum: RoomJoinRequestSumAggregateOutputType | null
    _min: RoomJoinRequestMinAggregateOutputType | null
    _max: RoomJoinRequestMaxAggregateOutputType | null
  }

  type GetRoomJoinRequestGroupByPayload<T extends RoomJoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomJoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomJoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomJoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RoomJoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type RoomJoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomJoinRequest"]>

  export type RoomJoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomJoinRequest"]>

  export type RoomJoinRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomJoinRequest"]>

  export type RoomJoinRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    roomId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomJoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roomId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["roomJoinRequest"]>
  export type RoomJoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomJoinRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomJoinRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomJoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomJoinRequest"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roomId: number
      status: $Enums.RoomJoinRequestStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomJoinRequest"]>
    composites: {}
  }

  type RoomJoinRequestGetPayload<S extends boolean | null | undefined | RoomJoinRequestDefaultArgs> = $Result.GetResult<Prisma.$RoomJoinRequestPayload, S>

  type RoomJoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomJoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomJoinRequestCountAggregateInputType | true
    }

  export interface RoomJoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomJoinRequest'], meta: { name: 'RoomJoinRequest' } }
    /**
     * Find zero or one RoomJoinRequest that matches the filter.
     * @param {RoomJoinRequestFindUniqueArgs} args - Arguments to find a RoomJoinRequest
     * @example
     * // Get one RoomJoinRequest
     * const roomJoinRequest = await prisma.roomJoinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomJoinRequestFindUniqueArgs>(args: SelectSubset<T, RoomJoinRequestFindUniqueArgs<ExtArgs>>): Prisma__RoomJoinRequestClient<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomJoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomJoinRequestFindUniqueOrThrowArgs} args - Arguments to find a RoomJoinRequest
     * @example
     * // Get one RoomJoinRequest
     * const roomJoinRequest = await prisma.roomJoinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomJoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomJoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomJoinRequestClient<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomJoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomJoinRequestFindFirstArgs} args - Arguments to find a RoomJoinRequest
     * @example
     * // Get one RoomJoinRequest
     * const roomJoinRequest = await prisma.roomJoinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomJoinRequestFindFirstArgs>(args?: SelectSubset<T, RoomJoinRequestFindFirstArgs<ExtArgs>>): Prisma__RoomJoinRequestClient<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomJoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomJoinRequestFindFirstOrThrowArgs} args - Arguments to find a RoomJoinRequest
     * @example
     * // Get one RoomJoinRequest
     * const roomJoinRequest = await prisma.roomJoinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomJoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomJoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomJoinRequestClient<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomJoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomJoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomJoinRequests
     * const roomJoinRequests = await prisma.roomJoinRequest.findMany()
     * 
     * // Get first 10 RoomJoinRequests
     * const roomJoinRequests = await prisma.roomJoinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomJoinRequestWithIdOnly = await prisma.roomJoinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomJoinRequestFindManyArgs>(args?: SelectSubset<T, RoomJoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomJoinRequest.
     * @param {RoomJoinRequestCreateArgs} args - Arguments to create a RoomJoinRequest.
     * @example
     * // Create one RoomJoinRequest
     * const RoomJoinRequest = await prisma.roomJoinRequest.create({
     *   data: {
     *     // ... data to create a RoomJoinRequest
     *   }
     * })
     * 
     */
    create<T extends RoomJoinRequestCreateArgs>(args: SelectSubset<T, RoomJoinRequestCreateArgs<ExtArgs>>): Prisma__RoomJoinRequestClient<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomJoinRequests.
     * @param {RoomJoinRequestCreateManyArgs} args - Arguments to create many RoomJoinRequests.
     * @example
     * // Create many RoomJoinRequests
     * const roomJoinRequest = await prisma.roomJoinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomJoinRequestCreateManyArgs>(args?: SelectSubset<T, RoomJoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomJoinRequests and returns the data saved in the database.
     * @param {RoomJoinRequestCreateManyAndReturnArgs} args - Arguments to create many RoomJoinRequests.
     * @example
     * // Create many RoomJoinRequests
     * const roomJoinRequest = await prisma.roomJoinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomJoinRequests and only return the `id`
     * const roomJoinRequestWithIdOnly = await prisma.roomJoinRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomJoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomJoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomJoinRequest.
     * @param {RoomJoinRequestDeleteArgs} args - Arguments to delete one RoomJoinRequest.
     * @example
     * // Delete one RoomJoinRequest
     * const RoomJoinRequest = await prisma.roomJoinRequest.delete({
     *   where: {
     *     // ... filter to delete one RoomJoinRequest
     *   }
     * })
     * 
     */
    delete<T extends RoomJoinRequestDeleteArgs>(args: SelectSubset<T, RoomJoinRequestDeleteArgs<ExtArgs>>): Prisma__RoomJoinRequestClient<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomJoinRequest.
     * @param {RoomJoinRequestUpdateArgs} args - Arguments to update one RoomJoinRequest.
     * @example
     * // Update one RoomJoinRequest
     * const roomJoinRequest = await prisma.roomJoinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomJoinRequestUpdateArgs>(args: SelectSubset<T, RoomJoinRequestUpdateArgs<ExtArgs>>): Prisma__RoomJoinRequestClient<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomJoinRequests.
     * @param {RoomJoinRequestDeleteManyArgs} args - Arguments to filter RoomJoinRequests to delete.
     * @example
     * // Delete a few RoomJoinRequests
     * const { count } = await prisma.roomJoinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomJoinRequestDeleteManyArgs>(args?: SelectSubset<T, RoomJoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomJoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomJoinRequests
     * const roomJoinRequest = await prisma.roomJoinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomJoinRequestUpdateManyArgs>(args: SelectSubset<T, RoomJoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomJoinRequests and returns the data updated in the database.
     * @param {RoomJoinRequestUpdateManyAndReturnArgs} args - Arguments to update many RoomJoinRequests.
     * @example
     * // Update many RoomJoinRequests
     * const roomJoinRequest = await prisma.roomJoinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomJoinRequests and only return the `id`
     * const roomJoinRequestWithIdOnly = await prisma.roomJoinRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomJoinRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomJoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomJoinRequest.
     * @param {RoomJoinRequestUpsertArgs} args - Arguments to update or create a RoomJoinRequest.
     * @example
     * // Update or create a RoomJoinRequest
     * const roomJoinRequest = await prisma.roomJoinRequest.upsert({
     *   create: {
     *     // ... data to create a RoomJoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomJoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends RoomJoinRequestUpsertArgs>(args: SelectSubset<T, RoomJoinRequestUpsertArgs<ExtArgs>>): Prisma__RoomJoinRequestClient<$Result.GetResult<Prisma.$RoomJoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomJoinRequestCountArgs} args - Arguments to filter RoomJoinRequests to count.
     * @example
     * // Count the number of RoomJoinRequests
     * const count = await prisma.roomJoinRequest.count({
     *   where: {
     *     // ... the filter for the RoomJoinRequests we want to count
     *   }
     * })
    **/
    count<T extends RoomJoinRequestCountArgs>(
      args?: Subset<T, RoomJoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomJoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomJoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomJoinRequestAggregateArgs>(args: Subset<T, RoomJoinRequestAggregateArgs>): Prisma.PrismaPromise<GetRoomJoinRequestAggregateType<T>>

    /**
     * Group by RoomJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomJoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomJoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomJoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: RoomJoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomJoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomJoinRequest model
   */
  readonly fields: RoomJoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomJoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomJoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomJoinRequest model
   */
  interface RoomJoinRequestFieldRefs {
    readonly id: FieldRef<"RoomJoinRequest", 'Int'>
    readonly userId: FieldRef<"RoomJoinRequest", 'Int'>
    readonly roomId: FieldRef<"RoomJoinRequest", 'Int'>
    readonly status: FieldRef<"RoomJoinRequest", 'RoomJoinRequestStatus'>
    readonly createdAt: FieldRef<"RoomJoinRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomJoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomJoinRequest findUnique
   */
  export type RoomJoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoomJoinRequest to fetch.
     */
    where: RoomJoinRequestWhereUniqueInput
  }

  /**
   * RoomJoinRequest findUniqueOrThrow
   */
  export type RoomJoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoomJoinRequest to fetch.
     */
    where: RoomJoinRequestWhereUniqueInput
  }

  /**
   * RoomJoinRequest findFirst
   */
  export type RoomJoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoomJoinRequest to fetch.
     */
    where?: RoomJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomJoinRequests to fetch.
     */
    orderBy?: RoomJoinRequestOrderByWithRelationInput | RoomJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomJoinRequests.
     */
    cursor?: RoomJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomJoinRequests.
     */
    distinct?: RoomJoinRequestScalarFieldEnum | RoomJoinRequestScalarFieldEnum[]
  }

  /**
   * RoomJoinRequest findFirstOrThrow
   */
  export type RoomJoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoomJoinRequest to fetch.
     */
    where?: RoomJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomJoinRequests to fetch.
     */
    orderBy?: RoomJoinRequestOrderByWithRelationInput | RoomJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomJoinRequests.
     */
    cursor?: RoomJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomJoinRequests.
     */
    distinct?: RoomJoinRequestScalarFieldEnum | RoomJoinRequestScalarFieldEnum[]
  }

  /**
   * RoomJoinRequest findMany
   */
  export type RoomJoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoomJoinRequests to fetch.
     */
    where?: RoomJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomJoinRequests to fetch.
     */
    orderBy?: RoomJoinRequestOrderByWithRelationInput | RoomJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomJoinRequests.
     */
    cursor?: RoomJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomJoinRequests.
     */
    skip?: number
    distinct?: RoomJoinRequestScalarFieldEnum | RoomJoinRequestScalarFieldEnum[]
  }

  /**
   * RoomJoinRequest create
   */
  export type RoomJoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomJoinRequest.
     */
    data: XOR<RoomJoinRequestCreateInput, RoomJoinRequestUncheckedCreateInput>
  }

  /**
   * RoomJoinRequest createMany
   */
  export type RoomJoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomJoinRequests.
     */
    data: RoomJoinRequestCreateManyInput | RoomJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomJoinRequest createManyAndReturn
   */
  export type RoomJoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to create many RoomJoinRequests.
     */
    data: RoomJoinRequestCreateManyInput | RoomJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomJoinRequest update
   */
  export type RoomJoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomJoinRequest.
     */
    data: XOR<RoomJoinRequestUpdateInput, RoomJoinRequestUncheckedUpdateInput>
    /**
     * Choose, which RoomJoinRequest to update.
     */
    where: RoomJoinRequestWhereUniqueInput
  }

  /**
   * RoomJoinRequest updateMany
   */
  export type RoomJoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomJoinRequests.
     */
    data: XOR<RoomJoinRequestUpdateManyMutationInput, RoomJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which RoomJoinRequests to update
     */
    where?: RoomJoinRequestWhereInput
    /**
     * Limit how many RoomJoinRequests to update.
     */
    limit?: number
  }

  /**
   * RoomJoinRequest updateManyAndReturn
   */
  export type RoomJoinRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to update RoomJoinRequests.
     */
    data: XOR<RoomJoinRequestUpdateManyMutationInput, RoomJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which RoomJoinRequests to update
     */
    where?: RoomJoinRequestWhereInput
    /**
     * Limit how many RoomJoinRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomJoinRequest upsert
   */
  export type RoomJoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomJoinRequest to update in case it exists.
     */
    where: RoomJoinRequestWhereUniqueInput
    /**
     * In case the RoomJoinRequest found by the `where` argument doesn't exist, create a new RoomJoinRequest with this data.
     */
    create: XOR<RoomJoinRequestCreateInput, RoomJoinRequestUncheckedCreateInput>
    /**
     * In case the RoomJoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomJoinRequestUpdateInput, RoomJoinRequestUncheckedUpdateInput>
  }

  /**
   * RoomJoinRequest delete
   */
  export type RoomJoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
    /**
     * Filter which RoomJoinRequest to delete.
     */
    where: RoomJoinRequestWhereUniqueInput
  }

  /**
   * RoomJoinRequest deleteMany
   */
  export type RoomJoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomJoinRequests to delete
     */
    where?: RoomJoinRequestWhereInput
    /**
     * Limit how many RoomJoinRequests to delete.
     */
    limit?: number
  }

  /**
   * RoomJoinRequest without action
   */
  export type RoomJoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomJoinRequest
     */
    select?: RoomJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomJoinRequest
     */
    omit?: RoomJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomJoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    memberId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    memberId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    memberId: number | null
    text: string | null
    contentType: $Enums.MessageContentType | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    memberId: number | null
    text: string | null
    contentType: $Enums.MessageContentType | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    roomId: number
    memberId: number
    text: number
    contentType: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    roomId?: true
    memberId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    roomId?: true
    memberId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    roomId?: true
    memberId?: true
    text?: true
    contentType?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    roomId?: true
    memberId?: true
    text?: true
    contentType?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    roomId?: true
    memberId?: true
    text?: true
    contentType?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    roomId: number
    memberId: number
    text: string
    contentType: $Enums.MessageContentType
    isDeleted: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    memberId?: boolean
    text?: boolean
    contentType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    member?: boolean | RoomMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    memberId?: boolean
    text?: boolean
    contentType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    member?: boolean | RoomMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    memberId?: boolean
    text?: boolean
    contentType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    member?: boolean | RoomMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    roomId?: boolean
    memberId?: boolean
    text?: boolean
    contentType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "memberId" | "text" | "contentType" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    member?: boolean | RoomMemberDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    member?: boolean | RoomMemberDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    member?: boolean | RoomMemberDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      member: Prisma.$RoomMemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      memberId: number
      text: string
      contentType: $Enums.MessageContentType
      isDeleted: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends RoomMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomMemberDefaultArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly roomId: FieldRef<"Message", 'Int'>
    readonly memberId: FieldRef<"Message", 'Int'>
    readonly text: FieldRef<"Message", 'String'>
    readonly contentType: FieldRef<"Message", 'MessageContentType'>
    readonly isDeleted: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoomScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    photoId: 'photoId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomMemberScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    userId: 'userId',
    name: 'name',
    avatarId: 'avatarId',
    isAnonymous: 'isAnonymous',
    role: 'role',
    status: 'status',
    joinedAt: 'joinedAt'
  };

  export type RoomMemberScalarFieldEnum = (typeof RoomMemberScalarFieldEnum)[keyof typeof RoomMemberScalarFieldEnum]


  export const AvatarScalarFieldEnum: {
    id: 'id',
    url: 'url',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum]


  export const RoomPhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomPhotoScalarFieldEnum = (typeof RoomPhotoScalarFieldEnum)[keyof typeof RoomPhotoScalarFieldEnum]


  export const RoomJoinRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roomId: 'roomId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomJoinRequestScalarFieldEnum = (typeof RoomJoinRequestScalarFieldEnum)[keyof typeof RoomJoinRequestScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    memberId: 'memberId',
    text: 'text',
    contentType: 'contentType',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RoomMemberRole'
   */
  export type EnumRoomMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomMemberRole'>
    


  /**
   * Reference to a field of type 'RoomMemberRole[]'
   */
  export type ListEnumRoomMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomMemberRole[]'>
    


  /**
   * Reference to a field of type 'RoomMemberStatus'
   */
  export type EnumRoomMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomMemberStatus'>
    


  /**
   * Reference to a field of type 'RoomMemberStatus[]'
   */
  export type ListEnumRoomMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomMemberStatus[]'>
    


  /**
   * Reference to a field of type 'AvatarStatus'
   */
  export type EnumAvatarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AvatarStatus'>
    


  /**
   * Reference to a field of type 'AvatarStatus[]'
   */
  export type ListEnumAvatarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AvatarStatus[]'>
    


  /**
   * Reference to a field of type 'RoomPhotoStatus'
   */
  export type EnumRoomPhotoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomPhotoStatus'>
    


  /**
   * Reference to a field of type 'RoomPhotoStatus[]'
   */
  export type ListEnumRoomPhotoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomPhotoStatus[]'>
    


  /**
   * Reference to a field of type 'RoomJoinRequestStatus'
   */
  export type EnumRoomJoinRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomJoinRequestStatus'>
    


  /**
   * Reference to a field of type 'RoomJoinRequestStatus[]'
   */
  export type ListEnumRoomJoinRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomJoinRequestStatus[]'>
    


  /**
   * Reference to a field of type 'MessageContentType'
   */
  export type EnumMessageContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageContentType'>
    


  /**
   * Reference to a field of type 'MessageContentType[]'
   */
  export type ListEnumMessageContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageContentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    code?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    photoId?: IntFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    photo?: XOR<RoomPhotoScalarRelationFilter, RoomPhotoWhereInput>
    members?: RoomMemberListRelationFilter
    joinRequests?: RoomJoinRequestListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    photoId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: RoomPhotoOrderByWithRelationInput
    members?: RoomMemberOrderByRelationAggregateInput
    joinRequests?: RoomJoinRequestOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    photoId?: IntFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    photo?: XOR<RoomPhotoScalarRelationFilter, RoomPhotoWhereInput>
    members?: RoomMemberListRelationFilter
    joinRequests?: RoomJoinRequestListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "code">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    photoId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    code?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    photoId?: IntWithAggregatesFilter<"Room"> | number
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomMemberWhereInput = {
    AND?: RoomMemberWhereInput | RoomMemberWhereInput[]
    OR?: RoomMemberWhereInput[]
    NOT?: RoomMemberWhereInput | RoomMemberWhereInput[]
    id?: IntFilter<"RoomMember"> | number
    roomId?: IntFilter<"RoomMember"> | number
    userId?: StringFilter<"RoomMember"> | string
    name?: StringNullableFilter<"RoomMember"> | string | null
    avatarId?: IntFilter<"RoomMember"> | number
    isAnonymous?: BoolFilter<"RoomMember"> | boolean
    role?: EnumRoomMemberRoleFilter<"RoomMember"> | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFilter<"RoomMember"> | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFilter<"RoomMember"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    avatar?: XOR<AvatarScalarRelationFilter, AvatarWhereInput>
    messages?: MessageListRelationFilter
  }

  export type RoomMemberOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarId?: SortOrder
    isAnonymous?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    avatar?: AvatarOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type RoomMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_userId?: RoomMemberIdUserIdCompoundUniqueInput
    AND?: RoomMemberWhereInput | RoomMemberWhereInput[]
    OR?: RoomMemberWhereInput[]
    NOT?: RoomMemberWhereInput | RoomMemberWhereInput[]
    roomId?: IntFilter<"RoomMember"> | number
    userId?: StringFilter<"RoomMember"> | string
    name?: StringNullableFilter<"RoomMember"> | string | null
    avatarId?: IntFilter<"RoomMember"> | number
    isAnonymous?: BoolFilter<"RoomMember"> | boolean
    role?: EnumRoomMemberRoleFilter<"RoomMember"> | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFilter<"RoomMember"> | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFilter<"RoomMember"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    avatar?: XOR<AvatarScalarRelationFilter, AvatarWhereInput>
    messages?: MessageListRelationFilter
  }, "id" | "id_userId">

  export type RoomMemberOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarId?: SortOrder
    isAnonymous?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
    _count?: RoomMemberCountOrderByAggregateInput
    _avg?: RoomMemberAvgOrderByAggregateInput
    _max?: RoomMemberMaxOrderByAggregateInput
    _min?: RoomMemberMinOrderByAggregateInput
    _sum?: RoomMemberSumOrderByAggregateInput
  }

  export type RoomMemberScalarWhereWithAggregatesInput = {
    AND?: RoomMemberScalarWhereWithAggregatesInput | RoomMemberScalarWhereWithAggregatesInput[]
    OR?: RoomMemberScalarWhereWithAggregatesInput[]
    NOT?: RoomMemberScalarWhereWithAggregatesInput | RoomMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomMember"> | number
    roomId?: IntWithAggregatesFilter<"RoomMember"> | number
    userId?: StringWithAggregatesFilter<"RoomMember"> | string
    name?: StringNullableWithAggregatesFilter<"RoomMember"> | string | null
    avatarId?: IntWithAggregatesFilter<"RoomMember"> | number
    isAnonymous?: BoolWithAggregatesFilter<"RoomMember"> | boolean
    role?: EnumRoomMemberRoleWithAggregatesFilter<"RoomMember"> | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusWithAggregatesFilter<"RoomMember"> | $Enums.RoomMemberStatus
    joinedAt?: DateTimeWithAggregatesFilter<"RoomMember"> | Date | string
  }

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    id?: IntFilter<"Avatar"> | number
    url?: StringFilter<"Avatar"> | string
    status?: EnumAvatarStatusFilter<"Avatar"> | $Enums.AvatarStatus
    createdAt?: DateTimeFilter<"Avatar"> | Date | string
    updatedAt?: DateTimeFilter<"Avatar"> | Date | string
    members?: RoomMemberListRelationFilter
  }

  export type AvatarOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: RoomMemberOrderByRelationAggregateInput
  }

  export type AvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    url?: StringFilter<"Avatar"> | string
    status?: EnumAvatarStatusFilter<"Avatar"> | $Enums.AvatarStatus
    createdAt?: DateTimeFilter<"Avatar"> | Date | string
    updatedAt?: DateTimeFilter<"Avatar"> | Date | string
    members?: RoomMemberListRelationFilter
  }, "id">

  export type AvatarOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvatarCountOrderByAggregateInput
    _avg?: AvatarAvgOrderByAggregateInput
    _max?: AvatarMaxOrderByAggregateInput
    _min?: AvatarMinOrderByAggregateInput
    _sum?: AvatarSumOrderByAggregateInput
  }

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    OR?: AvatarScalarWhereWithAggregatesInput[]
    NOT?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avatar"> | number
    url?: StringWithAggregatesFilter<"Avatar"> | string
    status?: EnumAvatarStatusWithAggregatesFilter<"Avatar"> | $Enums.AvatarStatus
    createdAt?: DateTimeWithAggregatesFilter<"Avatar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Avatar"> | Date | string
  }

  export type RoomPhotoWhereInput = {
    AND?: RoomPhotoWhereInput | RoomPhotoWhereInput[]
    OR?: RoomPhotoWhereInput[]
    NOT?: RoomPhotoWhereInput | RoomPhotoWhereInput[]
    id?: IntFilter<"RoomPhoto"> | number
    url?: StringFilter<"RoomPhoto"> | string
    status?: EnumRoomPhotoStatusFilter<"RoomPhoto"> | $Enums.RoomPhotoStatus
    createdAt?: DateTimeFilter<"RoomPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"RoomPhoto"> | Date | string
    rooms?: RoomListRelationFilter
  }

  export type RoomPhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type RoomPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomPhotoWhereInput | RoomPhotoWhereInput[]
    OR?: RoomPhotoWhereInput[]
    NOT?: RoomPhotoWhereInput | RoomPhotoWhereInput[]
    url?: StringFilter<"RoomPhoto"> | string
    status?: EnumRoomPhotoStatusFilter<"RoomPhoto"> | $Enums.RoomPhotoStatus
    createdAt?: DateTimeFilter<"RoomPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"RoomPhoto"> | Date | string
    rooms?: RoomListRelationFilter
  }, "id">

  export type RoomPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomPhotoCountOrderByAggregateInput
    _avg?: RoomPhotoAvgOrderByAggregateInput
    _max?: RoomPhotoMaxOrderByAggregateInput
    _min?: RoomPhotoMinOrderByAggregateInput
    _sum?: RoomPhotoSumOrderByAggregateInput
  }

  export type RoomPhotoScalarWhereWithAggregatesInput = {
    AND?: RoomPhotoScalarWhereWithAggregatesInput | RoomPhotoScalarWhereWithAggregatesInput[]
    OR?: RoomPhotoScalarWhereWithAggregatesInput[]
    NOT?: RoomPhotoScalarWhereWithAggregatesInput | RoomPhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomPhoto"> | number
    url?: StringWithAggregatesFilter<"RoomPhoto"> | string
    status?: EnumRoomPhotoStatusWithAggregatesFilter<"RoomPhoto"> | $Enums.RoomPhotoStatus
    createdAt?: DateTimeWithAggregatesFilter<"RoomPhoto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomPhoto"> | Date | string
  }

  export type RoomJoinRequestWhereInput = {
    AND?: RoomJoinRequestWhereInput | RoomJoinRequestWhereInput[]
    OR?: RoomJoinRequestWhereInput[]
    NOT?: RoomJoinRequestWhereInput | RoomJoinRequestWhereInput[]
    id?: IntFilter<"RoomJoinRequest"> | number
    userId?: IntFilter<"RoomJoinRequest"> | number
    roomId?: IntFilter<"RoomJoinRequest"> | number
    status?: EnumRoomJoinRequestStatusFilter<"RoomJoinRequest"> | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFilter<"RoomJoinRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RoomJoinRequest"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomJoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomJoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomJoinRequestWhereInput | RoomJoinRequestWhereInput[]
    OR?: RoomJoinRequestWhereInput[]
    NOT?: RoomJoinRequestWhereInput | RoomJoinRequestWhereInput[]
    userId?: IntFilter<"RoomJoinRequest"> | number
    roomId?: IntFilter<"RoomJoinRequest"> | number
    status?: EnumRoomJoinRequestStatusFilter<"RoomJoinRequest"> | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFilter<"RoomJoinRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RoomJoinRequest"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomJoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomJoinRequestCountOrderByAggregateInput
    _avg?: RoomJoinRequestAvgOrderByAggregateInput
    _max?: RoomJoinRequestMaxOrderByAggregateInput
    _min?: RoomJoinRequestMinOrderByAggregateInput
    _sum?: RoomJoinRequestSumOrderByAggregateInput
  }

  export type RoomJoinRequestScalarWhereWithAggregatesInput = {
    AND?: RoomJoinRequestScalarWhereWithAggregatesInput | RoomJoinRequestScalarWhereWithAggregatesInput[]
    OR?: RoomJoinRequestScalarWhereWithAggregatesInput[]
    NOT?: RoomJoinRequestScalarWhereWithAggregatesInput | RoomJoinRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomJoinRequest"> | number
    userId?: IntWithAggregatesFilter<"RoomJoinRequest"> | number
    roomId?: IntWithAggregatesFilter<"RoomJoinRequest"> | number
    status?: EnumRoomJoinRequestStatusWithAggregatesFilter<"RoomJoinRequest"> | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"RoomJoinRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomJoinRequest"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    roomId?: IntFilter<"Message"> | number
    memberId?: IntFilter<"Message"> | number
    text?: StringFilter<"Message"> | string
    contentType?: EnumMessageContentTypeFilter<"Message"> | $Enums.MessageContentType
    isDeleted?: BoolNullableFilter<"Message"> | boolean | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    member?: XOR<RoomMemberScalarRelationFilter, RoomMemberWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    memberId?: SortOrder
    text?: SortOrder
    contentType?: SortOrder
    isDeleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    member?: RoomMemberOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    roomId?: IntFilter<"Message"> | number
    memberId?: IntFilter<"Message"> | number
    text?: StringFilter<"Message"> | string
    contentType?: EnumMessageContentTypeFilter<"Message"> | $Enums.MessageContentType
    isDeleted?: BoolNullableFilter<"Message"> | boolean | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    member?: XOR<RoomMemberScalarRelationFilter, RoomMemberWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    memberId?: SortOrder
    text?: SortOrder
    contentType?: SortOrder
    isDeleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    roomId?: IntWithAggregatesFilter<"Message"> | number
    memberId?: IntWithAggregatesFilter<"Message"> | number
    text?: StringWithAggregatesFilter<"Message"> | string
    contentType?: EnumMessageContentTypeWithAggregatesFilter<"Message"> | $Enums.MessageContentType
    isDeleted?: BoolNullableWithAggregatesFilter<"Message"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type RoomCreateInput = {
    code: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    photo: RoomPhotoCreateNestedOneWithoutRoomsInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    joinRequests?: RoomJoinRequestCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    photoId: number
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    joinRequests?: RoomJoinRequestUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: RoomPhotoUpdateOneRequiredWithoutRoomsNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    joinRequests?: RoomJoinRequestUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    joinRequests?: RoomJoinRequestUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    code: string
    name: string
    photoId: number
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateInput = {
    userId: string
    name?: string | null
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    avatar: AvatarCreateNestedOneWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutMemberInput
  }

  export type RoomMemberUncheckedCreateInput = {
    id?: number
    roomId: number
    userId: string
    name?: string | null
    avatarId: number
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMemberInput
  }

  export type RoomMemberUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    avatar?: AvatarUpdateOneRequiredWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutMemberNestedInput
  }

  export type RoomMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: IntFieldUpdateOperationsInput | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type RoomMemberCreateManyInput = {
    id?: number
    roomId: number
    userId: string
    name?: string | null
    avatarId: number
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
  }

  export type RoomMemberUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: IntFieldUpdateOperationsInput | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarCreateInput = {
    url: string
    status?: $Enums.AvatarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: RoomMemberCreateNestedManyWithoutAvatarInput
  }

  export type AvatarUncheckedCreateInput = {
    id?: number
    url: string
    status?: $Enums.AvatarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutAvatarInput
  }

  export type AvatarUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAvatarStatusFieldUpdateOperationsInput | $Enums.AvatarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUpdateManyWithoutAvatarNestedInput
  }

  export type AvatarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAvatarStatusFieldUpdateOperationsInput | $Enums.AvatarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutAvatarNestedInput
  }

  export type AvatarCreateManyInput = {
    id?: number
    url: string
    status?: $Enums.AvatarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvatarUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAvatarStatusFieldUpdateOperationsInput | $Enums.AvatarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAvatarStatusFieldUpdateOperationsInput | $Enums.AvatarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPhotoCreateInput = {
    url: string
    status?: $Enums.RoomPhotoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutPhotoInput
  }

  export type RoomPhotoUncheckedCreateInput = {
    id?: number
    url: string
    status?: $Enums.RoomPhotoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type RoomPhotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomPhotoStatusFieldUpdateOperationsInput | $Enums.RoomPhotoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutPhotoNestedInput
  }

  export type RoomPhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomPhotoStatusFieldUpdateOperationsInput | $Enums.RoomPhotoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type RoomPhotoCreateManyInput = {
    id?: number
    url: string
    status?: $Enums.RoomPhotoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomPhotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomPhotoStatusFieldUpdateOperationsInput | $Enums.RoomPhotoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomPhotoStatusFieldUpdateOperationsInput | $Enums.RoomPhotoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomJoinRequestCreateInput = {
    userId: number
    status?: $Enums.RoomJoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutJoinRequestsInput
  }

  export type RoomJoinRequestUncheckedCreateInput = {
    id?: number
    userId: number
    roomId: number
    status?: $Enums.RoomJoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomJoinRequestUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomJoinRequestStatusFieldUpdateOperationsInput | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type RoomJoinRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomJoinRequestStatusFieldUpdateOperationsInput | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomJoinRequestCreateManyInput = {
    id?: number
    userId: number
    roomId: number
    status?: $Enums.RoomJoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomJoinRequestUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomJoinRequestStatusFieldUpdateOperationsInput | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomJoinRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomJoinRequestStatusFieldUpdateOperationsInput | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    text: string
    contentType: $Enums.MessageContentType
    isDeleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutMessagesInput
    member: RoomMemberCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    roomId: number
    memberId: number
    text: string
    contentType: $Enums.MessageContentType
    isDeleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
    member?: RoomMemberUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    roomId: number
    memberId: number
    text: string
    contentType: $Enums.MessageContentType
    isDeleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoomPhotoScalarRelationFilter = {
    is?: RoomPhotoWhereInput
    isNot?: RoomPhotoWhereInput
  }

  export type RoomMemberListRelationFilter = {
    every?: RoomMemberWhereInput
    some?: RoomMemberWhereInput
    none?: RoomMemberWhereInput
  }

  export type RoomJoinRequestListRelationFilter = {
    every?: RoomJoinRequestWhereInput
    some?: RoomJoinRequestWhereInput
    none?: RoomJoinRequestWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type RoomMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomJoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    photoId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    photoId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    photoId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    photoId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    photoId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoomMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomMemberRole | EnumRoomMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.RoomMemberRole[] | ListEnumRoomMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomMemberRole[] | ListEnumRoomMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomMemberRoleFilter<$PrismaModel> | $Enums.RoomMemberRole
  }

  export type EnumRoomMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomMemberStatus | EnumRoomMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomMemberStatus[] | ListEnumRoomMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomMemberStatus[] | ListEnumRoomMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomMemberStatusFilter<$PrismaModel> | $Enums.RoomMemberStatus
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type AvatarScalarRelationFilter = {
    is?: AvatarWhereInput
    isNot?: AvatarWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomMemberIdUserIdCompoundUniqueInput = {
    id: number
    userId: string
  }

  export type RoomMemberCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    avatarId?: SortOrder
    isAnonymous?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type RoomMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    avatarId?: SortOrder
  }

  export type RoomMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    avatarId?: SortOrder
    isAnonymous?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type RoomMemberMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    avatarId?: SortOrder
    isAnonymous?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type RoomMemberSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    avatarId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoomMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomMemberRole | EnumRoomMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.RoomMemberRole[] | ListEnumRoomMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomMemberRole[] | ListEnumRoomMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.RoomMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumRoomMemberRoleFilter<$PrismaModel>
  }

  export type EnumRoomMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomMemberStatus | EnumRoomMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomMemberStatus[] | ListEnumRoomMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomMemberStatus[] | ListEnumRoomMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomMemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomMemberStatusFilter<$PrismaModel>
  }

  export type EnumAvatarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AvatarStatus | EnumAvatarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AvatarStatus[] | ListEnumAvatarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AvatarStatus[] | ListEnumAvatarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAvatarStatusFilter<$PrismaModel> | $Enums.AvatarStatus
  }

  export type AvatarCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvatarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvatarMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvatarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAvatarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AvatarStatus | EnumAvatarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AvatarStatus[] | ListEnumAvatarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AvatarStatus[] | ListEnumAvatarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAvatarStatusWithAggregatesFilter<$PrismaModel> | $Enums.AvatarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAvatarStatusFilter<$PrismaModel>
    _max?: NestedEnumAvatarStatusFilter<$PrismaModel>
  }

  export type EnumRoomPhotoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomPhotoStatus | EnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomPhotoStatus[] | ListEnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomPhotoStatus[] | ListEnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomPhotoStatusFilter<$PrismaModel> | $Enums.RoomPhotoStatus
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomPhotoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoomPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomPhotoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoomPhotoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomPhotoStatus | EnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomPhotoStatus[] | ListEnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomPhotoStatus[] | ListEnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomPhotoStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomPhotoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomPhotoStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomPhotoStatusFilter<$PrismaModel>
  }

  export type EnumRoomJoinRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomJoinRequestStatus | EnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomJoinRequestStatus[] | ListEnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomJoinRequestStatus[] | ListEnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomJoinRequestStatusFilter<$PrismaModel> | $Enums.RoomJoinRequestStatus
  }

  export type RoomJoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomJoinRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type RoomJoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomJoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomJoinRequestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type EnumRoomJoinRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomJoinRequestStatus | EnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomJoinRequestStatus[] | ListEnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomJoinRequestStatus[] | ListEnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomJoinRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomJoinRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomJoinRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomJoinRequestStatusFilter<$PrismaModel>
  }

  export type EnumMessageContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageContentType | EnumMessageContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageContentType[] | ListEnumMessageContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageContentType[] | ListEnumMessageContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageContentTypeFilter<$PrismaModel> | $Enums.MessageContentType
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RoomMemberScalarRelationFilter = {
    is?: RoomMemberWhereInput
    isNot?: RoomMemberWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    memberId?: SortOrder
    text?: SortOrder
    contentType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    memberId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    memberId?: SortOrder
    text?: SortOrder
    contentType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    memberId?: SortOrder
    text?: SortOrder
    contentType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    memberId?: SortOrder
  }

  export type EnumMessageContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageContentType | EnumMessageContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageContentType[] | ListEnumMessageContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageContentType[] | ListEnumMessageContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageContentTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageContentTypeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type RoomPhotoCreateNestedOneWithoutRoomsInput = {
    create?: XOR<RoomPhotoCreateWithoutRoomsInput, RoomPhotoUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomPhotoCreateOrConnectWithoutRoomsInput
    connect?: RoomPhotoWhereUniqueInput
  }

  export type RoomMemberCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomJoinRequestCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomJoinRequestCreateWithoutRoomInput, RoomJoinRequestUncheckedCreateWithoutRoomInput> | RoomJoinRequestCreateWithoutRoomInput[] | RoomJoinRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomJoinRequestCreateOrConnectWithoutRoomInput | RoomJoinRequestCreateOrConnectWithoutRoomInput[]
    createMany?: RoomJoinRequestCreateManyRoomInputEnvelope
    connect?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomJoinRequestUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomJoinRequestCreateWithoutRoomInput, RoomJoinRequestUncheckedCreateWithoutRoomInput> | RoomJoinRequestCreateWithoutRoomInput[] | RoomJoinRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomJoinRequestCreateOrConnectWithoutRoomInput | RoomJoinRequestCreateOrConnectWithoutRoomInput[]
    createMany?: RoomJoinRequestCreateManyRoomInputEnvelope
    connect?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomPhotoUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<RoomPhotoCreateWithoutRoomsInput, RoomPhotoUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomPhotoCreateOrConnectWithoutRoomsInput
    upsert?: RoomPhotoUpsertWithoutRoomsInput
    connect?: RoomPhotoWhereUniqueInput
    update?: XOR<XOR<RoomPhotoUpdateToOneWithWhereWithoutRoomsInput, RoomPhotoUpdateWithoutRoomsInput>, RoomPhotoUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomMemberUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoomInput | RoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoomInput | RoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoomInput | RoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomJoinRequestUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomJoinRequestCreateWithoutRoomInput, RoomJoinRequestUncheckedCreateWithoutRoomInput> | RoomJoinRequestCreateWithoutRoomInput[] | RoomJoinRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomJoinRequestCreateOrConnectWithoutRoomInput | RoomJoinRequestCreateOrConnectWithoutRoomInput[]
    upsert?: RoomJoinRequestUpsertWithWhereUniqueWithoutRoomInput | RoomJoinRequestUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomJoinRequestCreateManyRoomInputEnvelope
    set?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
    disconnect?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
    delete?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
    connect?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
    update?: RoomJoinRequestUpdateWithWhereUniqueWithoutRoomInput | RoomJoinRequestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomJoinRequestUpdateManyWithWhereWithoutRoomInput | RoomJoinRequestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomJoinRequestScalarWhereInput | RoomJoinRequestScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput | MessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRoomInput | MessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRoomInput | MessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoomInput | RoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoomInput | RoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoomInput | RoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomJoinRequestUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomJoinRequestCreateWithoutRoomInput, RoomJoinRequestUncheckedCreateWithoutRoomInput> | RoomJoinRequestCreateWithoutRoomInput[] | RoomJoinRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomJoinRequestCreateOrConnectWithoutRoomInput | RoomJoinRequestCreateOrConnectWithoutRoomInput[]
    upsert?: RoomJoinRequestUpsertWithWhereUniqueWithoutRoomInput | RoomJoinRequestUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomJoinRequestCreateManyRoomInputEnvelope
    set?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
    disconnect?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
    delete?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
    connect?: RoomJoinRequestWhereUniqueInput | RoomJoinRequestWhereUniqueInput[]
    update?: RoomJoinRequestUpdateWithWhereUniqueWithoutRoomInput | RoomJoinRequestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomJoinRequestUpdateManyWithWhereWithoutRoomInput | RoomJoinRequestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomJoinRequestScalarWhereInput | RoomJoinRequestScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput | MessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRoomInput | MessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRoomInput | MessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutMembersInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    connect?: RoomWhereUniqueInput
  }

  export type AvatarCreateNestedOneWithoutMembersInput = {
    create?: XOR<AvatarCreateWithoutMembersInput, AvatarUncheckedCreateWithoutMembersInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutMembersInput
    connect?: AvatarWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutMemberInput = {
    create?: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput> | MessageCreateWithoutMemberInput[] | MessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMemberInput | MessageCreateOrConnectWithoutMemberInput[]
    createMany?: MessageCreateManyMemberInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput> | MessageCreateWithoutMemberInput[] | MessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMemberInput | MessageCreateOrConnectWithoutMemberInput[]
    createMany?: MessageCreateManyMemberInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoomMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.RoomMemberRole
  }

  export type EnumRoomMemberStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomMemberStatus
  }

  export type RoomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    upsert?: RoomUpsertWithoutMembersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMembersInput, RoomUpdateWithoutMembersInput>, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type AvatarUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<AvatarCreateWithoutMembersInput, AvatarUncheckedCreateWithoutMembersInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutMembersInput
    upsert?: AvatarUpsertWithoutMembersInput
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutMembersInput, AvatarUpdateWithoutMembersInput>, AvatarUncheckedUpdateWithoutMembersInput>
  }

  export type MessageUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput> | MessageCreateWithoutMemberInput[] | MessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMemberInput | MessageCreateOrConnectWithoutMemberInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutMemberInput | MessageUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MessageCreateManyMemberInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutMemberInput | MessageUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutMemberInput | MessageUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput> | MessageCreateWithoutMemberInput[] | MessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMemberInput | MessageCreateOrConnectWithoutMemberInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutMemberInput | MessageUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MessageCreateManyMemberInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutMemberInput | MessageUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutMemberInput | MessageUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RoomMemberCreateNestedManyWithoutAvatarInput = {
    create?: XOR<RoomMemberCreateWithoutAvatarInput, RoomMemberUncheckedCreateWithoutAvatarInput> | RoomMemberCreateWithoutAvatarInput[] | RoomMemberUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutAvatarInput | RoomMemberCreateOrConnectWithoutAvatarInput[]
    createMany?: RoomMemberCreateManyAvatarInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutAvatarInput = {
    create?: XOR<RoomMemberCreateWithoutAvatarInput, RoomMemberUncheckedCreateWithoutAvatarInput> | RoomMemberCreateWithoutAvatarInput[] | RoomMemberUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutAvatarInput | RoomMemberCreateOrConnectWithoutAvatarInput[]
    createMany?: RoomMemberCreateManyAvatarInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type EnumAvatarStatusFieldUpdateOperationsInput = {
    set?: $Enums.AvatarStatus
  }

  export type RoomMemberUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<RoomMemberCreateWithoutAvatarInput, RoomMemberUncheckedCreateWithoutAvatarInput> | RoomMemberCreateWithoutAvatarInput[] | RoomMemberUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutAvatarInput | RoomMemberCreateOrConnectWithoutAvatarInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutAvatarInput | RoomMemberUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: RoomMemberCreateManyAvatarInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutAvatarInput | RoomMemberUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutAvatarInput | RoomMemberUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomMemberUncheckedUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<RoomMemberCreateWithoutAvatarInput, RoomMemberUncheckedCreateWithoutAvatarInput> | RoomMemberCreateWithoutAvatarInput[] | RoomMemberUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutAvatarInput | RoomMemberCreateOrConnectWithoutAvatarInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutAvatarInput | RoomMemberUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: RoomMemberCreateManyAvatarInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutAvatarInput | RoomMemberUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutAvatarInput | RoomMemberUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutPhotoInput = {
    create?: XOR<RoomCreateWithoutPhotoInput, RoomUncheckedCreateWithoutPhotoInput> | RoomCreateWithoutPhotoInput[] | RoomUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPhotoInput | RoomCreateOrConnectWithoutPhotoInput[]
    createMany?: RoomCreateManyPhotoInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutPhotoInput = {
    create?: XOR<RoomCreateWithoutPhotoInput, RoomUncheckedCreateWithoutPhotoInput> | RoomCreateWithoutPhotoInput[] | RoomUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPhotoInput | RoomCreateOrConnectWithoutPhotoInput[]
    createMany?: RoomCreateManyPhotoInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type EnumRoomPhotoStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomPhotoStatus
  }

  export type RoomUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<RoomCreateWithoutPhotoInput, RoomUncheckedCreateWithoutPhotoInput> | RoomCreateWithoutPhotoInput[] | RoomUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPhotoInput | RoomCreateOrConnectWithoutPhotoInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPhotoInput | RoomUpsertWithWhereUniqueWithoutPhotoInput[]
    createMany?: RoomCreateManyPhotoInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPhotoInput | RoomUpdateWithWhereUniqueWithoutPhotoInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPhotoInput | RoomUpdateManyWithWhereWithoutPhotoInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<RoomCreateWithoutPhotoInput, RoomUncheckedCreateWithoutPhotoInput> | RoomCreateWithoutPhotoInput[] | RoomUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPhotoInput | RoomCreateOrConnectWithoutPhotoInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPhotoInput | RoomUpsertWithWhereUniqueWithoutPhotoInput[]
    createMany?: RoomCreateManyPhotoInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPhotoInput | RoomUpdateWithWhereUniqueWithoutPhotoInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPhotoInput | RoomUpdateManyWithWhereWithoutPhotoInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<RoomCreateWithoutJoinRequestsInput, RoomUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutJoinRequestsInput
    connect?: RoomWhereUniqueInput
  }

  export type EnumRoomJoinRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomJoinRequestStatus
  }

  export type RoomUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<RoomCreateWithoutJoinRequestsInput, RoomUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutJoinRequestsInput
    upsert?: RoomUpsertWithoutJoinRequestsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutJoinRequestsInput, RoomUpdateWithoutJoinRequestsInput>, RoomUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type RoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomMemberCreateNestedOneWithoutMessagesInput = {
    create?: XOR<RoomMemberCreateWithoutMessagesInput, RoomMemberUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomMemberCreateOrConnectWithoutMessagesInput
    connect?: RoomMemberWhereUniqueInput
  }

  export type EnumMessageContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageContentType
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type RoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    upsert?: RoomUpsertWithoutMessagesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMessagesInput, RoomUpdateWithoutMessagesInput>, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomMemberUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<RoomMemberCreateWithoutMessagesInput, RoomMemberUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomMemberCreateOrConnectWithoutMessagesInput
    upsert?: RoomMemberUpsertWithoutMessagesInput
    connect?: RoomMemberWhereUniqueInput
    update?: XOR<XOR<RoomMemberUpdateToOneWithWhereWithoutMessagesInput, RoomMemberUpdateWithoutMessagesInput>, RoomMemberUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoomMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomMemberRole | EnumRoomMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.RoomMemberRole[] | ListEnumRoomMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomMemberRole[] | ListEnumRoomMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomMemberRoleFilter<$PrismaModel> | $Enums.RoomMemberRole
  }

  export type NestedEnumRoomMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomMemberStatus | EnumRoomMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomMemberStatus[] | ListEnumRoomMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomMemberStatus[] | ListEnumRoomMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomMemberStatusFilter<$PrismaModel> | $Enums.RoomMemberStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoomMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomMemberRole | EnumRoomMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.RoomMemberRole[] | ListEnumRoomMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomMemberRole[] | ListEnumRoomMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.RoomMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumRoomMemberRoleFilter<$PrismaModel>
  }

  export type NestedEnumRoomMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomMemberStatus | EnumRoomMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomMemberStatus[] | ListEnumRoomMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomMemberStatus[] | ListEnumRoomMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomMemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomMemberStatusFilter<$PrismaModel>
  }

  export type NestedEnumAvatarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AvatarStatus | EnumAvatarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AvatarStatus[] | ListEnumAvatarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AvatarStatus[] | ListEnumAvatarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAvatarStatusFilter<$PrismaModel> | $Enums.AvatarStatus
  }

  export type NestedEnumAvatarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AvatarStatus | EnumAvatarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AvatarStatus[] | ListEnumAvatarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AvatarStatus[] | ListEnumAvatarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAvatarStatusWithAggregatesFilter<$PrismaModel> | $Enums.AvatarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAvatarStatusFilter<$PrismaModel>
    _max?: NestedEnumAvatarStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoomPhotoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomPhotoStatus | EnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomPhotoStatus[] | ListEnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomPhotoStatus[] | ListEnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomPhotoStatusFilter<$PrismaModel> | $Enums.RoomPhotoStatus
  }

  export type NestedEnumRoomPhotoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomPhotoStatus | EnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomPhotoStatus[] | ListEnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomPhotoStatus[] | ListEnumRoomPhotoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomPhotoStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomPhotoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomPhotoStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomPhotoStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoomJoinRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomJoinRequestStatus | EnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomJoinRequestStatus[] | ListEnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomJoinRequestStatus[] | ListEnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomJoinRequestStatusFilter<$PrismaModel> | $Enums.RoomJoinRequestStatus
  }

  export type NestedEnumRoomJoinRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomJoinRequestStatus | EnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomJoinRequestStatus[] | ListEnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomJoinRequestStatus[] | ListEnumRoomJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomJoinRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomJoinRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomJoinRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomJoinRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumMessageContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageContentType | EnumMessageContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageContentType[] | ListEnumMessageContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageContentType[] | ListEnumMessageContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageContentTypeFilter<$PrismaModel> | $Enums.MessageContentType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumMessageContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageContentType | EnumMessageContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageContentType[] | ListEnumMessageContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageContentType[] | ListEnumMessageContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageContentTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageContentTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type RoomPhotoCreateWithoutRoomsInput = {
    url: string
    status?: $Enums.RoomPhotoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomPhotoUncheckedCreateWithoutRoomsInput = {
    id?: number
    url: string
    status?: $Enums.RoomPhotoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomPhotoCreateOrConnectWithoutRoomsInput = {
    where: RoomPhotoWhereUniqueInput
    create: XOR<RoomPhotoCreateWithoutRoomsInput, RoomPhotoUncheckedCreateWithoutRoomsInput>
  }

  export type RoomMemberCreateWithoutRoomInput = {
    userId: string
    name?: string | null
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
    avatar: AvatarCreateNestedOneWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutMemberInput
  }

  export type RoomMemberUncheckedCreateWithoutRoomInput = {
    id?: number
    userId: string
    name?: string | null
    avatarId: number
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMemberInput
  }

  export type RoomMemberCreateOrConnectWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type RoomMemberCreateManyRoomInputEnvelope = {
    data: RoomMemberCreateManyRoomInput | RoomMemberCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomJoinRequestCreateWithoutRoomInput = {
    userId: number
    status?: $Enums.RoomJoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomJoinRequestUncheckedCreateWithoutRoomInput = {
    id?: number
    userId: number
    status?: $Enums.RoomJoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomJoinRequestCreateOrConnectWithoutRoomInput = {
    where: RoomJoinRequestWhereUniqueInput
    create: XOR<RoomJoinRequestCreateWithoutRoomInput, RoomJoinRequestUncheckedCreateWithoutRoomInput>
  }

  export type RoomJoinRequestCreateManyRoomInputEnvelope = {
    data: RoomJoinRequestCreateManyRoomInput | RoomJoinRequestCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutRoomInput = {
    text: string
    contentType: $Enums.MessageContentType
    isDeleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    member: RoomMemberCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutRoomInput = {
    id?: number
    memberId: number
    text: string
    contentType: $Enums.MessageContentType
    isDeleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutRoomInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput>
  }

  export type MessageCreateManyRoomInputEnvelope = {
    data: MessageCreateManyRoomInput | MessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomPhotoUpsertWithoutRoomsInput = {
    update: XOR<RoomPhotoUpdateWithoutRoomsInput, RoomPhotoUncheckedUpdateWithoutRoomsInput>
    create: XOR<RoomPhotoCreateWithoutRoomsInput, RoomPhotoUncheckedCreateWithoutRoomsInput>
    where?: RoomPhotoWhereInput
  }

  export type RoomPhotoUpdateToOneWithWhereWithoutRoomsInput = {
    where?: RoomPhotoWhereInput
    data: XOR<RoomPhotoUpdateWithoutRoomsInput, RoomPhotoUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomPhotoUpdateWithoutRoomsInput = {
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomPhotoStatusFieldUpdateOperationsInput | $Enums.RoomPhotoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPhotoUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomPhotoStatusFieldUpdateOperationsInput | $Enums.RoomPhotoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutRoomInput, RoomMemberUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutRoomInput, RoomMemberUncheckedUpdateWithoutRoomInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutRoomInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomMemberScalarWhereInput = {
    AND?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
    OR?: RoomMemberScalarWhereInput[]
    NOT?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
    id?: IntFilter<"RoomMember"> | number
    roomId?: IntFilter<"RoomMember"> | number
    userId?: StringFilter<"RoomMember"> | string
    name?: StringNullableFilter<"RoomMember"> | string | null
    avatarId?: IntFilter<"RoomMember"> | number
    isAnonymous?: BoolFilter<"RoomMember"> | boolean
    role?: EnumRoomMemberRoleFilter<"RoomMember"> | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFilter<"RoomMember"> | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFilter<"RoomMember"> | Date | string
  }

  export type RoomJoinRequestUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomJoinRequestWhereUniqueInput
    update: XOR<RoomJoinRequestUpdateWithoutRoomInput, RoomJoinRequestUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomJoinRequestCreateWithoutRoomInput, RoomJoinRequestUncheckedCreateWithoutRoomInput>
  }

  export type RoomJoinRequestUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomJoinRequestWhereUniqueInput
    data: XOR<RoomJoinRequestUpdateWithoutRoomInput, RoomJoinRequestUncheckedUpdateWithoutRoomInput>
  }

  export type RoomJoinRequestUpdateManyWithWhereWithoutRoomInput = {
    where: RoomJoinRequestScalarWhereInput
    data: XOR<RoomJoinRequestUpdateManyMutationInput, RoomJoinRequestUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomJoinRequestScalarWhereInput = {
    AND?: RoomJoinRequestScalarWhereInput | RoomJoinRequestScalarWhereInput[]
    OR?: RoomJoinRequestScalarWhereInput[]
    NOT?: RoomJoinRequestScalarWhereInput | RoomJoinRequestScalarWhereInput[]
    id?: IntFilter<"RoomJoinRequest"> | number
    userId?: IntFilter<"RoomJoinRequest"> | number
    roomId?: IntFilter<"RoomJoinRequest"> | number
    status?: EnumRoomJoinRequestStatusFilter<"RoomJoinRequest"> | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFilter<"RoomJoinRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RoomJoinRequest"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRoomInput, MessageUncheckedUpdateWithoutRoomInput>
    create: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRoomInput, MessageUncheckedUpdateWithoutRoomInput>
  }

  export type MessageUpdateManyWithWhereWithoutRoomInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    roomId?: IntFilter<"Message"> | number
    memberId?: IntFilter<"Message"> | number
    text?: StringFilter<"Message"> | string
    contentType?: EnumMessageContentTypeFilter<"Message"> | $Enums.MessageContentType
    isDeleted?: BoolNullableFilter<"Message"> | boolean | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type RoomCreateWithoutMembersInput = {
    code: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    photo: RoomPhotoCreateNestedOneWithoutRoomsInput
    joinRequests?: RoomJoinRequestCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMembersInput = {
    id?: number
    code: string
    name: string
    photoId: number
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    joinRequests?: RoomJoinRequestUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMembersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
  }

  export type AvatarCreateWithoutMembersInput = {
    url: string
    status?: $Enums.AvatarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvatarUncheckedCreateWithoutMembersInput = {
    id?: number
    url: string
    status?: $Enums.AvatarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvatarCreateOrConnectWithoutMembersInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutMembersInput, AvatarUncheckedCreateWithoutMembersInput>
  }

  export type MessageCreateWithoutMemberInput = {
    text: string
    contentType: $Enums.MessageContentType
    isDeleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutMemberInput = {
    id?: number
    roomId: number
    text: string
    contentType: $Enums.MessageContentType
    isDeleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutMemberInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput>
  }

  export type MessageCreateManyMemberInputEnvelope = {
    data: MessageCreateManyMemberInput | MessageCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutMembersInput = {
    update: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMembersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type RoomUpdateWithoutMembersInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: RoomPhotoUpdateOneRequiredWithoutRoomsNestedInput
    joinRequests?: RoomJoinRequestUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinRequests?: RoomJoinRequestUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type AvatarUpsertWithoutMembersInput = {
    update: XOR<AvatarUpdateWithoutMembersInput, AvatarUncheckedUpdateWithoutMembersInput>
    create: XOR<AvatarCreateWithoutMembersInput, AvatarUncheckedCreateWithoutMembersInput>
    where?: AvatarWhereInput
  }

  export type AvatarUpdateToOneWithWhereWithoutMembersInput = {
    where?: AvatarWhereInput
    data: XOR<AvatarUpdateWithoutMembersInput, AvatarUncheckedUpdateWithoutMembersInput>
  }

  export type AvatarUpdateWithoutMembersInput = {
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAvatarStatusFieldUpdateOperationsInput | $Enums.AvatarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAvatarStatusFieldUpdateOperationsInput | $Enums.AvatarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutMemberInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutMemberInput, MessageUncheckedUpdateWithoutMemberInput>
    create: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutMemberInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutMemberInput, MessageUncheckedUpdateWithoutMemberInput>
  }

  export type MessageUpdateManyWithWhereWithoutMemberInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMemberInput>
  }

  export type RoomMemberCreateWithoutAvatarInput = {
    userId: string
    name?: string | null
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutMemberInput
  }

  export type RoomMemberUncheckedCreateWithoutAvatarInput = {
    id?: number
    roomId: number
    userId: string
    name?: string | null
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMemberInput
  }

  export type RoomMemberCreateOrConnectWithoutAvatarInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutAvatarInput, RoomMemberUncheckedCreateWithoutAvatarInput>
  }

  export type RoomMemberCreateManyAvatarInputEnvelope = {
    data: RoomMemberCreateManyAvatarInput | RoomMemberCreateManyAvatarInput[]
    skipDuplicates?: boolean
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutAvatarInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutAvatarInput, RoomMemberUncheckedUpdateWithoutAvatarInput>
    create: XOR<RoomMemberCreateWithoutAvatarInput, RoomMemberUncheckedCreateWithoutAvatarInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutAvatarInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutAvatarInput, RoomMemberUncheckedUpdateWithoutAvatarInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutAvatarInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutAvatarInput>
  }

  export type RoomCreateWithoutPhotoInput = {
    code: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    joinRequests?: RoomJoinRequestCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPhotoInput = {
    id?: number
    code: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    joinRequests?: RoomJoinRequestUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPhotoInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPhotoInput, RoomUncheckedCreateWithoutPhotoInput>
  }

  export type RoomCreateManyPhotoInputEnvelope = {
    data: RoomCreateManyPhotoInput | RoomCreateManyPhotoInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutPhotoInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutPhotoInput, RoomUncheckedUpdateWithoutPhotoInput>
    create: XOR<RoomCreateWithoutPhotoInput, RoomUncheckedCreateWithoutPhotoInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutPhotoInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutPhotoInput, RoomUncheckedUpdateWithoutPhotoInput>
  }

  export type RoomUpdateManyWithWhereWithoutPhotoInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutPhotoInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    code?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    photoId?: IntFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type RoomCreateWithoutJoinRequestsInput = {
    code: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    photo: RoomPhotoCreateNestedOneWithoutRoomsInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutJoinRequestsInput = {
    id?: number
    code: string
    name: string
    photoId: number
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutJoinRequestsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutJoinRequestsInput, RoomUncheckedCreateWithoutJoinRequestsInput>
  }

  export type RoomUpsertWithoutJoinRequestsInput = {
    update: XOR<RoomUpdateWithoutJoinRequestsInput, RoomUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<RoomCreateWithoutJoinRequestsInput, RoomUncheckedCreateWithoutJoinRequestsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutJoinRequestsInput, RoomUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type RoomUpdateWithoutJoinRequestsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: RoomPhotoUpdateOneRequiredWithoutRoomsNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutJoinRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutMessagesInput = {
    code: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    photo: RoomPhotoCreateNestedOneWithoutRoomsInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    joinRequests?: RoomJoinRequestCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMessagesInput = {
    id?: number
    code: string
    name: string
    photoId: number
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    joinRequests?: RoomJoinRequestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMessagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
  }

  export type RoomMemberCreateWithoutMessagesInput = {
    userId: string
    name?: string | null
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    avatar: AvatarCreateNestedOneWithoutMembersInput
  }

  export type RoomMemberUncheckedCreateWithoutMessagesInput = {
    id?: number
    roomId: number
    userId: string
    name?: string | null
    avatarId: number
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
  }

  export type RoomMemberCreateOrConnectWithoutMessagesInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutMessagesInput, RoomMemberUncheckedCreateWithoutMessagesInput>
  }

  export type RoomUpsertWithoutMessagesInput = {
    update: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomUpdateWithoutMessagesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: RoomPhotoUpdateOneRequiredWithoutRoomsNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    joinRequests?: RoomJoinRequestUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    joinRequests?: RoomJoinRequestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomMemberUpsertWithoutMessagesInput = {
    update: XOR<RoomMemberUpdateWithoutMessagesInput, RoomMemberUncheckedUpdateWithoutMessagesInput>
    create: XOR<RoomMemberCreateWithoutMessagesInput, RoomMemberUncheckedCreateWithoutMessagesInput>
    where?: RoomMemberWhereInput
  }

  export type RoomMemberUpdateToOneWithWhereWithoutMessagesInput = {
    where?: RoomMemberWhereInput
    data: XOR<RoomMemberUpdateWithoutMessagesInput, RoomMemberUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomMemberUpdateWithoutMessagesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    avatar?: AvatarUpdateOneRequiredWithoutMembersNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: IntFieldUpdateOperationsInput | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateManyRoomInput = {
    id?: number
    userId: string
    name?: string | null
    avatarId: number
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
  }

  export type RoomJoinRequestCreateManyRoomInput = {
    id?: number
    userId: number
    status?: $Enums.RoomJoinRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyRoomInput = {
    id?: number
    memberId: number
    text: string
    contentType: $Enums.MessageContentType
    isDeleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomMemberUpdateWithoutRoomInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: AvatarUpdateOneRequiredWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutMemberNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: IntFieldUpdateOperationsInput | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: IntFieldUpdateOperationsInput | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomJoinRequestUpdateWithoutRoomInput = {
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomJoinRequestStatusFieldUpdateOperationsInput | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomJoinRequestUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomJoinRequestStatusFieldUpdateOperationsInput | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomJoinRequestUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomJoinRequestStatusFieldUpdateOperationsInput | $Enums.RoomJoinRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutRoomInput = {
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: RoomMemberUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyMemberInput = {
    id?: number
    roomId: number
    text: string
    contentType: $Enums.MessageContentType
    isDeleted?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutMemberInput = {
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    contentType?: EnumMessageContentTypeFieldUpdateOperationsInput | $Enums.MessageContentType
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateManyAvatarInput = {
    id?: number
    roomId: number
    userId: string
    name?: string | null
    isAnonymous?: boolean
    role: $Enums.RoomMemberRole
    status?: $Enums.RoomMemberStatus
    joinedAt?: Date | string
  }

  export type RoomMemberUpdateWithoutAvatarInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutMemberNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type RoomMemberUncheckedUpdateManyWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoomMemberRoleFieldUpdateOperationsInput | $Enums.RoomMemberRole
    status?: EnumRoomMemberStatusFieldUpdateOperationsInput | $Enums.RoomMemberStatus
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyPhotoInput = {
    id?: number
    code: string
    name: string
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateWithoutPhotoInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    joinRequests?: RoomJoinRequestUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    joinRequests?: RoomJoinRequestUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutPhotoInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}