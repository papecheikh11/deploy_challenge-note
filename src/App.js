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
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to right, rgb(136, 136, 235), rgb(46, 43, 224))')


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
      const id = Math.floor(Math.random() * 100002120);
        let newTache = inputValue;
        let updateTache = [...tache];
        updateTache.push({
          tache: newTache,
          id: id,
          timestamp: new Date().toLocaleString(),
        });
      if (!isEditing) {
        
        setTache(updateTache);
        setIsEditing(false);
        setInputValue("");
      } else {
        setEditIndex([...updateTache, inputValue]);
        setIsEditing(false)
        setInputValue("");
      }
    }
  };

  const editTask = (Task) => {
    const tacheEdit = tache.find((tacheI) => tacheI.id !== Task);
    setInputValue(tacheEdit.tache);
    setIsEditing(true)
  };

  const deleteAll = () => {
    setTache([]);
  };

  const deleteTask = (Task) => {
    const newTask = tache.filter((tacheI) => tacheI.id !== Task);
    setTache(newTask);
  };

  return (
    <div className="App container-fluid" style={{backgroundImage:backgroundColor}}>
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
