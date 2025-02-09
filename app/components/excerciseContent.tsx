import { PropsWithChildren } from 'react';

export function ExcerciseContent({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-800">
      {children}
    </div>
  );
}
