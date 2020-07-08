/**
 * Return a secure value from an object path
 * @param {string} lens - The path to the value separated by dots
 * @param {object} root - The root value
 * @param {?*} def - (optional) A default response in the case the provided value fails
 */
function defaultValue(lens, root, def) {
  const children = lens.split('.');
  if(!root) return def;
  const getValue = (obj, idx = 0) => {
    return idx === children.length ? obj
      : !!obj[children[idx]] ? getValue(obj[children[idx]], idx + 1)
        : false;
  };
  const fullPath = getValue(root);
  return root && fullPath ? fullPath : def;
}
