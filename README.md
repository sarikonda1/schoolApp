# School Management Fuse

## Creating a Service:
* Copy paste the service from swagger with ViewModels using [swaggerlink](https://api-dev-school.lshpdev.com/swagger/index.html?urls.primaryName=Base%20V1)
* Tag the port number for your microservice and comment it out
* Use base path and domain in the service from urlconfig.
    
**// protected basePath = 'https://localhost:8013';**
**protected basePath = BaseUrlConfig.BasePath + ModuleConfig.Base;**

* If any header(s) remove them in the methods
* To use this Service do use this service in the providers specified in the component.
  
----
## For Registering Routes:
* Give the appropriate simplified path and name of the Component in the immediate module where the component declared in.