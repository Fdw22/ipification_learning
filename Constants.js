const ENV = {
  SANDBOX: "sandbox",
  PRODUCTION: "production",
};

export default Constants = {
  ENV: ENV.SANDBOX, //supports "sandbox" or "production"
  CLIENT_ID: "a87b341ac02249efbac5c50684b00c60",
  REDIRECT_URI: "https://www.google.co.id/",
  CLIENT_SECRET: "FvpJX3vb4VcWDpTgYyycL0cniBD86UdK", // for demo purpose only

  TOKEN_EXCHANGE_HOST: "https://stage.ipification.com",
  TOKEN_PATH: "/auth/realms/ipification/protocol/openid-connect/token",
  GET_USER_INFO_PATH:
    "/auth/realms/ipification/protocol/openid-connect/userinfo",

  //for IM only
  REGISTER_DEVICE_TOKEN_URL:
    "https://cases.ipification.com/merchant-service/register-device",
  CURRENT_DEVICE_TOKEN: "",
  CURRENT_STATE: "",
};
