import React, { useState } from "react";

import ss from "./Flex.scss";

import MarkDown from "../MarkdownCode";
import Title from "../Title";

const case1 = `<div style="display: flex; flex-direction: row;">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case2 = `<div style="display: flex; flex-direction: row-reverse;">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case3 = `<div style="display: flex; flex-direction: column;">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case4 = `<div style="display: flex; flex-direction: column-reverse;">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case5 = `<div style="display: flex; flex-direction: row;">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

const case6 = `<div style="display: flex; flex-direction: row;">
  <div style="width: 50px; height: 50px">1</div>
  <div style="width: 50px; height: 150px">2</div>
  <div style="width: 50px; height: 250px">3</div>
</div>
`;

const case7 = `<div style="display: flex; flex-direction: column;">
  <div style="width: 50px; height: 50px">1</div>
  <div style="width: 150px; height: 50px">2</div>
  <div style="width: 250px; height: 50px">3</div>
</div>
`;

const case8 = `<div style="display: flex; flex-direction: row; width: 150px;">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

const case9 = `<div style="display: flex; flex-direction: row; width: 150px; height: 50px">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

const case10 = `<div style="display: flex; flex-direction: row; width: 150px; height: 50px">
  <div style="width: 50px; height: 25px">1</div>
  <div style="width: 150px; height: 50px">2</div>
  <div style="width: 250px; height: 100px">3</div>
</div>
`;

const case11 = `<div style="display: flex; flex-direction: row; flex-wrap: nowrap; width: 150px;">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

const case12 = `<div style="display: flex; flex-direction: row; flex-wrap: wrap; width: 150px;">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

const case13 = `<div style="display: flex; flex-direction: row; flex-wrap: wrap-reverse; width: 150px;">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

const case14 = `<div style="display: flex; flex-direction: row; justify-content: flex-start">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case15 = `<div style="display: flex; flex-direction: row; justify-content: flex-end">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case16 = `<div style="display: flex; flex-direction: row; justify-content: center">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case17 = `<div style="display: flex; flex-direction: row; justify-content: space-between">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case18 = `<div style="display: flex; flex-direction: row; justify-content: space-around">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case19 = `<div style="display: flex; flex-direction: row; justify-content: space-evenly">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const case20 = `<div style="display: flex; flex-direction: column; justify-content: flex-end;">
  <div style="width: 50px; height: 50px">1</div>
  <div style="width: 50px; height: 150px">2</div>
  <div style="width: 50px; height: 250px">3</div>
</div>
`;

const case21 = `<div style="display: flex; flex-direction: column; justify-content: flex-end; height: 600px">
  <div style="width: 50px; height: 50px">1</div>
  <div style="width: 50px; height: 150px">2</div>
  <div style="width: 50px; height: 250px">3</div>
</div>
`;

const case22 = `<div style="display: flex; flex-direction: column; justify-content: flex-end; height: 200px">
  <div style="width: 50px; height: 50px">1</div>
  <div style="width: 50px; height: 150px">2</div>
  <div style="width: 50px; height: 250px">3</div>
</div>
`;

const case23 = `<div style="display: flex; flex-direction: column; flex-wrap: wrap; height: 150px;">
  <div style="height: 50px;">1</div>
  <div style="height: 50px;">2</div>
  <div style="height: 250px;">3</div>
</div>
`;

const case24 = `<div style="display: flex; flex-direction: row; align-items: stretch;">
  <div style="height: 50px;">1</div>
  <div style="height: 150px;">2</div>
  <div style="height: 250px;">3</div>
</div>
`;

const case25 = `<div style="display: flex; flex-direction: row; align-items: stretch; height: 150px">
  <div style="height: 50px;">1</div>
  <div style="height: 150px;">2</div>
  <div style="height: 250px;">3</div>
</div>
`;

const case26 = `<div style="display: flex; flex-direction: row; align-items: stretch; width: 150px">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

const case27 = `<div style="display: flex; flex-direction: row; align-items: stretch; height: 150px">
  <div style="height: 50px;">1</div>
  <div style="">2</div>
  <div style="">3</div>
</div>
`;

const case28 = `<div style="display: flex; flex-direction: row; align-items: flex-start;">
  <div style="height: 50px;">1</div>
  <div style="height: 150px;">2</div>
  <div style="height: 250px;">3</div>
