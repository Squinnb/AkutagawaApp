import React from 'react';
import Winner from "./Winner"
import {v4 as uuid} from "uuid"

export default function WinList(props) {

    return (
        <div className="winnersDisp">
            <table>
                <tr>
                    <th>#</th>
                    <th>受賞年</th>
                    <th>受賞者</th>
                    <th>受賞作</th>
                    {/* <th>掲載誌</th> */}
                </tr>
                
                {
                 props.winners.map( (winner) => (
                    <Winner   
                        key={uuid()}
                        winner={winner}
                    />  )
                 )
                }
            </table>
        
        </div>
      
    )
}