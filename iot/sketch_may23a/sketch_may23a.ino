#include <Ultrasonic.h>

#define LEDVERMELHO 26
#define LEDVERMELHO1 13
#define LEDAMARELO 27
#define LEDAMARELO1 12
#define LEDVERDE 25
#define LEDVERDE1 14
#define TRIG 19
#define ECHO 18

Ultrasonic ultrasonic(TRIG, ECHO);

void setup() { 
  Serial.begin(9600);

  pinMode(LEDVERMELHO, OUTPUT); 
  pinMode(LEDVERMELHO1, OUTPUT); 
  pinMode(LEDAMARELO, OUTPUT); 
  pinMode(LEDAMARELO1, OUTPUT); 
  pinMode(LEDVERDE, OUTPUT); 
  pinMode(LEDVERDE1, OUTPUT); 
}


void loop() {
  digitalWrite(LEDVERDE1, HIGH);
  digitalWrite(LEDVERMELHO, HIGH);

  int distancia = ultrasonic.read();

  Serial.println(distancia);

  if (distancia > 11){
    digitalWrite(LEDVERDE1, HIGH);
    digitalWrite(LEDVERMELHO, HIGH); 
  } else if (distancia <= 11){
    digitalWrite(LEDVERMELHO, HIGH);
    digitalWrite(LEDVERDE1,HIGH);
    delay(4000);
    digitalWrite(LEDAMARELO1, HIGH);
    digitalWrite(LEDVERDE1, LOW);
    delay(4000);
    digitalWrite(LEDVERMELHO, LOW);
    digitalWrite(LEDVERDE, HIGH);
    digitalWrite(LEDVERMELHO1, HIGH);
    digitalWrite(LEDAMARELO1, LOW);
    delay(4000);
    digitalWrite(LEDAMARELO, HIGH);
    digitalWrite(LEDVERDE, LOW);
    delay(4000);
    digitalWrite(LEDVERMELHO1, LOW);
    digitalWrite(LEDAMARELO, LOW);
    delay(100);
  }

}