import { Router } from 'express'
import { getCustomRepository } from 'typeorm'
import { SettingsRepository } from './repositories/SettingsRepository'

const routes = Router()

routes.post("/settings", async (req, res) => {
    const { chat, username } = req.body

    const settingsRepository = getCustomRepository(SettingsRepository)

    //Criando objeto dentro da tabela
    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings)

    return res.json(settings)
})

export { routes }