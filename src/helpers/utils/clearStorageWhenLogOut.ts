import { clearCookie } from '../Cookie.ts';

export const clearStorageWhenLogOut = () => {
    clearCookie(import.meta.env.VITE_USER_ACCESS_TOKEN);
};
