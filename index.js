// imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
var cron = require("node-cron");

// Auth0
const { auth } = require("express-oauth2-jwt-bearer");
const checkJwt = auth({
  audience: "https://kaching/api",
  issuerBaseURL: "https://dev-e27oql725amd8bwx.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

const usersRouter = require("./routers/UsersRouter");
const transactionsRouter = require("./routers/TransactionsRouter");
const categoriesRouter = require("./routers/CategoriesRouter");
const incomeExpensesRouter = require("./routers/IncomeExpensesRouter");
const budgetsRouter = require("./routers/BudgetsRouter");
const billRouter = require("./routers/BillsRouter");
const notificationRouter = require("./routers/NotificationsRouter");

// enforce on all endpoints
// get PORT from .env
const PORT = process.env.PORT;
// instantiate express
const app = express();
app.use(cors());
app.use(express.json());
app.use(checkJwt);

app.use("/user", checkJwt, usersRouter);
app.use("/transaction", checkJwt, transactionsRouter);
app.use("/category", checkJwt, categoriesRouter);
app.use("/incomeexpense", checkJwt, incomeExpensesRouter);
app.use("/budget", checkJwt, budgetsRouter);
app.use("/bill", checkJwt, billRouter);
app.use("/notification", checkJwt, notificationRouter);

app.listen(PORT, () => {
  console.log(`Application listening to port ${PORT}`);
});

// const db = require("./db/models/index");
// const { Bill } = db;

// async function getAllBills(req, res) {
//   try {
//     const bills = await Bill.findAll();
//     const billList = JSON.parse(JSON.stringify(bills));
//     billList.forEach((bill) => {
//       if (bill.interval === "Monthly") {
//         const date = new Date(bill.date).getDate();
//         cron.schedule(`*/${date} * * * * *`, () => {
//           console.log("send email", bill.name, new Date().toLocaleTimeString());
//         });
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// getAllBills();
