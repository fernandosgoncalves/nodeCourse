import { Router } from "express";

import { CreateUserController } from "./controlers/user/CreateUserController";

const router = Router();

//-- ROTAS USER --//
router.post('/users', new CreateUserController().handle)

/*router.get('/teste', (req: Request, res: Response)=> {
    return res.json({ nome: "Fernando" })
    //throw new Error('Erro ao fazer essa requisição')
})*/

export { router };