const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {interface: contrInterface, bytecode} = require('../compile');


let accounts;
let storage;

beforeEach(async ()=>{
   // get a list of all accounts
    //use one of these accounts to deploy the contact
    accounts = await web3.eth.getAccounts();

    storage = await new web3.eth.Contract(JSON.parse(contrInterface))
        .deploy({data: bytecode, arguments: [123]})
        .send({gas: 1000000,from: accounts[0]});
});


describe('SimpleStorage',()=>{
    it('deploys a contract',()=>{
        console.log(storage);
    })
})