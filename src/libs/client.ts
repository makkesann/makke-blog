import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'makke-blog',
  apiKey: process.env.API_KEY,
  // apiKey: "AOHEsVJTTR2SvPs2HQoBKb6Zxea1MbmqwZ0G",
});