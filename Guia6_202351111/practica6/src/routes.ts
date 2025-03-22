import { Router, Request, Response } from 'express';
import User from './models/Users';
import { createAccount } from './controllers/User.Controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Bienvenido a la API 🚀');
});

router.post('/auth/register', async(req, res) => {
  console.log(req.body);
  const user= new User(req.body);
  await user.save();
  res.status(201).json({ message: 'Datos del usuario recibidos con éxito' });
});

router.post('/auth/register', createAccount);

export default router;
