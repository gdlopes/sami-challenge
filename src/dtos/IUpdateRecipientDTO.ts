export default interface IUpdateRecipientDTO {
  id: string;
  name?: string;
  cpf?: string;
  rg?: string;
  birthDate?: Date;
  planType?: string;
  numberOfDependents?: number;
}