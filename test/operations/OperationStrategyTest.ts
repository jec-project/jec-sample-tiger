//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import { TestSuite, Test, Before, After } from "jec-juta";
import { expect } from "chai";
import { CalculatorOperation } from "../../src/operations/CalculatorOperation";
import { OperationStrategy } from "../../src/operations/OperationStrategy";
import { AddOperation } from "../../src/impl/AddOperation";
import { RemoveOperation } from "../../src/impl/RemoveOperation";
import { MultiplyOperation } from "../../src/impl/MultiplyOperation";
import { DivideOperation } from "../../src/impl/DivideOperation";
import { OperationStrategyError } from "../../src/exceptions/OperationStrategyError";

@TestSuite({
  description: "Tests the constants of the CalculatorOperation enum"
})
export class OperationStrategyTest {

  public strategy:OperationStrategy = null;

  @Before()
  public init():void {
    this.strategy = new OperationStrategy();
  }

  @After()
  public reset():void {
    this.strategy = null;
  }

  OperationStrategyError
  
  @Test({
    description: "#getOperation(x) should throx an error when x is not a constant of the CalculatorOperation enum"
  })
  public testInvalidOperation():void {
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
    expect(this.strategy.getOperation(CalculatorOperation.ADD))
          .to.be.an.instanceOf(AddOperation);
  }

  @Test({
    description: "#getOperation(CalculatorOperation.REMOVE) should return an instance of RemoveOperation"
  })
  public testGetREMOVE():void {
    expect(this.strategy.getOperation(CalculatorOperation.REMOVE))
          .to.be.an.instanceOf(RemoveOperation);
  }

  @Test({
    description: "#getOperation(CalculatorOperation.MULTIPLY) should return an instance of MultiplyOperation"
  })
  public testGetMULTIPLY():void {
    expect(this.strategy.getOperation(CalculatorOperation.MULTIPLY))
          .to.be.an.instanceOf(MultiplyOperation);
  }

  @Test({
    description: "#getOperation(CalculatorOperation.DIVIDE) should return an instance of DivideOperation"
  })
  public testGetDIVIDE():void {
    expect(this.strategy.getOperation(CalculatorOperation.DIVIDE))
          .to.be.an.instanceOf(DivideOperation);
  }
}