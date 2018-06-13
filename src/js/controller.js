export default angular.module('app.controller', [])
    .controller('MainCtrl', [ '$rootScope', '$location', '$scope', ($rootScope, $location, $scope)=>{
        //console.log(`Why so $erious!`)
        //$rootScope.image = name => require(`../img/${name}`);
        const page = (()=>{

            return {
                isActive(name){
                    name = !name.startsWith('/') && `/${name}`;


                    return $location.path().startsWith(name)
                }
            }
        })();
        $scope.page = page;
    }])
    .controller('HomeCtrl', [ ()=>{

    }])
    .controller('TableCtrl', [ ()=>{

    }])
.name;