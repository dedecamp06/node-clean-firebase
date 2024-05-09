import * as admin from "firebase-admin";
admin.initializeApp();
import { createUser } from "./main/user.controller";
import { onUserCreated } from "./infra/firestone";

exports.createUser = createUser;
exports.onUserCreated = onUserCreated;
