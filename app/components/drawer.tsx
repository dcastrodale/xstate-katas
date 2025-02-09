import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { useState } from 'react';

type Props = PropsWithChildren & {
  label: string;
  initial?: DrawerStatus;
};

type DrawerStatus = 'open' | 'closed';

function toggle(status: DrawerStatus): DrawerStatus {
  return status === 'closed' ? 'open' : 'closed';
}

export function Drawer({ label, children, initial }: Props): JSX.Element {
  let [drawerStatus, setDrawerStatus] = useState<DrawerStatus>(
    initial ?? 'closed'
  );

  return (
    <div className="w-auto flex flex-col gap-6">
      <div
        className="w-auto flex items-center hover:cursor-pointer"
        onClick={() => setDrawerStatus(toggle(drawerStatus))}
      >
        <h2 className="font-bold text-xl">{label}</h2>
        <Chevron rotated={drawerStatus === 'open'} />
      </div>
      <div
        className={twMerge(
          'flex flex-col gap-6 overflow-hidden max-h-0 transition-all',
          drawerStatus === 'open' && 'max-h-auto'
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Chevron({ rotated }: { rotated: boolean }) {
  return (
    <div
      className={twMerge(
        'w-6 h-6 mx-4 border-t-4 border-r-4 transform rotate-45 border-gray-800 transition-transform',
        rotated && 'rotate-135 -translate-y-1/4 translate-x-1/4'
      )}
    />
  );
}
