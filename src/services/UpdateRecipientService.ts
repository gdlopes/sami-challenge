import { injectable, inject } from 'tsyringe';

import AppError from '../middlewares/AppError';

import IRecipientRepository from '../repositories/interfaces/IRecipientRepository';
import { IRecipient } from '../models/Recipient';
import IUpdateRecipient from '../dtos/IUpdateRecipientDTO';

@injectable()
class UpdateRecipientService {
  constructor(
    @inject('RecipientRepository')
    private recipientRepository: IRecipientRepository,
  ) { }

  public async execute(data: IUpdateRecipient): Promise<IRecipient> {
    const { id } = data;

    const recipientExists = await this.recipientRepository.findById(id);

    if (!recipientExists) {
      throw new AppError('This recipient does not exists.');
    }

    const updatedRecipient = await this.recipientRepository.update(data);

    return updatedRecipient;
  }
}

export default UpdateRecipientService;