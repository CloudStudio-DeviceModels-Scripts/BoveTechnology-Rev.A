function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Esta función le permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
  // la experiencia del usuario final, ya que permite a la plataforma crear 
  // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
  // crea el dispositivo.

  // En el código siguiente, se crean dos endpoints. El primero es un sensor de 
  // temperatura, mientras que el segundo es un sensor de dióxido de carbono.

  var bata = endpoints.addEndpoint("1", "Battery Alarm", endpointType.genericSensor);
  bata.variableTypeId = 1227;
  var cmp = endpoints.addEndpoint("2", "Consumption", endpointType.genericSensor);
  cmp.variableTypeId = 1229;
  var ep = endpoints.addEndpoint("3", "Empty Pipe", endpointType.genericSensor);
  ep.variableTypeId = 1227;
  var la = endpoints.addEndpoint("4", "Leakage Alarm", endpointType.genericSensor);
  la.variableTypeId = 1227;
  var rf = endpoints.addEndpoint("5", "Reverse Flow", endpointType.genericSensor);
  rf.variableTypeId = 1227;
  var ta = endpoints.addEndpoint("6", "Temperature Alarm", endpointType.genericSensor);
  ta.variableTypeId = 1227;
  var vc = endpoints.addEndpoint("7", "Valve Closed", endpointType.genericSensor);
  vc.variableTypeId = 1227;  
  var bat = endpoints.addEndpoint("8", "Battery", endpointType.genericSensor);
  bat.variableTypeId = 1228;  
}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
