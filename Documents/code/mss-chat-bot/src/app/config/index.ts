import { ILogType } from '../utils/logger';

declare interface AppConfig {
  LOG_LEVEL?: string | ILogType;
  VALIDATE_URL: string;
  DOMAIN_URL: string;
  MSS_SERVICES_URL: string;
  SIGN_IN_URL: string;
  CHECK_LOGGED_IN: string;
  CHECK_STATUS_USER: string;
}

global.env = process.env;

const Config: AppConfig = {
  LOG_LEVEL: process.env.LOG_LEVEL,
  CHECK_LOGGED_IN: process.env.REACT_APP_CHECK_LOGGED_IN as string,
  CHECK_STATUS_USER: process.env.REACT_APP_CHECK_STATUS_USER as string,
  VALIDATE_URL: process.env.REACT_APP_VALIDATE_URL as string,
  DOMAIN_URL: process.env.REACT_APP_DOMAIN_URL as string,
  MSS_SERVICES_URL: process.env.REACT_APP_MSS_SERVICES_URL as string,
  SIGN_IN_URL: process.env.REACT_APP_SIGN_IN_URL as string,
};

export default Config;
