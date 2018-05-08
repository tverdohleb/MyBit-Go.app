import React, { Component } from 'react';

import { default as DatabaseUtil } from './contracts/DatabaseUtil';
import { default as HashFunctionsUtil } from './contracts/HashFunctionsUtil';
import * as MasterAddress from './contracts/MasterContractAddresses';

const instancePromisifier = instance =>
  promisifyAll(instance, { suffix: 'Async' });

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashFunctionsInstance: null,
      databaseInstance: null,
      fundingHubInstance: null,
      assetID: null
    };
  }

  async componentDidMount() {
    const { web3 } = this.props || {};
    if (web3.isConnected()) {
      const hashFunctionsInstance = new HashFunctionsUtil();
      const databaseInstance = new DatabaseUtil();
      await hashFunctionsInstance.load(web3);
      await databaseInstance.load(web3);

      this.setState({
        web3: web3,
        hashFunctionsInstance: hashFunctionsInstance,
        databaseInstance: databaseInstance
      });
    }
  }

  //----- Only past 10000 blocks for now ----//
  async getTransactionsByAccount(blocksToMinusCurrentBlocks) {
    let endBlockNumber;
    let startBlockNumber;
    web3.eth.getBlockNumber(function(error, result) {
      endBlockNumber = result;
      startBlockNumber = endBlockNumber - blocksToMinusCurrentBlocks;
      for (var i = startBlockNumber; i <= endBlockNumber; i++) {
        console.log('Searching block ' + i);
        web3.eth.getBlock(i, true, function(error, result) {
          let block = result;
          if (block != null && block.transactions != null) {
            block.transactions.forEach(function(e) {
              if (web3.eth.coinbase == '*' || web3.eth.coinbase == e.from) {
                if (
                  MasterAddress.FUNDINGHUB == e.to ||
                  MasterAddress.ASSET == e.to ||
                  MasterAddress.ASSETCREATION == e.to ||
                  MasterAddress.TESTADDRESS == e.to
                ) {
                  console.log(
                    '  tx hash          : ' +
                      e.hash +
                      '\n' +
                      '   nonce           : ' +
                      e.nonce +
                      '\n' +
                      '   blockHash       : ' +
                      e.blockHash +
                      '\n' +
                      '   blockNumber     : ' +
                      e.blockNumber +
                      '\n' +
                      '   transactionIndex: ' +
                      e.transactionIndex +
                      '\n' +
                      '   from            : ' +
                      e.from +
                      '\n' +
                      '   to              : ' +
                      e.to +
                      '\n' +
                      '   value           : ' +
                      e.value +
                      '\n' +
                      '   time            : ' +
                      block.timestamp +
                      ' ' +
                      new Date(block.timestamp * 1000).toGMTString() +
                      '\n' +
                      '   gasPrice        : ' +
                      e.gasPrice +
                      '\n' +
                      '   gas             : ' +
                      e.gas +
                      '\n' +
                      '   input           : ' +
                      e.input
                  );
                }
              }
            });
          }
        });
      }
    });
  }

  render() {
    return (
      <div className="TransactionHistory">
        <button onClick={this.getTransactionsByAccount.bind(this, 1000)}>
          All transactions console
        </button>
      </div>
    );
  }
}

export default TransactionHistory;

/*
function getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber) {
  if (endBlockNumber == null) {
    endBlockNumber = eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 1000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    var block = eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {
        if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
          console.log("  tx hash          : " + e.hash + "\n"
            + "   nonce           : " + e.nonce + "\n"
            + "   blockHash       : " + e.blockHash + "\n"
            + "   blockNumber     : " + e.blockNumber + "\n"
            + "   transactionIndex: " + e.transactionIndex + "\n"
            + "   from            : " + e.from + "\n"
            + "   to              : " + e.to + "\n"
            + "   value           : " + e.value + "\n"
            + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
            + "   gasPrice        : " + e.gasPrice + "\n"
            + "   gas             : " + e.gas + "\n"
            + "   input           : " + e.input);
        }
      })
    }
  }
}

*/
