const devBaseURL="http://localhost:3000";//开发环境
const proBaseURL="http://localhost:3000";//生产环境 
// const devBaseURL="http://123.207.32.32:9001";//开发环境
// const proBaseURL="http://123.207.32.32:9001";//生产环境

export const BASE_URL= process.env.NODE_ENV==="development" ? devBaseURL:proBaseURL;
export const TIMEOUT=5000;