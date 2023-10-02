import { config } from "../config";

const baseURL = "/";

export const apiIdentityUrl = `${config.apiIdentity ? config.apiIdentity : '/api-identity'}`;
export const apiYakshaUrl = `${config.apiyaksha ? config.apiyaksha : '/api-yaksha'}`;


export {
  baseURL
};

