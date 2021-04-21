import { Router } from 'express'
import { SettingsController } from './controllers/SettingsContoller';

const routes = Router()

const settingsContoller = new SettingsController();

routes.post("/settings", settingsContoller.create)

export { routes }