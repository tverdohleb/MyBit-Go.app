import React, { Component } from 'react';
import { promisifyAll } from 'bluebird';

import { default as DatabaseUtil } from './contracts/DatabaseUtil';
import { default as HashFunctionsUtil } from './contracts/HashFunctionsUtil';
import { default as FundingHubUtil } from './contracts/FundingHubUtil';

const instancePromisifier = instance =>
  promisifyAll(instance, { suffix: 'Async' });

class AssetFunding extends Component {
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
      const assetID =
        '0x9fa4b8b98bb0a480b94904a47b0943ed0607d0f9a1971854593486b9f7607740';
      const hashFunctionsInstance = new HashFunctionsUtil();
      const databaseInstance = new DatabaseUtil();
      const fundingHubInstance = new FundingHubUtil();
      await hashFunctionsInstance.load(web3);
      await databaseInstance.load(web3);
      await fundingHubInstance.load(web3);

      this.setState({
        assetID: assetID,
        hashFunctionsInstance: hashFunctionsInstance,
        databaseInstance: databaseInstance,
        fundingHubInstance: fundingHubInstance,
        amountToBeRaised: web3.fromWei(
          await databaseInstance.uintStored(
            await hashFunctionsInstance.stringBytes('amountToBeRaised', assetID)
          ),
          'ether'
        ),
        amountRaised: web3.fromWei(
          await databaseInstance.uintStored(
            await hashFunctionsInstance.stringBytes('amountRaised', assetID)
          )
        ),
        web3: web3
      });
    }
  }

  async fundingButton() {
    //console.log(this.state.assetID);
    await this.state.fundingHubInstance.fund(
      '0x9fa4b8b98bb0a480b94904a47b0943ed0607d0f9a1971854593486b9f7607740',
      0.01
    );
    //console.log(this.state.fundingHubInstance);
  }

  render() {
    return (
      <div className="AssetFunding">
        Amount To Be raised: {this.state.amountToBeRaised}
        Amount raised: {this.state.amountRaised}
        <button onClick={this.fundingButton.bind(this)}>
          Fund with static variables
        </button>
      </div>
    );
  }
}

export default AssetFunding;
