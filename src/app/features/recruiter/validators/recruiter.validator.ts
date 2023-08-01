import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../../shared/util/http-response.adapter";
import { JwtService } from "../../../shared/services/jwt.service";

export class RecruiterValidator {
  public static checkRecruiterToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const token = req.headers.authorization;

      const jwtService = new JwtService();
      const user = jwtService.decodeToken(token as string);

      if (user.type !== "R") {
        return HttpResponse.forbidden(res);
      }

      next();
    } catch (error: any) {
      return res.status(500).send({
        ok: false,
        error: error.toString(),
      });
    }
  }
}
