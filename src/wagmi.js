import { configureChains, createConfig } from 'wagmi';
import { sepolia, mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

export const { chains, publicClient, provider } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [sepolia] : [])],
  [publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  provider,
});
