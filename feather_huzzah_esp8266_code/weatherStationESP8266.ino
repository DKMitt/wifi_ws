// Adafruit feather HUZZAH ESP8266 with DHT11 sensor that
// sends temperature and humidity readings to serial monitor

// Libraries
#include "DHT.h"

// Pin
#define DHTPIN 2

// Use DHT11 sensor
#define DHTTYPE DHT11

// Initialize DHT sensor
DHT dht( DHTPIN , DHTTYPE , 15 );

void setup() {
// Start Serial
Serial.begin( 115200 );

// Init DHT
dht.begin();
}


void loop() {

// Reading temperature and humidity
float h = dht.readHumidity();

// Read temperature as Celsius
float t = dht.readTemperature();
// Display data


Serial.print( "Humidity: " );
Serial.print( h );
Serial.print( " %\t" );
Serial.print( "Temperature: " );
Serial.print( t );
Serial.println( " *C " );

// Wait a few seconds between measurements.
delay( 2000 );

}
