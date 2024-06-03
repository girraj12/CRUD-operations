import Expense from "../model.js";


//push all the detail
const detail =  async(req, res) => {
    try {
      const data = req.body;
      const newPerson = new Expense(data);
      const savedPerson = await newPerson.save();
      console.log("Data saved successfully");
      res.status(200).json(savedPerson);
    } catch (error) {
      console.error("Error in person details", error);
      res.status(500).json({ error: 'Error saving data' });
    }
}


//amount base data find
    const getAmount = async(req,res)=>{
try {
  const value = req.params.amount;
  const persons = await Expense.find({ amount: { $gt: value } });
  //  await Expense.updateMany({amount:{$gt:value}},{$set:15000});
  res.status(200).json(persons);
} catch (error) {
  console.error("Error in retrieving persons by amount", error);
  res.status(500).json({ error: 'Error retrieving data' });
}
    }

//developer base data find
const getDetail = async(req,res) => {
  const role = req.params.job;
  const data = await Expense.find({job:role});
  try{
     res.status(200).json(data);
  }
  catch(error){
       console.log("not recieve data",error);
       res.status(500).json({error});
  }

}

//update the amount detail base on amount
    const updateDetail = async(req,res) =>{
      try{
      const value = req.params.amount;
      const persons = await Expense.updateMany({amount:{$gt:value}},{$set:{amount:55000}});
      if(persons){
        res.status(200).json(persons);
      }
      }
     catch (error) {
      console.error("Error in retrieving persons by amount", error);
      res.status(500).json({ error: 'Error retrieving data' });    
    }
    }

    //delete the detail base on amount
    const deleteDetail = async(req,res) =>{
      try{
      const value = req.params.amount;
      const persons = await Expense.deleteMany({amount:{$gte:value}});
      if(persons){
        res.status(200).json(persons);
      }
      }
     catch (error) {
      console.error("Error in retrieving persons by amount", error);
      res.status(500).json({ error: 'Error retrieving data' });    
    }
    }

    export {detail,getAmount,updateDetail,deleteDetail,getDetail};