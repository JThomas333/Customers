import express from 'express';

const PORT = 5050;
const app = express();

app.use(express.json());

let customers = [
    {id: 1, name: "Patrik", email: "test.pat@gmail.com"},
    {id: 2, name: "Tibi", email: "test.tibi@gmail.com"},
    {id: 3, name: "Józsi", email: "test.jo@gmail.com"},

];



app.get("/customers", (req, res) => {
  res.status(200).json(customers)
});

app.get("/customers/:id", (req, res) => {

const id = req.params.id
    const [customer] = customers.filter(customer => customer.id == id)
    if(!customer){
      return  res.status(404).json({messemail: "customer not found" })
    }
    res.status(200).json(customer)
    });

    
app.post("/customers", (req, res) => {
    const {name, email} = req.body
    if(!name || !email){
        res.status(400).json({messemail: "Invalid credentials" })
    }
    const id = customers[customers.length-1]?.id + 1 || 1
    const customer = {id, name, email}
    customers.push(customer)
    res.status(201).json({messemail:"Succesful upload"})
  
})

app.put("/customers/:id", (req, res) => {
     const id = +req.params.id
    const [customer] = customers.find(customer => customer.id == id)
    if(!customer){
      return  res.status(404).json({messemail: "customer not found" })
    }
    const {name, email} = req.body
    if(!name || !email){
        res.status(400).json({messemail: "Invalid credentials" })
    }
    const index = customers.indexOf(customer);
    customers[index] = {id, name, email}

    res.status(200).json(customers[index])
});

app.delete("/customers/:id", (req, res) => {

    const id = +req.params.id;
    customers = customers.filter((customer) => customer.id != id)
    res.status(200).json({messemail: "Deleted successfully"})
});


app.listen(PORT, () => console.log(`App runs on http://localhost:${PORT} `));



