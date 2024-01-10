import React from "react";

const Input = ({handleChange, inputValue, setInputValue, handleSubmit, isEditing, editTask,tache}) => {
  

  

  return (
    <form className="container mon-input mx-auto my-5" onSubmit={handleSubmit}>
      <input
        className="form-control"
        placeholder="Add note"
        onChange={handleChange}
        value={inputValue}
      />
      <Btn
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editTask={editTask}
        tache={tache}
        isEditing={isEditing}
      />
    </form>
  );
};

const Btn = ({ handleSubmit, editTask, isEditing }) => {

  

  return (
    <div>
      <button className="btn btn-success mx-1">
      {!isEditing ? 'Add' : 'Update'}
      </button>
    </div>
  );
};

export default Input;
