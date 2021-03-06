import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  isLogged?: Maybe<Users>;
  findChar: Array<CharResponse>;
};


export type QueryFindCharArgs = {
  options: Options;
  char: Array<Scalars['String']>;
};

export type Users = {
  __typename?: 'Users';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  flashcard: Array<FlashResponse>;
};


export type FlashResponse = Flashcards | FlashcardWords | FlashcardSentences;

export type Flashcards = {
  __typename?: 'Flashcards';
  passed?: Maybe<Scalars['Boolean']>;
  characters: Characters;
};

export type Characters = CharCollection & {
  __typename?: 'Characters';
  id: Scalars['Float'];
  char_detail: Common;
  variant?: Maybe<Scalars['String']>;
};

export type CharCollection = {
  id: Scalars['Float'];
  char_detail: Common;
};

export type Common = {
  __typename?: 'Common';
  character: Scalars['String'];
  pinyin: Scalars['String'];
  meaning: Scalars['String'];
};

export type FlashcardWords = {
  __typename?: 'FlashcardWords';
  passed?: Maybe<Scalars['Boolean']>;
  words?: Maybe<Words>;
};

export type Words = CharCollection & {
  __typename?: 'Words';
  id: Scalars['Float'];
  char_detail: Common;
};

export type FlashcardSentences = {
  __typename?: 'FlashcardSentences';
  passed?: Maybe<Scalars['Boolean']>;
  sentences?: Maybe<Sentences>;
};

export type Sentences = CharCollection & {
  __typename?: 'Sentences';
  id: Scalars['Float'];
  char_detail: Common;
  chengyu: Scalars['Boolean'];
};

export type CharResponse = Characters | Words | Sentences;

export type Options = {
  characters: Scalars['Boolean'];
  words: Scalars['Boolean'];
  sentences: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  forgotPass: Scalars['Boolean'];
  changePass: RegResponse;
  logout: Scalars['Boolean'];
  login: RegResponse;
  register: RegResponse;
};


export type MutationForgotPassArgs = {
  emailInput: EmailInput;
};


export type MutationChangePassArgs = {
  password: PasswordInput;
  token: Scalars['String'];
};


export type MutationLoginArgs = {
  logInputs: LoginInputs;
};


export type MutationRegisterArgs = {
  regInputs: RegInputs;
};

export type EmailInput = {
  email: Scalars['String'];
};

export type RegResponse = Users | DatabaseError | ValidationErrors;

export type DatabaseError = ErrorResponse & {
  __typename?: 'DatabaseError';
  message: Scalars['String'];
  type: Scalars['String'];
};

export type ErrorResponse = {
  message: Scalars['String'];
};

export type ValidationErrors = ErrorResponse & {
  __typename?: 'ValidationErrors';
  message: Scalars['String'];
  responses: Array<ValidationResponse>;
};

export type ValidationResponse = {
  __typename?: 'ValidationResponse';
  property: Scalars['String'];
  constraints: Constraints;
};

export type Constraints = {
  __typename?: 'Constraints';
  length: Scalars['String'];
  isEmail: Scalars['String'];
  isNotEmpty: Scalars['String'];
  maxLength: Scalars['String'];
};

export type PasswordInput = {
  password: Scalars['String'];
};

export type LoginInputs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type RegInputs = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};

type ErrorResponse_DatabaseError_Fragment = { __typename?: 'DatabaseError', message: string };

type ErrorResponse_ValidationErrors_Fragment = { __typename?: 'ValidationErrors', message: string };

export type ErrorResponseFragment = ErrorResponse_DatabaseError_Fragment | ErrorResponse_ValidationErrors_Fragment;

export type DatabaseResponseFragment = { __typename?: 'DatabaseError', type: string };

export type ValidationResponseFragment = { __typename?: 'ValidationErrors', responses: Array<{ __typename?: 'ValidationResponse', property: string, constraints: { __typename?: 'Constraints', length: string, isEmail: string, isNotEmpty: string, maxLength: string } }> };

export type UserResponseFragment = { __typename?: 'Users', username: string, email: string, createdAt: any, flashcard: Array<{ __typename?: 'Flashcards', passed?: Maybe<boolean>, characters: { __typename?: 'Characters', char_detail: { __typename?: 'Common', character: string, pinyin: string, meaning: string } } } | { __typename?: 'FlashcardWords', passed?: Maybe<boolean>, words?: Maybe<{ __typename?: 'Words', char_detail: { __typename?: 'Common', character: string, pinyin: string, meaning: string } }> } | { __typename?: 'FlashcardSentences', passed?: Maybe<boolean>, sentences?: Maybe<{ __typename?: 'Sentences', char_detail: { __typename?: 'Common', character: string, pinyin: string, meaning: string } }> }> };

