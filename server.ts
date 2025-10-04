import { Context, Hono } from "hono";
import { newHttpBatchRpcResponse, RpcTarget } from "capnweb";
import { Api } from "./api.ts";

class ApiImpl extends RpcTarget implements Api {
  constructor(private c: Context) {
    super();
  }
  greet(name: string): string {
    console.log(this.c.header("X-Custom-Header")); // TODO
    for (const [key, value] of this.c.req.raw.headers.entries()) {
      console.log(`${key}: ${value}`);
    }
    return `Hello, ${name}!`;
  }
}

const app = new Hono();
app.post("/api", (c) => newHttpBatchRpcResponse(c.req.raw, new ApiImpl(c)));
export default { fetch: app.fetch };
