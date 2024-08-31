import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 22836,
  login: 'M1$@w-9S\\cwCV',
};

export const sampleWithPartialData: IUser = {
  id: 28452,
  login: '4A-@qZ\\5lVOF\\mj\\$5Qij64\\:bH\\sJ48Jj9',
};

export const sampleWithFullData: IUser = {
  id: 12023,
  login: '95H',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
