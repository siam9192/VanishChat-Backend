"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
function main() {
    app_1.server.listen(7000, () => {
        console.log('Server is running');
    });
}
main();
