type tupleStrUnd = string | undefined;

export const tupleStrUnd = <T extends tupleStrUnd[]>(...args: T): tupleStrUnd[] => args;
export const tupleString = <T extends string[]>(...args: T) => args;
export const tupleNumber = <T extends number[]>(...args: T) => args;
