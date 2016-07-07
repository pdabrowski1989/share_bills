'use strict';

angular.module('HouseShareFinances', ['ui.router']);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainCtrl = function MainCtrl() {
    _classCallCheck(this, MainCtrl);

    var mCtrl = this;
    console.log('aaa');
};

angular.module('HouseShareFinances').controller('MainCtrl', MainCtrl);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBillCtrl = function AddBillCtrl() {
    _classCallCheck(this, AddBillCtrl);

    var abCtrl = this;
};

angular.module('HouseShareFinances').controller('AddBillCtrl', AddBillCtrl);
"use strict";
'use strict';

function AddBillConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('addbill', {
        url: "/addbill",
        templateUrl: '../app/components/AddBill/addbill.html',
        controller: 'AddBillCtrl',
        controllerAs: 'abCtrl'
    });

    $urlRouterProvider.otherwise('/dashboard');
}

angular.module('HouseShareFinances').config(AddBillConfig);
/**
 * Created by PawelD on 2016-07-06.
 */
"use strict";
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardCtrl = function DashboardCtrl() {
    _classCallCheck(this, DashboardCtrl);

    var dCtrl = this;
};

angular.module('HouseShareFinances').controller('DashboardCtrl', DashboardCtrl);
"use strict";
'use strict';

function DashboardConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
        url: "/dashboard",
        templateUrl: '../app/components/Dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dCtrl'
    });

    $urlRouterProvider.otherwise('/dashboard');
}

angular.module('HouseShareFinances').config(DashboardConfig);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogInCtrl = function LogInCtrl() {
    var _this = this;

    _classCallCheck(this, LogInCtrl);

    var lCtrl = this;
    lCtrl.user = {};
    lCtrl.sayUser = function () {
        console.log(_this.user.name);
    };
};

angular.module('HouseShareFinances').controller('LogInCtrl', LogInCtrl);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogInService = function LogInService($http) {
    _classCallCheck(this, LogInService);

    $http.get('');
};

angular.module('HouseShareFinances').service('LogInService', LogInService);
'use strict';

function LoginConfig($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: '../app/components/LogIn/login.html',
        controller: 'LogInCtrl',
        controllerAs: 'lCtrl'
    });
}

angular.module('HouseShareFinances').config(LoginConfig);
"use strict";
"use strict";