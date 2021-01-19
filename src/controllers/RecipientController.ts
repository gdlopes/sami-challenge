import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRecipientService from '../services/CreateRecipientService';
import ListRecipientsService from '../services/ListRecipientsService';
import UpdateRecipientService from '../services/UpdateRecipientService';
import DeleteRecipientService from '../services/DeleteRecipientService';

export default class RecipientController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRecipients = container.resolve(ListRecipientsService);

    const recipients = await listRecipients.execute();

    return response.json({ recipients });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const recipientData = request.body;

    const createRecipient = container.resolve(CreateRecipientService);

    const recipient = await createRecipient.execute(recipientData);

    return response.json({ recipient });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const body = request.body;

    const updateRecipient = container.resolve(UpdateRecipientService);

    const recipient = await updateRecipient.execute({
      id,
      ...body
    });

    return response.json({ recipient });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteRecipientService = container.resolve(DeleteRecipientService);

    await deleteRecipientService.execute(id);

    return response.status(204).json();
  }
}
