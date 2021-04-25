import { Router } from 'express'
import { MessagesController } from './controllers/MessagesController'
import { SettingsController } from './controllers/SettingsContoller'
import { UsersController } from './controllers/UsersController'

const routes = Router()

const settingsContoller = new SettingsController()
const usersContoller = new UsersController()
const messagesController = new MessagesController()

routes.post("/settings", settingsContoller.create)
routes.get("/settings/:username", settingsContoller.findByUsername)
routes.put("/settings/:username", settingsContoller.update)

routes.post("/user", usersContoller.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes }