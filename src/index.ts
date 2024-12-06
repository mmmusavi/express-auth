import express from "express";
import bodyParser from "body-parser";
import { connectToDatabase } from "./utils/database";
import authRoutes from "./modules/auth/auth.route";
import userRoutes from "./modules/user/user.route";
import { config } from "./config";
import listEndpoints from "express-list-endpoints";

const app = express();

app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

const logRoutes = () => {
    const endpoints = listEndpoints(app);
    endpoints.forEach((endpoint) => {
        console.log(`${endpoint.methods} ${endpoint.path}`);
    });
};

const startApp = async () => {
    await connectToDatabase();
    console.log("Available routes:");
    logRoutes();
    app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
};

startApp();
