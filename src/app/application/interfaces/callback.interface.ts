
export interface iCallbackActions<T, E> {
  onResult : (item : T) => void,
  onError  : (error: E) => void,
  onLoading: ( ) => void,
}
