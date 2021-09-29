const createHmac = require("create-hmac");

const hmac = createHmac("sha256", "Deno FTW");

hmac.on("readable", () => {
  const data = hmac.read();
  if (data) {
    console.log(data.toString("hex"));
  }
});

hmac.write("some data to hash");

hmac.end();
