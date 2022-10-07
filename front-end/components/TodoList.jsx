import React from "react";
import Button from "@mui/material/Button";
import { Container, TextField } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useState } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    axios.get(`https://ozy.ilearn.mn/v1/todo`).then((res) => {
      setTodoList(res.data.data);
    });
  }, []);

  async function addHandler(e) {
    e.preventDefault();
    await axios.post("https://ozy.ilearn.mn/v1/todo/create", {
      todo: e.target.todo.value,
    });
    await location.reload();
  }
  return (
    <Container>
      <div className="todo-list">
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#5F9DF7",
            color: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div></div>
          <h1>My ToDo List</h1>
          <strong>
            {todoList?.length} / {todoList?.length}
          </strong>
        </div>
        {todoList?.map((todo, i) => {
          return (
            <div key={i} className="todo-inline">
              <div>
                <input type="radio" />
                <p>{todo.todo}</p>
              </div>
              <div>
                <Button>
                  <EditIcon />
                </Button>
                <Button>
                  <DeleteIcon />
                </Button>
              </div>
            </div>
          );
        })}
        <Box
          component="form"
          onSubmit={addHandler}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "30px",
          }}
        >
          <TextField label="ToDo" name="todo" variant="standard"></TextField>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Box>
      </div>
    </Container>
  );
}
export default TodoList;
