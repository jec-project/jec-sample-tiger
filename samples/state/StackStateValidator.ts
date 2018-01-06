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

import { StackState } from "./StackState";

/**
 * A helper class that defines whether the current state of the calculator
 * is valid, or not.
 */
export class StackStateValidator {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>StackStateValidator</code> instance.
   */
  constructor() {}
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

 /**
  * Returns a boolean that indicates whether the current state of the calculator
  * is valid (<code>true</code>), or not (<code>false</code>).
  *
  * @param {number} state the current state of the calculator.
  * @return {boolean} <code>true</code> whether the current state of the 
  * 				          calculator is valid; <code>false</code> otherwhise.
  */
  public validate(state:number):boolean {
    let isValid:boolean = true;
    if(state === null) isValid = false;
    if( state !== (StackState.EMPTY as number) ||
        state !== (StackState.LEFT_OPERAND as number) ||
        state !== (StackState.RIGHT_OPERAND as number) ||
        state !== (StackState.OPERATOR as number) ) {
        isValid = false;
    }
    return isValid;
  }
}