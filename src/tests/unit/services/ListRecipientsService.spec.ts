import 'reflect-metadata';
import FakeRecipientRepository from '../../../repositories/fakes/FakeRecipientRepository';
import ListRecipients from '../../../services/ListRecipientsService';

let fakeRecipientRepository: FakeRecipientRepository;
let listRecipients: ListRecipients;

describe('ListRecipientService', () => {
  beforeEach(() => {
    fakeRecipientRepository = new FakeRecipientRepository();

    listRecipients = new ListRecipients(
      fakeRecipientRepository
    );
  });

  describe('when try to list recipients', () => {
    it('should be able to delete the recipient', async () => {
      const birthDate = new Date(1995, 8, 25, 0, 0, 0, 0);

      await fakeRecipientRepository.create({
        name: 'Gustavo Lopes',
        cpf: '65498765454',
        rg: '584455545',
        birthDate,
        planType: 'Basic'
      });

      const recipients = await listRecipients.execute();

      expect(recipients.length).toEqual(1);
      expect(recipients[0].name).toEqual('Gustavo Lopes');
    });
  });
});
