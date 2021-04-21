import { Router } from 'express'
import { SettingsController } from './controllers/SettingsContoller'
import { UsersController } from './controllers/UsersController'

const routes = Router()

const settingsContoller = new SettingsController()
const usersContoller = new UsersController()

routes.post("/settings", settingsContoller.create)
routes.post("/user", usersContoller.create)

export { routes }