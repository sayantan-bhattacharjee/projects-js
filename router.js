window.onload = function() {
   
    // Create a Router Constructor

    let Router = function(name, routes) {
        return {
            name: name,
            routes: routes
        }
    };
    
     //  grab all active attributes routes

    let activeRoutes = Array.from(document.querySelectorAll('[route]'));

    function navigate(event) {
        var route = event.target.attributes[0].value;
        var routeInfo =  myFirstRouter.routes.filter(function(r) {
         return r.path === route;
    })[0];
    if(!routeInfo) {
        window.history.pushState({}, '', 'error')
        view.innerHTML = 'No route exists with this path'
    }
    else{
        window.history.pushState({}, '', routeInfo.path);
        console.log(window.history);
        view.innerHTML = 'You have clicked the ' + routeInfo.name + ' route'
    }
    };

    // add event listeners
 
    activeRoutes.forEach(function(route) {
        route.addEventListener('click', navigate, false);
    });

    var Router = function(name,routes) {
        return {
            name : name,
            routes : routes
        }
    };

    let view = document.getElementById('view');

    let myFirstRouter = new Router('myFirstRouter', [
        {
            path: '/',
            name: Home
        },
        {
            path: '/about',
            name: About
        },
        {
            path: '/contact',
            name: Contact
        },
    ]);
    let currentPath = window.location.pathname;
    console.log(currentPath);
    if (currentPath === '/') {
       view.innerHTML = "You are on the Home Page."; 
    }
    else {
        let route = myFirstRouter.routes.filter(function(r) {
            return r.path === currentpath
        })[0];
        if(route) {
        view.innerHTML = "You are on the " +  route.name + " Page."
        }
        else {
            view.innerHTML = "Error 404!"
        }
    }

}
