import React from "react";

import Cell from "./singlecell";

const Cells = () => {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let i = 0;
    const grid = months.map((m, index) => {
       const arr = [...Array(m)].map((e, i) => {
            const id = `${i + 1}`;
            i = i + 1;
            const key = `${index}-${i}`
            const str = id.toString();
            return <Cell id={str} keys={key} />})
            const c = index + 1;
            const string = c.toString();
            const keyMonth = `month-${index - 1}`;
            return <div className="month" id={string} key={keyMonth}>
                {arr}
            </div>
    }) 
    return (
        <div className="grid" id="outline">
            {grid}
        </div>
    )
}

export default Cells