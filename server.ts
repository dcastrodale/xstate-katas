import { createRequestHandler } from '@remix-run/express';
import { ServerBuild } from '@remix-run/node';
import express from 'express';
import invariant from 'tiny-invariant';

let port = process.env.PORT;
invariant(port, 'Missing PORT from your env vars');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(
    '*',
    createRequestHandler({
      // Will resolve when it's built
      // @ts-ignore
      build: (await import('./build/server')) as unknown as ServerBuild,
    })
  );
} else {
  const viteDevServer = await import('vite').then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    })
  );

  app.use(viteDevServer.middlewares);

  app.all(
    '*',
    createRequestHandler({
      build: () =>
        viteDevServer.ssrLoadModule(
          'virtual:remix/server-build'
        ) as Promise<ServerBuild>,
    })
  );

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}
