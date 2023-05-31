const db = require("../db/models/index");
var cron = require("node-cron");
const sgMail = require("@sendgrid/mail");

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
  const { userId, name, date, amount, interval, user } = req.body;
  try {
    const newBill = await Bill.create({
      userId: userId,
      name: name,
      amount: amount,
      date: date,
      interval: interval,
    });
    const bill = JSON.parse(JSON.stringify(newBill));
    // if (bill.interval === "Monthly") {
    //   const date = new Date(bill.date).getDate();
    //   cron.schedule(`*/${date} * * * * *`, () => {
    //     const message = `Remember to pay your ${name} bill today!`;
    //     sendNotification(
    //       userId,
    //       `${name} bill notice!`,
    //       message,
    //       false,
    //       new Date(bill.date)
    //     );
    //     sendEmail(user, message);
    //     console.log("send email", bill.name, new Date().toLocaleTimeString());
    //   });
    // }
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
    await Notification.create({
      userId: userId,
      title: title,
      description: description,
      isRead: isRead,
      date: date,
    });
    console.log("Notification sent!");
  } catch (err) {
    console.log(err);
  }
};

const sendEmail = (user, message) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: user.email, // Change to your recipient
    from: "ahshawngoh@gmail.com", // Change to your verified sender
    subject: "Bill Reminder!!!",
    text: `Hello ${user.firstName},\n\n${message}\n\nRegards,\nKaching Team `,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  getBills,
  addBill,
  editBill,
  deleteBill,
};
