//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { TestSuite, Test, Before, After, InstantiationPolicy, BeforeClass,
         AfterClass, TestSuiteError} from "jec-juta";
import { expect } from "chai";
import { CalculatorOperation } from "../../src/operations/CalculatorOperation";
import { OperationStrategy } from "../../src/operations/OperationStrategy";
import { AddOperation } from "../../src/impl/AddOperation";
import { RemoveOperation } from "../../src/impl/RemoveOperation";
import { MultiplyOperation } from "../../src/impl/MultiplyOperation";
import { DivideOperation } from "../../src/impl/DivideOperation";
import { OperationStrategyError } from "../../src/exceptions/OperationStrategyError";

@TestSuite({
  description: "Tests the constants of the CalculatorOperation enum",
  instantiationPolicy: InstantiationPolicy.MULTIPLE
})
export class OperationStrategyTest {

  public static numTests:number = NaN;

  @BeforeClass()
  public static initClass():void {
    console.log("OperationStrategyTest.initClass");
    OperationStrategyTest.numTests = 0;
  }

  @AfterClass()
  public static resetClass():void {
    console.log("OperationStrategyTest.resetClass");
    if(OperationStrategyTest.numTests !== 5) {
      throw new TestSuiteError("Test suite should creat 5 instances");
    }
  }

  public strategy:OperationStrategy = null;

  @Before()
  public init():void {
    this.strategy = new OperationStrategy();
  }

  @After()
  public reset():void {
    this.strategy = null;
  }
  
  @Test({
    description: "#getOperation(x) should throw an error when x is not a constant of the CalculatorOperation enum"
  })
  public testInvalidOperation():void {
    OperationStrategyTest.numTests++;
    try {
      this.strategy.getOperation(28);
    } catch(e) {
      expect(e).to.be.an.instanceOf(OperationStrategyError);
    }
  }

  @Test({
    description: "#getOperation(CalculatorOperation.ADD) should return an instance of AddOperation"
  })
  public testGetADD():void {
    OperationStrategyTest.numTests++;
    expect(this.strategy.getOperation(CalculatorOperation.ADD))
          .to.be.an.instanceOf(AddOperation);
  }

  @Test({
    description: "#getOperation(CalculatorOperation.REMOVE) should return an instance of RemoveOperation"
  })
  public testGetREMOVE():void {
    OperationStrategyTest.numTests++;
    expect(this.strategy.getOperation(CalculatorOperation.REMOVE))
          .to.be.an.instanceOf(RemoveOperation);
  }

  @Test({
    description: "#getOperation(CalculatorOperation.MULTIPLY) should return an instance of MultiplyOperation"
  })
  public testGetMULTIPLY():void {
    OperationStrategyTest.numTests++;
    expect(this.strategy.getOperation(CalculatorOperation.MULTIPLY))
          .to.be.an.instanceOf(MultiplyOperation);
  }

  @Test({
    description: "#getOperation(CalculatorOperation.DIVIDE) should return an instance of DivideOperation"
  })
  public testGetDIVIDE():void {
    OperationStrategyTest.numTests++;
    expect(this.strategy.getOperation(CalculatorOperation.DIVIDE))
          .to.be.an.instanceOf(DivideOperation);
  }
}