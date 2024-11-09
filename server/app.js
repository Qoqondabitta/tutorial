import express from "express";
import { config } from "dotenv";
import cors from "cors";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router.get("/", (req, res, next) => {
//     res.json({ success: true, message: "Alhamdulillah" })
// });

router.post("send/mail", async (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return next(res.status(400).json({
            success: false,
            message: "Please fill in all fields",
        }))
    }
})

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server Listening at port ${process.env.PORT}`);
})
