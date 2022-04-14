/**
 * 转换对象为URL参数形式的方法
 * @param {obj}
 * @returns {string}
 */
 export function tranformParams(obj: { [x: string]: any; }):string {
  let query = '',
    name,
    value,
    fullSubName,
    subName,
    subValue,
    innerObj,
    i;

  for (name in obj) {
    value = obj[name];

    if (value instanceof Array) {
      for (i = 0; i < value.length; ++i) {
        subValue = value[i];
        fullSubName = name + '[' + i + ']';
        innerObj = {
          fullSubName: subValue
        };
        query += tranformParams(innerObj) + '&';
      }
    } else if (value instanceof Object) {
      for (subName in value) {
        subValue = value[subName];
        fullSubName = name + '[' + subName + ']';
        innerObj = {
          fullSubName: subValue
        };
        query += tranformParams(innerObj) + '&';
      }
    } else if (value !== undefined && value !== null)
      query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
  }

  return query.length ? query.substr(0, query.length - 1) : query;
}