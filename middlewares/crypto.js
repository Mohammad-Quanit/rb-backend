const crypto = require('crypto');
const { readFileSync } = require('fs');
const NodeRSA = require('node-rsa');
const path = require('path');

const publicKey = new NodeRSA({b: 512})


const publicKeyString = readFileSync('../rb-backend/keys/jspublicKey.pem', { encoding: 'utf-8' })
publicKey.importKey(publicKeyString)


const encryptStringWithRsaPublicKey = function(stringToEncrypt) {
    const encryptedOTP = publicKey.encrypt(stringToEncrypt, 'base64');
    console.log('this is encrypted', encryptedOTP)
    return encryptedOTP;
};

const decryptStringWithRsaPrivateKey = function(stringToDecrypt) {
    const publicKey = process.env.JS_PUBLIC_KEY_FOR_ENCRYPTION; 
    const buffer = Buffer.from(stringToDecrypt, "base64");
    const decrypted = crypto.privateDecrypt(publicKey, buffer);
    return decrypted.toString("utf8");
};

module.exports = {
    encryptStringWithRsaPublicKey,
    decryptStringWithRsaPrivateKey
};