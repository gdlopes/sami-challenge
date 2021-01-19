import 'reflect-metadata';
import FakeRecipientRepository from '../../../repositories/fakes/FakeRecipientRepository';
import CreateRecipient from '../../../services/CreateRecipientService';
import AppError from '../../../middlewares/AppError';

let fakeRecipientRepository: FakeRecipientRepository;
let createRecipient: CreateRecipient;

describe('CreateRecipientService', () => {
  beforeEach(() => {
    fakeRecipientRepository = new FakeRecipientRepository();

    createRecipient = new CreateRecipient(
      fakeRecipientRepository
    );
  });

  describe('when the recipient has all the information needed', () => {
    it('should be able to create a new recipient', async () => {
      const birthDate = new Date(1995, 8, 25, 0, 0, 0, 0);

      const recipient = await createRecipient.execute({
        name: 'Gustavo Lopes',
        cpf: '65498765454',
        rg: '584455545',
        birthDate,
        planType: 'Basic'
      });

      expect(recipient.name).toBe('Gustavo Lopes');
    });
  });

  describe('when the recipient has an invalid plan type', () => {
    it('should nbot be able to create a new recipient', async () => {
      const birthDate = new Date(1995, 8, 25, 0, 0, 0, 0);

      expect(
        createRecipient.execute({
          name: 'Gustavo Lopes',
          cpf: '65498765454',
          rg: '584455545',
          birthDate,
          planType: 'invalid plan type'
        })
      ).rejects.toBeInstanceOf(AppError);
    });
  });
});
