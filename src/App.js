import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Nav from "./Components/Nav";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
function App() {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  const [newUserAge, setNewUserAge] = useState(0);
  const usersCollectionRef = collection(db, "users");
  //Add name of user
  const addName = (event) => {
    setNewUserName(event.target.value);
  };
  //Add age of user
  const addAge = (event) => {
    setNewUserAge(event.target.value);
  };
  //Create new user
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newUserName,
      age: Number(newUserAge),
    });
  };
  //Update age of user
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };
  //Delete user
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [usersCollectionRef]);

  return (
    <div className="App">
      <Nav />

      <div className="Formulaire">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={addName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Age" onChange={addAge} />
            </Form.Group>
          </Row>
        </Form>
      </div>
      <Button variant="primary" type="submit" onClick={createUser}>
        Submit
      </Button>

      {users.map((user) => {
        return (
          <div className="Info">
            <h1>Name : {user.name}</h1>
            <h1>Age : {user.age}</h1>
            <Button
              variant="secondary"
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Increase
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
