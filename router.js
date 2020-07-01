window.onload = function() {
    console.log('DOM has loaded');

    // Create a Router Constructor

    // Grabbing all active attribute routes
    let activeRoutes = Array.from(document.querySelectorAll('[route]'));

    console.log(activeRoutes);

    let Router = function(name, routes) {
        return {
            name: name,
            routes: routes
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
