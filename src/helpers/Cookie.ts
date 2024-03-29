export const setCookie = (cname: string | undefined, cValue: string, exTime: string) => {
    const d = new Date();
    d.setTime(d.getTime() + timeToMillisecond(exTime));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + btoa(cValue) + ';' + expires + ';path=/';
};

export const clearCookie = (key: string) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
export const getCookie = (cname: string | undefined) => {
    try {
        const name = cname + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return window.atob(c.substring(name.length, c.length));
            }
        }
    } catch (err) {
        console.log('Error: ', err);
        return;
    }
};
const timeToMillisecond = (time: string) => {
    const number = +time.substring(0, time.indexOf(' '));
    switch (time.substr(time.indexOf(' ') + 1)) {
        case 'day':
            return number * 24 * 60 * 60 * 1000;
        case 'hour':
            return number * 60 * 60 * 1000;
        case 'minute':
            return number * 60 * 1000;
        case 'second':
            return number * 1000;
        default:
            return number * 60 * 1000;
    }
};

export const checkCookie = (cname: string | undefined) => {
    const cookieInfo = getCookie(cname);
    return !!cookieInfo;
};

export const getCookieLogin = (cname: string) => {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            const str = c.substring(name.length, c.length).replace(/\s/g, '');
            return decodeURIComponent(escape(window.atob(str)));
        }
    }
    return '';
};
