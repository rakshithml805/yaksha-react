import { config } from "../config";

const baseURL = "/";

export const apiBaseUrlAsset = `${config.assetBasePath ? config.assetBasePath : '/api-asset'}`;
export const apiBaseUrlUser = `${config.userBasePath ? config.userBasePath : '/api-user'}`;
export const apiBaseUrlDoc = `${config.docBasePath ? config.docBasePath : '/api-doc'}`;
export const apiBaseUrlipo = config.ipoBasePath ? config.ipoBasePath : '/api-ipo';
export const apiBaseUrlwallet = config.walletBasePath ? config.walletBasePath : '/api-wallet';
export const apiBaseUrlportfolio = config.portfolioBasePath ? config.portfolioBasePath : '/api-portfolio';


export {
  baseURL
};

