import { readFile, writeFile } from "fs/promises";

(async function () {
  const beacon = (await readFile("beacon.txt", "utf8")).trim();
  const active =
    Date.now() - new Date(beacon).getTime() < 21 * 24 * 3600 * 1000;
  const secret_key = active ? "N/A" : process.env.SECRET_KEY || "";

  await writeFile(
    "assets/data.json",
    JSON.stringify({ beacon, active, secret_key }, null, 2)
  );
})();
