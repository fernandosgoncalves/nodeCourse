import  prismaClient  from "../../prisma"

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

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: password
            }
        })

        return user;
    }
}

export { CreateUserService }