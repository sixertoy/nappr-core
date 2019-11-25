const FUNC_NAME_REGEX = /function (.{1,})\(/;

function getProtoName(instance) {
  let { name } = instance.constructor;
  if (name) return name;
  const results = FUNC_NAME_REGEX.exec(this.constructor.toString());
  name = results && results.length > 1 ? results[1] : '';
  return name;
}

export default getProtoName;
