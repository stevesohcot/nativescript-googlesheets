var fetchModule = require("tns-core-modules/fetch");

var model = {
    userName: "",
    userEmail: "",
    userQuestion: ""
};

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = model;
}

function onSubmit(args) {
    var baseURL = "https://script.google.com/macros/s/abcdef12345/exec";

    var theURL = baseURL + "?Name=" + model.userName + "&Email=" + model.userEmail + "&Question=" + model.userQuestion;

    fetch(theURL, {
        headers: getCommonHeaders()
    })

    //console.log('url', theURL);
    //console.log(model.userName);
    //console.log(model.userEmail);
    //console.log(model.userQuestion);

    const button = args.object;
    const page = button.page;
    page.frame.navigate("pages/thank-you/thank-you");

}

function getCommonHeaders() {
    return {
        "Content-Type": "application/json"
    }
}

exports.pageLoaded = pageLoaded;
exports.onSubmit = onSubmit;