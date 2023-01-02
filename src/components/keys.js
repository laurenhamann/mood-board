import React from "react";
const list = ['Amazing', 'Good', 'Okay', 'Ehh', 'Sad', 'Angry', 'Painful', 'Depressing', 'Apathic', 
'Stressful']

const KeyList = () => {
    const data = list.map((m) => {
        const classnames = `key ${m} grid-cell`;
        return <section>
                <div className={classnames}>
                </div>
                <small>{m}</small>
                </section>
    })
    return (
        <section className="key-list">
        {data}
        </section>
    )
}

export default KeyList;