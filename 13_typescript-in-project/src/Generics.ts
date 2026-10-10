// generics & interface => templates
// used widely in lib design

function WrapInArray<T> (item: T): Array<T> {
    return [item];
}

WrapInArray('hello');
WrapInArray(59);
WrapInArray(true);
WrapInArray({ name: "jacob" });


// generic interface
interface Box<T> {
    content: T
}

const stringBox: Box<string> = { content: "hello" };
const numberBox: Box<number> = { content: 5 };


// generics works with Partial, Pick, Omit refer object.ts

interface ApiPromise<T> {
    statusCode: number,
    data: T
}

const res: ApiPromise <{ content: string }> = {
    statusCode: 200,
    data: { content: "hello world!" }
}