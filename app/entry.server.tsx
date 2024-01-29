import type { EntryContext } from '@remix-run/node';
import { handleRequest as netlifyHandleRequest } from '@netlify/remix-adapter';
import { RemixServer } from '@remix-run/react';
import { renderToPipeableStream } from 'react-dom/server';
import { createReadableStreamFromReadable } from '@remix-run/node';
import { PassThrough } from 'node:stream';

import Backend from 'i18next-fs-backend';
import { createInstance } from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { i18nConfig } from '~/utils/i18n.ts';
import { remixI18Next } from '~/utils/i18next.server.ts';

const ABORT_DELAY = 5_000;

export async function handleRequest(request: Request, responseStatusCode: number, responseHeaders: Headers, remixContext: EntryContext) {
  // Setup i18next
  const i18nInstance = createInstance();
  const lng = await remixI18Next.getLocale(request);
  const ns = remixI18Next.getRouteNamespaces(remixContext);

  await i18nInstance
    .use(initReactI18next)
    .use(Backend)
    .init({
      ...i18nConfig,
      lng,
      ns,
      backend: {
        loadPath: './public/locales/{{lng}}/{{ns}}.json',
      },
    });

  // Render Remix with i18next
  const { pipe, abort } = renderToPipeableStream(
    <I18nextProvider i18n={i18nInstance}>
      <RemixServer context={remixContext} url={request.url} />
    </I18nextProvider>,
    {
      onShellReady() {
        const body = new PassThrough();
        const stream = createReadableStreamFromReadable(body);

        responseHeaders.set('Content-Type', 'text/html');

        netlifyHandleRequest(
          new Request(request.url, {
            ...request,
            body: stream,
          }),
          responseStatusCode,
          responseHeaders,
          remixContext
        ).then((response) => {
          pipe(body);
        });
      },
      onShellError(error: unknown) {
        console.error('Error during rendering:', error);
      },
      onError(error: unknown) {
        console.error('Streaming error:', error);
      },
      abortDelay: ABORT_DELAY,
    }
  );

  setTimeout(abort, ABORT_DELAY);
}

export default handleRequest;
