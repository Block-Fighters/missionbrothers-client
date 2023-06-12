import * as React from 'react';
import { WagmiConfig } from 'wagmi';

import { config } from '../../wagmi';

export function WagmiProvider({ children }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>;
}
