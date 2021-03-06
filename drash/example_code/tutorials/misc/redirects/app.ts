import { Drash } from "https://deno.land/x/drash/mod.ts";

import ColaResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [ColaResource],
});

server.run({
  hostname: "localhost",
  port: 1447
});
