'use client';

import { SWRConfig } from 'swr/_internal';

type Props = {
  children: React.ReactNode;
};

export default function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}>
      {children}
    </SWRConfig>
  );
}
