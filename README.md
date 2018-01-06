# JEC Tiger Project Sample

The JEC Tiger Project Sample shows a concrete use case of creating unit tests with the [JEC Tiger framework](https://github.com/pechemann/jec-tiger). It uses [JUTA](https://github.com/pechemann/jec-juta) annotations to write test cases without paying attention about the unit test framework that will run test suites.

By using [JUTA](https://github.com/pechemann/jec-juta), Tiger test suites are similar to Junit tests, with the following advantages:
- intuitive framework for writing automated tests in [TypeScript](https://www.typescriptlang.org/)
- test classes provide a better design for encapsulation than historical frameworks (mocha, jasmine)
- test suites can be run from any JUTA implementation, based on historical frameworks (mocha, jasmine, etc.), without changing anyting in your code

The [JEC Tiger framework](https://github.com/pechemann/jec-tiger), [JUTA Project](https://github.com/pechemann/jec-juta) and JEC Tiger Project Sample are parts of the [JavaScript Entreprise Container *(JEC)* Project][jec-url].

[![][jec-logo]][jec-url]

## Requirements

JEC Tiger needs the following system parameters in order to work correctly:

- Node 6+
- npm 3+
- TypeScript 2+
- Mocha.js 3+

## Installation

Clone, or download, the JEC Tiger Project Sample module and then set up the application with:

```bash
$ npm install
```

Then, use the [TypeScript](https://www.typescriptlang.org/) compiler to generate all of the javaScript files
(see [Visual Studio Code](https://code.visualstudio.com/) for details).

## Project Sample

The JEC Tiger Project Sample uses a basic calculator implementation to show how
test suites written with the Tiger framework work. An example of this calculator
implementation is avalilable in the `sample` folder. To run this example, use
the `node` command as below:

```bash
$ node sample/calculator-sample
```

## Tiger Framework Project Structure

The Tiger Framework provides a well-designed directory structure to organize your projects:

```bash
├── app
│   ├── juta
│   │   └── tiger
│   │       └── run-unit-tests.ts
├── node_modules
│   ├── environment.prod.ts
│   └── environment.ts
├── src
│   ├── pkg
│   │   └── Class1.ts
│   ├── Class2.ts
│   └── Class3.ts
├── test
│   ├── pkg
│   │   └── Class1Test.ts
│   ├── Class2Test.ts
│   └── Class3Test.ts
└── sample
```

By default, test classes are located in the `test` folder, at the root of your project. Each class in the `test` folder has a corresponding test class in the `test` folder.

You can be run unit tests by using the standard npm command:
```bash
$ npm test
```

The `juta` folder is where JUTA configuration files are located. The following code shows the configuration file for the Tiger framework:

`run-unit-tests.ts`

```javascript
import { TestStats } from "jec-juta";
import {Tiger, TigerFactory} from "jec-tiger";

let factory:TigerFactory = new TigerFactory();
let tiger:Tiger = factory.create();
tiger.process((stats:TestStats)=> {
  if(stats.error) console.error(stats.error);
 });
```

Because test classes are decoupled from JUTA implementations, you may want to use different test frameworks in the same project:

```bash
├── app
│   └── juta
│       ├── tiger
│       │   └── run-unit-tests.ts
│       │
│       └── jasmine-juta
│           └── run-unit-tests.ts
└── ...
```

## Using JUTA Decorators

All JUTA decorators have to be imported with the ES6 syntax:

```javascript
import { TestSuite, Test } from "jec-juta";

@TestSuite({
  description: "Tests the \"HelloWorld\" class methods."
})
export class HelloWorldTest {
  
  @Test(
    description: "should say Hello to the world 3 times",
    repeat: 3
  )
  public sayHelloTest():void {
    // Test here...
  }
}
```

For a complete list of available decorators, please refer to the [JUTA project][jec-juta-url].

## Asynchronous Code

The JEC Tiger Project Sample only tests synchronous code of a `Calculator` sample implementation. For having an example of testing asynchronous code, please install the `jec-sample-tiger-async` project. *(This project is not available yet.)*

## Update Release Notes

**Current stable release:** [1.0.5](CHANGELOG.md#jec-sample-tiger-1.0.5)
 
For a complete listing of release notes for all JEC Tiger Sample update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC Tiger Project Sample is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2018 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: https://github.com/pechemann/JEC
[jec-juta-url]: https://github.com/pechemann/jec-juta
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png