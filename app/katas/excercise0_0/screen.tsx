import { useMachine } from '@xstate/react';
import { twMerge } from 'tailwind-merge';

import { Drawer, ExcerciseContent, Sidebar, Text } from '@/components';
import { machine } from './machine';

export function ExcerciseZeroScreen() {
  let [state, send] = useMachine(machine);

  return (
    <>
      <Sidebar>
        <Drawer label="Challenge 1">
          <Text>
            The classic state machine example. Create a state machine that will
            drive the stoplight. Assume that each light 'state' will be active
            for five seconds.
          </Text>

          <Text>
            Assume this is a North American style stoplight. This means that
            there is <strong>no amber light before red</strong>. So, for
            example, the stoplight will run
            <ol type="1">
              <li>Red</li>
              <li>Green</li>
              <li>Amber</li>
              <li>Red</li>
            </ol>
          </Text>
        </Drawer>
      </Sidebar>

      <ExcerciseContent>
        <Stoplight
          status={{
            red: 'off',
            amber: 'off',
            green: 'off',
          }}
        />
      </ExcerciseContent>
    </>
  );
}

export type Colour = 'red' | 'amber' | 'green';
export type LightStatus = 'on' | 'off';

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
