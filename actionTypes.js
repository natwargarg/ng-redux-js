//export action types 

/**
 * 
    export const CONST_NAME = 'CONST_NAME'; // Is the ES modules syntax
    And when you want to consume it use it as below
    import { CONST_NAME } from './myModule';
 * 
 
 *  exports.CONST_NAME = 'CONST_NAME'; // Is the commonJS syntax.
    I would recommend using the ES modules syntax, and compiling to common JS if the environment you run your code on does not support ES modules
 * 
 */

export const INCREEMENT_ACTION = 'INCREEMENT_ACTION';
export const DECREEMENT_ACTION = 'DECREEMENT_ACTION';