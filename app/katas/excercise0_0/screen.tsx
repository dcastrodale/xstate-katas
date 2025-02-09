import { useMachine } from '@xstate/react';
import { twMerge } from 'tailwind-merge';

import { machine } from './machine';

export function ExcerciseZeroScreen() {
  let [state, send] = useMachine(machine);
  console.log(state);
  console.log(send);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Stoplight
        status={{
          red: 'off',
          amber: 'off',
          green: 'off',
        }}
      />
    </div>
  );
}

export type Colour = 'red' | 'amber' | 'green';
export type LightStatus = 'on' | 'off';

type Props = { status: Record<Colour, LightStatus> };

function Stoplight({ status }: Props): JSX.Element {
  return (
    <div className="flex flex-col w-[250px] h-auto p-[30px] border-solid border-black border-2 rounded-md gap-4 overflow-hidden">
      <ColouredLight colour="red" status={status.red} />
      <ColouredLight colour="amber" status={status.amber} />
      <ColouredLight colour="green" status={status.green} />
    </div>
  );
}

function ColouredLight({
  colour,
  status,
}: {
  colour: Colour;
  status: LightStatus;
}) {
  return (
    <div className="w-full aspect-square border-2 border-solid border-black rounded-full">
      <div
        className={twMerge(
          'w-full h-full rounded-full',
          colour === 'red' && 'bg-red-700',
          colour === 'amber' && 'bg-amber-300', // TODO
          colour === 'green' && 'bg-green-500', // TODO
          status === 'off' && 'opacity-0' // TODO
        )}
      />
    </div>
  );
}
