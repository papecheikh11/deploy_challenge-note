import "./App.css";
import { useState } from "react";

import MonAffichage from "./Composants/affichage/MonAffichage";
import Header from "./Composants/header/Header";
import Input from "./Composants/input/Input";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [tache, setTache] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  let iteration = tache.length
  const handleColorButtonClick = (newColor) => {
    setBackgroundColor(newColor);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("veuillez entrez une tache");
    } else {
      let newTache;
      if (!isEditing) {
        newTache = {
          id: Math.floor(Math.random() * 100002120),
          value: inputValue,
          timestamp: new Date().toLocaleString(),
        };
        newTache = [...tache, newTache];
      } else {
        newTache = tache.map((maTache) =>
          maTache.id === editIndex
            ? {
                value: inputValue,
                timestamp: new Date().toLocaleString(),
              }
            : maTache
        );
        setIsEditing(false);
      }
      setInputValue("");
      setTache(newTache);
    }
  };

  const editTask = (Task) => {
    const tacheEdit = tache.find((tacheI) => tacheI.id !== Task);
    setInputValue(tacheEdit.value);
    setIsEditing(true);
    setEditIndex(tacheEdit.id);
  };

  const deleteAll = () => {
    setTache([]);
  };

  const deleteTask = (Task) => {
    const newTask = tache.filter((tacheI) => tacheI.id !== Task);
    setTache(newTask);
  };

  return (
    <div
      className="App container-fluid"
      style={{ backgroundImage: backgroundColor }}
    >
      <div>
        <Header onColorButtonClick={handleColorButtonClick} />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          tache={tache}
          setTache={setTache}
          handleSubmit={handleSubmit}
          editTask={editTask}
          inputValue={inputValue}
          setInputValue={setInputValue}
          isEditing={isEditing}
        />
      </div>
      <div>
        <MonAffichage
        iteration={iteration}
          tache={tache}
          handleSubmit={handleSubmit}
          deleteTask={deleteTask}
          editTask={editTask}
          isEditing={isEditing}
          deleteAll={deleteAll}
        />
      </div>
    </div>
  );
}

export default App;
