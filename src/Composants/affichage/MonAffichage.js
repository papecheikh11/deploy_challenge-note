import React from "react";

const MonAffichage = ({
  tache,
  deleteTask,
  editTask,
  isEditing,
  deleteAll,
  iteration,
}) => {
  return (
    <div className="container bg-white">
        <div className=" mon-affichage mx-auto my-5 row">
          <div className="col-12 col-md-6 d-flex">
            <h5> Notes </h5>
            <div className="ms-2 iter text-center text-dark">{iteration}</div>
          </div>
          <div className="col-12 col-md-6 text-end">
            <Clear deleteAll={deleteAll} />
          </div>
        </div>
      <hr />
      <div>
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

const Clear = ({ deleteAll }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={deleteAll}>
        Clear All
      </button>
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
        <h6>{myTask.value}</h6>
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
          onClick={() => editTask(myTask.id)}
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
