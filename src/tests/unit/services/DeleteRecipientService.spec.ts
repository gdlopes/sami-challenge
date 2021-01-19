import 'reflect-metadata';

import AppError from '../../../middlewares/AppError';

import FakeRecipientRepository from '../../../repositories/fakes/FakeRecipientRepository';
import DeleteRecipient from '../../../services/DeleteRecipientService';

let fakeRecipientRepository: FakeRecipientRepository;
let deleteRecipient: DeleteRecipient;

describe('DeleteRecipientService', () => {
  beforeEach(() => {
    fakeRecipientRepository = new FakeRecipientRepository();

    deleteRecipient = new DeleteRecipient(
      fakeRecipientRepository
    );
  });

  describe('when try to delete an existing recipient', () => {
    it('should be able to delete the recipient', async () => {
      const birthDate = new Date(1995, 8, 25, 0, 0, 0, 0);

      const recipient = await fakeRecipientRepository.create({
        name: 'Gustavo Lopes',
        cpf: '65498765454',
        rg: '584455545',
        birthDate,
        planType: 'Basic'
      });


      await deleteRecipient.execute(recipient.id);

      const recipientExists = await fakeRecipientRepository.findById(recipient.id);

      expect(recipientExists).toBe(undefined);
    });
  });

  describe('when try to delete a non existing recipient', () => {
    it('should not be able to delete the recipient', async () => {
      expect(
        deleteRecipient.execute('non-existing-recipient')
      ).rejects.toBeInstanceOf(AppError);
    });
  });
});
