import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await authServices.loginUser(email, password);
    if(result){
      res.status(200).json({
        success: true,
        data: result,
      });  
    }else{
      res.status(401).json({
        success: false,
        message: 'Incorrect email or password',
      });
    }

  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as any).message,
    });
  }
};


export const authController={
  loginUser
}
