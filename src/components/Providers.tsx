'use client'


import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import React, { FC, ReactNode } from 'react'
import {
    RainbowKitProvider,
    getDefaultWallets,
    connectorsForWallets,
    darkTheme
} from '@rainbow-me/rainbowkit';
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli, bsc, bscTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { CoinMarketProvider } from '@/context/cryptoCtx';
import { MessageProvider } from '@/context/messages';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
        mainnet,
        polygon,
        optimism,
        bsc,
        bscTestnet,
        arbitrum,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
    ],
    [publicProvider()]
);

const projectId = 'CryptoNewbie';

const { wallets } = getDefaultWallets({
    appName: 'CryptoNewbie',
    projectId,
    chains,
});

const demoAppInfo = {
    appName: 'CryptoNewbie',
};

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: 'Other',
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains }),
        ],
    },
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});
interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    const queryClient = new QueryClient()
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    return <QueryClientProvider client={queryClient}>
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} appInfo={demoAppInfo} theme={darkTheme({
                accentColor: 'transparent',
                accentColorForeground: 'white',
                fontStack: 'system'
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
