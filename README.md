# Smart Contracts: Ethereum

Learning about blockchain technology. 

1. I created my first smart contract using solidity.
2. Created my own custom compiler to compile my smart contract and output: ABI & ByteCode
3. Deployed my smart contract on a local test ethereum network using ganache and Web3
4. Created a test suite using Mocha javascript testing library to:

    a. Test that an address was used to deploy contact onto the blockchain network
    b. Test that an inital message was passed through as an argument to the contract when created and instantiated in the network.
    c. Test the setMessage function by passing an argument of type string into the function in the smart contract to alter the data by using the send method, specifiying the payable account.  


Notes: When creating smart contracts, the constructor function will automatically create a getFunction that can be called to return the value of the public contract variable.

When reading data from the contract no cost is incurred. I.e. .call() is used
When altering/updating data in a smart contract, a cost is incurred on the account address specified in the send function. I.e. .send({ from: accAddress})


# Deploying to Rinkbey Network & Interaction
Node ------ |                                                         #Web3
            |                                                           |
        Infura Node  -> Infura API -> Provider - > web3 instance (Instantiated Web3)
            |                            |
Node -------|                       Account Mnemonic

# Provider needs real account with real "Fake" ether to deploy: MetaMask
Ganache -> Provider -> web3 instance (Instantiated from Web3 constructer)
