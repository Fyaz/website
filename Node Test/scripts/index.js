exports.getFile = function (path) {
    // Default link
    var output = "./webapp/Page1.html";

    // Link to redirect to the portfolio example 
    if (path == "./example") { // url
        output = "./webapp/index.html"; // file assocaited
    }

    if (path == "./portfolio") {
        output = "./webapp/portfolio.html";
    }

    return output;
};