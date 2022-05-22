function Todo(props) {
    function deleteHadler() {
        
    }

    return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHadler}>Delete</button>
        </div>
      </div>
    );
}

export default Todo;
