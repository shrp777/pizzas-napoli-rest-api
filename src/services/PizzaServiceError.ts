export enum PizzaServiceErrorType {
  DOES_NOT_EXIST = "Pizza does not exist",
  ALREADY_EXISTS = "Pizza already exists",
  CANT_SAVE = "Can't save pizza",
  CANT_DELETE = "Can't delete pizza",
  CANT_UPDATE = "Can't update pizza",
  CANT_FIND = "Can't find pizza",
  DATASOURCE = "Can't get data from data source"
}

export default class PizzaServiceError extends Error {
  public readonly errorType: PizzaServiceErrorType;

  constructor(errorType: PizzaServiceErrorType) {
    super();
    this.message = errorType;
    this.errorType = errorType;
  }
}