</div>
`;

const case29 = `<div style="display: flex; flex-direction: row; align-items: flex-end;">
  <div style="height: 50px;">1</div>
  <div style="height: 150px;">2</div>
  <div style="height: 250px;">3</div>
</div>
`;

const case30 = `<div style="display: flex; flex-direction: row; align-items: center;">
  <div style="height: 50px;">1</div>
  <div style="height: 150px;">2</div>
  <div style="height: 250px;">3</div>
</div>
`;

const case31 = `<div style="display: flex; flex-direction: row; align-items: baseline;">
  <div style="height: 50px;">1</div>
  <div style="height: 150px; font-size: 35px">2</div>
  <div style="height: 250px;">3</div>
</div>
`;

// eslint-disable-next-line max-len
const case32 = `<div style="display: flex; flex-direction: row; flex-wrap: wrap; align-content: flex-start; width: 150px; height: 100px">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

// eslint-disable-next-line max-len
const case33 = `<div style="display: flex; flex-direction: row; flex-wrap: wrap; align-content: flex-end; width: 150px; height: 100px">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

// eslint-disable-next-line max-len
const case34 = `<div style="display: flex; flex-direction: row; flex-wrap: wrap; align-content: center; width: 150px; height: 100px">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

// eslint-disable-next-line max-len
const case35 = `<div style="display: flex; flex-direction: row; flex-wrap: wrap; align-content: space-between; width: 150px; height: 100px">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

// eslint-disable-next-line max-len
const case36 = `<div style="display: flex; flex-direction: row; flex-wrap: wrap; align-content: space-around; width: 150px; height: 100px">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

// eslint-disable-next-line max-len
const case37 = `<div style="display: flex; flex-direction: row; flex-wrap: wrap; align-content: space-evenly; width: 150px; height: 100px">
  <div style="width: 50px;">1</div>
  <div style="width: 150px;">2</div>
  <div style="width: 250px;">3</div>
</div>
`;

const case38 = `<div style="display: flex; flex-direction: row;">
  <div style="width: 50px; order: 2">1</div>
  <div style="width: 50px; order: 1">2</div>
  <div style="width: 50px; order: 3">3</div>
</div>
`;

const case39 = `<div style="display: flex; flex-direction: row;">
  <div style="width: 50px; flex-grow: 1">1</div>
  <div style="width: 50px; flex-grow: 2">2</div>
  <div style="width: 50px; flex-grow: 0">3</div>
</div>
`;

const case40 = `<div style="display: flex; flex-direction: row; width: 400px">
  <div style="width: 200px; flex-shrink: 1">1</div>
  <div style="width: 200px; flex-shrink: 2">2</div>
  <div style="width: 200px; flex-shrink: 0">3</div>
</div>
`;

const case41 = `<div style="display: flex; flex-direction: row; width: 400px">
  <div style="width: 200px; flex-basic: 50px">1</div>
  <div style="width: 200px; flex-basic: 100px">2</div>
  <div style="width: 200px; flex-basic: 150px">3</div>
</div>
`;

const case42 = `<div style="display: flex; flex-direction: row; width: 400px">
  <div style="width: 200px; flex-basic: 25%">1</div>
  <div style="width: 200px; flex-basic: 50%">2</div>
  <div style="width: 200px; flex-basic: 100%">3</div>
</div>
`;

const case43 = `<div style="display: flex; flex-direction: row; width: 400px">
  <div style="flex: 0 1 100%">1</div>
  <div style="flex: 0 1 100%">2</div>
  <div style="flex: 0 1 100%">3</div>
</div>
`;

const case44 = `<div style="display: flex; flex-direction: row; column-grap: 20px; width: 400px">
  <div style="flex: 0 1 100%">1</div>
  <div style="flex: 0 1 100%">2</div>
  <div style="flex: 0 1 100%">3</div>
</div>
`;

const case45 = `<div style="display: flex; flex-direction: column;">
  <div style="">1</div>
  <div style="">2</div>
  <div style="">3</div>
</div>
`;

