/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _TreeNode = require('./TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

/**
* The RestDeleteNodesRequest model module.
* @module model/RestDeleteNodesRequest
* @version 1.0
*/

var RestDeleteNodesRequest = (function () {
    /**
    * Constructs a new <code>RestDeleteNodesRequest</code>.
    * @alias module:model/RestDeleteNodesRequest
    * @class
    */

    function RestDeleteNodesRequest() {
        _classCallCheck(this, RestDeleteNodesRequest);

        this.Nodes = undefined;
        this.Recursive = undefined;
    }

    /**
    * Constructs a <code>RestDeleteNodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestDeleteNodesRequest} obj Optional instance to populate.
    * @return {module:model/RestDeleteNodesRequest} The populated <code>RestDeleteNodesRequest</code> instance.
    */

    RestDeleteNodesRequest.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestDeleteNodesRequest();

            if (data.hasOwnProperty('Nodes')) {
                obj['Nodes'] = _ApiClient2['default'].convertToType(data['Nodes'], [_TreeNode2['default']]);
            }
            if (data.hasOwnProperty('Recursive')) {
                obj['Recursive'] = _ApiClient2['default'].convertToType(data['Recursive'], 'Boolean');
            }
        }
        return obj;
    };

    /**
    * @member {Array.<module:model/TreeNode>} Nodes
    */
    return RestDeleteNodesRequest;
})();

exports['default'] = RestDeleteNodesRequest;
module.exports = exports['default'];

/**
* @member {Boolean} Recursive
*/