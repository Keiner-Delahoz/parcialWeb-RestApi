import { Router } from "express";
import {getAvion, getAvionById, createAvion, updateAvion, deleteAvion} from '../controllers/avion.controller.js'

const router = Router();

router.get('/avion', getAvion);

router.get('/avion/:id', getAvionById);

router.post('/registrarAvion', createAvion);

router.patch('/avion/:id', updateAvion);

router.delete('/avion/:id', deleteAvion);

export default router;