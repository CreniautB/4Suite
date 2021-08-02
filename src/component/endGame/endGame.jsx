import React from 'react'
import './endGame.css'

function EndGame ({note}) {

    console.log(note)
    function getNote(note) {
        let newnOte = (note * 20) / 16
        return newnOte
    }

    const newNote = getNote(note)

    return (
        <div>
            <h1>Bravo vous venez de finir l'exercice</h1>
                <h2 className="button note">Vous avez obtenu <strong>{newNote} / 20</strong></h2>
            </div>
    )

}


export default EndGame