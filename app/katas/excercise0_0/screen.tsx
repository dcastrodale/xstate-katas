import { useMachine } from '@xstate/react';
import { twMerge } from 'tailwind-merge';

import { ExcerciseContent } from '@/components';
import { machine } from './machine';
import { Description } from './description';

export type Colour = 'red' | 'amber' | 'green';
export type LightStatus = 'on' | 'off';

export function ExcerciseZeroScreen() {
  let [state, send] = useMachine(machine);

  return (
    <>
      <Description />

      <ExcerciseContent>
        <Stoplight
          status={{
            red: 'off',
            amber: 'off',
            green: 'off',
          }}
        />
        <OverrideButtons handleClick={() => {}} />
      </ExcerciseContent>
    </>
  );
}

type Props = { status: Record<Colour, LightStatus> };

function Stoplight({ status }: Props): JSX.Element {
  return (
    <div className="flex flex-col w-[250px] h-auto p-[30px] border-solid border-black border-2 bg-slate-50 rounded-md gap-4 overflow-hidden">
      <ColouredLight colour="red" status={status.red} />
      <ColouredLight colour="amber" status={status.amber} />
      <ColouredLight colour="green" status={status.green} />
    </div>
  );
}

function OverrideButtons({
  handleClick,
}: {
  handleClick: (colour: Colour) => void;
}) {
  return (
    <div className="m-10 p-6 border-2 border-slate-800 bg-slate-50 flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-xl">Override Buttons</h1>
      <button
        className="w-4/5 bg-slate-200 p-2 rounded-lg hover:cursor-pointer border-1 border-slate-400 transition-colors active:bg-slate-300"
        onClick={() => handleClick('red')}
      >
        Green
      </button>
      <button
        className="w-4/5 bg-slate-200 p-2 rounded-lg hover:cursor-pointer border-1 border-slate-400 transition-colors active:bg-slate-300"
        onClick={() => handleClick('red')}
      >
        Amber
      </button>
      <button
        className="w-4/5 bg-slate-200 p-2 rounded-lg hover:cursor-pointer border-1 border-slate-400 transition-colors active:bg-slate-300"
        onClick={() => handleClick('red')}
      >
        Red
      </button>
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
          colour === 'amber' && 'bg-amber-300',
          colour === 'green' && 'bg-green-500',
          status === 'off' && 'opacity-0'
        )}
      />
    </div>
  );
}