export type ChangePassMutationVariables = Exact<{
  token: Scalars['String'];
  password: PasswordInput;
}>;


export type ChangePassMutation = { __typename?: 'Mutation', changePass: (
    { __typename?: 'Users' }
    & UserResponseFragment
  ) | (
    { __typename?: 'DatabaseError' }
    & ErrorResponse_DatabaseError_Fragment
    & DatabaseResponseFragment
  ) | (
    { __typename?: 'ValidationErrors' }
    & ErrorResponse_ValidationErrors_Fragment
    & ValidationResponseFragment
  ) };

export type ForgotPasswordMutationVariables = Exact<{
  emailInput: EmailInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPass: boolean };

export type LoginMutationVariables = Exact<{
  logInputs: LoginInputs;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: (
    { __typename?: 'Users' }
    & UserResponseFragment
  ) | (
    { __typename?: 'DatabaseError' }
    & ErrorResponse_DatabaseError_Fragment
    & DatabaseResponseFragment
  ) | (
    { __typename?: 'ValidationErrors' }
    & ErrorResponse_ValidationErrors_Fragment
    & ValidationResponseFragment
  ) };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  regInputs: RegInputs;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: (
    { __typename?: 'Users' }
    & UserResponseFragment
  ) | (
    { __typename?: 'DatabaseError' }
    & ErrorResponse_DatabaseError_Fragment
    & DatabaseResponseFragment
  ) | (
    { __typename?: 'ValidationErrors' }
    & ErrorResponse_ValidationErrors_Fragment
    & ValidationResponseFragment
  ) };

export type FindCharQueryVariables = Exact<{
  char: Array<Scalars['String']> | Scalars['String'];
  options: Options;
}>;


export type FindCharQuery = { __typename?: 'Query', findChar: Array<{ __typename: 'Characters', variant?: Maybe<string>, char_detail: { __typename?: 'Common', character: string, pinyin: string, meaning: string } } | { __typename: 'Words', char_detail: { __typename?: 'Common', character: string, pinyin: string, meaning: string } } | { __typename: 'Sentences', chengyu: boolean, char_detail: { __typename?: 'Common', character: string, pinyin: string, meaning: string } }> };

export type LoggedQueryVariables = Exact<{ [key: string]: never; }>;


export type LoggedQuery = { __typename?: 'Query', isLogged?: Maybe<{ __typename?: 'Users', username: string, email: string, createdAt: any, flashcard: Array<{ __typename: 'Flashcards', passed?: Maybe<boolean>, characters: { __typename?: 'Characters', char_detail: { __typename?: 'Common', character: string, pinyin: string, meaning: string } } } | { __typename: 'FlashcardWords', passed?: Maybe<boolean>, words?: Maybe<{ __typename?: 'Words', char_detail: { __typename?: 'Common', character: string, pinyin: string, meaning: string } }> } | { __typename: 'FlashcardSentences', passed?: Maybe<boolean>, sentences?: Maybe<{ __typename?: 'Sentences', char_detail: { __typename?: 'Common', character: string, pinyin: string, meaning: string } }> }> }> };

export const ErrorResponseFragmentDoc = gql`
    fragment ErrorResponse on ErrorResponse {
  ... on ErrorResponse {
    message
  }
}
    `;
export const DatabaseResponseFragmentDoc = gql`
    fragment DatabaseResponse on DatabaseError {
  ... on DatabaseError {
    type
  }
}
    `;
export const ValidationResponseFragmentDoc = gql`
    fragment ValidationResponse on ValidationErrors {
  ... on ValidationErrors {
    responses {
      property
      constraints {
        length
        isEmail
        isNotEmpty
        maxLength
      }
    }
  }
}
    `;
export const UserResponseFragmentDoc = gql`
    fragment UserResponse on Users {
  ... on Users {
    username
    email
    createdAt
    flashcard {
      ... on Flashcards {
        passed
        characters {
          char_detail {
            character
            pinyin
            meaning
          }
        }
      }
      ... on FlashcardWords {
        passed
        words {
          char_detail {
            character
            pinyin
            meaning
          }
        }
      }
      ... on FlashcardSentences {
        passed
        sentences {
          char_detail {
            character
            pinyin
            meaning
          }
        }
      }
    }
  }
}
    `;
