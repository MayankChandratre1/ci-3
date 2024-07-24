"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
//comment 4 clod
export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>
}