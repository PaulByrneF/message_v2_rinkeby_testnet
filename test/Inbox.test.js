const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile.js');

// Mocha Structure
// Mocha STARTS
// beforeEach: Deploy a new contract
// it: Manipulate the contact
// it: Make an assertion about the contract

let accounts;
let inbox;
const INITIAL_MESSAGE = ['Hi There!']

beforeEach( async() => {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts(); 
    //Use one of the accounts to deploy 
    //the contract

    //web3 library interacting portal to ethereum
    //web3.eth allows us to access the etherum module
    //Accessing contract property: contract is constructer functionn
    //Or create and deploy new contracts
    //Contract constructer : solidity compiler -> ABI interface
    
    //.deploy -> what tells web3 that we want to deploy
    //creates transaction object property
    //creates arguement property

    //.send -> triggers comms from web3 -> network
    //creates from property: address
    //creates gas object -> limit of resources to use when deploying
    
    //inbox represents the contract on the blockchain
    //can call functions in contract on blockchain
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: INITIAL_MESSAGE })
        .send({ from: accounts[0], gas: '1000000' })

        inbox.setProvider(provider);
});

describe('Inbox', ()=>{
    it('deploys a contract', () => {
        //assert.ok validates if the arguement exists
        assert.ok(inbox.options.address);
        // console.log(inbox) 
        // - print the contracts properties and method
       
        // assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, INITIAL_MESSAGE[0]);
    });

    it('can update message', async ()=> {
        // Transaction Hash is returned & BlockTime
        await inbox.methods.setMessage('Bye!').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, 'Bye!');
    })
});





// Tutorial for Mocha test library
// class Car {
//     park(){
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }
// }
// //Runs before each it block

// let car;
// beforeEach(()=>{
//     car = new Car();
// });

// describe('Car', () => {

//     it('can park', ()=>{
//         assert.strictEqual(car.park(), 'stopped');
//     })

//     it('can drive', ()=>{
//         assert.strictEqual(car.drive(), 'vroom')
//     })
// })