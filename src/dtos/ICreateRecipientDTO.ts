export default interface ICreateRecipientDTO {
  name: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  planType: string;
  numberOfDependents?: number;
}