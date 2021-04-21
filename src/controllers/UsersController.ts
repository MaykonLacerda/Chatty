// Responsabilidade do Controller é pegar a requisição e repassar os dados para um service.
import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

class UsersController {

    async create(req: Request, res: Response): Promise<Response> {
        const { email } = req.body

        const usersService = new UsersService()

        const user = await usersService.create(email)
        
        return res.json(user)
    }
}

export { UsersController }