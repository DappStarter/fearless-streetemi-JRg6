require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind hub include clinic fringe skirt'; 
let testAccounts = [
"0xe3db483a07abf643f9291e382e737d59570ecaeda6af3956a12f816277bd74df",
"0x414f7e6fa7932237c5f872ac577219f704ca745a51835b8e1ac92eddd66c2512",
"0xbc778927de3af749c51592ea8557b170e369ba6a929b4449503cc1fe3996b166",
"0xf2e4c72156d9a5779d6de7e6c1bed3dcf4713047c459bb0ecbf14697099af468",
"0x7812753ac9a1f3ec4d79d81c926abe3da43412c6a66784a023c53923681e2c69",
"0xd48d6b2ed79be4c6d53a55de4401821a51be0b70a8f287ca6a319716709c8ed1",
"0x31259e847583034fa3ed1b7c594f1bcbcff7a0e64ade875d3b55fa787b707b83",
"0x86431081859abacc2fb7b8e1a9f470ecfe716eea17b5d4065d7da521566f0c35",
"0xa808a8819970d23a8d5fd58bd57f840725ce42717d20cdfbbb116415f9367d79",
"0x98098e3be1c8000f987d2098dcdcdc9a69a9c0e5516ce78f66df5bc7e22dbfad"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

