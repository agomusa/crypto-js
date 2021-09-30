import { Buffer } from "https://deno.land/std@0.109.0/node/buffer.ts";

const ZEROS = Buffer.alloc(128);

class Hmac {
  private alg: string;
  private hash: any;
  private ipad: any;
  private opad: any;
  private key: Uint8Array;

  constructor(alg: string, key: Uint8Array) {
    const blocksize = (alg === "sha512" || alg === "sha384") ? 128 : 64;

    this.alg = alg;
    this.key = key;

    if (key.length > blocksize) {
      // const hash = alg === "rmd160" ? new RIPEMD160() : sha(alg);
      // key = hash.update(key).digest();
    }

    if (key.length < blocksize) {
      key = Buffer.concat([key, ZEROS], blocksize);
    }

    // const ipad = this.ipad = Buffer.allocUnsafe(blocksize);
    // const opad = this.opad = Buffer.allocUnsafe(blocksize);
    //
    this.hash = undefined;
  }

  update(data: any) {
    this.hash.update(data);
  }

  final() {
    // const h = this.hash.digest();
    // const hash = this.alg === "rmd160" ? new RIPEMD160() : sha(this.alg);
    // return hash.update(this._opad).update(h).digest();
  }
}

export default function createHmac(alg: string, key: string | Uint8Array) {
  if (typeof key === "string") {
    key = Buffer.from(key);
  }

  alg = alg.toLowerCase();
  return new Hmac(alg, key as Uint8Array);
}
