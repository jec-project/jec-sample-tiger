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

import { TestSuite, Test, Before, BeforeClass, AfterClass } from "jec-juta";
import { expect } from "chai";
import { CalculatorImpl } from "../../src/impl/CalculatorImpl";
import { CalculatorOperation } from "../../src/operations/CalculatorOperation";
import { OperationError } from "../../src/exceptions/OperationError";

@TestSuite({
  description: "Tests the methods of the CalculatorImpl class"
})
export class CalculatorImplTest {

  private generateRandomNumber():number {
    return Math.floor(Math.random() * 201) - 100;
  };

  public calcImpl:CalculatorImpl = null;
  public a:number = 0;
  public b:number = 0;

  @BeforeClass()
  public initCalc():void {
    this.calcImpl = new CalculatorImpl();
  }

  @AfterClass()
  public deleteCalc():void {
    this.calcImpl = null;
  }

  @Before()
  public initValues():void {
    this.a = this.generateRandomNumber();
    this.b = this.generateRandomNumber();
  }

  @Test({
    description: "#doOperation(CalculatorOperation.ADD, a, b) should always (a + b)",
  })
  public testAdd():void {
    let expected:number = this.a + this.b;
    expect(
      this.calcImpl.doOperation(CalculatorOperation.ADD, this.a, this.b)
    ).to.equal(expected);
  }
  
  @Test({
    description: "#doOperation(CalculatorOperation.REMOVE, a, b) should (a - b)"
  })
  public testRemove():void {
    let expected:number = this.a - this.b;
    expect(
      this.calcImpl.doOperation(CalculatorOperation.REMOVE, this.a, this.b)
    ).to.equal(expected);
  }
  
  @Test({
    description: "#doOperation(CalculatorOperation.MULTIPLY, a, b) should return (a * b)"
  })
  public testMultiply():void {
    let expected:number = this.a * this.b;
    expect(
      this.calcImpl.doOperation(CalculatorOperation.MULTIPLY, this.a, this.b)
    ).to.equal(expected);
  }
  
  @Test({
    description: "#doOperation(CalculatorOperation.DIVIDE, a, 0) should throw an error"
  })
  public testDivideByZero():void {
    try {
      this.calcImpl.doOperation(CalculatorOperation.DIVIDE, this.a, 0);
    } catch(e) {
      expect(e).to.be.an.instanceOf(OperationError);
    }
  }
  
  @Test({
    description: "#doOperation(CalculatorOperation.DIVIDE, a, b) should should return (a / b)"
  })
  public testDivide():void {
    if(this.b === 0) this.b += 1;
    let expected:number = this.a / this.b;
    expect(
      this.calcImpl.doOperation(CalculatorOperation.DIVIDE, this.a, this.b)
    ).to.equal(expected);
  }
}