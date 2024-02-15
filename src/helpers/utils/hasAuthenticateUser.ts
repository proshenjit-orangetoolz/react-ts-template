import CookieService from '../../services/cookie/cookie.service.ts';

const hasAuthenticatedUser = () => {
    return CookieService.checkCookie(import.meta.env.VITE_USER_ACCESS_TOKEN);
};

export default hasAuthenticatedUser;
