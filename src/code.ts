import names from "./data/names";
import lastNames from "./data/lastNames";
import statuses from "./data/statuses";

const getRandom = (list: Array<String>) => {
  return list[Math.floor(Math.random() * list.length)];
};

const generateDummyMobileNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10000000000);
  const formattedNumber = `09${String(randomNumber).padStart(8, "0")}`;
  return formattedNumber;
};

const loadFonts = async (node) => {
  await Promise.all(
    node
      .getRangeAllFontNames(0, node.characters.length)
      .map(figma.loadFontAsync)
  );
};

const doMagic = async (node) => {
  await loadFonts(node);

  let firstName, lastName, result, status, cellphone;

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
