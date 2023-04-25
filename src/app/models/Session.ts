import {User} from "./User";

export interface Session {
  sessionId: string;
  // list of users
  users: User[];
}
