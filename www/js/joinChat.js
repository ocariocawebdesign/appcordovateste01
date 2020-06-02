(function () {
    var request, b = document.body,
        c = 'className',
        cs = 'customize-support',
        rcs = new RegExp('(^|\\s+)(no-)?' + cs + '(\\s+|$)');

    request = true;

    b[c] = b[c].replace(rcs, ' ');
    // The customizer requires postMessage and CORS (if the site is cross domain).
    b[c] += (window.postMessage && request ? ' ' : ' no-') + cs;
}());