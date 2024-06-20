import  prismaClient  from "../../prisma"
import { hash } from "bcryptjs";

interface UserRequest{
    name: string;
    email: string;
    password: string
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        //Verificar se enviou um e-mail
        if(!email){
            throw new Error("E-mail incorreto!")
        }

        //Verificar se esse e-mail já está cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Usuário já existente!")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService }