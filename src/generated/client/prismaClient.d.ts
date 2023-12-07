
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Accounts
 * 
 */
export type Accounts = $Result.DefaultSelection<Prisma.$AccountsPayload>
/**
 * Model Schema_migrations
 * 
 */
export type Schema_migrations = $Result.DefaultSelection<Prisma.$Schema_migrationsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **Accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.AccountsDelegate<ExtArgs>;

  /**
   * `prisma.schema_migrations`: Exposes CRUD operations for the **Schema_migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schema_migrations
    * const schema_migrations = await prisma.schema_migrations.findMany()
    * ```
    */
  get schema_migrations(): Prisma.Schema_migrationsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Accounts: 'Accounts',
    Schema_migrations: 'Schema_migrations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'accounts' | 'schema_migrations'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Accounts: {
        payload: Prisma.$AccountsPayload<ExtArgs>
        fields: Prisma.AccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findFirst: {
            args: Prisma.AccountsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findMany: {
            args: Prisma.AccountsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          create: {
            args: Prisma.AccountsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          createMany: {
            args: Prisma.AccountsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          update: {
            args: Prisma.AccountsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          deleteMany: {
            args: Prisma.AccountsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.AccountsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      Schema_migrations: {
        payload: Prisma.$Schema_migrationsPayload<ExtArgs>
        fields: Prisma.Schema_migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Schema_migrationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Schema_migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Schema_migrationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Schema_migrationsPayload>
          }
          findFirst: {
            args: Prisma.Schema_migrationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Schema_migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Schema_migrationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Schema_migrationsPayload>
          }
          findMany: {
            args: Prisma.Schema_migrationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Schema_migrationsPayload>[]
          }
          create: {
            args: Prisma.Schema_migrationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Schema_migrationsPayload>
          }
          createMany: {
            args: Prisma.Schema_migrationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Schema_migrationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Schema_migrationsPayload>
          }
          update: {
            args: Prisma.Schema_migrationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Schema_migrationsPayload>
          }
          deleteMany: {
            args: Prisma.Schema_migrationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Schema_migrationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Schema_migrationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Schema_migrationsPayload>
          }
          aggregate: {
            args: Prisma.Schema_migrationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSchema_migrations>
          }
          groupBy: {
            args: Prisma.Schema_migrationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Schema_migrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Schema_migrationsCountArgs<ExtArgs>,
            result: $Utils.Optional<Schema_migrationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model Accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to aggregate.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithAggregationInput | AccountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: AccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: string
    email: string
    created_at: Date
    updated_at: Date
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type AccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectScalar = {
    id?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $AccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accounts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * @zod.string.uuid()
       */
      id: string
      email: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }


  type AccountsGetPayload<S extends boolean | null | undefined | AccountsDefaultArgs> = $Result.GetResult<Prisma.$AccountsPayload, S>

  type AccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface AccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accounts'], meta: { name: 'Accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {AccountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Accounts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsFindFirstArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Accounts.
     * @param {AccountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
    **/
    create<T extends AccountsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsCreateArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountsCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const accounts = await prisma.accounts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accounts.
     * @param {AccountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
    **/
    delete<T extends AccountsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsDeleteArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Accounts.
     * @param {AccountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsUpdateArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {AccountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
    **/
    upsert<T extends AccountsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsUpsertArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountsCountArgs>(
      args?: Subset<T, AccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
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
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accounts model
   */
  readonly fields: AccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Accounts model
   */ 
  interface AccountsFieldRefs {
    readonly id: FieldRef<"Accounts", 'String'>
    readonly email: FieldRef<"Accounts", 'String'>
    readonly created_at: FieldRef<"Accounts", 'DateTime'>
    readonly updated_at: FieldRef<"Accounts", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Accounts findUnique
   */
  export type AccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }


  /**
   * Accounts findUniqueOrThrow
   */
  export type AccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }


  /**
   * Accounts findFirst
   */
  export type AccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }


  /**
   * Accounts findFirstOrThrow
   */
  export type AccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }


  /**
   * Accounts findMany
   */
  export type AccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }


  /**
   * Accounts create
   */
  export type AccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * The data needed to create a Accounts.
     */
    data: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
  }


  /**
   * Accounts createMany
   */
  export type AccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Accounts update
   */
  export type AccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * The data needed to update a Accounts.
     */
    data: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
    /**
     * Choose, which Accounts to update.
     */
    where: AccountsWhereUniqueInput
  }


  /**
   * Accounts updateMany
   */
  export type AccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
  }


  /**
   * Accounts upsert
   */
  export type AccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * The filter to search for the Accounts to update in case it exists.
     */
    where: AccountsWhereUniqueInput
    /**
     * In case the Accounts found by the `where` argument doesn't exist, create a new Accounts with this data.
     */
    create: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
    /**
     * In case the Accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
  }


  /**
   * Accounts delete
   */
  export type AccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Filter which Accounts to delete.
     */
    where: AccountsWhereUniqueInput
  }


  /**
   * Accounts deleteMany
   */
  export type AccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountsWhereInput
  }


  /**
   * Accounts without action
   */
  export type AccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
  }



  /**
   * Model Schema_migrations
   */

  export type AggregateSchema_migrations = {
    _count: Schema_migrationsCountAggregateOutputType | null
    _avg: Schema_migrationsAvgAggregateOutputType | null
    _sum: Schema_migrationsSumAggregateOutputType | null
    _min: Schema_migrationsMinAggregateOutputType | null
    _max: Schema_migrationsMaxAggregateOutputType | null
  }

  export type Schema_migrationsAvgAggregateOutputType = {
    version: number | null
  }

  export type Schema_migrationsSumAggregateOutputType = {
    version: bigint | null
  }

  export type Schema_migrationsMinAggregateOutputType = {
    version: bigint | null
    inserted_at: Date | null
  }

  export type Schema_migrationsMaxAggregateOutputType = {
    version: bigint | null
    inserted_at: Date | null
  }

  export type Schema_migrationsCountAggregateOutputType = {
    version: number
    inserted_at: number
    _all: number
  }


  export type Schema_migrationsAvgAggregateInputType = {
    version?: true
  }

  export type Schema_migrationsSumAggregateInputType = {
    version?: true
  }

  export type Schema_migrationsMinAggregateInputType = {
    version?: true
    inserted_at?: true
  }

  export type Schema_migrationsMaxAggregateInputType = {
    version?: true
    inserted_at?: true
  }

  export type Schema_migrationsCountAggregateInputType = {
    version?: true
    inserted_at?: true
    _all?: true
  }

  export type Schema_migrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schema_migrations to aggregate.
     */
    where?: Schema_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schema_migrations to fetch.
     */
    orderBy?: Schema_migrationsOrderByWithRelationInput | Schema_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Schema_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schema_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schema_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schema_migrations
    **/
    _count?: true | Schema_migrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Schema_migrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Schema_migrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Schema_migrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Schema_migrationsMaxAggregateInputType
  }

  export type GetSchema_migrationsAggregateType<T extends Schema_migrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchema_migrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchema_migrations[P]>
      : GetScalarType<T[P], AggregateSchema_migrations[P]>
  }




  export type Schema_migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schema_migrationsWhereInput
    orderBy?: Schema_migrationsOrderByWithAggregationInput | Schema_migrationsOrderByWithAggregationInput[]
    by: Schema_migrationsScalarFieldEnum[] | Schema_migrationsScalarFieldEnum
    having?: Schema_migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Schema_migrationsCountAggregateInputType | true
    _avg?: Schema_migrationsAvgAggregateInputType
    _sum?: Schema_migrationsSumAggregateInputType
    _min?: Schema_migrationsMinAggregateInputType
    _max?: Schema_migrationsMaxAggregateInputType
  }

  export type Schema_migrationsGroupByOutputType = {
    version: bigint
    inserted_at: Date | null
    _count: Schema_migrationsCountAggregateOutputType | null
    _avg: Schema_migrationsAvgAggregateOutputType | null
    _sum: Schema_migrationsSumAggregateOutputType | null
    _min: Schema_migrationsMinAggregateOutputType | null
    _max: Schema_migrationsMaxAggregateOutputType | null
  }

  type GetSchema_migrationsGroupByPayload<T extends Schema_migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Schema_migrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Schema_migrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Schema_migrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Schema_migrationsGroupByOutputType[P]>
        }
      >
    >


  export type Schema_migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    inserted_at?: boolean
  }, ExtArgs["result"]["schema_migrations"]>

  export type Schema_migrationsSelectScalar = {
    version?: boolean
    inserted_at?: boolean
  }


  export type $Schema_migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schema_migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      version: bigint
      inserted_at: Date | null
    }, ExtArgs["result"]["schema_migrations"]>
    composites: {}
  }


  type Schema_migrationsGetPayload<S extends boolean | null | undefined | Schema_migrationsDefaultArgs> = $Result.GetResult<Prisma.$Schema_migrationsPayload, S>

  type Schema_migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Schema_migrationsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Schema_migrationsCountAggregateInputType | true
    }

  export interface Schema_migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schema_migrations'], meta: { name: 'Schema_migrations' } }
    /**
     * Find zero or one Schema_migrations that matches the filter.
     * @param {Schema_migrationsFindUniqueArgs} args - Arguments to find a Schema_migrations
     * @example
     * // Get one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Schema_migrationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Schema_migrationsFindUniqueArgs<ExtArgs>>
    ): Prisma__Schema_migrationsClient<$Result.GetResult<Prisma.$Schema_migrationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Schema_migrations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Schema_migrationsFindUniqueOrThrowArgs} args - Arguments to find a Schema_migrations
     * @example
     * // Get one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Schema_migrationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Schema_migrationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Schema_migrationsClient<$Result.GetResult<Prisma.$Schema_migrationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Schema_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schema_migrationsFindFirstArgs} args - Arguments to find a Schema_migrations
     * @example
     * // Get one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Schema_migrationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Schema_migrationsFindFirstArgs<ExtArgs>>
    ): Prisma__Schema_migrationsClient<$Result.GetResult<Prisma.$Schema_migrationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Schema_migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schema_migrationsFindFirstOrThrowArgs} args - Arguments to find a Schema_migrations
     * @example
     * // Get one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Schema_migrationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Schema_migrationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Schema_migrationsClient<$Result.GetResult<Prisma.$Schema_migrationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Schema_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schema_migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findMany()
     * 
     * // Get first 10 Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findMany({ take: 10 })
     * 
     * // Only select the `version`
     * const schema_migrationsWithVersionOnly = await prisma.schema_migrations.findMany({ select: { version: true } })
     * 
    **/
    findMany<T extends Schema_migrationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Schema_migrationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schema_migrationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Schema_migrations.
     * @param {Schema_migrationsCreateArgs} args - Arguments to create a Schema_migrations.
     * @example
     * // Create one Schema_migrations
     * const Schema_migrations = await prisma.schema_migrations.create({
     *   data: {
     *     // ... data to create a Schema_migrations
     *   }
     * })
     * 
    **/
    create<T extends Schema_migrationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Schema_migrationsCreateArgs<ExtArgs>>
    ): Prisma__Schema_migrationsClient<$Result.GetResult<Prisma.$Schema_migrationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Schema_migrations.
     *     @param {Schema_migrationsCreateManyArgs} args - Arguments to create many Schema_migrations.
     *     @example
     *     // Create many Schema_migrations
     *     const schema_migrations = await prisma.schema_migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Schema_migrationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Schema_migrationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schema_migrations.
     * @param {Schema_migrationsDeleteArgs} args - Arguments to delete one Schema_migrations.
     * @example
     * // Delete one Schema_migrations
     * const Schema_migrations = await prisma.schema_migrations.delete({
     *   where: {
     *     // ... filter to delete one Schema_migrations
     *   }
     * })
     * 
    **/
    delete<T extends Schema_migrationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Schema_migrationsDeleteArgs<ExtArgs>>
    ): Prisma__Schema_migrationsClient<$Result.GetResult<Prisma.$Schema_migrationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Schema_migrations.
     * @param {Schema_migrationsUpdateArgs} args - Arguments to update one Schema_migrations.
     * @example
     * // Update one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Schema_migrationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Schema_migrationsUpdateArgs<ExtArgs>>
    ): Prisma__Schema_migrationsClient<$Result.GetResult<Prisma.$Schema_migrationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Schema_migrations.
     * @param {Schema_migrationsDeleteManyArgs} args - Arguments to filter Schema_migrations to delete.
     * @example
     * // Delete a few Schema_migrations
     * const { count } = await prisma.schema_migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Schema_migrationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Schema_migrationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schema_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schema_migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Schema_migrationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Schema_migrationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schema_migrations.
     * @param {Schema_migrationsUpsertArgs} args - Arguments to update or create a Schema_migrations.
     * @example
     * // Update or create a Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.upsert({
     *   create: {
     *     // ... data to create a Schema_migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schema_migrations we want to update
     *   }
     * })
    **/
    upsert<T extends Schema_migrationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Schema_migrationsUpsertArgs<ExtArgs>>
    ): Prisma__Schema_migrationsClient<$Result.GetResult<Prisma.$Schema_migrationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Schema_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schema_migrationsCountArgs} args - Arguments to filter Schema_migrations to count.
     * @example
     * // Count the number of Schema_migrations
     * const count = await prisma.schema_migrations.count({
     *   where: {
     *     // ... the filter for the Schema_migrations we want to count
     *   }
     * })
    **/
    count<T extends Schema_migrationsCountArgs>(
      args?: Subset<T, Schema_migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Schema_migrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schema_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schema_migrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Schema_migrationsAggregateArgs>(args: Subset<T, Schema_migrationsAggregateArgs>): Prisma.PrismaPromise<GetSchema_migrationsAggregateType<T>>

    /**
     * Group by Schema_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schema_migrationsGroupByArgs} args - Group by arguments.
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
      T extends Schema_migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Schema_migrationsGroupByArgs['orderBy'] }
        : { orderBy?: Schema_migrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Schema_migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchema_migrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schema_migrations model
   */
  readonly fields: Schema_migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schema_migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Schema_migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Schema_migrations model
   */ 
  interface Schema_migrationsFieldRefs {
    readonly version: FieldRef<"Schema_migrations", 'BigInt'>
    readonly inserted_at: FieldRef<"Schema_migrations", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Schema_migrations findUnique
   */
  export type Schema_migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
    /**
     * Filter, which Schema_migrations to fetch.
     */
    where: Schema_migrationsWhereUniqueInput
  }


  /**
   * Schema_migrations findUniqueOrThrow
   */
  export type Schema_migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
    /**
     * Filter, which Schema_migrations to fetch.
     */
    where: Schema_migrationsWhereUniqueInput
  }


  /**
   * Schema_migrations findFirst
   */
  export type Schema_migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
    /**
     * Filter, which Schema_migrations to fetch.
     */
    where?: Schema_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schema_migrations to fetch.
     */
    orderBy?: Schema_migrationsOrderByWithRelationInput | Schema_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schema_migrations.
     */
    cursor?: Schema_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schema_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schema_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schema_migrations.
     */
    distinct?: Schema_migrationsScalarFieldEnum | Schema_migrationsScalarFieldEnum[]
  }


  /**
   * Schema_migrations findFirstOrThrow
   */
  export type Schema_migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
    /**
     * Filter, which Schema_migrations to fetch.
     */
    where?: Schema_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schema_migrations to fetch.
     */
    orderBy?: Schema_migrationsOrderByWithRelationInput | Schema_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schema_migrations.
     */
    cursor?: Schema_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schema_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schema_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schema_migrations.
     */
    distinct?: Schema_migrationsScalarFieldEnum | Schema_migrationsScalarFieldEnum[]
  }


  /**
   * Schema_migrations findMany
   */
  export type Schema_migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
    /**
     * Filter, which Schema_migrations to fetch.
     */
    where?: Schema_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schema_migrations to fetch.
     */
    orderBy?: Schema_migrationsOrderByWithRelationInput | Schema_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schema_migrations.
     */
    cursor?: Schema_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schema_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schema_migrations.
     */
    skip?: number
    distinct?: Schema_migrationsScalarFieldEnum | Schema_migrationsScalarFieldEnum[]
  }


  /**
   * Schema_migrations create
   */
  export type Schema_migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
    /**
     * The data needed to create a Schema_migrations.
     */
    data: XOR<Schema_migrationsCreateInput, Schema_migrationsUncheckedCreateInput>
  }


  /**
   * Schema_migrations createMany
   */
  export type Schema_migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schema_migrations.
     */
    data: Schema_migrationsCreateManyInput | Schema_migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Schema_migrations update
   */
  export type Schema_migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
    /**
     * The data needed to update a Schema_migrations.
     */
    data: XOR<Schema_migrationsUpdateInput, Schema_migrationsUncheckedUpdateInput>
    /**
     * Choose, which Schema_migrations to update.
     */
    where: Schema_migrationsWhereUniqueInput
  }


  /**
   * Schema_migrations updateMany
   */
  export type Schema_migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schema_migrations.
     */
    data: XOR<Schema_migrationsUpdateManyMutationInput, Schema_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which Schema_migrations to update
     */
    where?: Schema_migrationsWhereInput
  }


  /**
   * Schema_migrations upsert
   */
  export type Schema_migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
    /**
     * The filter to search for the Schema_migrations to update in case it exists.
     */
    where: Schema_migrationsWhereUniqueInput
    /**
     * In case the Schema_migrations found by the `where` argument doesn't exist, create a new Schema_migrations with this data.
     */
    create: XOR<Schema_migrationsCreateInput, Schema_migrationsUncheckedCreateInput>
    /**
     * In case the Schema_migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Schema_migrationsUpdateInput, Schema_migrationsUncheckedUpdateInput>
  }


  /**
   * Schema_migrations delete
   */
  export type Schema_migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
    /**
     * Filter which Schema_migrations to delete.
     */
    where: Schema_migrationsWhereUniqueInput
  }


  /**
   * Schema_migrations deleteMany
   */
  export type Schema_migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schema_migrations to delete
     */
    where?: Schema_migrationsWhereInput
  }


  /**
   * Schema_migrations without action
   */
  export type Schema_migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schema_migrations
     */
    select?: Schema_migrationsSelect<ExtArgs> | null
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


  export const AccountsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const Schema_migrationsScalarFieldEnum: {
    version: 'version',
    inserted_at: 'inserted_at'
  };

  export type Schema_migrationsScalarFieldEnum = (typeof Schema_migrationsScalarFieldEnum)[keyof typeof Schema_migrationsScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type AccountsWhereInput = {
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    id?: UuidFilter<"Accounts"> | string
    email?: StringFilter<"Accounts"> | string
    created_at?: DateTimeFilter<"Accounts"> | Date | string
    updated_at?: DateTimeFilter<"Accounts"> | Date | string
  }

  export type AccountsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    email?: StringFilter<"Accounts"> | string
    created_at?: DateTimeFilter<"Accounts"> | Date | string
    updated_at?: DateTimeFilter<"Accounts"> | Date | string
  }, "id">

  export type AccountsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
  }

  export type AccountsScalarWhereWithAggregatesInput = {
    AND?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    OR?: AccountsScalarWhereWithAggregatesInput[]
    NOT?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Accounts"> | string
    email?: StringWithAggregatesFilter<"Accounts"> | string
    created_at?: DateTimeWithAggregatesFilter<"Accounts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Accounts"> | Date | string
  }

  export type Schema_migrationsWhereInput = {
    AND?: Schema_migrationsWhereInput | Schema_migrationsWhereInput[]
    OR?: Schema_migrationsWhereInput[]
    NOT?: Schema_migrationsWhereInput | Schema_migrationsWhereInput[]
    version?: BigIntFilter<"Schema_migrations"> | bigint | number
    inserted_at?: DateTimeNullableFilter<"Schema_migrations"> | Date | string | null
  }

  export type Schema_migrationsOrderByWithRelationInput = {
    version?: SortOrder
    inserted_at?: SortOrderInput | SortOrder
  }

  export type Schema_migrationsWhereUniqueInput = Prisma.AtLeast<{
    version?: bigint | number
    AND?: Schema_migrationsWhereInput | Schema_migrationsWhereInput[]
    OR?: Schema_migrationsWhereInput[]
    NOT?: Schema_migrationsWhereInput | Schema_migrationsWhereInput[]
    inserted_at?: DateTimeNullableFilter<"Schema_migrations"> | Date | string | null
  }, "version">

  export type Schema_migrationsOrderByWithAggregationInput = {
    version?: SortOrder
    inserted_at?: SortOrderInput | SortOrder
    _count?: Schema_migrationsCountOrderByAggregateInput
    _avg?: Schema_migrationsAvgOrderByAggregateInput
    _max?: Schema_migrationsMaxOrderByAggregateInput
    _min?: Schema_migrationsMinOrderByAggregateInput
    _sum?: Schema_migrationsSumOrderByAggregateInput
  }

  export type Schema_migrationsScalarWhereWithAggregatesInput = {
    AND?: Schema_migrationsScalarWhereWithAggregatesInput | Schema_migrationsScalarWhereWithAggregatesInput[]
    OR?: Schema_migrationsScalarWhereWithAggregatesInput[]
    NOT?: Schema_migrationsScalarWhereWithAggregatesInput | Schema_migrationsScalarWhereWithAggregatesInput[]
    version?: BigIntWithAggregatesFilter<"Schema_migrations"> | bigint | number
    inserted_at?: DateTimeNullableWithAggregatesFilter<"Schema_migrations"> | Date | string | null
  }

  export type AccountsCreateInput = {
    id: string
    email: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type AccountsUncheckedCreateInput = {
    id: string
    email: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type AccountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsCreateManyInput = {
    id: string
    email: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type AccountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schema_migrationsCreateInput = {
    version: bigint | number
    inserted_at?: Date | string | null
  }

  export type Schema_migrationsUncheckedCreateInput = {
    version: bigint | number
    inserted_at?: Date | string | null
  }

  export type Schema_migrationsUpdateInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    inserted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Schema_migrationsUncheckedUpdateInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    inserted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Schema_migrationsCreateManyInput = {
    version: bigint | number
    inserted_at?: Date | string | null
  }

  export type Schema_migrationsUpdateManyMutationInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    inserted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Schema_migrationsUncheckedUpdateManyInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    inserted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type AccountsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccountsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Schema_migrationsCountOrderByAggregateInput = {
    version?: SortOrder
    inserted_at?: SortOrder
  }

  export type Schema_migrationsAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type Schema_migrationsMaxOrderByAggregateInput = {
    version?: SortOrder
    inserted_at?: SortOrder
  }

  export type Schema_migrationsMinOrderByAggregateInput = {
    version?: SortOrder
    inserted_at?: SortOrder
  }

  export type Schema_migrationsSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountsDefaultArgs instead
     */
    export type AccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Schema_migrationsDefaultArgs instead
     */
    export type Schema_migrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Schema_migrationsDefaultArgs<ExtArgs>

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