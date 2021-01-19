import { IRecipient } from '../../models/Recipient';

import IUpdateRecipient from '../../dtos/IUpdateRecipientDTO';
import ICreateRecipient from '../../dtos/ICreateRecipientDTO';

export default interface IRecipientRepository {
  create(data: ICreateRecipient): Promise<IRecipient>;
  listAll(): Promise<IRecipient[]>;
  findById(id: string): Promise<IRecipient | undefined>;
  update(data: IUpdateRecipient): Promise<IRecipient | null>;
  delete(id: string): Promise<void>;
}