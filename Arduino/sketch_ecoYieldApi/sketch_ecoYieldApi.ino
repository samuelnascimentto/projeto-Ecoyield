#include "DHT.h" 
// --biblioteca que contém os códigos necessários para trabalhar com sensores de temperatura e umidade.

#define dht_type DHT11
// -- definindo o especificador do tipo do sensor que está sendo utilizado

int dht_pin = A0; //-- entrada analógica
DHT dht_1 = DHT(dht_pin, dht_type); 
// -- criando um objeto com o tipo e o pin

const int LM35 = A1; // Define o pino que lerá a saída do LM35
float temperatura = 0; // Variável que armazenará a temperatura medida
int valorLido = 0; //variavel auxiliar
float umidade = 0; // Variavel que armazenará umidade
int valorLidoU = 0; // Variavel Auxiliar
int fkConjuntoSensor = 1; // Variavel Auxiliar

//Função que será executada uma vez quando ligar ou resetar o Arduino
void setup() {
  Serial.begin(9600);
  dht_1.begin();
}
 // -- comunicação serial
 
void loop() {
  float umidade = dht_1.readHumidity();
  valorLido = analogRead(LM35); //leitura analogica da porta A1

  // --utilizamos o objeto criado para realizar a leitura
  temperatura = (valorLido * 0.00488); //5 volts/ 1023 - 0.0048 precisao do A/D
temperatura = temperatura * 100; //converte milivolts para celsius - cada 10mV == 1°c
  if(isnan(temperatura) or isnan(umidade)){
    Serial.println("Erro ao ler"); 
  } else {
    Serial.print(temperatura);
    Serial.print (";");
    Serial.print(umidade);
    Serial.print (";");
    Serial.println(fkConjuntoSensor + 6);
    Serial.print(temperatura - 3);
    Serial.print (";");
    Serial.print(umidade + 2);
    Serial.print (";");
    Serial.println(fkConjuntoSensor + 7);
    Serial.print(temperatura + 3);
    Serial.print (";");
    Serial.print(umidade - 5);
    Serial.print (";");
    Serial.println(fkConjuntoSensor + 8);
    Serial.print(temperatura + 3);
    Serial.print (";");
    Serial.print(umidade - 5);
    Serial.print (";");
    Serial.println(fkConjuntoSensor + 9);
    Serial.print(temperatura + 3);
    Serial.print (";");
    Serial.print(umidade - 5);
    Serial.print (";");
    Serial.println(fkConjuntoSensor + 10);
  }

  delay(5000);
}