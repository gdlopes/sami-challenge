import { uuid } from 'uuidv4';

import IRecipientRepository from '../interfaces/IRecipientRepository';
import IUpdateRecipient from '../../dtos/IUpdateRecipientDTO';
import ICreateRecipient from '../../dtos/ICreateRecipientDTO';

import Recipient, { IRecipient } from '../../models/Recipient';

class FakeRecipientRepository implements IRecipientRepository {
  private recipients: IRecipient[] = [];

  public async create(data: ICreateRecipient): Promise<IRecipient> {
    const recipient = new Recipient();
    Object.assign(recipient, { _id: uuid() }, data);

    this.recipients.push(recipient);

    return recipient;
  }

  public async listAll(): Promise<IRecipient[]> {
    const recipients = this.recipients;

    return recipients;
  }

  public async findById(id: string): Promise<IRecipient | undefined> {
    const recipient = this.recipients.find(recipient => {
      return recipient._id == id;
    });

    return recipient;
  }

  public async update(data: IUpdateRecipient): Promise<IRecipient | null> {
    const { id } = data;
    const recipient = this.recipients.find(recipient => recipient._id == id);

    const updatedRecipient = Object.assign(recipient, data);

    return updatedRecipient;
  }

  public async delete(id: string): Promise<void> {
    const recipientIndex = this.recipients.findIndex(recipient => recipient._id == id);

    this.recipients.splice(recipientIndex, 1);
  }
}

export default FakeRecipientRepository;
