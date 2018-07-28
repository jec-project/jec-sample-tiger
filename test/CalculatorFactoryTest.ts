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
import { Calculator } from "../src/Calculator";
import { CalculatorFactory } from "../src/CalculatorFactory";

@TestSuite({
  description: "Tests the methods of the CalculatorFactory class"
})
export class CalculatorFactoryTest {

  @Test({
    description: "#create() should return new objects that implement the Calculator interface"
  })
  public testCreate():void {
    const factory:CalculatorFactory = new CalculatorFactory();
    const calc1:Calculator = factory.create();
    const calc2:Calculator = factory.create();
    expect(calc1).not.to.be.null;
    expect(calc2).not.to.be.null;
    expect(calc1).not.to.equal(calc2);
  }
  
  @Test({
    description: "should be ignored by the Tiger test runner",
    disabled: true
  })
  public disabledTest():void {
    throw new Error("This error should never be called.");
  }
}