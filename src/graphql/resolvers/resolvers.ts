import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';
import * as Users from '../../services/users';
import * as Items from '../../services/items';

const resolvers: IResolvers = {
  Query: {
    // users
    findUsers: (_: void, args: any, _info: GraphQLResolveInfo) => {
      return Users.listUsers();
    },
    findUserById: (_: void, args: any, _info: GraphQLResolveInfo) => {
      return Users.getUser(args.id);
    },

    // items
    findItems: (_: void, args: any, _info: GraphQLResolveInfo) => {
      return Items.listItems();
    },
    findItemById: (_: void, args: any, _info: GraphQLResolveInfo) => {
      return Items.getItem(args.id);
    },
  },
  Mutation: {
    // users
    postUser: (_, args) => {
      return Users.postUser(args);
    },
    putUser: (_, args) => {
      return Users.putUser(args.id, args);
    },
    deleteUser: (_, args) => {
      return Users.deleteUser(args.id);
    },

    // items
    postItem: (_, args) => {
      return Items.postItem(args);
    },
    putItem: (_, args) => {
      return Items.putItem(args.id, args);
    },
    deleteItem: (_, args) => {
      return Items.deleteItem(args.id);
    },
  },
};

export default resolvers;
