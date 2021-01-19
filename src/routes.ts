import { Router } from 'express';

import RecipientController from '@controllers/RecipientController';

const router = Router();

const recipientController = new RecipientController();

router.post('/recipients', recipientController.create);
router.get('/recipients', recipientController.index);
router.put('/recipients/:id', recipientController.update);
router.delete('/recipients/:id', recipientController.delete);

export default router;