export interface ICounterState {
  counter: number;
  name: string;
}

export const initialState: ICounterState = {
  counter: 0,
  name: 'NGRX Store Header',
};
