function parseUplink(device, payload)
{
    var parsed = payload.asParsedObject();
    env.log(parsed);    

    // Store Battery Alarm
    if(parsed.BatteryAlarm != null){
        var bata = device.endpoints.byAddress("1");
        if (bata != null)
            bata.updateGenericSensorStatus(parsed.BatteryAlarm);
    }
    if(parsed.Consumption != null){
        var cmp = device.endpoints.byAddress("2");
        if (cmp != null)
            cmp.updateGenericSensorStatus(parsed.Consumption);
    }
    if(parsed.EmptyPipe != null){
        var ep = device.endpoints.byAddress("3");
        if (ep != null)
            ep.updateGenericSensorStatus(parsed.EmptyPipe);
    }
    if(parsed.LeakageAlarm != null){
        var la = device.endpoints.byAddress("4");
        if (la != null)
            la.updateGenericSensorStatus(parsed.LeakageAlarm);
    }
    if(parsed.ReverseFlow != null){
        var rf = device.endpoints.byAddress("5");
        if (rf != null)
            rf.updateGenericSensorStatus(parsed.ReverseFlow);
    }
    if(parsed.TemperatureAlarm != null){
        var ta = device.endpoints.byAddress("6");
        if (ta != null)
            ta.updateGenericSensorStatus(parsed.TemperatureAlarm);
    }
    if(parsed.ValveClosed != null){
        var vc = device.endpoints.byAddress("7");
        if (vc != null)
            vc.updateGenericSensorStatus(parsed.ValveClosed);
    }
    if(parsed.battery != null){
        var bat = device.endpoints.byAddress("8");
        if (bat != null)
            bat.updateGenericSensorStatus(parsed.battery);    
    };
}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}