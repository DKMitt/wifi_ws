#include <Firebase.h>
#include <FirebaseArduino.h>
#include <FirebaseCloudMessaging.h>
#include <FirebaseError.h>
#include <FirebaseHttpClient.h>
#include <FirebaseObject.h>

#include "DHT.h"

#define DHTPIN 2
#define SENSOR_NO 0

DHT dht(DHTPIN, DHT11);   

//
// Copyright 2015 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Firebase ESP8266 current & history logging of temp and humidity, wifi weather station.


#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

// Set these to run
#define FIREBASE_HOST "YOUR_FIREBASE_HOST"
#define FIREBASE_AUTH "YOUR_FIREBASE_AUTH"
#define WIFI_SSID "YOUR_WIFI_SSID"
#define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"


void setup() {
  Serial.begin(115200);

  // voltage monitor
   pinMode(A0, INPUT);
   
  // DHT sensor begins
  dht.begin();
  
  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}


void loop() {

  // DHT stuff  
    float h = dht.readHumidity();
    float t = dht.readTemperature();

  // voltage stuff
    unsigned a0 = analogRead(A0);
    float v = (float)a0 * 5.54 / 1000.0;

  // set value
  Firebase.setFloat("wsdata/chumidity", h);
  // handle error
  if (Firebase.failed()) {
      Serial.print("setting /number failed:");
      Serial.println(Firebase.error());  
      return;
  }
  delay(10000);

  
  // set value
  Firebase.setFloat("wsdata/ctemp", t);
  // handle error
  if (Firebase.failed()) {
      Serial.print("setting /number failed:");
      Serial.println(Firebase.error());  
      return;
  }
  delay(10000);


  // set voltage value
  Firebase.setFloat("wsdata/cvolts", v);
  // handle error
  if (Firebase.failed()) {
      Serial.print("setting /number failed:");
      Serial.println(Firebase.error());  
      return;
  }
  delay(10000);


  // sensor data
  Firebase.push("wsdata/htemp", t);
  Firebase.push("wsdata/hhumidity", h);
  // Firebase.push("wsdata/hvolts", v);
  

  Serial.println();
  Serial.print("temperature: ");
  Serial.println(t);
  
  Serial.print("humidty: ");
  Serial.println(h);
  
  // Serial.print("voltage: ");
  // Serial.println(v);

}


