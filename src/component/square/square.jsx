import React from 'react'

function Square ({item, index, tour, arrayRep}) {

    if (index <= tour-1) {

        if (arrayRep[index] === 'oui'){

            return (
                <div className='square'>
                    {item[1]}
                </div>
            )
        }

        else {
            return (
                <div className="square notGoodSquare">
                    {item[1]}
                </div>
            )
        }
    }

    else {
        return (
            <></>
        )
    }


}

export default Square

