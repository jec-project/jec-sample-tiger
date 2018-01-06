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

import { TestSuite, Test } from "jec-juta";
import { expect } from "chai";
import { Operation } from "../../src/operations/Operation";
import { DivideOperation } from "../../src/impl/DivideOperation";
import { OperationError } from "../../src/exceptions/OperationError"

@TestSuite({
  description: "Tests the methods of the DivideOperation class"
})
export class DivideOperationTest {

  private generateRandomNumber():number {
    return Math.floor(Math.random() * 201) - 100;
  };

  @Test({
    description: "#compute(a, 0) should throw an error"
  })
  public tesDivideByZero():void {
    let a:number = this.generateRandomNumber();
    let operation:Operation = new DivideOperation();
    try {
      operation.compute(a, 0);
    } catch (e) {
      expect(e).to.be.an.instanceOf(OperationError);
    }
  }

  @Test({
    description: "#compute(a, b) should return (a / b)"
  })
  public testCompute():void {
    let a:number = this.generateRandomNumber();
    let b:number = this.generateRandomNumber();
    if(b === 0) b = 6;
    let expected:number = a / b;
    let operation:Operation = new DivideOperation();
    expect(operation.compute(a, b)).to.equal(expected);
  }
  
  @Test({
    description: "#compute(a, b) is idempotent",
    repeat: 10
  })
  public testIdempotency():void {
    let a:number = 8;
    let b:number = 4;
    let operation:Operation = new DivideOperation();
    expect(operation.compute(a, b)).to.equal(2);
  }
}