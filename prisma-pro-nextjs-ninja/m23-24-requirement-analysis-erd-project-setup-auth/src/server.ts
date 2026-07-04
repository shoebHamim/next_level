import app from "./app";
import { prisma } from "./lib/prisma.config";

const port = process.env.PORT || 3000;

async function main() {
  try {
    await prisma.$connect();
    console.log("Connected to database successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("An error occurred", error);
    await prisma.$disconnect();
    process.exit();
  }
}
main();
