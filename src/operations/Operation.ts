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

/**
 * A sample interface that defines the API to a computations between two
 * numeric values.
 */
export interface Operation {

  /**
   * Computes the specified values and returns the result, depending on the
   * internal algorythm.
   * 
   * @param {number} a the first value on which to perform the operation.
   * @param {number} b the second value on which to perform the operation.
   * 
   * @return {number} the result of the computation.
   */
  compute(a:number, b:number):number;
}