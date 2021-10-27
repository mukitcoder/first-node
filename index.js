const express = require("express");
const cors = require("cors")


const app = express();


app.use(cors())
app.use(express.json())
const port = 5000;

app.get("/", (req, res) => {
  res.send(" hello from my node");
});


const users = [
  { id: 1, name: "Shabana", email: "shabana@gmail.com", phone: "0125554555" },
  { id: 2, name: "Bobi", email: "sna@gmail.com", phone: "0125554555" },
  { id: 3, name: "kobi", email: "koni@gmail.com", phone: "0125554555" },
  { id: 4, name: "Naila", email: "naila@gmail.com", phone: "0125554555" },
  { id: 5, name: "Saila", email: "Saila@gmail.com", phone: "0125554555" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});



app.post("/users", (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length
    users.push(newUser)
    // res.send('inside post')
    res.json(newUser)
})
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port ", port);
});
