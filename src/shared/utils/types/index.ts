type ITupleStrUnd = string | undefined;

const tupleStrUnd = <T extends ITupleStrUnd[]>(...args: T): ITupleStrUnd[] => args;
const tupleString = <T extends string[]>(...args: T): string[] => args;
const tupleNumber = <T extends number[]>(...args: T): number[] => args;

export { tupleNumber, tupleStrUnd, tupleString };

