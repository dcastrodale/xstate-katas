import { useMachine } from '@xstate/react';
import { twMerge } from 'tailwind-merge';

import { machine } from './machine';

export function ExcerciseZeroScreen() {
  let [state, send] = useMachine(machine);
  console.log(state);
  console.log(send);

  return (
    <Stoplight
      status={{
        red: 'off',
        amber: 'off',
        green: 'off',
      }}
    />
  );
}

export type Colour = 'red' | 'amber' | 'green';
export type LightStatus = 'on' | 'off';

type Props = { status: Record<Colour, LightStatus> };

function Stoplight({ status }: Props): JSX.Element {
  return (
    <div className="w-12 border-black h-12 border-red-100">
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
    <div
      className={twMerge(
        'w-10 rounded-lg',
        colour === 'red' && 'bg-red-700',
        colour === 'amber' && 'bg-yellow', // TODO
        colour === 'green' && 'bg-green-500', // TODO
        status === 'off' && 'opacity-0' // TODO
      )}
    />
  );
}
