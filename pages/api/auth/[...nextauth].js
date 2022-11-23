
const ldap = require("ldapjs")
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Lightweight Directory Access Protocol",
            credentials: {
                username: { label: "Common name", type: "text", placeholder: "" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials, req) {
                const client = ldap.createClient({
                    url: process.env.LDAP_URI,
                })

                // Essentially promisify the LDAPJS client.bind function
                return new Promise((resolve, reject) => {
                    client.bind(`uid=${credentials.username},ou=${process.env.LDAP_OU},dc=${process.env.LDAP_DOMAIN_NAME},dc=me`, credentials.password, (error) => {
                        if (error) {
                            console.error('Failed to log in')
                            return null
                        } else {
                            console.log("Log in succesfully")
                            resolve({
                                username: credentials.username,
                                password: credentials.password,
                            })
                        }
                    })
                })
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username
                token.password = user.password
            }
            return token
        },
        async session({ session, token }) {
            return { ...session, user: { username: token.username } }
        },
    },
    pages:{
        signIn: '/auth/signin'
    },
    secret: process.env.JWT_SECRET,
})

