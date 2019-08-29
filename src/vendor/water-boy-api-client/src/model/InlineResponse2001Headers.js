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
 * The InlineResponse2001Headers model module.
 * @module model/InlineResponse2001Headers
 * @version 1.0.0
 */
class InlineResponse2001Headers {
    /**
     * Constructs a new <code>InlineResponse2001Headers</code>.
     * @alias module:model/InlineResponse2001Headers
     */
    constructor() { 
        
        InlineResponse2001Headers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001Headers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Headers} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Headers} The populated <code>InlineResponse2001Headers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001Headers();

            if (data.hasOwnProperty('Content-Type')) {
                obj['Content-Type'] = ApiClient.convertToType(data['Content-Type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Content-Type
 */
InlineResponse2001Headers.prototype['Content-Type'] = undefined;






export default InlineResponse2001Headers;

