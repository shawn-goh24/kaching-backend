const db = require("../db/models/index");

const { Bill } = db;

async function getBills(req, res) {
  const { userId } = req.params;
  try {
    const data = await Bill.findAll({
      where: {
        userId: userId,
      },
    });
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function addBill(req, res) {
  const { userId, name, date, amount } = req.body;
  try {
    const newBill = await Bill.create({
      userId: userId,
      name: name,
      amount: amount,
      date: date,
    });
    return res.json(newBill);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function editBill(req, res) {
  try {
    let billToAdd = req.body;
    let billToReplace = req.params.billId;
    let billToEdit = await Bill.findByPk(billToReplace);
    await billToEdit.update(billToAdd);
    let allBill = await Bill.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    return res.json(allBill);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function deleteBill(req, res) {
  try {
    const { userId, billId } = req.params;
    await Bill.destroy({ where: { id: billId } });
    let allBill = await Bill.findAll({
      where: {
        userId: userId,
      },
    });
    return res.json(allBill);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getBills,
  addBill,
  editBill,
  deleteBill,
};
