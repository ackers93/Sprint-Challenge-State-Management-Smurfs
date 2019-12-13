import React, { useState } from "react";
import { connect } from "react-redux";
import { new_smurf } from "../actions/index";

const NewSmurf = props => {
    console.log(`NewSmurf props`, props)
      const[smurf, setSmurf] = useState({name:"", age:"", height:""})

      const handleChanges = e =>{
        setSmurf({...smurf, [e.target.name]: e.target.value})
      }

      const logValues = event => {
        event.preventDefault();
        props.new_smurf(smurf);
        setSmurf({
          name: "",
          age: "",
          height: ""
        });
      };

    return (
      <form onSubmit={logValues}>
      <div className="field">
        <label>Name
        <input
          type="text"
          name="name"
          id="sname"
          onChange={handleChanges}
          value={smurf.name}
          placeholder="Smurf Name"
        />
        </label>
        </div>

        <div className="field">
        <label>Age
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleChanges}
          value={smurf.age}
          placeholder="age"
        />
        </label>
        </div>
        
        <div className="field">
        <label>Height
        <input
          type="number"
          name="height"
          id="height"
          onChange={handleChanges}
          value={smurf.height}
          placeholder="height inches"
        />
        </label>
        </div>
        <button onClick={logValues}> Add Smurf </button>
      </form>
    );
  }
export default connect(
  null,
  { new_smurf }
)(NewSmurf);