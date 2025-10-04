import { RpcTarget } from "capnweb";

export interface Api extends RpcTarget {
  greet(name: string): string;
}

