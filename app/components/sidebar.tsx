import type { PropsWithChildren } from 'react';

export function Sidebar({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="w-2/5 h-full flex flex-col gap-6 p-3 bg-slate-50 text-slate-800 border-r-4 border-slate-800">
      {children}
    </div>
  );
}
