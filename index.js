// import * as authController from "./controllers/authController";
//
// const cookieParser = require("cookie-parser");
// const globalConfig = require("eh_config");
// const usersRoute = require("./routes/usersRoute");
// const tokenRoute = require("./routes/tokenRoute");
// const http = require('https');
// const express = require('express');
// const bodyParser = require("body-parser");
//
// const PORT = 4250;
// const app = express();
//
// authController.initializeAuthentication();
//
// app.use(bodyParser.raw({limit: "500mb", type: 'application/octet-stream'}));
// app.use(bodyParser.text({limit: "500mb"}));
// app.use(bodyParser.json({limit: "100mb"}));
// app.use(bodyParser.urlencoded({limit: "100mb", extended: true}));
// app.use(cookieParser(globalConfig.mJWTSecret));
//
// const httpServer = http.createServer(app);
//
// app.use("/", tokenRoute);
// app.use("/user", usersRoute);
//
// app.use(authController.authenticate);
//
// httpServer.listen(PORT, () => {
//   console.log(`🚀 Server ready at https://localhost:${PORT}`)
// });
