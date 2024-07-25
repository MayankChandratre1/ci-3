"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
//comment 4 cloud updated key
export const Providers = ({children}: {children: React.ReactNode}) => {
    //comment1
    return <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>
}