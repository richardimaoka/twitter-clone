import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";
import { Query, QueryResolvers } from "./generated/graphql";

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

//data.json directly define Query
type ContextData = Query;

const resolvers: { Query: QueryResolvers<ContextData> } = {
  Query: {
    profile: async (parent, args, context, info) => {
      console.log(`profile`);
      return context.profile;
    },
  },
};

const readJsonFile = async (relativeFileName: string): Promise<any> => {
  const jsonDataFile = __dirname.concat(relativeFileName);
  const fileContent = await fs.promises.readFile(jsonDataFile, "utf8");
  const jsonData = JSON.parse(fileContent);
  return jsonData;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: any): Promise<ContextData> => {
    try {
      const data = await readJsonFile("/data.json");
      return data;
    } catch (err) {
      console.log("***ERROR OCURRED***");
      console.log(err);
      throw new Error("internal error happened!!");
    }
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