const Block: React.FC = () => {
  const [states, setStates] = useState(new Array<boolean>(46).fill(false));

  const isHidden = (index: number) => (states[index] ? "" : ss.hidden);

  const changeState = (index: number) => {
    const newStates = [...states];
    newStates[index] = !newStates[index];
    setStates(newStates);
  };

  const displayAll = () => {
    setStates(new Array(46).fill(true));
  };

  const hiddenAll = () => {
    setStates(new Array(46).fill(false));
  };

  return (
    <>
      <div className={ss.frame}>
        <div className={`${ss.button} ${ss.displayAll}`} onClick={() => displayAll()}>
          显示全部
        </div>

        <div className={`${ss.button} ${ss.hiddenAll}`} onClick={() => hiddenAll()}>
          隐藏全部
        </div>
        <div className={ss.part}>
          <Title title="1、flex-direction: row" click={changeState} index={1} />
          <MarkDown>{case1}</MarkDown>
          <div style={{ display: "flex", flexDirection: "row", border: "1px solid #5C3A21" }} className={isHidden(1)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="2、flex-direaction: row-reverse" click={changeState} index={2} />
          <MarkDown>{case2}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "row-reverse", border: "1px solid #5C3A21" }}
            className={isHidden(2)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="3、flex-direaction: column" click={changeState} index={3} />
          <MarkDown>{case3}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "column", border: "1px solid #5C3A21" }}
            className={isHidden(3)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="4、flex-direaction: column-reverse" click={changeState} index={4} />
          <MarkDown>{case4}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "column-reverse", border: "1px solid #5C3A21" }}
            className={isHidden(4)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="5、flex-direction: row + width不同的子元素" click={changeState} index={5} />
          <MarkDown>{case5}</MarkDown>
          <div style={{ display: "flex", flexDirection: "row", border: "1px solid #5C3A21" }} className={isHidden(5)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="6、flex-direction: row + height不同的子元素" click={changeState} index={6} />
          <MarkDown>{case6}</MarkDown>
          <div style={{ display: "flex", flexDirection: "row", border: "1px solid #5C3A21" }} className={isHidden(6)}>
            <div style={{ width: "50px", height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", height: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="7、flex-direction: column + width不同的子元素" click={changeState} index={7} />
          <MarkDown>{case7}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "column", border: "1px solid #5C3A21" }}
            className={isHidden(7)}>
            <div style={{ width: "50px", height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", height: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", height: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="8、flex-direction: row + width不同的子元素 + 固定容器width" click={changeState} index={8} />
          <MarkDown>{case8}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "row", width: "150px", border: "1px solid #5C3A21" }}
            className={isHidden(8)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="9、flex-direction: row + width不同的子元素 + 固定容器height、width + 子元素height未超过容器"
            click={changeState}
            index={9}
          />
          <MarkDown>{case9}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "150px",
              height: "50px",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(9)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="10、flex-direction: row + width不同的子元素 + 固定容器height、width + 子元素height超过容器"
            click={changeState}
            index={10}
          />
          <MarkDown>{case10}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "150px",
              height: "50px",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(10)}>
            <div style={{ width: "50px", height: "25px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", height: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", height: "100px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div style={{ margin: "5rem 0rem" }}></div>
        <div className={ss.part}>
          <Title title="11、flex-direction: row + flex-wrap: nowrap" click={changeState} index={11} />
          <MarkDown>{case11}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              width: "150px",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(11)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="12、flex-direction: row + flex-wrap: wrap" click={changeState} index={12} />
          <MarkDown>{case12}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "150px",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(12)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="13、flex-direction: row + flex-wrap: wrap-reverse" click={changeState} index={13} />
          <MarkDown>{case13}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap-reverse",
              width: "150px",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(13)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="14、flex-direction: row + justify-content: flex-start(默认)" click={changeState} index={14} />
          <MarkDown>{case14}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(14)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="15、flex-direction: row + justify-content: flex-end" click={changeState} index={15} />
          <MarkDown>{case15}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(15)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="16、flex-direction: row + justify-content: center" click={changeState} index={16} />
          <MarkDown>{case16}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(16)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="17、flex-direction: row + justify-content: space-between" click={changeState} index={17} />
          <MarkDown>{case17}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(17)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="18、flex-direction: row + justify-content: space-around" click={changeState} index={18} />
          <MarkDown>{case18}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(18)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="19、flex-direction: row + justify-content: space-evenly" click={changeState} index={19} />
          <MarkDown>{case19}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(19)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="20、flex-direction: column + justify-content: flex-end" click={changeState} index={20} />
          <MarkDown>{case20}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(20)}>
            <div style={{ width: "50px", height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", height: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="21、flex-direction: column + justify-content: flex-end + 容器固定高度"
            click={changeState}
            index={21}
          />
          <MarkDown>{case21}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              border: "1px solid #5C3A21",
              height: "600px",
            }}
            className={isHidden(21)}>
            <div style={{ width: "50px", height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", height: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="22、flex-direction: column + justify-content: flex-end + 容器固定高度(小于元素)"
            click={changeState}
            index={22}
          />
          <MarkDown>{case22}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              border: "1px solid #5C3A21",
              height: "200px",
            }}
            className={isHidden(22)}>
            <div style={{ width: "50px", height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", height: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="23、flex-direction: column + flex-wrap: wrap" click={changeState} index={23} />
          <MarkDown>{case23}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              height: "150px",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(23)}>
            <div style={{ height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ height: "50px", background: "#F4F1DE" }}>2</div>
            <div style={{ height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div style={{ margin: "10rem 0rem" }}></div>

        <div className={ss.part}>
          <Title title="24、flex-direction: row + align-items: stretch" click={changeState} index={24} />
          <MarkDown>{case24}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(24)}>
            <div style={{ height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ height: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="25、flex-direction: row + align-items: stretch + 指定容器高度" click={changeState} index={25} />
          <MarkDown>{case25}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              border: "1px solid #5C3A21",
              height: "150px",
            }}
            className={isHidden(25)}>
            <div style={{ height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ height: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div style={{ margin: "10rem 0rem" }}></div>

        <div className={ss.part}>
          <Title
            title="26、flex-direction: column + align-items: stretch + 指定容器宽度"
            click={changeState}
            index={26}
          />
          <MarkDown>{case26}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              border: "1px solid #5C3A21",
              width: "150px",
            }}
            className={isHidden(26)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="27、flex-direction: row + align-items: stretch + 指定容器高度、子元素默认"
            click={changeState}
            index={27}
          />
          <MarkDown>{case27}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              border: "1px solid #5C3A21",
              height: "150px",
            }}
            className={isHidden(27)}>
            <div style={{ height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ background: "#F4F1DE" }}>2</div>
            <div style={{ background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="28、flex-direction: row + align-items: flex-start" click={changeState} index={28} />
          <MarkDown>{case28}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(28)}>
            <div style={{ height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ height: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="29、flex-direction: row + align-items: flex-end" click={changeState} index={29} />
          <MarkDown>{case29}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(29)}>
            <div style={{ height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ height: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="30、flex-direction: row + align-items: center" click={changeState} index={30} />
          <MarkDown>{case30}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(30)}>
            <div style={{ height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ height: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="31、flex-direction: row + align-items: baseline" click={changeState} index={31} />
          <MarkDown>{case31}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(31)}>
            <div style={{ height: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ height: "150px", fontSize: "35px", background: "#F4F1DE" }}>2</div>
            <div style={{ height: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="32、flex-direction: row + flex-wrap: wrap + align-content: flex-start (默认)"
            click={changeState}
            index={32}
          />
          <MarkDown>{case32}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-start",
              width: "150px",
              border: "1px solid #5C3A21",
              height: "100px",
            }}
            className={isHidden(32)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="33、flex-direction: row + flex-wrap: wrap + align-content: flex-end"
            click={changeState}
            index={33}
          />
          <MarkDown>{case33}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-end",
              width: "150px",
              border: "1px solid #5C3A21",
              height: "100px",
            }}
            className={isHidden(33)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="34、flex-direction: row + flex-wrap: wrap + align-content: center"
            click={changeState}
            index={34}
          />
          <MarkDown>{case34}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "center",
              width: "150px",
              border: "1px solid #5C3A21",
              height: "100px",
            }}
            className={isHidden(34)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="35、flex-direction: row + flex-wrap: wrap + align-content: space-between"
            click={changeState}
            index={35}
          />
          <MarkDown>{case35}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "space-between",
              width: "150px",
              border: "1px solid #5C3A21",
              height: "100px",
            }}
            className={isHidden(35)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="36、flex-direction: row + flex-wrap: wrap + align-content: space-around"
            click={changeState}
            index={36}
          />
          <MarkDown>{case36}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "space-around",
              width: "150px",
              border: "1px solid #5C3A21",
              height: "100px",
            }}
            className={isHidden(36)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title
            title="37、flex-direction: row + flex-wrap: wrap + align-content: space-evenly"
            click={changeState}
            index={37}
          />
          <MarkDown>{case37}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "space-evenly",
              width: "150px",
              border: "1px solid #5C3A21",
              height: "100px",
            }}
            className={isHidden(37)}>
            <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "150px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "250px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="38、flex-direction: row + order" click={changeState} index={38} />
          <MarkDown>{case38}</MarkDown>
          <div style={{ display: "flex", flexDirection: "row", border: "1px solid #5C3A21" }} className={isHidden(38)}>
            <div style={{ width: "50px", order: 2, background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", order: 1, background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", order: 3, background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="39、flex-direction: row + flex-grow (默认0)" click={changeState} index={39} />
          <MarkDown>{case39}</MarkDown>
          <div style={{ display: "flex", flexDirection: "row", border: "1px solid #5C3A21" }} className={isHidden(39)}>
            <div style={{ width: "50px", flexGrow: 1, background: "#E07A5F" }}>1</div>
            <div style={{ width: "50px", flexGrow: 2, background: "#F4F1DE" }}>2</div>
            <div style={{ width: "50px", flexGrow: 0, background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="40、flex-direction: row + flex-shrink (默认1)" click={changeState} index={40} />
          <MarkDown>{case40}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "row", width: "400px", border: "1px solid #5C3A21" }}
            className={isHidden(40)}>
            <div style={{ width: "200px", flexShrink: 1, background: "#E07A5F" }}>1</div>
            <div style={{ width: "200px", flexShrink: 2, background: "#F4F1DE" }}>2</div>
            <div style={{ width: "200px", flexShrink: 0, background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="41、flex-direction: row + flex-basic px(默认auto)" click={changeState} index={41} />
          <MarkDown>{case41}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "row", width: "400px", border: "1px solid #5C3A21" }}
            className={isHidden(41)}>
            <div style={{ width: "200px", flexBasis: "50px", background: "#E07A5F" }}>1</div>
            <div style={{ width: "200px", flexBasis: "100px", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "200px", flexBasis: "150px", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="42、flex-direction: row + flex-basic %(默认auto)" click={changeState} index={42} />
          <MarkDown>{case42}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "row", width: "400px", border: "1px solid #5C3A21" }}
            className={isHidden(42)}>
            <div style={{ width: "200px", flexBasis: "25%", background: "#E07A5F" }}>1</div>
            <div style={{ width: "200px", flexBasis: "50%", background: "#F4F1DE" }}>2</div>
            <div style={{ width: "200px", flexBasis: "100%", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="43、flex-direction: row + flex " click={changeState} index={43} />
          <MarkDown>{case43}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "row", width: "400px", border: "1px solid #5C3A21" }}
            className={isHidden(43)}>
            <div style={{ flex: "0 1 100%", background: "#E07A5F" }}>1</div>
            <div style={{ flex: "0 1 100%", background: "#F4F1DE" }}>2</div>
            <div style={{ flex: "0 1 100%", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="44、flex-direction: row + flex + column-gap" click={changeState} index={44} />
          <MarkDown>{case44}</MarkDown>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "20px",
              width: "400px",
              border: "1px solid #5C3A21",
            }}
            className={isHidden(44)}>
            <div style={{ flex: "0 1 100%", background: "#E07A5F" }}>1</div>
            <div style={{ flex: "0 1 100%", background: "#F4F1DE" }}>2</div>
            <div style={{ flex: "0 1 100%", background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div className={ss.part}>
          <Title title="45、flex-direaction: column + 子元素自适应宽度" click={changeState} index={45} />
          <MarkDown>{case45}</MarkDown>
          <div
            style={{ display: "flex", flexDirection: "column", border: "1px solid #5C3A21" }}
            className={isHidden(45)}>
            <div style={{ background: "#E07A5F" }}>1</div>
            <div style={{ background: "#F4F1DE" }}>2</div>
            <div style={{ background: "#81B29A" }}>3</div>
          </div>
        </div>

        <div style={{ margin: "10rem 0rem", visibility: "hidden", height: "1px" }}></div>
      </div>
    </>
  );
};

export default Block;
