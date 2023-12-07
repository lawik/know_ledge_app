import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AccountsScalarFieldEnumSchema = z.enum(['id','email','created_at','updated_at']);

export const Schema_migrationsScalarFieldEnumSchema = z.enum(['version','inserted_at']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ACCOUNTS SCHEMA
/////////////////////////////////////////

export const AccountsSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Accounts = z.infer<typeof AccountsSchema>

/////////////////////////////////////////
// SCHEMA MIGRATIONS SCHEMA
/////////////////////////////////////////

export const Schema_migrationsSchema = z.object({
  version: z.bigint(),
  inserted_at: z.coerce.date().nullable(),
})

export type Schema_migrations = z.infer<typeof Schema_migrationsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACCOUNTS
//------------------------------------------------------

export const AccountsSelectSchema: z.ZodType<Prisma.AccountsSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict()

// SCHEMA MIGRATIONS
//------------------------------------------------------

export const Schema_migrationsSelectSchema: z.ZodType<Prisma.Schema_migrationsSelect> = z.object({
  version: z.boolean().optional(),
  inserted_at: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AccountsWhereInputSchema: z.ZodType<Prisma.AccountsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountsOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountsWhereUniqueInputSchema: z.ZodType<Prisma.AccountsWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const AccountsOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountsMinOrderByAggregateInputSchema).optional()
}).strict();

export const AccountsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const Schema_migrationsWhereInputSchema: z.ZodType<Prisma.Schema_migrationsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Schema_migrationsWhereInputSchema),z.lazy(() => Schema_migrationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Schema_migrationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Schema_migrationsWhereInputSchema),z.lazy(() => Schema_migrationsWhereInputSchema).array() ]).optional(),
  version: z.union([ z.lazy(() => BigIntFilterSchema),z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]) ]).optional(),
  inserted_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const Schema_migrationsOrderByWithRelationInputSchema: z.ZodType<Prisma.Schema_migrationsOrderByWithRelationInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional(),
  inserted_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const Schema_migrationsWhereUniqueInputSchema: z.ZodType<Prisma.Schema_migrationsWhereUniqueInput> = z.object({
  version: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ])
})
.and(z.object({
  version: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]).optional(),
  AND: z.union([ z.lazy(() => Schema_migrationsWhereInputSchema),z.lazy(() => Schema_migrationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Schema_migrationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Schema_migrationsWhereInputSchema),z.lazy(() => Schema_migrationsWhereInputSchema).array() ]).optional(),
  inserted_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const Schema_migrationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Schema_migrationsOrderByWithAggregationInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional(),
  inserted_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => Schema_migrationsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Schema_migrationsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Schema_migrationsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Schema_migrationsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Schema_migrationsSumOrderByAggregateInputSchema).optional()
}).strict();

