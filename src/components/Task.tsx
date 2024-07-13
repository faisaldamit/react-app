function Task({
  label,
  category,
  isUrgent,
  handleDeleteTask,
  handleEditTask,
  index,
}: any) {
  return (
    <div className="border border-3 border-secondary d-flex mt-3 ">
      <ul className="w-75">
        <li>Label : {label}</li>
        <hr />
        <li>Category : {category}</li>
        <hr />
        <li>Urgent : {isUrgent ? "Yes" : "No"}</li>
      </ul>

      <div className="w-25">
        <button
          type="submit"
          className="btn btn-warning w-100 h-50"
          onClick={() => {
            handleEditTask(index);
          }}
        >
          Edit
        </button>
        <button
          type="submit"
          className="btn btn-danger w-100 h-50"
          onClick={() => {
            handleDeleteTask(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
