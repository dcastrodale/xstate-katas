/**
 * This is just the instructions for the excercise.
 * You won't have to do anything in here.
 */

import { Drawer, Sidebar, Text } from '@/components';

export function Description() {
  return (
    <>
      <Sidebar>
        <h1 className="text-3xl font-bold border-b-2 border-slate-400 py-6">
          The Stoplight
        </h1>
        <Drawer label="Challenge 1">
          <Text>
            The classic state machine example. Create a state machine that will
            drive the stoplight. Assume that each light 'state' will be active
            for five seconds.
          </Text>

          <Text>
            Assume this is a North American-style stoplight. This means that
            there is <strong>no amber light before green</strong>. So, for
            example, the stoplight will run:
            <p className="bg-slate-200 text-slate-800 p-4 rounded-sm font-bold my-8">
              Red &nbsp;&nbsp; ➡️&nbsp; &nbsp; Green &nbsp;&nbsp; ➡️&nbsp;
              &nbsp; Amber &nbsp;&nbsp; ➡️&nbsp; &nbsp; Red &nbsp;&nbsp;
              ➡️&nbsp; &nbsp; etc.
            </p>
            The <code>{'<Stoplight />'}</code> component takes a status object
            you can use to turn lights on or off.
          </Text>
        </Drawer>

        <Drawer label="Challenge 2">
          <Text>
            Now, let's implement a <span className="italic">UK</span> stoplight.
          </Text>

          <Text>
            The key difference here is that there is now also an Amber state
            before the Green state. For example, it will run
            <p className="bg-slate-200 text-slate-800 p-4 rounded-sm font-bold mt-8">
              Red &nbsp;&nbsp; ➡️&nbsp; &nbsp; Amber ➡️&nbsp; &nbsp; Green
              &nbsp;&nbsp; ➡️&nbsp; &nbsp; Amber &nbsp;&nbsp; ➡️&nbsp; &nbsp;
              Red &nbsp;&nbsp; ➡️&nbsp; &nbsp; Amber&nbsp; &nbsp; ➡️&nbsp;
              &nbsp; Green&nbsp; &nbsp; ➡️&nbsp; &nbsp; etc.
            </p>
          </Text>
        </Drawer>

        <Drawer label="Challenge 3">
          <Text>
            Now, a bit of a challenge. Let's imagine that there is a magical
            override button for our stoplight. When you press an override
            button, it will <strong>immediately</strong> change the light to
            that colour for five seconds. When that five seconds is over, the
            light will transition back to the colour it would have normally
            transitioned to before the override.
          </Text>

          <Text>
            For example, imagine we are on an Amber light, with the light about
            to turn Red. We are impatient and don't want to stop, though, so we
            press the Green override button. The light immediately turns green
            for five seconds. When the five seconds is up, though, the light
            will turn <span className="italic">immediately</span> red, because
            that is the state we <span className="italic">would</span> have
            transitioned to if we hadn't pressed the override button.
            <br />
            <br />
            It would look something like this:
            <p className="bg-slate-200 text-slate-800 p-4 rounded-sm font-bold mt-8">
              Green &nbsp;&nbsp; ➡️&nbsp; &nbsp; Amber ➡️&nbsp; &nbsp;{' '}
              <strong>Press Green Override button</strong>
              &nbsp;&nbsp; ➡️&nbsp; &nbsp; Green (because of override)
              &nbsp;&nbsp; ➡️&nbsp; &nbsp; Red (because back to
              normal)&nbsp;&nbsp; ➡️&nbsp; &nbsp; Amber&nbsp; &nbsp; ➡️&nbsp;
              &nbsp; Green&nbsp; &nbsp; ➡️&nbsp; &nbsp; etc.
            </p>
          </Text>
        </Drawer>
      </Sidebar>
    </>
  );
}
