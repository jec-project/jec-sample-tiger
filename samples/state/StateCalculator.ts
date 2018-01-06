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

import { Calculator } from "../../src/Calculator";
import { CalculatorFactory } from "../../src/CalculatorFactory";
import { CalculatorOperation } from "../../src/operations/CalculatorOperation";
import { Expression } from "./Expression";
import { ExpressionBuilder } from "./ExpressionBuilder";
import { StackState } from "./StackState";
import { StackStateError } from "./StackStateError";
import { StackStateValidator } from "./StackStateValidator";
import { StackStateMachine } from "./StackStateMachine";
import { ExpressionType } from "./ExpressionType";

/**
 * A sample class that emulates standard pocket calculators.
 */
export class StateCalculator {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>StackedCalculator</code> instance.
   */
  constructor() {
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>Calculator</code> object used by this
   * <code>StackedCalculator</code> instance to perform computations.
   */
  private _calculator:Calculator = null;

  /**
   * The list that contains expressions used to compute the current
   * user inputs.
   */
  private _expStack:Expression[] = null;
  
  /**
   * The builder used to create new <code>Expression</code> instances.
   */
  private _expBuilder:ExpressionBuilder = null;
  
  /**
   * The helper object that manages the states of the calculator.
   */
  private _stateMachine:StackStateMachine = null;
  
  /**
   * The helper object that checks the states of the calculator.
   */
  private _stateValidator:StackStateValidator = null;
  
  /**
   * Stores the current the state of the calculator.
   */
  private _state:number = null;;
  
  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    let factory:CalculatorFactory = new CalculatorFactory();
    this._calculator = factory.create();
	this._expStack = new Array<Expression>();
	this._expBuilder = new ExpressionBuilder();
	this._stateMachine = new StackStateMachine();
	this._stateValidator = new StackStateValidator();
	this._state = StackState.EMPTY;
  }
  
  /**
   * Sets the current the state of the calculator, depending on the type
   * of user input specified.
   * 
   * @param {number} expressionType the type of user input that is responsible
   * 								                for changing the current state of the
   * 								                calculator.
   */
  private setState(expressionType:number):void {
    let nextState:number = this._stateMachine.getNextState(
      this._state, expressionType
    );
    if(this._stateValidator.validate(nextState) === false) {
      throw new StackStateError("Invalid expression");
    } else {
      this._state = nextState;
    }
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Pushes the <code>CalculatorOperation.ADD</code> operation into the
   * calculator stack.
   */
  public add():void {
	  this.setState(ExpressionType.OPERATOR);
    this._expStack.unshift(this._expBuilder.build(CalculatorOperation.ADD));
  }
  
  /**
   * Pushes the <code>CalculatorOperation.REMOVE</code> operation into the
   * calculator stack.
   */
  public remove():void {
	  this.setState(ExpressionType.OPERATOR);
    this._expStack.unshift(this._expBuilder.build(CalculatorOperation.REMOVE));
  }
  
  /**
   * Pushes the <code>CalculatorOperation.MULTIPLY</code> operation into the
   * calculator stack.
   */
  public multiply():void {
	  this.setState(ExpressionType.OPERATOR);
    this._expStack.unshift(this._expBuilder.build(CalculatorOperation.MULTIPLY));
  }
  
  /**
   * Pushes the <code>CalculatorOperation.DIVIDE</code> operation into the
   * calculator stack.
   */
  public divide():void {
	  this.setState(ExpressionType.OPERATOR);
    this._expStack.unshift(this._expBuilder.build(CalculatorOperation.DIVIDE));
  }
  
  /**
   * Pushes the specified <code>value</code> into the calculator stack.
   *
   * @param {number} value the value to add to the calculator stack.
   */
  public number(value:number):void {
	  this.setState(ExpressionType.OPERAND);
    this._expStack.unshift(this._expBuilder.build(value));
  }
  
  /**
   * Removes all expressions from the calculator stack.
   */
  public reset():void {
	  this.setState(ExpressionType.RESET);
    this._expStack.splice(0);
  }
  
  /**
   * Removes expressions strored in the calculator stack ad returns
   * the result.
   */
  public compute():number {
	let result:number = 0;
	let len:number = this._expStack.length;
	let operand1:Expression = null;
	let operand2:Expression = null;
	let operator:Expression = null;
	let cursor:number = len - 1;
	while(len -= 3) {
		operand1 = this._expStack[cursor];
		operator = this._expStack[cursor - 1];
		operand2 = this._expStack[cursor - 2];
		result += this._calculator.doOperation(
      operator.value,
      operand1.value,
      operand2.value
    );
		cursor = len;
	}
	this.reset();
    return result;
  }
}
