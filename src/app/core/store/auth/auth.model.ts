import { User } from '../../../shared/red5/declarations';

export interface UserState extends User {}

export interface AuthenticationState {
  strategy: string,
  accessToken: string,
  payload: { [key: string]: any },
}

export interface AuthState {
  accessToken?: string,
  authentication?: AuthenticationState,
  session_id?: string,
  user?: User,
  ready: boolean,
}
