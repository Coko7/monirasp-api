#!/bin/bash

if [[ -z "$1" ]]; then
  INTERVAL=300 # Every 5 minutes
else
  INTERVAL=$1
fi

while true; do
  TEMP=$(vcgencmd measure_temp | egrep -o '[0-9]*\.[0-9]*')
  TIME=$(date +"%s")
  printf "%-30s%5s\n" "$TIME" "$TEMPERATURE°C"
  echo "$TIME,$TEMP" >>data/temperatures.csv
  sleep $INTERVAL
done
