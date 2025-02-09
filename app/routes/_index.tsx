import type { ReactNode } from 'react';

import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <>
      <NavMenu />

      <Content>
        <h1>Hello</h1>
      </Content>
    </>
  );
}

function NavMenu(): JSX.Element {
  return (
    <nav className="w-1/5 h-full p-3 bg-slate-800 text-slate-50">
      <h1 className="text-xl mb-3">Katas</h1>

      <ul>
        <li>
          <h3 className="font-bold text-lg">0. State Machine Basics</h3>
          <ul className="p-3">
            <li>
              <Link to="exercises/0_0">0-0: The Stoplight</Link>
            </li>
            <li>0-1: The Tape Recorder</li>
            {/* <li>0-3: The Random Number Generator</li> */}
            {/* <li>0-4: The Random Delay Button</li> */}
          </ul>
        </li>

        <li>
          <h3 className="font-bold text-lg">1. Requests and Authentication</h3>
          <ul className="p-3">
            <li>1-0: A Simple Request</li>
            <li>1-1: A Flaky Request</li>
            <li>1-2: Authentication</li>
            <li>1-0: An Authenticated Request</li>
          </ul>
        </li>

        <li>
          <h3 className="font-bold text-lg">2. WebsSockets</h3>
          <ul className="p-3">
            <li>2-0: A Simple WebSocket Connection</li>
            <li>2-1: A Complex WebSocket</li>
            <li>2-2: An Event Subscription</li>
          </ul>
        </li>

        <li>
          <h3 className="font-bold text-lg">3. Business Logic</h3>
          <ul className="p-3">
            <li>3-0: Logging In</li>
            <li>3-1: Navigation</li>
            <li>3-2: Basket Building</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

function Content({ children }: { children?: ReactNode }): JSX.Element {
  return <section className="p-3 bg-slate-50 w-full">{children}</section>;
}
