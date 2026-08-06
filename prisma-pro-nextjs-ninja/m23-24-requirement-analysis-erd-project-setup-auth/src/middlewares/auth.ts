import { auth } from "../lib/auth";
import { userRoles } from "../modules/post/post.router";
import { Request,Response,NextFunction } from "express";



const authMiddleware = (...roles: userRoles[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);
    // console.log(roles); // these are the allowed roles
    // who is login in?
    const session = await auth.api.getSession({
      headers: req.headers,
    });
    // console.log("middleware!!!!");
    // console.log({ session });
    if (!session) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized",
      });
    }
    if (!session.user.emailVerified) {
      return res.status(403).json({
        success: false,
        message: "Email verification required",
      });
    }
    
    if(roles.length && !roles.includes(session.user.role as userRoles)){
      return res.status(404).json({
        success: false, 
        message: "Forbidden! You don't have permission to access this resource!"
      })
      
    }
    
    const sessionUser = session.user;
    req.user = {
      id: sessionUser.id,
      email: sessionUser.email,
      name: sessionUser.name,
      role: sessionUser.role as string,
      userId: sessionUser.id,
      emailVerified: sessionUser.emailVerified,
    };
    // console.log(req);
    next();
  };
};


export default authMiddleware;