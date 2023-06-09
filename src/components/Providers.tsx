"use client"

import { CoinMarketProvider } from '@/context/cryptoCtx'
import { MessageProvider } from '@/context/messages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import React, { FC, ReactNode } from 'react'

import {
    getDefaultWallets,
    RainbowKitProvider, darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})


interface ProvidersProps {
    children: ReactNode,
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    const queryClient = new QueryClient()
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    return <QueryClientProvider client={queryClient}>
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} theme={darkTheme({
                accentColor: 'transparent',
                accentColorForeground: 'color: rgb(161 161 170)',
                fontStack: 'rounded',

            })}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    <CoinMarketProvider>
                        <MessageProvider>

                            {mounted && children}

                        </MessageProvider>
                    </CoinMarketProvider>
                </ThemeProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    </QueryClientProvider>
}


export default Providers