var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

module.exports = inheritsFrom;
