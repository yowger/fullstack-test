import { Request, Response, NextFunction } from "express"

type Controller = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>

const asyncHandler =
    (controller: Controller) =>
    async (req: Request, res: Response, next: NextFunction) => {
        controller(req, res, next).catch(next)
    }

export default asyncHandler
