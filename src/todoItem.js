import React from "react";    
import './todoItem.css'

function TodoItem(props) {
      return(
            <li>
                  <span>C</span>
                  <p>{props.text}</p>
                  <span>X</span>
            </li>
      );
}

export  {TodoItem};