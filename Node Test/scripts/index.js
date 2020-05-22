exports.getFile = function (path) {

    // The working directory that contains all the webpages
    const webapp = "/webapp/";

    // Default link
    var output = webapp + "Page1.html";

    // Link to redirect to the portfolio example 
    if (path == "/example") { // url
        output = webapp + "index.html"; // file assocaited
    }

    if (path == "/portfolio") {
        output = webapp + "portfolio.html";
    }

    if (path == "/error") {
        output = webapp + "error.html";
    }

    return output;
};