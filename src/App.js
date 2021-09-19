import Board from "./components/Board";
import { React, useState, useEffect } from "react";
import "./main.css";

function App() {
  const [dots, setDots] = useState([]);
  const [i, setI] = useState(0);
  const [rend, setRend] = useState(true);

  const addCard = () => {
    const dotscopy = Object.assign([], dots);
    var cardId = "card-" + (i + 1);
    setI(i + 1);
    dotscopy.push({
      id: cardId,
      className: "card",
      name: "new",
      x_axis: 50,
      y_axis: 50,
    });
    setDots([...dotscopy]);
    if (dotscopy) localStorage.setItem("dots", JSON.stringify(dotscopy));
    var x = JSON.stringify(dotscopy);
  };
  var temp = [];
  useEffect(() => {
    temp = localStorage.getItem("dots");
    // temp = JSON.parse(temp);
    //console.log("check", JSON.parse(temp) );
    //if (temp) setDots(JSON.parse(temp));
  }, []);

  const deleteCard = (id) => {
    let dotscopy = Object.assign([], dots);
    let index = dotscopy.findIndex((dotcopy) => dotcopy.id === id);

    dotscopy.splice(index, 1);
    setDots([...dotscopy]);
    if (dotscopy) localStorage.setItem("dots", JSON.stringify(dotscopy));
  };
  return (
    <div className='App'>
      <main className='flexbox'>
        <Board id='board-1' className='board' dots={dots}></Board>
        <div className='dataForm'>
          <button className='addBtn' onClick={addCard}>
            add
          </button>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>x-axis</th>
                <th>y-axis</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {dots.map((dot, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type='text'
                        name='name'
                        value={dot.name}
                        onChange={(e) => {
                          dot.name = e.target.value;
                          setRend((prev) => !prev);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type='number'
                        name='x-axis'
                        value={dot.x_axis}
                        onChange={(e) => {
                          if (e.target.value > -1 && e.target.value < 101)
                            dot.x_axis = parseFloat(e.target.value);
                          if (dots) localStorage.setItem("dots", [...dots]);
                          setRend((prev) => !prev);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type='number'
                        name='y-axis'
                        value={dot.y_axis}
                        onChange={(e) => {
                          if (e.target.value < 101 && e.target.value > -1)
                            dot.y_axis = parseFloat(e.target.value);
                          if (dots) localStorage.setItem("dots", [...dots]);
                          setRend((prev) => !prev);
                        }}
                      />
                    </td>
                    <td
                      className='deleteBtn'
                      onClick={(id) => deleteCard(dot.id)}
                    >
                      delete
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
