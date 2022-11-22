import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {SessionProvider, signOut} from "next-auth/react"
import styles from "../styles/Home.module.css";
import React from "react";

export default function App({Component, pageProps: {session, ...pageProps},}) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

