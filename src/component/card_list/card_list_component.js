import React from 'react'
import "./card_list_component.css"
import {Card} from "../card_component/card_component"

export const CardList=(props)=>
    <div className="card_list">
        {props.monsters.map(monster=><Card key={monster.id} monster={monster} />)}
    </div>
