import mongoose, { Schema, Document } from 'mongoose';

export interface IRecipient extends Document {
  name: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  planType: string;
  numberOfDependents?: number;
}

const RecipientSchema: Schema = new mongoose.Schema({
  name: String,
  cpf: String,
  rg: String,
  birthDate: Date,
  planType: String,
  numberOfDependents: { type: Number, default: 0 }
});

const RecipientModel = mongoose.model<IRecipient>('Recipient', RecipientSchema);

export default RecipientModel;