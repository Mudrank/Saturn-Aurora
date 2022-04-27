# Saturn-Aurora

Step 1: Install libraries
To get started from scratch, use `npm i -D @0xsaturn/sdk ethers`
To use our boilerplate repo, use `npm i -D`

Step 2: Setting up the private key

Create a  `.env` file in the folder that you are currently working to safely store sensitive data.

Insert the following line:
`PRIVATE_KEY = “<Private key of developer’s wallet here>”`

Step 3: Using the SDK

main.ts deploys the registry module (This module enables you to easily keep track of all contracts you’ve deployed or are using).
erc20.ts deploys an erc20 token
contract.ts allows you to add a contract to the registry 

You can run any of the files using `npx ts-node <filename>`, for example `npx ts-node main.ts`.
