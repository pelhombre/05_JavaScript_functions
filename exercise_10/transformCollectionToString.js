import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";
/**
 * Write JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 * Transforms a collection into a string.
 * @param {array} collection
 * @returns {string}
 */
const transformCollectionToString = function (collection) {
  const hasElements = checkCollectionHasElements(collection);

  return hasElements ? collection.join(" | ") : "";
};
export default transformCollectionToString;
