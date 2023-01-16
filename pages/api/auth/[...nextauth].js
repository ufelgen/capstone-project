import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];
if (process.env.VERCEL_ENV === "preview") {
  providers.push(
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.username === "extreme-beaver" &&
          credentials.password === "extreme-beaver"
        ) {
          return {
            name: "Beaver Test User",
            email: "test@example.com",
          };
        } else {
          return null;
        }
      },
    })
  );
} else {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  );
}

export const authOptions = {
  providers,
  secret: process.env.NEXT_PUBLIC_SECRET,
};
export default NextAuth(authOptions);
