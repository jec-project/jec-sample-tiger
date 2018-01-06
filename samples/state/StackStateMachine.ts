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

import { ExpressionType } from "./ExpressionType";
import { StackState } from "./StackState";

/**
 * A utility class that manages the states of a calculator.
 */
export class StackStateMachine {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>StackStateMachine</code> instance.
   */
  constructor() {}
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the next state, depending on the current state and the specified
   * expression type. Returns <code>null</code> if the state sequence is not
   * valid.
   *
   * @param {number} currentState the current state of the calculator. Valid
   * 							                values are the constants of the
   * 							                <code>StackState</code> enumeration.
   * @param {number} expressionType the type of the expression that represents. 
   * 							                  a user input. Valid values are the constants 
   * 							                  of the <code>ExpressionType</code>
   *                                enumeration.
   * @return {number} a constant of the <code>StackState</code> enumeration,
					            or <code>null</code>.
   */
  public getNextState(currentState:number, expressionType:number):number {
    let nextState:number = null;
    if(expressionType === ExpressionType.RESET) {
      nextState = StackState.EMPTY;
    } else if(expressionType === ExpressionType.OPERAND) {
      if(currentState === StackState.LEFT_OPERAND) {
        nextState = StackState.OPERATOR;
      } else if(currentState === StackState.OPERATOR) {
        nextState = StackState.RIGHT_OPERAND;
      }  else if(currentState === StackState.RIGHT_OPERAND) {
        nextState = StackState.LEFT_OPERAND;
      }
    } else if(expressionType === ExpressionType.OPERATOR) {
      if(currentState === StackState.OPERATOR) {
        nextState = StackState.RIGHT_OPERAND;
      }
    }
    return nextState;
  }
 }