import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xbdbCFad4691f72a6D55AC5b513C1c95B12c84BcD'
);

export default instance;
