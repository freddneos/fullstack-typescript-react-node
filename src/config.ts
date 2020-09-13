export const SERVER_PORT = parseInt(
  process.env.SERVER_PORT || process.env.PORT || "3000"
);

export const SERVER_ENVIRONMENT: string =
  process.env.SERVER_ENVIRONMENT || process.env.ENVIRONMENT || "LOCAL";

export const SERVER_API_BASE_URL: string =
  process.env.API_URL ||
  process.env.SERVER_API_URL ||
  `http://127.0.0.1:${SERVER_PORT}/api`;
