const db = require("../db/models/index");

const { Notification } = db;

async function getNotifications(req, res) {
  const { userId } = req.params;
  try {
    const data = await Notification.findAll({
      where: {
        userId: userId,
      },
    });
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function editNotification(req, res) {
  try {
    let notificationToAdd = req.body;
    let notificationToReplace = req.params.notificationId;
    let notificationToEdit = await Notification.findByPk(notificationToReplace);
    await notificationToEdit.update(notificationToAdd);
    let allNotification = await Notification.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    return res.json(allNotification);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function deleteNotification(req, res) {
  try {
    const { userId, notificationId } = req.params;
    await Notification.destroy({ where: { id: notificationId } });
    let allNotification = await Notification.findAll({
      where: {
        userId: userId,
      },
    });
    return res.json(allNotification);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getNotifications,
  editNotification,
  deleteNotification,
};
