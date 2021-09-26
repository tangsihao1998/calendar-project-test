export const isMobile = () => window.innerWidth < 640;
export const isIOS = window.navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
export const isAndroid = window.navigator.userAgent.match(/Android/i);
export const isMobileDevice = isIOS || isAndroid || window.navigator.userAgent.match(/webOS|BlackBerry|IEMobile|Opera Mini/i);