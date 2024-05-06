import * as http2 from 'http2';
import {CodeChecker} from "./gen/app3_connect.js";
import {connectNodeAdapter, createGrpcTransport} from "@connectrpc/connect-node";
import {createPromiseClient} from "@connectrpc/connect";
import {CodeValidator} from "./gen/app4_connect.js";

const PORT = process.env.PORT || 3000;
const UPSTREAM_APP4 = process.env.UPSTREAM_APP4;

if (!UPSTREAM_APP4) {
    console.error("Upstream_APP4 port is required");
    process.exit(1);
}

const transport = createGrpcTransport({
    httpVersion: "2",
    baseUrl: `http://localhost:${UPSTREAM_APP4}`
})

const client = createPromiseClient(CodeValidator, transport);

const routes = (router) =>
    router.service(CodeChecker, {
        async printAndCheckIsCodeValid(req) {
            console.log(`Code provided to app3 is ${req.code}`);
            const {valid} = await client.validateCode({code: req.code});
            return {
                valid: valid
            }
        }
    });

http2.createServer(connectNodeAdapter({
    routes
})).listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});