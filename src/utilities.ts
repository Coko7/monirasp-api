import fs from "fs";

/**
 * Open a csv file and convert it to an array of JSON objects.
 *
 * Setting `header` to true will result in column names in the csv file being
 * treated as property names for the JSON objects. In that case, the first row
 * will be used as column names.
 *
 * @since   1.0.0
 * @access  public
 *
 * @param {string}  path        The path of the csv file.
 * @param {string}  seperator   The seperator used to split data in the csv file. `","` by default.
 * @param {boolean} header      Whether the csv file has a header. `true` by default.
 *
 * @returns {Array<JSON>} The rows of the csv as JSON objects.
 */
export function csvToJson(
  path: string,
  seperator: string = ",",
  header: boolean = true
): Array<JSON> {
  let jsonData: Array<JSON> = [];

  // Read the csv file and split it into rows
  const data = fs.readFileSync(path).toString();
  const csvData = data.split("\n");

  // If header is set to true, treat the first row as column names
  let csvHead: Array<string> | undefined;
  if (header) {
    if (csvData.at(csvData.length - 1) === "") csvData.pop();
    csvHead = csvData.shift()?.split(seperator);
  }

  // Count the number of columns in total based on the first row
  const columnCount: number = csvData.at(0)?.split(",").length ?? 0;

  // Iterate over each row of data and split them using the seperator symbol
  csvData.forEach((row) => {
    let fields = row.split(seperator);

    // Make sure that each row has the same amount of columns
    if (fields.length !== columnCount) {
      throw new Error("Inconsistent number of columns");
    }

    // Iterate over each field
    let jsonRow: any = {};
    fields.forEach((field: any, index: number) => {
      // If columns names are defined, use them as prop names for the JSON object
      let fieldName = csvHead?.at(index) ?? `prop${index}`;

      // Attempt to convert the field value to a number.
      // Otherwise, keep it as a string.
      if (!isNaN(field)) field = parseFloat(field);
      jsonRow[toCamelCase(fieldName)] = field;
    });

    jsonData.push(jsonRow);
  });

  return jsonData;
}

/**
 * Convert a string to **camelCase** format.
 *
 * @since   1.0.0
 * @access  private
 *
 * @param {string} str The input string.
 *
 * @returns {string} A string formatted in **camelCase**.
 */
function toCamelCase(str: string): string {
  return str
    .replace(/[^a-z0-9]/gi, " ")
    .toLowerCase()
    .split(" ")
    .map((el, ind) =>
      ind === 0 ? el : el[0].toUpperCase() + el.substring(1, el.length)
    )
    .join("");
}
