import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import AppError from '../middlewares/AppError';

import IRecipientRepository from '../repositories/interfaces/IRecipientRepository';
import ICreateRecipient from '../dtos/ICreateRecipientDTO'
import { IRecipient } from '../models/Recipient';

@injectable()
class CreateRecipientService {
  constructor(
    @inject('RecipientRepository')
    private recipientRepository: IRecipientRepository,
  ) { }

  public async execute(recipientData: ICreateRecipient): Promise<IRecipient> {
    const { planType: recipientPlanType } = recipientData;

    const planTypes = ['Basic', 'Standard', 'Premium'];

    if (!planTypes.includes(recipientPlanType)) {
      throw new AppError('Invalid plan type');
    }

    const recipient = await this.recipientRepository.create(recipientData);

    return recipient;
  }
}

export default CreateRecipientService;