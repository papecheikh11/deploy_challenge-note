import React from "react";

const MonAffichage = ({ tache, deleteTask, editTask, isEditing, deleteAll }) => {
  return (
    <div className="container bg-white">
      <div className="container mon-affichage mx-auto my-5">
        <h5>
          Notes <span>0</span>
        </h5>
        <Clear deleteAll={deleteAll}/>
      </div>
      <hr />
      <div >
          <Liste
            tache={tache}
            deleteTask={deleteTask}
            editTask={editTask}
            isEditing={isEditing}
            deleteAll={deleteAll}
          />
      </div>
    </div>
  );
};

const Clear = ({deleteAll}) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={deleteAll} >Clear All</button>
    </div>
  );
};

const Liste = ({ tache, deleteTask, editTask, isEditing }) => {
  return (
    <div className="container d-flex contenant">
      <Card
        tache={tache}
        deleteTask={deleteTask}
        editTask={editTask}
        isEditing={isEditing}
      />
    </div>
  );
};

const Card = ({ tache, deleteTask, editTask, isEditing }) => {
  // console.log(isEditing);
  return tache.map((myTask) => (
    <div key={myTask.id} className="contenue">
      <div>
        <h6>{myTask.tache}</h6>
        <p>{myTask.timestamp}</p>
      </div>
      <div>
        <SuppMod
          className="border-btn"
          icon={<i className="fa-solid fa-trash mx-1 "></i>}
          onClick={() => deleteTask(myTask.id)}
        />
        <SuppMod
          isEditing={isEditing}
          tache={tache}
          className="border-btn"
          icon={<i className="fa-solid fa-pen mx-1 "></i>}
          onClick={() => editTask(myTask) }
        />
      </div>
    </div>
  ));
};

const SuppMod = ({ onClick, className, icon }) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {icon}
      </button>
    </div>
  );
};

export default MonAffichage;
