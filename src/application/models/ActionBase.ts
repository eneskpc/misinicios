export default interface ActionBase<T> {
  type: string;
  payload: T;
}
