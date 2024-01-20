import names from "./data/names";
import lastNames from "./data/lastNames";
import statuses from "./data/statuses";
import dailingCodes from "./data/dailing-codes";

const getRandom = (list: Array<String>) => {
  return list[Math.floor(Math.random() * list.length)];
};

const generateRandomString = (length: number) => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

const generateDummyMobileNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10000000);
  const dailingCode = getRandom(dailingCodes);
  const formattedNumber = `${dailingCode}${String(randomNumber).padStart(
    7,
    "0"
  )}`;

  return formattedNumber;
};

function generateDummyEmail() {
  const emailProviders = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "example.com",
  ];
  const username = generateRandomString(8);
  const randomProvider = getRandom(emailProviders);
  const dummyEmail = `${username}@${randomProvider}`;

  return dummyEmail;
}

const loadFonts = async (node) => {
  await Promise.all(
    node
      .getRangeAllFontNames(0, node.characters.length)
      .map(figma.loadFontAsync)
  );
};

const doMagic = async (node) => {
  await loadFonts(node);

  let firstName, lastName, result, status, cellphone, email;

  switch (figma.command) {
    case "fullname":
      firstName = getRandom(names);
      lastName = getRandom(lastNames);
      result = `${firstName} ${lastName}`;
      break;
    case "firstname":
      firstName = getRandom(names);
      result = firstName;
      break;
    case "lastname":
      lastName = getRandom(lastNames);
      result = lastName;
      break;
    case "status":
      status = getRandom(statuses);
      result = status;
      break;
    case "cellphone":
      cellphone = generateDummyMobileNumber();
      result = cellphone;
      break;
    case "email":
      email = generateDummyEmail();
      result = email;
      break;
  }

  node.characters = result;
};

(async () => {
  if (!figma.currentPage.selection.length) {
    figma.notify("Select at least one text layer.");
    figma.closePlugin();
  } else {
    const textNodes = figma.currentPage.selection.filter(
      (node) => node.type === "TEXT"
    );
    if (!textNodes.length) {
      figma.notify("Select at least one text layer.");
      figma.closePlugin();
    }

    for (const node of textNodes) {
      if (node.type === "TEXT") {
        await doMagic(node);
      }
    }
    figma.closePlugin();
  }
})();
