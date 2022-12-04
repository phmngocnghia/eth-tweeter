import UserStorage from "../../artifacts/UserStorage.json"
import UserController from "../../artifacts/UserController.json"
import { getInstance } from "../getInstance"

export const getStorage = async () =>
  getInstance(UserStorage)


export const getController = async () => getInstance(UserController)
