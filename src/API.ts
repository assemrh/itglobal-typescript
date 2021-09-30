import {
    USERS_BASE_URL,
    API_BASE_URL
    } from './config';
import { User } from './Types/Types';


  
export default {
    fetchUsers: async (searchTerm: string, page: number): Promise<User[]> => {
      const endpoint: string = `${USERS_BASE_URL}`;
      console.log('endpoint',endpoint);
      return await (await fetch(endpoint)).json();
    },
    fetchUser: async (userId: string): Promise<User> => {
      const endpoint: string = `${USERS_BASE_URL}/${userId}`;
      return await (await fetch(endpoint)).json();
    }
  };
  