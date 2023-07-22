import { GraphQLList, GraphQLNonNull, GraphQLObjectType} from 'graphql/index.js';
import { PrismaClient } from '@prisma/client';
import { MemberType, PostType, ProfileType, UserType } from './types.js';
import { MemberTypeId } from '../types/memberTypeId.js';
import { UUIDType } from '../types/uuid.js';

const prisma = new PrismaClient();

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    memberTypes: {
      type: new GraphQLList(MemberType),
      async resolve() {
        return await prisma.memberType.findMany();
      }
    },
    memberType: {
      type: MemberType,
      args: { id: { type: MemberTypeId } },
      async resolve(parent, args) {
        return await prisma.memberType.findUnique({
          where: {
            id: args.id,
          },
        });
      }
    },
    users: {
      type: new GraphQLList(UserType),
      async resolve() {
        return await prisma.user.findMany();
      }
    },
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(UUIDType) } },
      async resolve(parent, args) {
        return await prisma.user.findUnique({
          where: {
            id: args.id,
          },
        });
      }
    },
    profiles: {
      type: new GraphQLList(ProfileType),
      async resolve() {
        return await prisma.profile.findMany();
      }
    },
    profile: {
      type: ProfileType,
      args: { id: { type: UUIDType } },
      async resolve(parent, args) {
        return await prisma.profile.findUnique({
          where: {
            id: args.id,
          },
        });
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      async resolve() {
        return await prisma.post.findMany();
      }
    },
    post: {
      type: PostType,
      args: { id: { type: UUIDType } },
      async resolve(parent, args) {
        return await prisma.post.findUnique({
          where: {
            id: args.id,
          },
        });
      }
    },
  }
});

export default RootQuery;
