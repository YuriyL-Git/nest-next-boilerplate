import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';

export enum VerificationTokenScalarFieldEnum {
    identifier = "identifier",
    token = "token",
    expires = "expires"
}

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password",
    emailVerified = "emailVerified",
    image = "image"
}

export enum SessionScalarFieldEnum {
    id = "id",
    sessionToken = "sessionToken",
    userId = "userId",
    expires = "expires"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum AccountScalarFieldEnum {
    id = "id",
    userId = "userId",
    type = "type",
    provider = "provider",
    providerAccountId = "providerAccountId",
    refresh_token = "refresh_token",
    access_token = "access_token",
    expires_at = "expires_at",
    token_type = "token_type",
    scope = "scope",
    id_token = "id_token",
    session_state = "session_state"
}

registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(SessionScalarFieldEnum, { name: 'SessionScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
registerEnumType(VerificationTokenScalarFieldEnum, { name: 'VerificationTokenScalarFieldEnum', description: undefined })

@ArgsType()
export class AccountAggregateArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AccountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    @Field(() => AccountAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    @Field(() => AccountSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    @Field(() => AccountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    @Field(() => AccountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}

@InputType()
export class AccountAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
}

@ObjectType()
export class AccountAvgAggregate {
    @Field(() => Float, {nullable:true})
    expires_at?: number;
}

@InputType()
export class AccountAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
}

@InputType()
export class AccountCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    providerAccountId?: true;
    @Field(() => Boolean, {nullable:true})
    refresh_token?: true;
    @Field(() => Boolean, {nullable:true})
    access_token?: true;
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
    @Field(() => Boolean, {nullable:true})
    token_type?: true;
    @Field(() => Boolean, {nullable:true})
    scope?: true;
    @Field(() => Boolean, {nullable:true})
    id_token?: true;
    @Field(() => Boolean, {nullable:true})
    session_state?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class AccountCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    provider!: number;
    @Field(() => Int, {nullable:false})
    providerAccountId!: number;
    @Field(() => Int, {nullable:false})
    refresh_token!: number;
    @Field(() => Int, {nullable:false})
    access_token!: number;
    @Field(() => Int, {nullable:false})
    expires_at!: number;
    @Field(() => Int, {nullable:false})
    token_type!: number;
    @Field(() => Int, {nullable:false})
    scope!: number;
    @Field(() => Int, {nullable:false})
    id_token!: number;
    @Field(() => Int, {nullable:false})
    session_state!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class AccountCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
}

@InputType()
export class AccountCreateManyUserInputEnvelope {
    @Field(() => [AccountCreateManyUserInput], {nullable:false})
    @Type(() => AccountCreateManyUserInput)
    data!: Array<AccountCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class AccountCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountCreateNestedManyWithoutUserInput {
    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;
    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
}

@InputType()
export class AccountCreateOrConnectWithoutUserInput {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountCreateWithoutUserInput, {nullable:false})
    @Type(() => AccountCreateWithoutUserInput)
    create!: InstanceType<typeof AccountCreateWithoutUserInput>;
}

@InputType()
export class AccountCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
    @Field(() => UserCreateNestedOneWithoutAccountsInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
}

@ArgsType()
export class AccountGroupByArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithAggregationInput>;
    @Field(() => [AccountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AccountScalarFieldEnum>;
    @Field(() => AccountScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof AccountScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AccountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    @Field(() => AccountAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    @Field(() => AccountSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    @Field(() => AccountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    @Field(() => AccountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}

@ObjectType()
export class AccountGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
    @Field(() => AccountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregate>;
    @Field(() => AccountAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    @Field(() => AccountSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof AccountSumAggregate>;
    @Field(() => AccountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregate>;
    @Field(() => AccountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregate>;
}

@InputType()
export class AccountListRelationFilter {
    @Field(() => AccountWhereInput, {nullable:true})
    every?: InstanceType<typeof AccountWhereInput>;
    @Field(() => AccountWhereInput, {nullable:true})
    some?: InstanceType<typeof AccountWhereInput>;
    @Field(() => AccountWhereInput, {nullable:true})
    none?: InstanceType<typeof AccountWhereInput>;
}

@InputType()
export class AccountMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    providerAccountId?: true;
    @Field(() => Boolean, {nullable:true})
    refresh_token?: true;
    @Field(() => Boolean, {nullable:true})
    access_token?: true;
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
    @Field(() => Boolean, {nullable:true})
    token_type?: true;
    @Field(() => Boolean, {nullable:true})
    scope?: true;
    @Field(() => Boolean, {nullable:true})
    id_token?: true;
    @Field(() => Boolean, {nullable:true})
    session_state?: true;
}

@ObjectType()
export class AccountMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
}

@InputType()
export class AccountMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    provider?: true;
    @Field(() => Boolean, {nullable:true})
    providerAccountId?: true;
    @Field(() => Boolean, {nullable:true})
    refresh_token?: true;
    @Field(() => Boolean, {nullable:true})
    access_token?: true;
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
    @Field(() => Boolean, {nullable:true})
    token_type?: true;
    @Field(() => Boolean, {nullable:true})
    scope?: true;
    @Field(() => Boolean, {nullable:true})
    id_token?: true;
    @Field(() => Boolean, {nullable:true})
    session_state?: true;
}

@ObjectType()
export class AccountMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
}

@InputType()
export class AccountOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class AccountOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
    @Field(() => AccountCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AccountCountOrderByAggregateInput>;
    @Field(() => AccountAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgOrderByAggregateInput>;
    @Field(() => AccountMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AccountMaxOrderByAggregateInput>;
    @Field(() => AccountMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AccountMinOrderByAggregateInput>;
    @Field(() => AccountSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof AccountSumOrderByAggregateInput>;
}

@InputType()
export class AccountOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    refresh_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    access_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token_type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    scope?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    id_token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    session_state?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class AccountProviderProviderAccountIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
}

@InputType()
export class AccountScalarWhereWithAggregatesInput {
    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AccountScalarWhereWithAggregatesInput>;
    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AccountScalarWhereWithAggregatesInput>;
    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AccountScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    provider?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    providerAccountId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    refresh_token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    access_token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    expires_at?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token_type?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    scope?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id_token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    session_state?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class AccountScalarWhereInput {
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    AND?: Array<AccountScalarWhereInput>;
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    OR?: Array<AccountScalarWhereInput>;
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    NOT?: Array<AccountScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    provider?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    providerAccountId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    refresh_token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    access_token?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    expires_at?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    token_type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    scope?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    id_token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    session_state?: InstanceType<typeof StringFilter>;
}

@InputType()
export class AccountSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    expires_at?: true;
}

@ObjectType()
export class AccountSumAggregate {
    @Field(() => Int, {nullable:true})
    expires_at?: number;
}

@InputType()
export class AccountSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    expires_at?: keyof typeof SortOrder;
}

@InputType()
export class AccountUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;
    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
}

@InputType()
export class AccountUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateManyWithoutAccountsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;
    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    @Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    set?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    disconnect?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    delete?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [AccountUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    @Type(() => AccountScalarWhereInput)
    deleteMany?: Array<AccountScalarWhereInput>;
}

@InputType()
export class AccountUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUpdateManyWithWhereWithoutUserInput {
    @Field(() => AccountScalarWhereInput, {nullable:false})
    @Type(() => AccountScalarWhereInput)
    where!: InstanceType<typeof AccountScalarWhereInput>;
    @Field(() => AccountUpdateManyMutationInput, {nullable:false})
    @Type(() => AccountUpdateManyMutationInput)
    data!: InstanceType<typeof AccountUpdateManyMutationInput>;
}

@InputType()
export class AccountUpdateManyWithoutUserNestedInput {
    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;
    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    @Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    set?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    disconnect?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    delete?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
    @Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [AccountUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [AccountScalarWhereInput], {nullable:true})
    @Type(() => AccountScalarWhereInput)
    deleteMany?: Array<AccountScalarWhereInput>;
}

@InputType()
export class AccountUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountUpdateWithoutUserInput, {nullable:false})
    @Type(() => AccountUpdateWithoutUserInput)
    data!: InstanceType<typeof AccountUpdateWithoutUserInput>;
}

@InputType()
export class AccountUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
}

@InputType()
export class AccountUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    type?: string;
    @Field(() => String, {nullable:true})
    provider?: string;
    @Field(() => String, {nullable:true})
    providerAccountId?: string;
    @Field(() => String, {nullable:true})
    refresh_token?: string;
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Int, {nullable:true})
    expires_at?: number;
    @Field(() => String, {nullable:true})
    token_type?: string;
    @Field(() => String, {nullable:true})
    scope?: string;
    @Field(() => String, {nullable:true})
    id_token?: string;
    @Field(() => String, {nullable:true})
    session_state?: string;
    @Field(() => UserUpdateOneRequiredWithoutAccountsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
}

@InputType()
export class AccountUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountUpdateWithoutUserInput, {nullable:false})
    @Type(() => AccountUpdateWithoutUserInput)
    update!: InstanceType<typeof AccountUpdateWithoutUserInput>;
    @Field(() => AccountCreateWithoutUserInput, {nullable:false})
    @Type(() => AccountCreateWithoutUserInput)
    create!: InstanceType<typeof AccountCreateWithoutUserInput>;
}

@InputType()
export class AccountWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => AccountProviderProviderAccountIdCompoundUniqueInput, {nullable:true})
    provider_providerAccountId?: InstanceType<typeof AccountProviderProviderAccountIdCompoundUniqueInput>;
}

@InputType()
export class AccountWhereInput {
    @Field(() => [AccountWhereInput], {nullable:true})
    AND?: Array<AccountWhereInput>;
    @Field(() => [AccountWhereInput], {nullable:true})
    OR?: Array<AccountWhereInput>;
    @Field(() => [AccountWhereInput], {nullable:true})
    NOT?: Array<AccountWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    provider?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    providerAccountId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    refresh_token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    access_token?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    expires_at?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    token_type?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    scope?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    id_token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    session_state?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Account {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => String, {nullable:false})
    provider!: string;
    @Field(() => String, {nullable:false})
    providerAccountId!: string;
    @Field(() => String, {nullable:true})
    refresh_token!: string | null;
    @Field(() => String, {nullable:true})
    access_token!: string | null;
    @Field(() => Int, {nullable:true})
    expires_at!: number | null;
    @Field(() => String, {nullable:true})
    token_type!: string | null;
    @Field(() => String, {nullable:true})
    scope!: string | null;
    @Field(() => String, {nullable:true})
    id_token!: string | null;
    @Field(() => String, {nullable:true})
    session_state!: string | null;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
}

@ObjectType()
export class AggregateAccount {
    @Field(() => AccountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AccountCountAggregate>;
    @Field(() => AccountAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    @Field(() => AccountSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof AccountSumAggregate>;
    @Field(() => AccountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AccountMinAggregate>;
    @Field(() => AccountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AccountMaxAggregate>;
}

@ArgsType()
export class CreateManyAccountArgs {
    @Field(() => [AccountCreateManyInput], {nullable:false})
    @Type(() => AccountCreateManyInput)
    @ValidateNested()
    data!: Array<AccountCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneAccountArgs {
    @Field(() => AccountCreateInput, {nullable:false})
    @Type(() => AccountCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof AccountCreateInput>;
}

@ArgsType()
export class DeleteManyAccountArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
}

@ArgsType()
export class DeleteOneAccountArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class FindFirstAccountOrThrowArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindFirstAccountArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindManyAccountArgs {
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
    @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountOrderByWithRelationInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueAccountOrThrowArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueAccountArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyAccountArgs {
    @Field(() => AccountUpdateManyMutationInput, {nullable:false})
    @Type(() => AccountUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof AccountUpdateManyMutationInput>;
    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof AccountWhereInput>;
}

@ArgsType()
export class UpdateOneAccountArgs {
    @Field(() => AccountUpdateInput, {nullable:false})
    @Type(() => AccountUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof AccountUpdateInput>;
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneAccountArgs {
    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof AccountWhereUniqueInput>;
    @Field(() => AccountCreateInput, {nullable:false})
    @Type(() => AccountCreateInput)
    create!: InstanceType<typeof AccountCreateInput>;
    @Field(() => AccountUpdateInput, {nullable:false})
    @Type(() => AccountUpdateInput)
    update!: InstanceType<typeof AccountUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateSession {
    @Field(() => SessionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SessionCountAggregate>;
    @Field(() => SessionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SessionMinAggregate>;
    @Field(() => SessionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SessionMaxAggregate>;
}

@ArgsType()
export class CreateManySessionArgs {
    @Field(() => [SessionCreateManyInput], {nullable:false})
    @Type(() => SessionCreateManyInput)
    @ValidateNested()
    data!: Array<SessionCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSessionArgs {
    @Field(() => SessionCreateInput, {nullable:false})
    @Type(() => SessionCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof SessionCreateInput>;
}

@ArgsType()
export class DeleteManySessionArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
}

@ArgsType()
export class DeleteOneSessionArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
}

@ArgsType()
export class FindFirstSessionOrThrowArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}

@ArgsType()
export class FindFirstSessionArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}

@ArgsType()
export class FindManySessionArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSessionOrThrowArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueSessionArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
}

@ArgsType()
export class SessionAggregateArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SessionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SessionCountAggregateInput>;
    @Field(() => SessionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SessionMinAggregateInput>;
    @Field(() => SessionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SessionMaxAggregateInput>;
}

@InputType()
export class SessionCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    sessionToken?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SessionCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    sessionToken!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    expires!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SessionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class SessionCreateManyUserInputEnvelope {
    @Field(() => [SessionCreateManyUserInput], {nullable:false})
    @Type(() => SessionCreateManyUserInput)
    data!: Array<SessionCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SessionCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionCreateNestedManyWithoutUserInput {
    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;
    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<SessionWhereUniqueInput>;
}

@InputType()
export class SessionCreateOrConnectWithoutUserInput {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => SessionCreateWithoutUserInput, {nullable:false})
    @Type(() => SessionCreateWithoutUserInput)
    create!: InstanceType<typeof SessionCreateWithoutUserInput>;
}

@InputType()
export class SessionCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
    @Field(() => UserCreateNestedOneWithoutSessionsInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutSessionsInput>;
}

@ArgsType()
export class SessionGroupByArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithAggregationInput>;
    @Field(() => [SessionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SessionScalarFieldEnum>;
    @Field(() => SessionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SessionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SessionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SessionCountAggregateInput>;
    @Field(() => SessionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SessionMinAggregateInput>;
    @Field(() => SessionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SessionMaxAggregateInput>;
}

@ObjectType()
export class SessionGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
    @Field(() => SessionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SessionCountAggregate>;
    @Field(() => SessionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SessionMinAggregate>;
    @Field(() => SessionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SessionMaxAggregate>;
}

@InputType()
export class SessionListRelationFilter {
    @Field(() => SessionWhereInput, {nullable:true})
    every?: InstanceType<typeof SessionWhereInput>;
    @Field(() => SessionWhereInput, {nullable:true})
    some?: InstanceType<typeof SessionWhereInput>;
    @Field(() => SessionWhereInput, {nullable:true})
    none?: InstanceType<typeof SessionWhereInput>;
}

@InputType()
export class SessionMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    sessionToken?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class SessionMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class SessionMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    sessionToken?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class SessionMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class SessionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class SessionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => SessionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SessionCountOrderByAggregateInput>;
    @Field(() => SessionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SessionMaxOrderByAggregateInput>;
    @Field(() => SessionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SessionMinOrderByAggregateInput>;
}

@InputType()
export class SessionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sessionToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class SessionScalarWhereWithAggregatesInput {
    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SessionScalarWhereWithAggregatesInput>;
    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SessionScalarWhereWithAggregatesInput>;
    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SessionScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sessionToken?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class SessionScalarWhereInput {
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    AND?: Array<SessionScalarWhereInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    OR?: Array<SessionScalarWhereInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    NOT?: Array<SessionScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    sessionToken?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class SessionUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;
    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<SessionWhereUniqueInput>;
}

@InputType()
export class SessionUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class SessionUncheckedUpdateManyWithoutSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;
    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    @Field(() => [SessionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    set?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    disconnect?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    delete?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SessionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    @Type(() => SessionScalarWhereInput)
    deleteMany?: Array<SessionScalarWhereInput>;
}

@InputType()
export class SessionUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUpdateManyWithWhereWithoutUserInput {
    @Field(() => SessionScalarWhereInput, {nullable:false})
    @Type(() => SessionScalarWhereInput)
    where!: InstanceType<typeof SessionScalarWhereInput>;
    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionUpdateManyMutationInput)
    data!: InstanceType<typeof SessionUpdateManyMutationInput>;
}

@InputType()
export class SessionUpdateManyWithoutUserNestedInput {
    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateWithoutUserInput)
    create?: Array<SessionCreateWithoutUserInput>;
    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    @Field(() => [SessionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    set?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    disconnect?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    delete?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<SessionWhereUniqueInput>;
    @Field(() => [SessionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SessionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SessionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    @Type(() => SessionScalarWhereInput)
    deleteMany?: Array<SessionScalarWhereInput>;
}

@InputType()
export class SessionUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => SessionUpdateWithoutUserInput, {nullable:false})
    @Type(() => SessionUpdateWithoutUserInput)
    data!: InstanceType<typeof SessionUpdateWithoutUserInput>;
}

@InputType()
export class SessionUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class SessionUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutSessionsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutSessionsNestedInput>;
}

@InputType()
export class SessionUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => SessionUpdateWithoutUserInput, {nullable:false})
    @Type(() => SessionUpdateWithoutUserInput)
    update!: InstanceType<typeof SessionUpdateWithoutUserInput>;
    @Field(() => SessionCreateWithoutUserInput, {nullable:false})
    @Type(() => SessionCreateWithoutUserInput)
    create!: InstanceType<typeof SessionCreateWithoutUserInput>;
}

@InputType()
export class SessionWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    sessionToken?: string;
}

@InputType()
export class SessionWhereInput {
    @Field(() => [SessionWhereInput], {nullable:true})
    AND?: Array<SessionWhereInput>;
    @Field(() => [SessionWhereInput], {nullable:true})
    OR?: Array<SessionWhereInput>;
    @Field(() => [SessionWhereInput], {nullable:true})
    NOT?: Array<SessionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    sessionToken?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Session {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    sessionToken!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManySessionArgs {
    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof SessionUpdateManyMutationInput>;
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SessionWhereInput>;
}

@ArgsType()
export class UpdateOneSessionArgs {
    @Field(() => SessionUpdateInput, {nullable:false})
    @Type(() => SessionUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof SessionUpdateInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneSessionArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof SessionWhereUniqueInput>;
    @Field(() => SessionCreateInput, {nullable:false})
    @Type(() => SessionCreateInput)
    create!: InstanceType<typeof SessionCreateInput>;
    @Field(() => SessionUpdateInput, {nullable:false})
    @Type(() => SessionUpdateInput)
    update!: InstanceType<typeof SessionUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    emailVerified!: number;
    @Field(() => Int, {nullable:false})
    image!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    accounts?: number;
    @Field(() => Int, {nullable:false})
    sessions?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password!: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserCreateNestedOneWithoutAccountsInput {
    @Field(() => UserCreateWithoutAccountsInput, {nullable:true})
    @Type(() => UserCreateWithoutAccountsInput)
    create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
    @Field(() => UserCreateOrConnectWithoutAccountsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAccountsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAccountsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutSessionsInput {
    @Field(() => UserCreateWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionsInput)
    create?: InstanceType<typeof UserCreateWithoutSessionsInput>;
    @Field(() => UserCreateOrConnectWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSessionsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutAccountsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutAccountsInput, {nullable:false})
    @Type(() => UserCreateWithoutAccountsInput)
    create!: InstanceType<typeof UserCreateWithoutAccountsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutSessionsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutSessionsInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionsInput)
    create!: InstanceType<typeof UserCreateWithoutSessionsInput>;
}

@InputType()
export class UserCreateWithoutAccountsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password!: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => SessionCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password!: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountCreateNestedManyWithoutUserInput, {nullable:true})
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password!: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountCreateNestedManyWithoutUserInput, {nullable:true})
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    @Field(() => SessionCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @HideField()
    password!: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @HideField()
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @HideField()
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => AccountOrderByRelationAggregateInput, {nullable:true})
    accounts?: InstanceType<typeof AccountOrderByRelationAggregateInput>;
    @Field(() => SessionOrderByRelationAggregateInput, {nullable:true})
    sessions?: InstanceType<typeof SessionOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    emailVerified?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutAccountsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password!: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password!: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password!: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserUncheckedUpdateWithoutAccountsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
}

@InputType()
export class UserUpdateOneRequiredWithoutAccountsNestedInput {
    @Field(() => UserCreateWithoutAccountsInput, {nullable:true})
    @Type(() => UserCreateWithoutAccountsInput)
    create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
    @Field(() => UserCreateOrConnectWithoutAccountsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAccountsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAccountsInput>;
    @Field(() => UserUpsertWithoutAccountsInput, {nullable:true})
    @Type(() => UserUpsertWithoutAccountsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutAccountsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutAccountsInput, {nullable:true})
    @Type(() => UserUpdateWithoutAccountsInput)
    update?: InstanceType<typeof UserUpdateWithoutAccountsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutSessionsNestedInput {
    @Field(() => UserCreateWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionsInput)
    create?: InstanceType<typeof UserCreateWithoutSessionsInput>;
    @Field(() => UserCreateOrConnectWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSessionsInput>;
    @Field(() => UserUpsertWithoutSessionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutSessionsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutSessionsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutSessionsInput, {nullable:true})
    @Type(() => UserUpdateWithoutSessionsInput)
    update?: InstanceType<typeof UserUpdateWithoutSessionsInput>;
}

@InputType()
export class UserUpdateWithoutAccountsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => SessionUpdateManyWithoutUserNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUpdateManyWithoutUserNestedInput, {nullable:true})
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(1)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(5)
    password?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => AccountUpdateManyWithoutUserNestedInput, {nullable:true})
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    @Field(() => SessionUpdateManyWithoutUserNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutAccountsInput {
    @Field(() => UserUpdateWithoutAccountsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAccountsInput)
    update!: InstanceType<typeof UserUpdateWithoutAccountsInput>;
    @Field(() => UserCreateWithoutAccountsInput, {nullable:false})
    @Type(() => UserCreateWithoutAccountsInput)
    create!: InstanceType<typeof UserCreateWithoutAccountsInput>;
}

@InputType()
export class UserUpsertWithoutSessionsInput {
    @Field(() => UserUpdateWithoutSessionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSessionsInput)
    update!: InstanceType<typeof UserUpdateWithoutSessionsInput>;
    @Field(() => UserCreateWithoutSessionsInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionsInput)
    create!: InstanceType<typeof UserCreateWithoutSessionsInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    emailVerified?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    image?: InstanceType<typeof StringFilter>;
    @Field(() => AccountListRelationFilter, {nullable:true})
    accounts?: InstanceType<typeof AccountListRelationFilter>;
    @Field(() => SessionListRelationFilter, {nullable:true})
    sessions?: InstanceType<typeof SessionListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @HideField()
    password!: string;
    @Field(() => Date, {nullable:true})
    emailVerified!: Date | null;
    @Field(() => String, {nullable:true})
    image!: string | null;
    @Field(() => [Account], {nullable:true})
    accounts?: Array<Account>;
    @Field(() => [Session], {nullable:true})
    sessions?: Array<Session>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}

@ObjectType()
export class AggregateVerificationToken {
    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregate>;
    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregate>;
    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@ArgsType()
export class CreateManyVerificationTokenArgs {
    @Field(() => [VerificationTokenCreateManyInput], {nullable:false})
    @Type(() => VerificationTokenCreateManyInput)
    @ValidateNested()
    data!: Array<VerificationTokenCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneVerificationTokenArgs {
    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof VerificationTokenCreateInput>;
}

@ArgsType()
export class DeleteManyVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
}

@ArgsType()
export class DeleteOneVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
}

@ArgsType()
export class FindFirstVerificationTokenOrThrowArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}

@ArgsType()
export class FindFirstVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}

@ArgsType()
export class FindManyVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueVerificationTokenOrThrowArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyVerificationTokenArgs {
    @Field(() => VerificationTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => VerificationTokenUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof VerificationTokenUpdateManyMutationInput>;
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
}

@ArgsType()
export class UpdateOneVerificationTokenArgs {
    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof VerificationTokenUpdateInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    create!: InstanceType<typeof VerificationTokenCreateInput>;
    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    update!: InstanceType<typeof VerificationTokenUpdateInput>;
}

@ArgsType()
export class VerificationTokenAggregateArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof VerificationTokenWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VerificationTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
    @Field(() => VerificationTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
    @Field(() => VerificationTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@InputType()
export class VerificationTokenCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    identifier?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class VerificationTokenCountAggregate {
    @Field(() => Int, {nullable:false})
    identifier!: number;
    @Field(() => Int, {nullable:false})
    token!: number;
    @Field(() => Int, {nullable:false})
    expires!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class VerificationTokenCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenCreateManyInput {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class VerificationTokenCreateInput {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@ArgsType()
export class VerificationTokenGroupByArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithAggregationInput>;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VerificationTokenScalarFieldEnum>;
    @Field(() => VerificationTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VerificationTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
    @Field(() => VerificationTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
    @Field(() => VerificationTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@ObjectType()
export class VerificationTokenGroupBy {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregate>;
    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregate>;
    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@InputType()
export class VerificationTokenIdentifierTokenCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
}

@InputType()
export class VerificationTokenMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    identifier?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class VerificationTokenMaxAggregate {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    identifier?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class VerificationTokenMinAggregate {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
    @Field(() => VerificationTokenCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountOrderByAggregateInput>;
    @Field(() => VerificationTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxOrderByAggregateInput>;
    @Field(() => VerificationTokenMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinOrderByAggregateInput>;
}

@InputType()
export class VerificationTokenOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenScalarWhereWithAggregatesInput {
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class VerificationTokenUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenUpdateInput {
    @Field(() => String, {nullable:true})
    identifier?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenWhereUniqueInput {
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => VerificationTokenIdentifierTokenCompoundUniqueInput, {nullable:true})
    identifier_token?: InstanceType<typeof VerificationTokenIdentifierTokenCompoundUniqueInput>;
}

@InputType()
export class VerificationTokenWhereInput {
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    AND?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    OR?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    NOT?: Array<VerificationTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    identifier?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class VerificationToken {
    @Field(() => String, {nullable:false})
    identifier!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date;
}
