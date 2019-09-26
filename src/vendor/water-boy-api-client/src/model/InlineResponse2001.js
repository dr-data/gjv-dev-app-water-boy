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
import InlineResponse2001Headers from './InlineResponse2001Headers';

/**
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.0.0
 */
class InlineResponse2001 {
    /**
     * Constructs a new <code>InlineResponse2001</code>.
     * @alias module:model/InlineResponse2001
     */
    constructor() { 
        
        InlineResponse2001.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();

            if (data.hasOwnProperty('greeting')) {
                obj['greeting'] = ApiClient.convertToType(data['greeting'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = InlineResponse2001Headers.constructFromObject(data['headers']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} greeting
 */
InlineResponse2001.prototype['greeting'] = undefined;

/**
 * @member {String} date
 */
InlineResponse2001.prototype['date'] = undefined;

/**
 * @member {String} url
 */
InlineResponse2001.prototype['url'] = undefined;

/**
 * @member {module:model/InlineResponse2001Headers} headers
 */
InlineResponse2001.prototype['headers'] = undefined;






export default InlineResponse2001;
