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

import { Calculator } from "./Calculator";
import { CalculatorImpl } from "./impl/CalculatorImpl";

/**
 * A helper class that create new <code>Calculator</code> objects.
 */
export class CalculatorFactory {

  ///////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>CalculatorFactory</code> instance.
   */
  constructor() {}

  ///////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates and returns a new object that implements the
   * <code>Calculator</code> interface.
   */
  public create():Calculator {
    let calc:Calculator = new CalculatorImpl();
    return calc;
  }
}