import { useNavigate, useParams } from "react-router-dom";

export default function ListTodo() {
  const navigate = useNavigate();
  function logout() {
    navigate("/logout");
  }

  const today = new Date();

  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const todos = [
    {
      id: 1,
      title: "aws",
      description: "learn aws before its too late",
      targetDate: targetDate,
      isDone: false,
    },
    {
      id: 2,
      title: "java",
      description: "learn java before its too late",
      targetDate: targetDate,
      isDone: false,
    },
    {
      id: 1,
      title: "C++",
      description: "learn c++ before its too late",
      targetDate: targetDate,
      isDone: false,
    },
  ];

  const p = useParams();

  return (
    <div className="container">
      <h1>HI ! {p.username} here are your todos</h1>
      <table className="table mx-auto">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Description</td>
            <td>TargetDate</td>
            <td>Is Done ?</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.targetDate.toDateString()}</td>
              <td>{todo.isDone.toString()}</td>
            </tr>
          ))}

          {/* <tr>
            <td>1</td>
            <td>FIGMA</td>
            <td>LEARN FIGMA</td>
            <td>22/12/2032</td>
            <td>true</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
