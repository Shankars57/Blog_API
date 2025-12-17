import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//  FORCE the exact path to .env
dotenv.config({
  path: path.join(__dirname, "..", ".env")
});
if (!process.env.APP_DB_URL) {
  console.error(".env loaded but APP_DB_URL missing");
  process.exit(1);
}
