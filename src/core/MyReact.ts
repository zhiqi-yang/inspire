import { 
  MyFC, 
  RootType, 
  MyJSX,

  SetStateAction, 
  Dispatch, 
  ScheduledRerender, 
} from './types';


const MyReactBuilder = function() {


  function createRoot(container: HTMLElement): RootType {
    let currentElement: MyJSX | null = null;

    function performRender(container: HTMLElement, jsx: MyJSX | null) {
      console.log('--- 开始渲染 ---');
      if (jsx) {
        container.innerHTML = '';
        container.appendChild(jsx());
      }
  }
    
    return {
      render: (element: MyFC) => {
        currentElement = element();
        addScheduleRerender(() => {
          performRender(container, currentElement);
        });
        performRender(container, currentElement);
      }
    };

  }


  let states: any[] = [];
  let stateIndex: number = 0;
  let isInitialRender: boolean = true;
  let renderQueue: ScheduledRerender[] = [];

  function addScheduleRerender(func: ScheduledRerender) {
    renderQueue.push(func);
  }
  // function addScheduleRerender(func: ScheduledRerender) {
  //   // ... 先占位，后面再实现
  // }


  function flushRenderQueue() {
    const queue = [...renderQueue];
    queue.forEach(func => func());
  }




  function useState<S>(initialState: S): [() => S, Dispatch<SetStateAction<S>>] {
    const currentIndex = stateIndex;
    
    if (isInitialRender) {
      states[currentIndex] = initialState;
    }


    const setState: Dispatch<SetStateAction<S>> = ((newValue: SetStateAction<S>) => {
      const newStateValue = newValue;
      states[currentIndex] = newStateValue;
      stateIndex = 0;
      isInitialRender = false;
      flushRenderQueue();
    });

    stateIndex++;
    return [(() => states[currentIndex] as S), setState];
  }



  return {
    useState,
    createRoot
  };

  
}

const MyReact = MyReactBuilder();

export const { createRoot, useState } = MyReactBuilder();

export type { MyFC }; 

export default MyReact;