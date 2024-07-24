"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
//comment 3
export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>
}