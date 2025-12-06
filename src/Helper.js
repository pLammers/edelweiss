export const openWA = function () {
    window.open('https://wa.me/+4915120777965', '_blank');
}

export const isMobile = function () {
    return window.innerWidth <= 800;
}

// Navigation functions
export const navigateToHome = function () {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    // Scroll to top of page
    window.scrollTo(0, 0);
}

export const navigateToPrivacy = function () {
    window.history.pushState({}, '', '/privacy');
    window.dispatchEvent(new PopStateEvent('popstate'));
    // Scroll to top of page
    window.scrollTo(0, 0);
}

// Get current route
export const getCurrentRoute = function () {
    const path = window.location.pathname;
    if (path === '/privacy') {
        return 'privacy';
    }
    return 'home';
}