import { injectable, inject } from 'tsyringe';

import AppError from '../middlewares/AppError';

import IRecipientRepository from '../repositories/interfaces/IRecipientRepository';

@injectable()
class DeleteRecipientService {
  constructor(
    @inject('RecipientRepository')
    private recipientRepository: IRecipientRepository,
  ) { }

  public async execute(id: string): Promise<void> {
    const recipientExists = await this.recipientRepository.findById(id);

    if (!recipientExists) {
      throw new AppError('This recipient does not exists.');
    }

    await this.recipientRepository.delete(id);
  }
}

export default DeleteRecipientService;