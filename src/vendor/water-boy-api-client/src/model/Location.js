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
 * The Location model module.
 * @module model/Location
 * @version 1.0.0
 */
class Location {
    /**
     * Constructs a new <code>Location</code>.
     * @alias module:model/Location
     * @param id {String} 
     * @param name {String} 
     */
    constructor(id, name) { 
        
        Location.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Location} obj Optional instance to populate.
     * @return {module:model/Location} The populated <code>Location</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Location();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Location.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Location.prototype['name'] = undefined;

/**
 * @member {String} address
 */
Location.prototype['address'] = undefined;






export default Location;
