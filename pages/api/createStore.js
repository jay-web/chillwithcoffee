import dbConnect from "../../middleware/database";

import Stores from "../../model/store.model";

const handler = async (req, res) => {
  await dbConnect();
  console.log("method ", req.method);
  if (req.method != "POST") {
    res.status(400);
    res.json({ message: "HTTP method should be POST ONLY" });
  }

  try {
    const store = req.body;

    response = await Stores.create(store);

    res.status(200);
    res.json(response);
  } catch (err) {
    res.status(500);
    console.error(err.message);
    res.json({ message: err.message });
  }
};

export default handler;
