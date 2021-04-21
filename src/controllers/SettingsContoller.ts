// Responsabilidade do Controller é pegar a requisição e repassar os dados para um service.
import { Request, Response } from 'express'
import { SettingsService } from '../services/SettingsService'

class SettingsController {

    async create(req: Request, res: Response) {
        const { chat, username } = req.body

        const settingsService = new SettingsService()

        const settings = await settingsService.create({ chat, username })
    
        return res.json(settings)
    }
}

export { SettingsController }