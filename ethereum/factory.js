import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8353B755D315DdfD7A687FC0299Bd219d2C26E28'
);

export default instance;
