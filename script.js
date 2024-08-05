function transformString(type) {
  const inputString = document.getElementById("inputString").value;

  let transformedString = "";
  switch (type) {
    case "lower":
      transformedString = inputString.toLowerCase();
      break;
    case "upper":
      transformedString = inputString.toUpperCase();
      break;
    case "camel":
      transformedString = toCamelCase(inputString);
      break;
    case "pascal":
      transformedString = toPascalCase(inputString);
      break;
    case "snake":
      transformedString = inputString.split(" ").join("_").toLowerCase();
      break;
    case "kebab":
      transformedString = inputString.split(" ").join("-").toLowerCase();
      break;
    case "trim":
      transformedString = inputString.replace(/\s+/g, "");
      break;
  }

  document.getElementById(`${type}Case`).textContent = transformedString;
}

function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function toPascalCase(str) {
  return str.replace(/(\w)(\w*)/g, function (_, firstChar, rest) {
    return firstChar.toUpperCase() + rest.toLowerCase();
  });
}
