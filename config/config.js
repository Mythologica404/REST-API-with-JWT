import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const JWT_Secret = process.env.JWT_Secret;

export { PORT, JWT_Secret };
