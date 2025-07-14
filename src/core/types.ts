
export interface RootType {
  render: (element: MyFC) => void;
}

export type MyFC = () => MyJSX;

export type MyJSX = () => HTMLElement


export type Dispatch<SSA> = (value: SSA) => void;

export type SetStateAction<S> = S;


export type ScheduledRerender = () => void;