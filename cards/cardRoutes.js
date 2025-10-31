import { Router } from "express";
import cardCreate from "./cardCreate.js";
import cardGetAll from "./cardGetAll.js";
import cardUpdateById from "./cardUpdateById.js";
import cardDelete from "./cardDelete.js";
const router = Router();

router.post('/', cardCreate);
router.get('/', cardGetAll);
router.patch('/:cardId', cardUpdateById);
router.delete('/:cardId', cardDelete);

export default router;