export const Schema_migrationsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Schema_migrationsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Schema_migrationsScalarWhereWithAggregatesInputSchema),z.lazy(() => Schema_migrationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Schema_migrationsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Schema_migrationsScalarWhereWithAggregatesInputSchema),z.lazy(() => Schema_migrationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  version: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]) ]).optional(),
  inserted_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const AccountsCreateInputSchema: z.ZodType<Prisma.AccountsCreateInput> = z.object({
  id: z.string().uuid(),
  email: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const AccountsUncheckedCreateInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  email: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const AccountsUpdateInputSchema: z.ZodType<Prisma.AccountsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountsUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountsCreateManyInputSchema: z.ZodType<Prisma.AccountsCreateManyInput> = z.object({
  id: z.string().uuid(),
  email: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const AccountsUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Schema_migrationsCreateInputSchema: z.ZodType<Prisma.Schema_migrationsCreateInput> = z.object({
  version: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),
  inserted_at: z.coerce.date().optional().nullable()
}).strict();

export const Schema_migrationsUncheckedCreateInputSchema: z.ZodType<Prisma.Schema_migrationsUncheckedCreateInput> = z.object({
  version: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),
  inserted_at: z.coerce.date().optional().nullable()
}).strict();

export const Schema_migrationsUpdateInputSchema: z.ZodType<Prisma.Schema_migrationsUpdateInput> = z.object({
  version: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  inserted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Schema_migrationsUncheckedUpdateInputSchema: z.ZodType<Prisma.Schema_migrationsUncheckedUpdateInput> = z.object({
  version: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  inserted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Schema_migrationsCreateManyInputSchema: z.ZodType<Prisma.Schema_migrationsCreateManyInput> = z.object({
  version: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),
  inserted_at: z.coerce.date().optional().nullable()
}).strict();

export const Schema_migrationsUpdateManyMutationInputSchema: z.ZodType<Prisma.Schema_migrationsUpdateManyMutationInput> = z.object({
  version: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  inserted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Schema_migrationsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Schema_migrationsUncheckedUpdateManyInput> = z.object({
  version: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  inserted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  in: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const AccountsCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountsMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  in: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  in: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n).array(), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt).array() ]),z.lazy(() => ListBigIntFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n).array(), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt).array() ]),z.lazy(() => ListBigIntFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional().nullable(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const Schema_migrationsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Schema_migrationsCountOrderByAggregateInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional(),
  inserted_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Schema_migrationsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.Schema_migrationsAvgOrderByAggregateInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Schema_migrationsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Schema_migrationsMaxOrderByAggregateInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional(),
  inserted_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Schema_migrationsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Schema_migrationsMinOrderByAggregateInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional(),
  inserted_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Schema_migrationsSumOrderByAggregateInputSchema: z.ZodType<Prisma.Schema_migrationsSumOrderByAggregateInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  in: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n).array(), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt).array() ]),z.lazy(() => ListBigIntFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n).array(), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt).array() ]),z.lazy(() => ListBigIntFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional().nullable(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]).optional(),
  increment: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]).optional(),
  decrement: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]).optional(),
  multiply: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]).optional(),
  divide: z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]).optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  in: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  in: z.union([ z.number().array(),z.lazy(() => ListIntFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.number().array(),z.lazy(() => ListIntFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  in: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.string().array(),z.lazy(() => ListStringFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  contains: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  startsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  endsWith: z.union([ z.string(),z.lazy(() => StringFieldRefInputSchema) ]).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  in: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  in: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n).array(), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt).array() ]),z.lazy(() => ListBigIntFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n).array(), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt).array() ]),z.lazy(() => ListBigIntFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional().nullable(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  in: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n).array(), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt).array() ]),z.lazy(() => ListBigIntFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n).array(), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt).array() ]),z.lazy(() => ListBigIntFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => BigIntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.union([ z.bigint().gte(-9223372036854775808n).lte(9223372036854775807n), z.number().int().gte(Number.MIN_SAFE_INTEGER).lte(Number.MAX_SAFE_INTEGER).transform(BigInt) ]),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  in: z.union([ z.number().array(),z.lazy(() => ListFloatFieldRefInputSchema) ]).optional(),
  notIn: z.union([ z.number().array(),z.lazy(() => ListFloatFieldRefInputSchema) ]).optional(),
  lt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => FloatFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.lazy(() => ListDateTimeFieldRefInputSchema) ]).optional().nullable(),
  lt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldRefInputSchema) ]).optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional().nullable(),
  in: z.union([ z.number().array(),z.lazy(() => ListIntFieldRefInputSchema) ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.lazy(() => ListIntFieldRefInputSchema) ]).optional().nullable(),
  lt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  lte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gt: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  gte: z.union([ z.number(),z.lazy(() => IntFieldRefInputSchema) ]).optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AccountsFindFirstArgsSchema: z.ZodType<Prisma.AccountsFindFirstArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountsScalarFieldEnumSchema,AccountsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AccountsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountsFindFirstOrThrowArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountsScalarFieldEnumSchema,AccountsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AccountsFindManyArgsSchema: z.ZodType<Prisma.AccountsFindManyArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountsScalarFieldEnumSchema,AccountsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AccountsAggregateArgsSchema: z.ZodType<Prisma.AccountsAggregateArgs> = z.object({
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountsGroupByArgsSchema: z.ZodType<Prisma.AccountsGroupByArgs> = z.object({
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithAggregationInputSchema.array(),AccountsOrderByWithAggregationInputSchema ]).optional(),
  by: AccountsScalarFieldEnumSchema.array(),
  having: AccountsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountsFindUniqueArgsSchema: z.ZodType<Prisma.AccountsFindUniqueArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
}).strict()

export const AccountsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountsFindUniqueOrThrowArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
}).strict()

