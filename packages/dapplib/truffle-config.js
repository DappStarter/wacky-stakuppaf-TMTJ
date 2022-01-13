require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strong riot mad huge idea loan flower gaze'; 
let testAccounts = [
"0xc016a20c8408dfb8cac06493f8a2970e6a40623a67064fb9b00410695d745056",
"0x6b54fec21e000ef15f490078a14293bf604392ae915dd3b5d6c6e999bc811991",
"0xd8ed17c96c3046eb224ead4096817be428f45908e7e386c81d341b1cf17954f6",
"0x6ad50a97d955c74835012335952707b28351960768124349fb38313cfcaa0044",
"0xfabe16244c09d2105a42eddfc9e00e0be7607d80bd5f5ce15d490cc0da2fd7a7",
"0xeed4f5fc4d54061c577a22bb57d5ec2baecdf1314d9792029d9922cb5f8b0daa",
"0x38efbd630764663269121f35a2b325056f2452a281f9b4a702c463a0c5265c10",
"0xd245693451f7add579d17788747f972f93d47b973da765c89f7bab93a5ef26cc",
"0xf360e79ba37bf19ea39418ae5f1d8a73e62377596b1bb5a2b1dbc806183de11a",
"0x1fe9b3eb8cc41574c523c8f048c21b63b14f638b21087618d84e1678bdae883e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

