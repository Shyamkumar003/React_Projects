let items = [
    { id: 1, name: "Parker Pen", price: 200 },
    { id: 2, name: "Cello Pen", price: 100 },
    { id: 3, name: "Rorito Pen", price: 200 },
    { id: 4, name: "Hauser Pen", price: 400 },
    { id: 5, name: "Flair Pen", price: 220 },
]

const adding =(req,res)=>{
    const val = req.body
    items.push(val);
    res.json(items);
    console.log(items);
}

const getting = (req,res)=>{
    res.json(items);
}

const deleting = (req,res)=>{
    const id = req.params.id;
    items = items.filter((e)=>e.id!=id);
    res.json(items);
}

const edit = (req, res) => {
    const id = req.params.id;
    const item = items.find((item) => item.id == id);
  
    if (item) res.json(item);
    else res.status(404).json({ error: error });
  }

  const update =(req, res) => {
    const data = req.body;
    const item = items.map((it) => {
      if (it.id == data.id) {
        (it.name = data.name), (it.price = data.price);
        return it;
      } else {
        return it;
      }
    });
    res.json(item);
  }

  module.exports = {deleting,edit,update,getting,adding}