module.exports = {
    asi         : false, // if automatic semicolon insertion should be tolerated
    bitwise     : false, // if bitwise operators should not be allowed
    boss        : false, // if advanced usage of assignments should be allowed
    browser     : false, // if the standard browser globals should be predefined
    couch       : false, // if CouchDB globals should be predefined
    curly       : false, // if curly braces around blocks should be required (even in if/for/while)
    debug       : false, // if debugger statements should be allowed
    devel       : false, // if logging globals should be predefined (console, alert, etc.)
    eqeqeq      : true, // if === should be required
    eqnull      : false, // if == null comparisons should be tolerated
    es5         : false, // if ES5 syntax should be allowed
    evil        : false, // if eval should be allowed
    expr        : false, // if ExpressionStatement should be allowed as Programs
    forin       : true, // if for in statements must filter
    globalstrict: false, // if global "use strict"; should be allowed (also enables 'strict')
    immed       : true, // if immediate invocations must be wrapped in parens
    jquery      : false, // if jQuery globals should be predefined
    latedef     : true, // if the use before definition should not be tolerated
    laxbreak    : false, // if line breaks should not be checked
    loopfunc    : false, // if functions should be allowed to be defined within loops
    mootools    : false, // if MooTools globals should be predefined
    newcap      : true, // if constructor names must be capitalized
    noarg       : false, // if arguments.caller and arguments.callee should be disallowed
    node        : false, // if the Node.js environment globals should be predefined
    noempty     : true, // if empty blocks should be disallowed
    nonew       : true, // if using `new` for side-effects should be disallowed
    nomen       : false, // if names should be checked
    onevar      : false, // if only one var statement per function should be allowed
    passfail    : false, // if the scan should stop on first error
    plusplus    : true, // if increment/decrement should not be allowed
    prototypejs : false, // if Prototype and Scriptaculous globals shoudl be predefined
    regexp      : true, // if the . should not be allowed in regexp literals
    rhino       : false, // if the Rhino environment globals should be predefined
    undef       : true, // if variables should be declared before used
    shadow      : false, // if variable shadowing should be tolerated
    strict      : false, // require the "use strict"; pragma
    sub         : true, // if all forms of subscript notation are tolerated
    supernew    : false, // if `new function () { ... };` and `new Object;` should be tolerated
    white       : true  // if strict whitespace rules apply
};
