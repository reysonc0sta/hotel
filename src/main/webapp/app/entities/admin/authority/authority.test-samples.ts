import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '1a19c7dd-a9ee-4886-a4b4-716e14bb16c5',
};

export const sampleWithPartialData: IAuthority = {
  name: '33f1625a-8aea-477a-866d-f4932f774554',
};

export const sampleWithFullData: IAuthority = {
  name: 'd01e7c2b-6c01-47cd-9bb3-738664fc838d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
