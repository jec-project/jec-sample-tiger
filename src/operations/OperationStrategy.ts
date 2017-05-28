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

import { Operation } from "./Operation";
import { CalculatorOperation } from "./CalculatorOperation";
import { AddOperation } from "../impl/AddOperation";
import { RemoveOperation } from "../impl/RemoveOperation";
import { MultiplyOperation } from "../impl/MultiplyOperation";
import { DivideOperation } from "../impl/DivideOperation";
import { OperationStrategyError } from "../exceptions/OperationStrategyError";

/**
 * Specifies which strategy to use for computing two numeric values.
 */
export class OperationStrategy {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>OperationStrategy</code> instance.
   */
  constructor() {
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The map that is used to store all operations.
   */
  private _operationMap:Map<number, Operation> = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initialize this object.
   */
  private initObj():void {
    this._operationMap = new Map<number, Operation>();
    this._operationMap.set(CalculatorOperation.ADD, new AddOperation());
    this._operationMap.set(CalculatorOperation.REMOVE, new RemoveOperation());
    this._operationMap.set(CalculatorOperation.MULTIPLY,
                                                       new MultiplyOperation());
    this._operationMap.set(CalculatorOperation.DIVIDE, new DivideOperation());
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns an instance that corresponds to the specified operation type.
   * 
   * @param {number} operationType the type of operation that is used to find
   *                               the operation.
   * 
   * @return {Operation} an instance that corresponds to the specified
   *                     operation type.
   */
  public getOperation(operationType:number):Operation {
    if(!this._operationMap.has(operationType)) {
      throw new OperationStrategyError(
        "Operation type is not valid: " + operationType
      );
    }
    return this._operationMap.get(operationType);
  }
}