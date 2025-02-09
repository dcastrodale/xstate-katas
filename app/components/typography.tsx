import { PropsWithChildren } from 'react';

export function Text({ children }: PropsWithChildren): JSX.Element {
  return <p className="text-lg">{children}</p>;
}
