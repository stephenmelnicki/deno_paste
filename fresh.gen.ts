// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_id_index from "./routes/[id]/index.tsx";
import * as $_id_raw from "./routes/[id]/raw.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_500 from "./routes/_500.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $index from "./routes/index.tsx";
import * as $CopyToClipboardButton from "./islands/CopyToClipboardButton.tsx";
import * as $ErrorNotification from "./islands/ErrorNotification.tsx";
import * as $PasteForm from "./islands/PasteForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[id]/index.tsx": $_id_index,
    "./routes/[id]/raw.tsx": $_id_raw,
    "./routes/_404.tsx": $_404,
    "./routes/_500.tsx": $_500,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/CopyToClipboardButton.tsx": $CopyToClipboardButton,
    "./islands/ErrorNotification.tsx": $ErrorNotification,
    "./islands/PasteForm.tsx": $PasteForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
