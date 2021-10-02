import React from 'react'
import { AuthContextProvider } from './AuthContext'
import { AppContainerProvider } from './AppContainer'

type StoreProps = {
    children: JSX.Element
}
export default function Store({ children }: StoreProps) {
    return (
        <AuthContextProvider>
            <AppContainerProvider>{children}</AppContainerProvider>
        </AuthContextProvider>
    )
}
