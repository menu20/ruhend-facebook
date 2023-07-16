Facebook Downloader Can Download From Facebook

npm i github:menu20/ruhend-facebook

For ESM



import getFBInfo from "@ruhend/facebook";

// OR
FOR CJS

const getFBInfo = require("@ruhend/facebook");

getFBInfo("https://www.facebook.com")//Your Url
    .then((result) => console.log("Result:", result))
    .catch((error) => console.log("Error:", error));

// OR

async function printFBInfo() {
    try {
        const result = await getFBInfo(
            "https://www.facebook.com/" //Your Facebook URL
        );
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

printFBInfo();
