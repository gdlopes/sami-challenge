import 'reflect-metadata';

import AppError from '../../../middlewares/AppError';

import FakeRecipientRepository from '../../../repositories/fakes/FakeRecipientRepository';
import UpdateRecipients from '../../../services/UpdateRecipientService';

let fakeRecipientRepository: FakeRecipientRepository;
let updateRecipient: UpdateRecipients;

describe('ListRecipientService', () => {
  beforeEach(() => {
    fakeRecipientRepository = new FakeRecipientRepository();

    updateRecipient = new UpdateRecipients(
      fakeRecipientRepository
    );
  });

  describe('when try to update an existing recipient', () => {
    it('should be able to update the recipient', async () => {
      const birthDate = new Date(1995, 8, 25, 0, 0, 0, 0);
      const recipient = await fakeRecipientRepository.create({
        name: 'Gustavo Lopes',
        cpf: '65498765454',
        rg: '584455545',
        birthDate,
        planType: 'Basic'
      });

      const updatedRecipient = await updateRecipient.execute({
        id: recipient.id,
        name: 'Gustavo Domingos Lopes'
      });

      expect(updatedRecipient.name).toEqual('Gustavo Domingos Lopes');
    });
  });

  describe('when try to update a non existing recipient', () => {
    it('should not be able to update the recipient', async () => {
      expect(
        updateRecipient.execute({
          id: 'non-existing-recipient',
          name: 'Gustavo Domingos Lopes'
        })
      ).rejects.toBeInstanceOf(AppError);
    });
  });
});
