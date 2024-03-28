type IsNumber<T> = T extends `${number}` ? true : false

type ColorOptions = 'green' | 'red' | 'blue';

type InferValueFromColor<Color extends string> =
    Color extends `${infer N}-${infer C}-${infer T}`
    ? IsNumber<T> extends true
    ? C extends ColorOptions
    ? {
        namespace: N;
        color: C;
        tone: T;
    }
    : never
    : never
    : never

type Example = InferValueFromColor<"text-green-300">

let example: Example = {
    color: 'green',
    namespace: "text",
    tone: '300'
}

example.color

const testObj = {
    name: 'test'
} as const

// testObj.name = 'test2'


function generic<T extends number | boolean>(params: T) {
    type res = T extends number ? number : boolean
    return !params
}

generic<3>(3)
generic<true>(true)

type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function exampleFunction(): number {
    return 10;
}

type ResultType = ExtractReturnType<typeof exampleFunction>; 