import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(req: Request, res: Response){
        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute();

        return category;
    }
}

export { CreateCategoryController }