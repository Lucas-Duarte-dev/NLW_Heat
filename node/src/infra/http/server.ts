import {serverHttp} from "./app";

serverHttp.listen(process.env.PORT || 3000, () => console.log("Server is running"));