Facebook Downloader Can Download From Facebook

npm i @ruhend/facebook

For ESM
import getFBInfo from "@ruhend/facebook";

// OR
FOR CJS
const getFBInfo = require("@ruhend/facebook");

getFBInfo("https://www.facebook.com/watch?v=272591278381388")
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