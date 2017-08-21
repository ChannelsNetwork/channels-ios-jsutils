const secp256k1 = require('secp256k1');
const ethereumUtils = require('ethereumjs-util');

export class Utils {
  generateAddress(pkey: string): string[] {
    const privateKey = new Uint8Array(new Buffer(pkey, 'base64'));
    const publicKey = secp256k1.publicKeyCreate(new Buffer(privateKey)) as Uint8Array;
    const ethPublic = ethereumUtils.importPublic(new Buffer(publicKey)) as Uint8Array;
    const ethAddress = ethereumUtils.pubToAddress(ethPublic, false) as Uint8Array;
    return [
      new Buffer(publicKey).toString('base64'),
      new Buffer(ethPublic).toString('base64'),
      new Buffer(ethAddress).toString('base64')
    ];
  }
}
