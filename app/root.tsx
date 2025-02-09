import { Links, Meta, Outlet, Scripts } from '@remix-run/react';

import type { LinksFunction } from '@remix-run/node';
import stylesheet from '../tailwind.css?url';
import { ReactNode } from 'react';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <FullScreenLayout>
          <Outlet />
        </FullScreenLayout>
        <Scripts />
      </body>
    </html>
  );
}

function FullScreenLayout({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <section className="w-full h-screen bg-slate-50 flex">{children}</section>
  );
}
