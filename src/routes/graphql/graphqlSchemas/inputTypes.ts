import { GraphQLBoolean, GraphQLFloat, GraphQLInputObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { GraphQLNonNull } from 'graphql/index.js';
import { UUIDType } from '../types/uuid.js';
import { MemberTypeId } from '../types/memberTypeId.js';

export const inputUserType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    balance: {
      type: new GraphQLNonNull(GraphQLFloat)
    }
  }
});

export const inputProfileType = new GraphQLInputObjectType({
  name: 'CreateProfileInput',
  fields: {
    userId: {
      type: new GraphQLNonNull(UUIDType)
    },
    memberTypeId: {
      type: new GraphQLNonNull(MemberTypeId)
    },
    isMale: {
      type: new GraphQLNonNull(GraphQLBoolean)
    },
    yearOfBirth: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
});

export const inputPostType = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: {
    authorId: {
      type: new GraphQLNonNull(UUIDType)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

export const changeUserType = new GraphQLInputObjectType({
  name: 'ChangeUserInput',
  fields: {
    name: {
      type: GraphQLString
    },
    balance: {
      type: GraphQLFloat
    }
  }
});

export const changeProfileType = new GraphQLInputObjectType({
  name: 'ChangeProfileInput',
  fields: {
    memberTypeId: {
      type: MemberTypeId
    },
    isMale: {
      type: GraphQLBoolean
    },
    yearOfBirth: {
      type: GraphQLInt
    }
  }
});

export const changePostType = new GraphQLInputObjectType({
  name: 'ChangePostInput',
  fields: {
    content: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    }
  }
});

