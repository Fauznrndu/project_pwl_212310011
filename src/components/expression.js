import React from 'react';

const Expression = () => {

    document.getElementById("numericInput").addEventListener("keypress", function(event) {
        var key = event.keyCode;
        // Only allow numbers to be entered
        if (key < 48 || key > 57) {
          event.preventDefault();
        }
      });
    return (
        <input type="text" id="numericInput"></input>
    );
}

export default Expression;
