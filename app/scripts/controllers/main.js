'use strict';

/**
 * @ngdoc function
 * @name daneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the daneApp
 */
// angular.module('daneApp')
  app.controller('MainCtrl', function ($scope, $cookies, LoginService, $location, ticketMessage) {


    $scope.tm = ticketMessage.tData;

    $scope.loggedIn = '';

    /* Authentication */
    $scope.userLogged = JSON.parse(localStorage.getItem("user")) || [];
    // console.log($scope.userLogged.image);

    if(localStorage.getItem('user') !== null){
        $scope.loggedIn = true;
    }
    else{
      $scope.loggedIn = false;
      $location.path('/login');
    }

    $scope.ticket = [
        {
          ticketId: 1,
          issue:'Issue in dragging vouchers',
          tName: 'PAY VIA OR',
          time: '11:05 AM',
                  conversation:[
                {
                  message:"wweeeeee",
                }
          ],
        },  
         {
          ticketId: 2,
          issue:'No SMS recieved',
          tName: 'ACCOUNT BILLING',
          time: '1:02 PM',
          conversation:[
                {
                  message:'Hoy Bugoy One',
                }
          ],
        },
        {
          ticketId: 3,
          issue:'No SMS recieved',
          tName: 'REGISTRATION',
          time: '8:05 AM',
          conversation:[
                                {
                  message:"Lets Rock",
                }
          ],
        }
      //   {
      //     ticketId: 4,
      //     issue:'No SMS recieved',
      //     tName: 'REGISTRATION',
      //     time: '12:02 PM',
      //     conversation:[
      //           {
      //             message:"wweeeeee",
      //           }
      //     ],
      //   },
		    // {
      //     ticketId: 5,
      //     issue:'Issue in dragging voucher',
      //     tName: 'ACCOUNT BILLING',
      //     time: '3:03 PM',
      //     conversation:[
      //                       {
      //             message:"wweeeeee",
      //           }
      //     ],
      //   },
      //   {
      //     ticketId: 6,
      //     issue:'Issue in dragging voucher',
      //     tName: 'PAY VIA OR',
      //     time: '3:03 PM',
      //     conversation:[
      //                       {
      //             message:"wweeeeee",
      //           }
      //     ],
      //   }
    ];
   
    // localStorage.setItem('userdata', JSON.stringify({userId: 1, name:"EDI WOW"}));  
    $scope.datas = JSON.parse(localStorage.getItem("datas")) || [];
    $scope.userdata = JSON.parse(localStorage.getItem("userdata"));
    $scope.image = '/images/yeoman.png';
    $scope.ticketNum = $scope.ticket.length;
    


    // $scope.guardCheck = function(){
    //   if($scope.userdata){
    //     console.log("logged in");
    //   }else{
    //     console.log("not logged in");
    //     window.location.href = '#!/login';
    //   }
    // }

    $scope.display = function(){
        $scope.show === false ? $scope.show = true :  $scope.show = false;
    }

    $scope.logout = function(){
          localStorage.removeItem('user');
          $location.path('/login');
    };

    $scope.go = function ( path ) {
      $location.path( path );
    };

    $scope.getComments = function(cmt) {
    	var date = new Date().getTime();
    	var d = { keys:'1', dates: date, message: cmt, user: $scope.userdata };
        
        $scope.datas.push(d);
        localStorage.setItem('datas', JSON.stringify($scope.datas)); 
        $scope.comments = "";

        // localStorage.setItem('userdata', JSON.stringify({userId: 1, name:"EDI WOW"}));        	
    };

    // $scope.guardCheck();

  });

  // app.directive('viewData', function(ticketMessage){
  // 		return{
  // 			restrict: 'A',
  //       scope: true,
  // 			link:function ($scope, element, attrs){
  // 					element.bind('click', function () {
  // 						var a = attrs.did;
  //              //$location.path( a );
  //              ticketMessage.tData(a);
  // 						 //console.log(a);
  // 					});
  // 			}
  // 		}
  // });

  app.directive('viewData', ['$location', function($location){

   return {
    restrict: 'A',
    scope: true,
    link: function($scope, elem, attrs){
      elem.bind('click', function () {
              var a = attrs.link;
               $location.path( a );
               $scope.$apply();
              // ticketMessage.tData(a);
               console.log(a);
            });
    }
   };
  }]);


  app.directive('colorData', function(){
      return{
        restrict: 'A',
        scope: true,
        link:function ($scope, element, attrs){
              var a = attrs.cls;
              if(a ==='REGISTRATION'){
                    element.addClass('registration');
              }else if(a ==='PAY VIA OR'){
                    element.addClass('registration');
              }
        }
      };
  });

  app.factory('ticketMessage', function(){
          return {
                tData: function(data){
                      console.log(data);
                      return data;
                      
                }
          }

  });




















// var myApp = angular.module('myApp', []);
// myApp.run(function($templateCache) {
//   $templateCache.put('header.html', 'This is the content of the template');
// });

// myApp.component('myComponent', {
//    templateUrl: '../views/common/header.html'
// });