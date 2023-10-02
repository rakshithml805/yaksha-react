

export const config = {
    domain: import.meta.env.VITE_DOMAIN,
    clientId: import.meta.env.VITE_CLIENT_ID,
    audience: import.meta.env.VITE_AUDIENCE,
    // 
    walletApiKey: import.meta.env.VITE_WALLET_KEY || 'yxJrGl2rL9B318Sh', // this needs to be configured from env variables
    paymentGatewayApiKey: import.meta.env.VITE_PAYMENT_GATEWAY_KEY || '80db01902ee30135d32f873915b000cbe6a8b9882ff0b88a02b5a0c0cade6b277036ecf8075f46f6fb7453e060a733fe17a19db78e62cb229477a47e95ee1c02', // this needs to be configured from env variables
    assetBasePath: import.meta.env.VITE_ASSET_API_BASE_PATH ,
    userBasePath: import.meta.env.VITE_USER_API_BASE_PATH,
    docBasePath: import.meta.env.VITE_DOC_API_BASE_PATH,
    ipoBasePath: import.meta.env.VITE_IPO_API_BASE_PATH,
    walletBasePath: import.meta.env.VITE_WALLET_API_BASE_PATH,
    portfolioBasePath: import.meta.env.VITE_PORTFOLIO_API_BASE_PATH,
}