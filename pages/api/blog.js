import Post from "@/models/post";
import db from "@/lib/mongodb";

const handler = async (req, res) => {
  await db.connect();
  console.log(req.method);
  if (req.method === "POST") {
    console.log("connected");
    console.log(req.body);
    const x = await Post.create(req.body);
    res.send({ message: "seeded successfully" });
  } else {
    if (req.method === "GET") {
      const { id } = req.query;
      console.log(id);
      if (!id) {
        try {
          console.log("connected");
          const posts = await Post.find({});
          res.status(200).json({ success: true, data: posts });
        } catch {
          res.status(400).json({ success: " Cant get all posts" });
        }
      } else {
        try {
          const post = await Post.findById(id);
          if (!post) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: post });
        } catch {
          res.status(400).json({ success: false });
        }
      }
    }
  }
  await db.disconnect();
};
export default handler;
