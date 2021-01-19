import 'reflect-metadata';

import { container } from 'tsyringe';

import IRecipientRepository from '../repositories/interfaces/IRecipientRepository';
import RecipientRepository from '../repositories/RecipientRepository';

container.registerSingleton<IRecipientRepository>(
  'RecipientRepository',
  RecipientRepository
);