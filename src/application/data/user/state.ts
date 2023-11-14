import type { UserInfo } from './info';

export interface UserState {
  userInfo?: UserInfo;
  token?: string;
}
