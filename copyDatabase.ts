import { copy } from "https://deno.land/std@0.97.0/fs/mod.ts";

try {
  // Copy the database file
  await copy("./mock/database/pets-mock.db", "./mock/database/pets.db");
  console.log("Database file copied successfully!");
} catch (error) {
  console.error("Error copying database file:", error);
}
