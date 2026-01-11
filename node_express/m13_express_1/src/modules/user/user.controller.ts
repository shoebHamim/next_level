import { NextFunction, Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const result = await userServices.createUser(name, email);
    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as any).message,
    });
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await userServices.getUser(id as string);

    res.status(200).json({
      success: true,
      data: user.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as any).message,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const result = await userServices.updateUser(name, email, id as string);

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as any).message,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userServices.deleteUser(id as string);
    if (result.rowCount) {
      res.status(200).json({
        success: true,
        message: "User Deleted Successfully!",
      });
    }
    res.status(404).json({
      success: false,
      message: "User Not Found!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as any).message,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getAllUsers();

    res.status(200).json({
      success: true,
      data: users.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as any).message,
    });
  }
};

export const userControllers = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
