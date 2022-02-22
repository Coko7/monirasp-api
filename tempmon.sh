#!/bin/bash

if [[ -z "$1" ]]; then
  INTERVAL=5 # Every 5 seconds
else
  INTERVAL=$1
fi

while true; do
  TEMP=$(vcgencmd measure_temp | egrep -o '[0-9]*\.[0-9]*')
  TIME=$(date +"%s")
  echo "$TIME,$TEMP" >>data/temperatures.csv
  sleep $INTERVAL
done
