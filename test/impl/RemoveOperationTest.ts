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
import { RemoveOperation } from "../../src/impl/RemoveOperation";

@TestSuite({
  description: "Tests the methods of the RemoveOperation class"
})
export class RemoveOperationTest {

  private generateRandomNumber():number {
    return Math.floor(Math.random() * 201) - 100;
  };

  @Test({
    description: "#compute(a, b) should return (a - b)",
    repeat: 10
  })
  public testCompute():void {
    const a:number = this.generateRandomNumber();
    const b:number = this.generateRandomNumber();
    const expected:number = a - b;
    const operation:Operation = new RemoveOperation();
    expect(operation.compute(a, b)).to.equal(expected);
  }
  
  @Test({
    description: "#compute(a, b) is idempotent",
    repeat: 10
  })
  public testIdempotency():void {
    const a:number = 8;
    const b:number = 4;
    const operation:Operation = new RemoveOperation();
    expect(operation.compute(a, b)).to.equal(4);
  }
}