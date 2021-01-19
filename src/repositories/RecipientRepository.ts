import Recipient, { IRecipient } from '../models/Recipient';

import IRecipientRepository from './interfaces/IRecipientRepository';

import IUpdateRecipient from '../dtos/IUpdateRecipientDTO';

class RecipientRepository implements IRecipientRepository {
  public async create(data: IRecipient): Promise<IRecipient> {
    const recipient = await Recipient.create(data);

    return recipient;
  }

  public async listAll(): Promise<IRecipient[]> {
    const recipients = await Recipient.find();

    return recipients;
  }

  public async findById(id: string): Promise<IRecipient | undefined> {
    const recipient = await Recipient.findOne({ _id: id });

    return recipient;
  }

  public async update(data: IUpdateRecipient): Promise<IRecipient | null> {
    const { id } = data;

    const updatedRecipient = await Recipient.findByIdAndUpdate(id, data, { new: true });

    return updatedRecipient;
  }

  public async delete(id: string): Promise<void> {
    await Recipient.findByIdAndDelete(id);
  }
}

export default RecipientRepository;