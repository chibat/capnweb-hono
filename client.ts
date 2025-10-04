import { newHttpBatchRpcSession } from "capnweb";
import { Api } from "./api.ts";

// let api = newHttpBatchRpcSession<MyApi>({url: "http://localhost:8000/api", headers: { 'x-custom-header': 'myvalue' } });
const api = newHttpBatchRpcSession<Api>("http://localhost:8000/api", {
  headers: { "x-custom-header": "myvalue" },
}); // TODO header
const result = await api.greet("World");
console.log(result); // "Hello, World!"
