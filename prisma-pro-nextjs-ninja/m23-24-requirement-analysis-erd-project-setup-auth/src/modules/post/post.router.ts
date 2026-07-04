import express, { Router }  from 'express';
import { postControllers } from './post.controller';

const router=express.Router()

router.post('/', postControllers.createPost)





export const postRouter:Router=router