export const ChangePassDocument = gql`
    mutation ChangePass($token: String!, $password: PasswordInput!) {
  changePass(token: $token, password: $password) {
    ...UserResponse
    ...ErrorResponse
    ...ValidationResponse
    ...DatabaseResponse
  }
}
    ${UserResponseFragmentDoc}
${ErrorResponseFragmentDoc}
${ValidationResponseFragmentDoc}
${DatabaseResponseFragmentDoc}`;
export type ChangePassMutationFn = Apollo.MutationFunction<ChangePassMutation, ChangePassMutationVariables>;

/**
 * __useChangePassMutation__
 *
 * To run a mutation, you first call `useChangePassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePassMutation, { data, loading, error }] = useChangePassMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangePassMutation(baseOptions?: Apollo.MutationHookOptions<ChangePassMutation, ChangePassMutationVariables>) {
        return Apollo.useMutation<ChangePassMutation, ChangePassMutationVariables>(ChangePassDocument, baseOptions);
      }
export type ChangePassMutationHookResult = ReturnType<typeof useChangePassMutation>;
export type ChangePassMutationResult = Apollo.MutationResult<ChangePassMutation>;
export type ChangePassMutationOptions = Apollo.BaseMutationOptions<ChangePassMutation, ChangePassMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($emailInput: EmailInput!) {
  forgotPass(emailInput: $emailInput)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      emailInput: // value for 'emailInput'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($logInputs: LoginInputs!) {
  login(logInputs: $logInputs) {
    ...UserResponse
    ...ErrorResponse
    ...ValidationResponse
    ...DatabaseResponse
  }
}
    ${UserResponseFragmentDoc}
${ErrorResponseFragmentDoc}
${ValidationResponseFragmentDoc}
${DatabaseResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      logInputs: // value for 'logInputs'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($regInputs: RegInputs!) {
  register(regInputs: $regInputs) {
    ...UserResponse
    ...ErrorResponse
    ...ValidationResponse
    ...DatabaseResponse
  }
}
    ${UserResponseFragmentDoc}
${ErrorResponseFragmentDoc}
${ValidationResponseFragmentDoc}
${DatabaseResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      regInputs: // value for 'regInputs'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const FindCharDocument = gql`
    query findChar($char: [String!]!, $options: Options!) {
  findChar(char: $char, options: $options) {
    __typename
    ... on CharCollection {
      char_detail {
        character
        pinyin
        meaning
      }
    }
    ... on Sentences {
      chengyu
    }
    ... on Characters {
      variant
    }
  }
}
    `;

/**
 * __useFindCharQuery__
 *
 * To run a query within a React component, call `useFindCharQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCharQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCharQuery({
 *   variables: {
 *      char: // value for 'char'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useFindCharQuery(baseOptions: Apollo.QueryHookOptions<FindCharQuery, FindCharQueryVariables>) {
        return Apollo.useQuery<FindCharQuery, FindCharQueryVariables>(FindCharDocument, baseOptions);
      }
export function useFindCharLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCharQuery, FindCharQueryVariables>) {
          return Apollo.useLazyQuery<FindCharQuery, FindCharQueryVariables>(FindCharDocument, baseOptions);
        }
export type FindCharQueryHookResult = ReturnType<typeof useFindCharQuery>;
export type FindCharLazyQueryHookResult = ReturnType<typeof useFindCharLazyQuery>;
export type FindCharQueryResult = Apollo.QueryResult<FindCharQuery, FindCharQueryVariables>;
export const LoggedDocument = gql`
    query Logged {
  isLogged {
    username
    email
    createdAt
    flashcard {
      __typename
      ... on Flashcards {
        passed
        characters {
          char_detail {
            character
            pinyin
            meaning
          }
        }
      }
      ... on FlashcardWords {
        passed
        words {
          char_detail {
            character
            pinyin
            meaning
          }
        }
      }
      ... on FlashcardSentences {
        passed
        sentences {
          char_detail {
            character
            pinyin
            meaning
          }
        }
      }
    }
  }
}
    `;

/**
 * __useLoggedQuery__
 *
 * To run a query within a React component, call `useLoggedQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoggedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoggedQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoggedQuery(baseOptions?: Apollo.QueryHookOptions<LoggedQuery, LoggedQueryVariables>) {
        return Apollo.useQuery<LoggedQuery, LoggedQueryVariables>(LoggedDocument, baseOptions);
      }
export function useLoggedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoggedQuery, LoggedQueryVariables>) {
          return Apollo.useLazyQuery<LoggedQuery, LoggedQueryVariables>(LoggedDocument, baseOptions);
        }
export type LoggedQueryHookResult = ReturnType<typeof useLoggedQuery>;
export type LoggedLazyQueryHookResult = ReturnType<typeof useLoggedLazyQuery>;
export type LoggedQueryResult = Apollo.QueryResult<LoggedQuery, LoggedQueryVariables>;