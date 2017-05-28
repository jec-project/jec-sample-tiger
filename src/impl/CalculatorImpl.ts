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

import { Calculator } from "../Calculator";
import { Operation } from "../operations/Operation";
import { CalculatorOperation } from "../operations/CalculatorOperation";
import { OperationStrategy } from "../operations/OperationStrategy";

/**
 * A sample class that performs basic computations.
 */
export class CalculatorImpl implements Calculator {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>CalculatorImpl</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The operation strategy for this calculator.
   */
  private readonly STRATEGY:OperationStrategy = new OperationStrategy();

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public doOperation(operation:number, a:number, b:number):number {
    let operationImpl:Operation = this.STRATEGY.getOperation(operation);
    return operationImpl.compute(a, b);
  }
}