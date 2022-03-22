const parseStringArray: (arr: string[]) => Object[] =
  arr => arr.map(item => JSON.parse(item));


function contentParser(content: string): Object[] {
  const jsonRegExp: RegExp =
    /<script type=\"application\/json\">([^<]+)<\/script>/gim;
  const resultList: string[] = [];
  let execResult: string[] | null = [];
  while ((execResult = jsonRegExp.exec(content)) !== null) {
    resultList.push(execResult[1]);
  }
  return parseStringArray(resultList);
}

export default contentParser;