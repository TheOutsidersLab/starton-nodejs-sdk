# Starton Library

Starton library to use smart contract function via Starton

# Description

This SDK is a simple solution that allows you to call any smart contract via Starton API
You just need to follow step by step this README =)

```js
import Starton from '@theoutsiderslab/starton-nodejs-sdk'

const $starton = new Starton(/* my Starton API_KEY*/)

$starton.smartContract.getSmartContractFunctions('ethereum-goerli', '')
```

Most of Starton endpoints are implemented.
To read more about Starton API : https://docs.starton.io/

# Installation

Create a ```.npmrc``` file with the following text
```
@theoutsiderslab:registry=https://npm.pkg.github.com
```

You can now install like any other dependencies using npm

```
npm install @theoutsiderslab/starton-nodejs-sdk --save
# or with yarn
yarn add @theoutsiderslab/starton-nodejs-sdk
```

This library support both UMD and ESModule
