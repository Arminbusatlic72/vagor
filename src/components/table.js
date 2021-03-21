import React from 'react'
import content from '../../content/table.yaml'
const Table = () => {
    console.log(content)
    return(
        <>
        <ul className="table">
        { content.items.map((item) =><li>{ item.name }</li>
                  )}
        </ul>
        </>
    )
}
export default Table