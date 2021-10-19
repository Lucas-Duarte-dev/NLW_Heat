import {Router} from "express";
import {authRoutes} from "./auth.routes";

const routes = Router();

routes.use("/authenticate", authRoutes);

export {routes};