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
import { CalculatorOperation } from "../../src/operations/CalculatorOperation";

@TestSuite({
  description: "Tests the constants of the CalculatorOperation enum"
})
export class CalculatorOperationTest {

  @Test({
    description: "#ADD should be a number"
  })
  public testADD():void {
    expect(CalculatorOperation.ADD).to.be.a("number");
  }
  
  @Test({
    description: "#REMOVE should be a number"
  })
  public testREMOVE():void {
    expect(CalculatorOperation.REMOVE).to.be.a("number");
  }
  
  @Test({
    description: "#MULTIPLY should be a number"
  })

  public testMULTIPLY():void {
    expect(CalculatorOperation.MULTIPLY).to.be.a("number");
  }

  @Test({
    description: "#DIVIDE should be a number"
  })
  public testDIVIDE():void {
    expect(CalculatorOperation.DIVIDE).to.be.a("number");
  }
}