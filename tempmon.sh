#!/bin/bash

# The output file for the temperature
FILE="./data/temperatures.csv"

if [[ -z "$1" ]]; then
  INTERVAL=5 # Every 5 seconds
else
  INTERVAL=$1
fi

while true; do
  TIME=$(date +"%s")
  TEMP=$(vcgencmd measure_temp | egrep -o '[0-9]*\.[0-9]*')
  echo "Timestamp,Temperature" >$FILE
  echo "$TIME,$TEMP" >>$FILE
  sleep $INTERVAL
done
