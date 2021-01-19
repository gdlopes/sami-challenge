import { injectable, inject } from 'tsyringe';

import { IRecipient } from '../models/Recipient';

import IRecipientRepository from '../repositories/interfaces/IRecipientRepository';

@injectable()
class ListRecipientsService {
  constructor(
    @inject('RecipientRepository')
    private recipientRepository: IRecipientRepository,
  ) { }

  public async execute(): Promise<IRecipient[]> {
    const recipients = await this.recipientRepository.listAll();

    return recipients;
  }
}

export default ListRecipientsService;