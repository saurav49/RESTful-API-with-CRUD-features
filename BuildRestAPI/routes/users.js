import express from "express";

import {createUser, getUser, getUserById, deleteUser, editUser} from "../component/users.js";

const router = express.Router();

router.get('/', getUser);

// Adding user to the users array
router.post('/', createUser);

// Getting unique user by their id
router.get('/:id', getUserById);

// Deleting user
router.delete('/:id', deleteUser);

// Editing user
router.patch('/:id', editUser);

export default router;