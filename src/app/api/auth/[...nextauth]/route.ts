import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type TUser = {
  id: string;
  name: string;
  password: string;
};

const userList: TUser[] = [{id:"1", name: "hablu", password: "1234" }];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username..",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password..",
        },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        const { username, password } = credentials;

        const user = userList.find((user) => user.name === username);

        if (!user) return null;

        const isPasswordCorrect = user.password === password;

        if (isPasswordCorrect) {
           return {
             id: user.id,
             name: user.name,
           };
        }

        return null;
      },
    }),
  ],

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
