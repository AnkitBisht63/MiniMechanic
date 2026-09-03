import { Mechanic } from './mechanic';

export type RootStackParamList = {
  Home: undefined;
  MechanicDetails: { mechanicId: number; mechanic?: Mechanic };
  RequestService: { mechanic: Mechanic };
};
