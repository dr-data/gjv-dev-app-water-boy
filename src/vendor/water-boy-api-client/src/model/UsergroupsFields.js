/**
 * WaterBoy Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UsergroupsFields model module.
 * @module model/UsergroupsFields
 * @version 1.0.0
 */
class UsergroupsFields {
    /**
     * Constructs a new <code>UsergroupsFields</code>.
     * @alias module:model/UsergroupsFields
     */
    constructor() { 
        
        UsergroupsFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsergroupsFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsergroupsFields} obj Optional instance to populate.
     * @return {module:model/UsergroupsFields} The populated <code>UsergroupsFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupsFields();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} id
 */
UsergroupsFields.prototype['id'] = undefined;

/**
 * @member {Boolean} name
 */
UsergroupsFields.prototype['name'] = undefined;






export default UsergroupsFields;

