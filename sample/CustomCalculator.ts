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

import { Calculator } from "../src/Calculator";
import { CalculatorFactory } from "../src/CalculatorFactory";
import { CalculatorOperation } from "../src/operations/CalculatorOperation";

/**
 * A composite class for simplifying the use of <code>Calculator</code> objects.
 */
export class CustomCalculator {

  ///////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>CustomCalculator</code> instance.
   */
  constructor() {
    this.initObj();
  }

  ///////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>Calculator</code> object used by this
   * <code>CustomCalculator</code> instance to perform computations.
   */
  private _calculator:Calculator = null;

  ///////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    let factory:CalculatorFactory = new CalculatorFactory();
    this._calculator = factory.create();
  }
  
  ///////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Adds the specified values and returns the result.
   * 
   * @param {number} a the first value to compute.
   * @param {number} b the second value to compute.
   * 
   * @return {number} the result of the computation.
   */
  public add(a:number, b:number):number {
    return this._calculator.doOperation(CalculatorOperation.ADD, a, b);
  }
  
  /**
   * Removes <code>b</code> from <code>a</code> and returns the result.
   * 
   * @param {number} a the first value to compute.
   * @param {number} b the second value to compute.
   * 
   * @return {number} the result of the computation.
   */
  public remove(a:number, b:number):number {
    return this._calculator.doOperation(CalculatorOperation.REMOVE, a, b);
  }
  
  /**
   * Multiplies the specified values and returns the result.
   * 
   * @param {number} a the first value to compute.
   * @param {number} b the second value to compute.
   * 
   * @return {number} the result of the computation.
   */
  public multiply(a:number, b:number):number {
    return this._calculator.doOperation(CalculatorOperation.REMOVE, a, b);
  }
  
  /**
   * Removes <code>a</code> by <code>b</code> and returns the result.
   * 
   * @param {number} a the first value to compute.
   * @param {number} b the second value to compute.
   * 
   * @return {number} the result of the computation.
   */
  public divide(a:number, b:number):number {
    return this._calculator.doOperation(CalculatorOperation.DIVIDE, a, b);
  }
}