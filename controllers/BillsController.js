const db = require("../db/models/index");
var cron = require("node-cron");

const { Bill, Notification } = db;

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
  const { userId, name, date, amount, interval } = req.body;
  try {
    const newBill = await Bill.create({
      userId: userId,
      name: name,
      amount: amount,
      date: date,
      interval: interval,
    });
    const bill = JSON.parse(JSON.stringify(newBill));
    if (bill.interval === "Monthly") {
      const date = new Date(bill.date).getDate();
      cron.schedule(`*/${date} * * * * *`, () => {
        console.log("send email", bill.name, new Date().toLocaleTimeString());
        sendNotification(
          userId,
          `${name} bill notice!`,
          `Remember to pay your bill today`,
          false,
          new Date(bill.date)
        );
      });
    }
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

const sendNotification = async (userId, title, description, isRead, date) => {
  try {
    const newNotification = await Notification.create({
      userId: userId,
      title: title,
      description: description,
      isRead: isRead,
      date: date,
    });
    // return res.json(newNotification);
  } catch (err) {
    console.log(err);
    // return res.status(400).json({ error: true, msg: err });
  }
};

module.exports = {
  getBills,
  addBill,
  editBill,
  deleteBill,
};