export const Schema_migrationsFindFirstArgsSchema: z.ZodType<Prisma.Schema_migrationsFindFirstArgs> = z.object({
  select: Schema_migrationsSelectSchema.optional(),
  where: Schema_migrationsWhereInputSchema.optional(),
  orderBy: z.union([ Schema_migrationsOrderByWithRelationInputSchema.array(),Schema_migrationsOrderByWithRelationInputSchema ]).optional(),
  cursor: Schema_migrationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Schema_migrationsScalarFieldEnumSchema,Schema_migrationsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const Schema_migrationsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Schema_migrationsFindFirstOrThrowArgs> = z.object({
  select: Schema_migrationsSelectSchema.optional(),
  where: Schema_migrationsWhereInputSchema.optional(),
  orderBy: z.union([ Schema_migrationsOrderByWithRelationInputSchema.array(),Schema_migrationsOrderByWithRelationInputSchema ]).optional(),
  cursor: Schema_migrationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Schema_migrationsScalarFieldEnumSchema,Schema_migrationsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const Schema_migrationsFindManyArgsSchema: z.ZodType<Prisma.Schema_migrationsFindManyArgs> = z.object({
  select: Schema_migrationsSelectSchema.optional(),
  where: Schema_migrationsWhereInputSchema.optional(),
  orderBy: z.union([ Schema_migrationsOrderByWithRelationInputSchema.array(),Schema_migrationsOrderByWithRelationInputSchema ]).optional(),
  cursor: Schema_migrationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Schema_migrationsScalarFieldEnumSchema,Schema_migrationsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const Schema_migrationsAggregateArgsSchema: z.ZodType<Prisma.Schema_migrationsAggregateArgs> = z.object({
  where: Schema_migrationsWhereInputSchema.optional(),
  orderBy: z.union([ Schema_migrationsOrderByWithRelationInputSchema.array(),Schema_migrationsOrderByWithRelationInputSchema ]).optional(),
  cursor: Schema_migrationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Schema_migrationsGroupByArgsSchema: z.ZodType<Prisma.Schema_migrationsGroupByArgs> = z.object({
  where: Schema_migrationsWhereInputSchema.optional(),
  orderBy: z.union([ Schema_migrationsOrderByWithAggregationInputSchema.array(),Schema_migrationsOrderByWithAggregationInputSchema ]).optional(),
  by: Schema_migrationsScalarFieldEnumSchema.array(),
  having: Schema_migrationsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Schema_migrationsFindUniqueArgsSchema: z.ZodType<Prisma.Schema_migrationsFindUniqueArgs> = z.object({
  select: Schema_migrationsSelectSchema.optional(),
  where: Schema_migrationsWhereUniqueInputSchema,
}).strict()

export const Schema_migrationsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Schema_migrationsFindUniqueOrThrowArgs> = z.object({
  select: Schema_migrationsSelectSchema.optional(),
  where: Schema_migrationsWhereUniqueInputSchema,
}).strict()

export const AccountsCreateArgsSchema: z.ZodType<Prisma.AccountsCreateArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  data: z.union([ AccountsCreateInputSchema,AccountsUncheckedCreateInputSchema ]),
}).strict()

export const AccountsUpsertArgsSchema: z.ZodType<Prisma.AccountsUpsertArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
  create: z.union([ AccountsCreateInputSchema,AccountsUncheckedCreateInputSchema ]),
  update: z.union([ AccountsUpdateInputSchema,AccountsUncheckedUpdateInputSchema ]),
}).strict()

export const AccountsCreateManyArgsSchema: z.ZodType<Prisma.AccountsCreateManyArgs> = z.object({
  data: z.union([ AccountsCreateManyInputSchema,AccountsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AccountsDeleteArgsSchema: z.ZodType<Prisma.AccountsDeleteArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
}).strict()

export const AccountsUpdateArgsSchema: z.ZodType<Prisma.AccountsUpdateArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  data: z.union([ AccountsUpdateInputSchema,AccountsUncheckedUpdateInputSchema ]),
  where: AccountsWhereUniqueInputSchema,
}).strict()

export const AccountsUpdateManyArgsSchema: z.ZodType<Prisma.AccountsUpdateManyArgs> = z.object({
  data: z.union([ AccountsUpdateManyMutationInputSchema,AccountsUncheckedUpdateManyInputSchema ]),
  where: AccountsWhereInputSchema.optional(),
}).strict()

export const AccountsDeleteManyArgsSchema: z.ZodType<Prisma.AccountsDeleteManyArgs> = z.object({
  where: AccountsWhereInputSchema.optional(),
}).strict()

export const Schema_migrationsCreateArgsSchema: z.ZodType<Prisma.Schema_migrationsCreateArgs> = z.object({
  select: Schema_migrationsSelectSchema.optional(),
  data: z.union([ Schema_migrationsCreateInputSchema,Schema_migrationsUncheckedCreateInputSchema ]),
}).strict()

export const Schema_migrationsUpsertArgsSchema: z.ZodType<Prisma.Schema_migrationsUpsertArgs> = z.object({
  select: Schema_migrationsSelectSchema.optional(),
  where: Schema_migrationsWhereUniqueInputSchema,
  create: z.union([ Schema_migrationsCreateInputSchema,Schema_migrationsUncheckedCreateInputSchema ]),
  update: z.union([ Schema_migrationsUpdateInputSchema,Schema_migrationsUncheckedUpdateInputSchema ]),
}).strict()

export const Schema_migrationsCreateManyArgsSchema: z.ZodType<Prisma.Schema_migrationsCreateManyArgs> = z.object({
  data: z.union([ Schema_migrationsCreateManyInputSchema,Schema_migrationsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const Schema_migrationsDeleteArgsSchema: z.ZodType<Prisma.Schema_migrationsDeleteArgs> = z.object({
  select: Schema_migrationsSelectSchema.optional(),
  where: Schema_migrationsWhereUniqueInputSchema,
}).strict()

export const Schema_migrationsUpdateArgsSchema: z.ZodType<Prisma.Schema_migrationsUpdateArgs> = z.object({
  select: Schema_migrationsSelectSchema.optional(),
  data: z.union([ Schema_migrationsUpdateInputSchema,Schema_migrationsUncheckedUpdateInputSchema ]),
  where: Schema_migrationsWhereUniqueInputSchema,
}).strict()

export const Schema_migrationsUpdateManyArgsSchema: z.ZodType<Prisma.Schema_migrationsUpdateManyArgs> = z.object({
  data: z.union([ Schema_migrationsUpdateManyMutationInputSchema,Schema_migrationsUncheckedUpdateManyInputSchema ]),
  where: Schema_migrationsWhereInputSchema.optional(),
}).strict()

export const Schema_migrationsDeleteManyArgsSchema: z.ZodType<Prisma.Schema_migrationsDeleteManyArgs> = z.object({
  where: Schema_migrationsWhereInputSchema.optional(),
}).strict()

interface AccountsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.AccountsArgs
  readonly type: Prisma.AccountsGetPayload<this['_A']>
}

interface Schema_migrationsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Schema_migrationsArgs
  readonly type: Prisma.Schema_migrationsGetPayload<this['_A']>
}

export const tableSchemas = {
  accounts: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "email",
        "TEXT"
      ],
      [
        "created_at",
        "TIMESTAMPTZ"
      ],
      [
        "updated_at",
        "TIMESTAMPTZ"
      ]
    ]),
    relations: [
    ],
    modelSchema: (AccountsCreateInputSchema as any)
      .partial()
      .or((AccountsUncheckedCreateInputSchema as any).partial()),
    createSchema: AccountsCreateArgsSchema,
    createManySchema: AccountsCreateManyArgsSchema,
    findUniqueSchema: AccountsFindUniqueArgsSchema,
    findSchema: AccountsFindFirstArgsSchema,
    updateSchema: AccountsUpdateArgsSchema,
    updateManySchema: AccountsUpdateManyArgsSchema,
    upsertSchema: AccountsUpsertArgsSchema,
    deleteSchema: AccountsDeleteArgsSchema,
    deleteManySchema: AccountsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof AccountsCreateInputSchema>,
    Prisma.AccountsCreateArgs['data'],
    Prisma.AccountsUpdateArgs['data'],
    Prisma.AccountsFindFirstArgs['select'],
    Prisma.AccountsFindFirstArgs['where'],
    Prisma.AccountsFindUniqueArgs['where'],
    never,
    Prisma.AccountsFindFirstArgs['orderBy'],
    Prisma.AccountsScalarFieldEnum,
    AccountsGetPayload
  >,
  schema_migrations: {
    fields: new Map([
      [
        "version",
        "INT8"
      ],
      [
        "inserted_at",
        "TIMESTAMP"
      ]
    ]),
    relations: [
    ],
    modelSchema: (Schema_migrationsCreateInputSchema as any)
      .partial()
      .or((Schema_migrationsUncheckedCreateInputSchema as any).partial()),
    createSchema: Schema_migrationsCreateArgsSchema,
    createManySchema: Schema_migrationsCreateManyArgsSchema,
    findUniqueSchema: Schema_migrationsFindUniqueArgsSchema,
    findSchema: Schema_migrationsFindFirstArgsSchema,
    updateSchema: Schema_migrationsUpdateArgsSchema,
    updateManySchema: Schema_migrationsUpdateManyArgsSchema,
    upsertSchema: Schema_migrationsUpsertArgsSchema,
    deleteSchema: Schema_migrationsDeleteArgsSchema,
    deleteManySchema: Schema_migrationsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Schema_migrationsCreateInputSchema>,
    Prisma.Schema_migrationsCreateArgs['data'],
    Prisma.Schema_migrationsUpdateArgs['data'],
    Prisma.Schema_migrationsFindFirstArgs['select'],
    Prisma.Schema_migrationsFindFirstArgs['where'],
    Prisma.Schema_migrationsFindUniqueArgs['where'],
    never,
    Prisma.Schema_migrationsFindFirstArgs['orderBy'],
    Prisma.Schema_migrationsScalarFieldEnum,
    Schema_migrationsGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
