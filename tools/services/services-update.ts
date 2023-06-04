const fs = require("fs").promises;

const encoding = "utf8";
const pathToServices = "./tools/services";

updateServices();

async function updateServices() {
  const files = (await fs.readdir(pathToServices)).filter((file) =>
    file.endsWith("service")
  );

  for (const file of files) {
    const filePath = `${pathToServices}/${file}`;
    const serviceFile = await fs.readFile(filePath, encoding);
    const serviceFileLines = serviceFile.split("\n");

    const workDirIndex = serviceFileLines.findIndex((line) =>
      line.includes("WorkingDirectory")
    );
    serviceFileLines[workDirIndex] = `WorkingDirectory=${process.cwd()}`;
    fs.writeFile(filePath, serviceFileLines.join("\n"), encoding);
  }
}
