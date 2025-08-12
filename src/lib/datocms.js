import { executeQuery } from '@datocms/cda-client';
import * as dotenv from "dotenv";

dotenv.config();

export const performRequest = (query, options) => {
  return executeQuery(query, {
    ...options,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
    environment: 'main',
    includeDrafts: process.env.NEXT_PUBLIC_ENVIRONMENT === "development",
  });
}