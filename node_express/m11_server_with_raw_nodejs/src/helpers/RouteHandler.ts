import { IncomingMessage, ServerResponse } from "node:http";

export type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;

export const routes: Map<string, Map<string, RouteHandler>> = new Map();

//? this map is like Map< 'GET', '/api', ()=> res.end() , so this is like a list of all the routes
// but the key of this map is Req. type, and value is another Map<>, which has the key of the path, so this map can hold 
// multiple paths like this 
// GET -->  '/api/users',()=> res.end()
//          '/api/posts, ()=> res.end()
//          '/api/videos, ()=> res.end()

function addRoutes(method:"GET"|"POST"|"PUT"|"PATCH"|"DELETE",path:string,handler:RouteHandler){
  if(!routes.has(method)) routes.set(method,new Map());
  routes.get(method)!.set(path,handler);
}


export default addRoutes;