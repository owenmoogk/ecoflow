int trigger_pin = 2;
int echo_pin = 6;
int testTrigger = 5;
int time;
float distance; 

void setup ( ) {
  Serial.begin (9600); 
  pinMode (trigger_pin, OUTPUT); 
  pinMode (testTrigger, OUTPUT);
  pinMode (echo_pin, INPUT);
  pinMode (LED_BUILTIN, OUTPUT);
}

void loop ( ) {

  // put out a 10 microsecond pulse
  digitalWrite (trigger_pin, HIGH);
  digitalWrite (testTrigger, HIGH);
  delayMicroseconds (10);
  digitalWrite (trigger_pin, LOW);
  digitalWrite (testTrigger, LOW);

  // read the time it takes
  time = pulseIn (echo_pin, HIGH);

  // calculate the distance in cm, divide by 2 for round trip
  distance = (time * 0.034);
  Serial.println(distance);
  
  if (distance <= 10){
    digitalWrite (LED_BUILTIN, HIGH);  
  }
  else{
    digitalWrite (LED_BUILTIN, LOW);
  }
}
