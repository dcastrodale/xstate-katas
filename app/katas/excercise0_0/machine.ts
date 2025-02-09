import { setup } from 'xstate';

export const machine = setup({
  types: {
    context: {} as {},
    events: {} as { type: 'foo' } | { type: 'bar' },
  },
}).createMachine({
  id: 'stoplight',
  initial: 'idle',
  states: {
    idle: {
      type: 'final',
    },
  },
});
